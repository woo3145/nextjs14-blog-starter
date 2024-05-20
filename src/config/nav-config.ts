import { MainNavItem, SidebarNavItem } from '@/types/nav';

export const headerNavLinks: MainNavItem[] = [
  {
    title: 'Main',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Docs',
    href: '/docs',
  },
];
export const docsNavLinks: SidebarNavItem[] = [
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
];
