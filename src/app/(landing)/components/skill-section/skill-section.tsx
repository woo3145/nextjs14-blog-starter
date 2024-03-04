'use client';
import * as React from 'react';
import {
  IconCode,
  IconDatabase,
  IconDeviceDesktopAnalytics,
  IconServer,
} from '@tabler/icons-react';

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { cn } from '@/lib/utils';
import { SkillText } from './skill-text';
import { DynamicBrowserCard } from './dynamic-browser-card';
import { NextJsCard } from './nextjs-card';
import { BaaSCard } from './baas-card';
import { ResponsiveDesignCard } from './responsive-design-card';
import { BackEndCard } from './backend-card';

interface SkillSectionProps {
  className?: string;
}

export const SkillSection = ({ className }: SkillSectionProps) => {
  return (
    <div className={className}>
      <SkillText />
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn('[&>p:text-lg]', item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const items = [
  {
    title: 'React 기반 프론트 개발',
    description: (
      <span className="text-sm">React를 사용한 동적인 UI 구성과 상태 관리</span>
    ),
    header: <DynamicBrowserCard />,
    className: 'md:col-span-1',
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Next.js 기반 프론트/풀스택 개발',
    description: (
      <span className="text-sm">
        RSC 기반의 App Router와 CSR, SSR, SSG, ISR의 이해에 기반한 앱 개발
      </span>
    ),
    header: <NextJsCard />,
    className: 'md:col-span-1',
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'BaaS를 활용한 서버리스 앱 개발',
    description: (
      <span className="text-sm">
        백엔드 없이 Supabase를 활용하여 인증, 실시간 데이터베이스, 스토리지 등의
        기능을 구현
      </span>
    ),
    header: <BaaSCard />,
    className: 'md:col-span-1',
    icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'NestJS/Express를 이용한 백엔드 개발',
    description: (
      <span className="text-sm">
        타입스크립트와 함께 NestJS/Express를 사용하여 유지보수가 용이하고 확장
        가능한 서버사이드 애플리케이션 구축
      </span>
    ),
    header: <BackEndCard />,
    className: 'md:col-span-2',
    icon: <IconServer className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: '반응형 웹 디자인',
    description: (
      <span className="text-sm">
        다양한 디바이스에서의 사용자 경험을 최적화하기 위한 반응형 웹 디자인
      </span>
    ),
    header: <ResponsiveDesignCard />,
    className: 'md:col-span-1',
    icon: <IconDeviceDesktopAnalytics className="h-4 w-4 text-neutral-500" />,
  },
];
