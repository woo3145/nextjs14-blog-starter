import { cn } from '@/lib/utils';
import ZoomableImage from '../ui/zoomable-image';
import { siteMetadata } from '@/data/site-metadata';

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
  const modeParam = url.searchParams.get('mode');
  // const notesParam = url.searchParams.get('notes');

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
    className: cn(
      'mx-auto rounded-md',
      modeParam
        ? modeParam === 'light'
          ? 'dark:hidden'
          : 'hidden dark:block'
        : null
    ),
  };

  return (
    <ZoomableImage
      {...imageProps}
      // placeholder="blur"
      // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" // 추가
    />
  );
}

// 아래와 같이 사용
// ![alt text](/image.png?width=500&height=400&mode=light)
