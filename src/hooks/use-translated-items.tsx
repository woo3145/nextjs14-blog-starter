import {
  IconCode,
  IconDatabase,
  IconServer,
  IconDeviceDesktopAnalytics,
  IconDeviceMobile,
  IconCloud,
} from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import { BaaSCard } from '@/components/landing/skill-section/baas-card';
import { BackEndCard } from '@/components/landing/skill-section/backend-card';
import { CicdCard } from '@/components/landing/skill-section/cicd-card';
import { DynamicBrowserCard } from '@/components/landing/skill-section/dynamic-browser-card';
import { MobileCard } from '@/components/landing/skill-section/mobile-card/mobile-card';
import { NextJsCard } from '@/components/landing/skill-section/nextjs-card';
import { ResponsiveDesignCard } from '@/components/landing/skill-section/responsive-design-card';

const cardComponents = {
  DynamicBrowserCard: <DynamicBrowserCard />,
  NextJsCard: <NextJsCard />,
  BaaSCard: <BaaSCard />,
  BackEndCard: <BackEndCard />,
  ResponsiveDesignCard: <ResponsiveDesignCard />,
  MobileCard: <MobileCard />,
  CicdCard: <CicdCard />,
};

const icons = {
  code: <IconCode className="h-4 w-4 text-neutral-500" />,
  database: <IconDatabase className="h-4 w-4 text-neutral-500" />,
  server: <IconServer className="h-4 w-4 text-neutral-500" />,
  analytics: (
    <IconDeviceDesktopAnalytics className="h-4 w-4 text-neutral-500" />
  ),
  mobile: <IconDeviceMobile className="h-4 w-4 text-neutral-500" />,
  cicd: <IconCloud className="h-4 w-4 text-neutral-500" />,
};

export const useTranslatedItems = () => {
  const t = useTranslations('Landing');

  return {
    items: [
      {
        title: t('reactDev'),
        description: <span className="text-sm">{t('reactDevDesc')}</span>,
        header: cardComponents.DynamicBrowserCard,
        className: 'md:col-span-1',
        icon: icons.code,
      },
      {
        title: t('nextjsDev'),
        description: <span className="text-sm">{t('nextjsDevDesc')}</span>,
        header: cardComponents.NextJsCard,
        className: 'md:col-span-1',
        icon: icons.code,
      },
      {
        title: t('baasDev'),
        description: <span className="text-sm">{t('baasDevDesc')}</span>,
        header: cardComponents.BaaSCard,
        className: 'md:col-span-1',
        icon: icons.database,
      },
      {
        title: t('backendDev'),
        description: <span className="text-sm">{t('backendDevDesc')}</span>,
        header: cardComponents.BackEndCard,
        className: 'md:col-span-2',
        icon: icons.server,
      },
      {
        title: t('responsiveDesignDev'),
        description: (
          <span className="text-sm">{t('responsiveDesignDevDesc')}</span>
        ),
        header: cardComponents.ResponsiveDesignCard,
        className: 'md:col-span-1',
        icon: icons.analytics,
      },
      {
        title: t('mobileAppDev'),
        description: <span className="text-sm">{t('mobileAppDevDesc')}</span>,
        header: cardComponents.MobileCard,
        className: 'md:col-span-1',
        icon: icons.mobile,
      },
      {
        title: t('cicdDev'),
        description: <span className="text-sm">{t('cicdDevDesc')}</span>,
        header: cardComponents.CicdCard,
        className: 'md:col-span-2',
        icon: icons.cicd,
      },
    ],
  };
};
