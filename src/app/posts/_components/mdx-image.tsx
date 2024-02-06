import { siteMetadata } from '@/data/siteMetadata';
import NextImage from 'next/image';

// 마크다운 이미지 태그에서 width와 height를 추출하여 next/image 컴포넌트에 적용하는 컴포넌트
export function MDXImage({
  src,
  alt,
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  src: string;
  alt: string;
}) {
  let widthFromSrc, heightFromSrc;
  const url = new URL(src, siteMetadata.siteUrl);
  const widthParam = url.searchParams.get('w') || url.searchParams.get('width');
  const heightParam =
    url.searchParams.get('h') || url.searchParams.get('height');
  if (widthParam) {
    widthFromSrc = parseInt(widthParam);
  }
  if (heightParam) {
    heightFromSrc = parseInt(heightParam);
  }

  const imageProps = {
    src,
    alt,
    height: heightFromSrc || 450,
    width: widthFromSrc || 550,
  };

  return <NextImage {...imageProps} />;
}

// 아래와 같이 사용
// ![alt text](/image.png?width=500&height=400)
