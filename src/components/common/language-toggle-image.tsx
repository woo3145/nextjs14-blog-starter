'use client';
import * as React from 'react';
import Image from 'next/image';

import { useToggleLocale } from '@/hooks/use-toggle-locale';
import { CDN_IMAGES } from '@/data/cdn-images';
import { cn } from '@/lib/utils';

interface LanguageToggleImageProps {
  width?: number;
  height?: number;
  className?: string;
}

export const LanguageToggleImage = ({
  width = 240,
  height = 240,
  className,
}: LanguageToggleImageProps) => {
  const { locale, handleClick } = useToggleLocale();

  const toggleLanguage = () => {
    handleClick(locale === 'en' ? 'ko' : 'en');
  };

  return (
    <div className={cn('cursor-pointer', className)} onClick={toggleLanguage}>
      <Image
        src={
          locale === 'en'
            ? CDN_IMAGES.landing.octopus_2
            : CDN_IMAGES.landing.octopus_1
        }
        alt="profile_img"
        width={width}
        height={height}
        priority
        className="px-10 md:px-0"
      />
    </div>
  );
};
