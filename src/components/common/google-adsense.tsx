'use client';

import { usePathname } from '@/navigation';
import Script from 'next/script';

type GoogleAdsenseProps = {
  pId: string;
};

export const GoogleAdsense = ({ pId }: GoogleAdsenseProps) => {
  const pathname = usePathname();
  const preventRoute = pathname === '/' || pathname.startsWith('/projects');

  // 구글자동 광고 on이면 활성화
  // useEffect(() => {
  //   const scriptId = `adsbygoogle-${pId}`;
  //   const scriptElement = document.getElementById(scriptId);

  //   // 광고를 표시하면 안되는 라우터에 접근 시 새로고침
  //   if (scriptElement && preventRoute) {
  //     window.location.reload();
  //   }
  // }, [pId, preventRoute]);

  if (process.env.NODE_ENV !== 'production' || preventRoute) {
    return null;
  }
  return (
    <Script
      id={`adsbygoogle-${pId}`}
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  );
};
