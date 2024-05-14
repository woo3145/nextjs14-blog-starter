'use client';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}
type Props = {
  pId: string;
  adType: 'side' | 'horizon';
};

const GoogleAdsense = ({ pId, adType }: Props) => {
  const AD_TYPES = {
    side: 7375820656,
    horizon: 1931922280,
  };
  useEffect(() => {
    if (window) {
      (window.adsbygoogle = window.adsbygoogle || [])?.push({});
    }
  }, []);

  return (
    <div className="googleAd-container" style={{ border: '1px solid #eee' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="auto" // autorelaxed
        data-ad-client={`ca-pub-${pId}`}
        data-ad-slot={AD_TYPES[adType]}
      ></ins>
    </div>
  );
};

export default React.memo(GoogleAdsense);
