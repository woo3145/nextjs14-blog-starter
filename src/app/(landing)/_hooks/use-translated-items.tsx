import {
  IconCode,
  IconDatabase,
  IconServer,
  IconDeviceDesktopAnalytics,
} from '@tabler/icons-react';
import { useTranslation } from '../translation-provider';
import { DynamicBrowserCard } from '../_components/skill-section/dynamic-browser-card';
import { NextJsCard } from '../_components/skill-section/nextjs-card';
import { BaaSCard } from '../_components/skill-section/baas-card';
import { BackEndCard } from '../_components/skill-section/backend-card';
import { ResponsiveDesignCard } from '../_components/skill-section/responsive-design-card';
import { CicdCard } from '../_components/skill-section/cicd-card';
import { MobileCard } from '../_components/skill-section/mobile-card/mobile-card';

export const useTranslatedItems = () => {
  const { translate } = useTranslation();

  return {
    items: [
      {
        title: translate('reactDev'),
        description: (
          <span className="text-sm">{translate('reactDevDesc')}</span>
        ),
        header: <DynamicBrowserCard />,
        className: 'md:col-span-1',
        icon: <IconCode className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: translate('nextjsDev'),
        description: (
          <span className="text-sm">{translate('nextjsDevDesc')}</span>
        ),
        header: <NextJsCard />,
        className: 'md:col-span-1',
        icon: <IconCode className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: translate('baasDev'),
        description: (
          <span className="text-sm">{translate('baasDevDesc')}</span>
        ),
        header: <BaaSCard />,
        className: 'md:col-span-1',
        icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: translate('backendDev'),
        description: (
          <span className="text-sm">{translate('backendDevDesc')}</span>
        ),
        header: <BackEndCard />,
        className: 'md:col-span-2',
        icon: <IconServer className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: translate('responsiveDesignDev'),
        description: (
          <span className="text-sm">
            {translate('responsiveDesignDevDesc')}
          </span>
        ),
        header: <ResponsiveDesignCard />,
        className: 'md:col-span-1',
        icon: (
          <IconDeviceDesktopAnalytics className="h-4 w-4 text-neutral-500" />
        ),
      },
      {
        title: translate('mobileAppDev'),
        description: (
          <span className="text-sm">{translate('mobileAppDevDesc')}</span>
        ),
        header: <MobileCard />,
        className: 'md:col-span-1',
        icon: (
          <IconDeviceDesktopAnalytics className="h-4 w-4 text-neutral-500" />
        ),
      },
      {
        title: translate('cicdDev'),
        description: (
          <span className="text-sm">{translate('cicdDevDesc')}</span>
        ),
        header: <CicdCard />,
        className: 'md:col-span-2',
        icon: (
          <IconDeviceDesktopAnalytics className="h-4 w-4 text-neutral-500" />
        ),
      },
    ],
  };
};
