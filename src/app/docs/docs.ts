import { SidebarNavItem } from './types/nav';

interface DocsConfig {
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: '소개',
      items: [
        {
          title: 'Introduce',
          href: '/docs',
          items: [],
        },
      ],
    },
    {
      title: '코딩 컨벤션(개인 작업)',
      items: [
        {
          title: 'Javascript',
          href: '/docs/convention/javascript',
          items: [],
        },
        {
          title: 'Typescript',
          href: '/docs/convention/typescript',
          items: [],
        },
        {
          title: 'C++',
          href: '/docs/convention/cpp',
          items: [],
          disabled: true,
        },
        {
          title: 'React',
          href: '/docs/convention/react',
          items: [],
        },
        {
          title: 'React-Query',
          href: '/docs/convention/react-query',
          items: [],
          disabled: true,
        },
        {
          title: 'Tailwind CSS',
          href: '/docs/convention/tailwind-css',
          items: [],
        },
        {
          title: 'Next',
          href: '/docs/convention/next',
          items: [],
        },
        {
          title: 'Express',
          href: '/docs/convention/express',
          items: [],
          disabled: true,
        },
        {
          title: 'Nest',
          href: '/docs/convention/nest',
          items: [],
        },
        {
          title: 'Nest-testing(mongoose)',
          href: '/docs/convention/nest-test-mongoose',
          items: [],
          disabled: true,
        },
        {
          title: 'Nest-testing(typeorm)',
          href: '/docs/convention/nest-test-typeorm',
          items: [],
          disabled: true,
        },
      ],
    },
    {
      title: '배포',
      items: [
        {
          title: 'docker',
          href: '/docs/deploy/docker',
          items: [],
          disabled: true,
        },
      ],
    },
    {
      title: '컴포넌트',
      items: [
        {
          title: 'grid-background',
          href: '/docs/components/grid-background',
          items: [],
        },
        {
          title: 'snake-beam',
          href: '/docs/components/snake-beam',
          items: [],
        },
        {
          title: 'zandi',
          href: '/docs/components/zandi',
          items: [],
        },
        {
          title: 'mini-browser',
          href: '/docs/components/mini-browser',
          items: [],
        },
      ],
    },
  ],
};
