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
        {
          title: '구현된 mdx',
          href: '/docs/mdx-syntax',
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
          title: 'React',
          href: '/docs/convention/react',
          items: [],
        },
        {
          title: 'Next',
          href: '/docs/convention/next',
          items: [],
          disabled: true,
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
          disabled: true,
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
      title: '재사용 컴포넌트',
      items: [
        {
          title: 'grid-background',
          href: '/docs/components/grid-background',
          items: [],
        },
      ],
    },
  ],
};
