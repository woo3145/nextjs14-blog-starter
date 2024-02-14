'use client';
import * as React from 'react';

export const SnakeBeam = ({ className }: { className?: string }) => {
  const requestIdRef = React.useRef(0);
  const [gradientValues, setGradientValues] = React.useState({
    x1: 250,
    x2: 350,
    y2: 60,
  });
  const [isAnimating, setIsAnimating] = React.useState(true); // 애니메이션 상태 관리

  React.useEffect(() => {
    const animate = () => {
      // 애니메이션이 끝났는지 확인
      if (
        gradientValues.x1 <= -100 &&
        gradientValues.x2 <= -100 &&
        gradientValues.y2 <= 0
      ) {
        // 애니메이션이 끝났으면 1초 동안 대기
        if (isAnimating) {
          setIsAnimating(false); // 애니메이션 중지
          setTimeout(() => {
            setGradientValues({ x1: 250, x2: 350, y2: 60 }); // 값 리셋
            setIsAnimating(true); // 애니메이션 재시작
          }, 1000); // 1초 대기
        }
        return;
      }

      // 애니메이션 계속 진행
      setGradientValues((prev) => ({
        x1: prev.x1 > -100 ? prev.x1 - (250 + 100) * 0.005 : prev.x1,
        x2: prev.x2 > -100 ? prev.x2 - (350 + 100) * 0.005 : prev.x2,
        y2: prev.y2 > 0 ? prev.y2 - 60 * 0.005 : prev.y2,
      }));

      if (isAnimating) {
        requestIdRef.current = requestAnimationFrame(animate);
      }
    };

    if (isAnimating) {
      requestIdRef.current = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, [isAnimating, gradientValues.x1, gradientValues.x2, gradientValues.y2]);

  return (
    <svg
      className={className}
      width="236"
      height="60"
      viewBox="0 0 236 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 0.5 H90 V30 H150 V60 H235.5"
        stroke="url(#paint0_linear)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          gradientUnits="userSpaceOnUse"
          x1={`${gradientValues.x1}`}
          y1="0"
          x2={`${gradientValues.x2}`}
          y2={`${gradientValues.y2}`}
        >
          <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
          <stop stopColor="#2EB9DF"></stop>
          <stop offset="1" stopColor="#9E00FF" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
