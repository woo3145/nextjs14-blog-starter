import {
  IconCode,
  IconDatabase,
  IconServer,
  IconDeviceDesktopAnalytics,
} from '@tabler/icons-react';
import { DynamicBrowserCard } from '../_components/skill-section/dynamic-browser-card';
import { NextJsCard } from '../_components/skill-section/nextjs-card';
import { BaaSCard } from '../_components/skill-section/baas-card';
import { BackEndCard } from '../_components/skill-section/backend-card';
import { ResponsiveDesignCard } from '../_components/skill-section/responsive-design-card';
import { CicdCard } from '../_components/skill-section/cicd-card';
import { MobileCard } from '../_components/skill-section/mobile-card/mobile-card';
import { useTranslations } from 'next-intl';

export const useTranslatedItems = () => {
  const t = useTranslations('Landing');

  return {
    items: [
      {
        title: t('reactDev'),
        description: <span className="text-sm">{t('reactDevDesc')}</span>,
        header: <DynamicBrowserCard />,
        className: 'md:col-span-1',
        icon: <IconCode className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: t('nextjsDev'),
        description: <span className="text-sm">{t('nextjsDevDesc')}</span>,
        header: <NextJsCard />,
        className: 'md:col-span-1',
        icon: <IconCode className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: t('baasDev'),
        description: <span className="text-sm">{t('baasDevDesc')}</span>,
        header: <BaaSCard />,
        className: 'md:col-span-1',
        icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: t('backendDev'),
        description: <span className="text-sm">{t('backendDevDesc')}</span>,
        header: <BackEndCard />,
        className: 'md:col-span-2',
        icon: <IconServer className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: t('responsiveDesignDev'),
        description: (
          <span className="text-sm">{t('responsiveDesignDevDesc')}</span>
        ),
        header: <ResponsiveDesignCard />,
        className: 'md:col-span-1',
        icon: (
          <IconDeviceDesktopAnalytics className="h-4 w-4 text-neutral-500" />
        ),
      },
      {
        title: t('mobileAppDev'),
        description: <span className="text-sm">{t('mobileAppDevDesc')}</span>,
        header: <MobileCard />,
        className: 'md:col-span-1',
        icon: (
          <IconDeviceDesktopAnalytics className="h-4 w-4 text-neutral-500" />
        ),
      },
      {
        title: t('cicdDev'),
        description: <span className="text-sm">{t('cicdDevDesc')}</span>,
        header: <CicdCard />,
        className: 'md:col-span-2',
        icon: (
          <IconDeviceDesktopAnalytics className="h-4 w-4 text-neutral-500" />
        ),
      },
    ],
  };
};
