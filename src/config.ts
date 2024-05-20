import { Pathnames } from 'next-intl/navigation';
import { siteMetadata } from './data/site-metadata';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? siteMetadata.siteUrl
  : `http://localhost:${port}`;

export const defaultLocale = 'en' as const;
export const locales = ['en', 'ko'] as const;

export const pathnames = {
  '/': '/',
  '/blog': '/blog',
  '/docs': '/docs',
  '/projects': '/projects',
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
