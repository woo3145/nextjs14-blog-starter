import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  zoomPercentage?: number;
}

export const ZoomableImage = ({
  zoomPercentage = 90,
  src,
  alt,
  width,
  height,
  className,
}: ZoomableImageProps) => {
  if (zoomPercentage < 1 || zoomPercentage > 100) {
    throw "Zoom percentage must be between 1 and 100";
  }

  const containerRef = React.useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = React.useState(false);

  const calculateScale = (
    clientSize: number,
    windowSize: number,
    zoomPerc: number
  ) => {
    return (windowSize * zoomPerc) / clientSize;
  };

  const handleImageZoom = () => {
    if (!containerRef.current) return;
    if (clicked) {
      return closeWrapper();
    }

    const {
      height: clientHeight,
      width: clientWidth,
      left: cL,
      top: cT,
    } = containerRef.current.getBoundingClientRect();
    const zoomPerc = zoomPercentage / 100;
    const scale = Math.min(
      calculateScale(clientWidth, window.innerWidth, zoomPerc),
      calculateScale(clientHeight, window.innerHeight, zoomPerc)
    );

    const wPrim = (window.innerWidth - clientWidth) / 2;
    const hPrim = (window.innerHeight - clientHeight) / 2;

    containerRef.current.style.transform = `translate(${wPrim - cL}px, ${
      hPrim - cT
    }px) scale(${scale})`;
    window.document.addEventListener("scroll", closeWrapper, { once: true });
    setClicked(true);
  };

  const closeWrapper = () => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = "scale(1)";
    setClicked(false);
  };

  return (
    <>
      {clicked && (
        <div
          className={cn(
            "fixed z-40 top-0 left-0 w-full h-full bg-background/90 backdrop-blur-sm",
            clicked ? "cursor-zoom-out" : ""
          )}
          onClick={closeWrapper}
        />
      )}
      <div
        className={cn(
          "relative duration-300 overflow-hidden",
          clicked ? "z-50 cursor-zoom-out" : "z-0 cursor-zoom-in"
        )}
        ref={containerRef}
        onClick={handleImageZoom}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(className)}
        />
      </div>
    </>
  );
};

export default ZoomableImage;
