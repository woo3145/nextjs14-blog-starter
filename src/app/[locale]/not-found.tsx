'use client';

import NavigationLink from '@/components/common/navigation-link';
import { buttonVariants } from '@/components/ui/button';
import { CDN_IMAGES } from '@/data/cdn-images';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function NotFound() {
  const t = useTranslations('NotFound');
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen font-mono">
      <p className="text-4xl">404</p>
      <p>{t('text')}</p>
      <NavigationLink href={'/'} className={cn(buttonVariants())}>
        {t('linkText')}
      </NavigationLink>
      <Image
        src={CDN_IMAGES.landing.octopus_2}
        alt="404 notfound"
        width={200}
        height={200}
      />
    </div>
  );
}
