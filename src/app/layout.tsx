import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './styles/globals.css';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { DarkModeToggle } from '@/components/darkmode-toggle';
import { siteMetadata } from '@/data/siteMetadata';
import { FileCode2Icon, HomeIcon, NotebookPenIcon } from 'lucide-react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { cn } from '@/lib/utils';
import { IconPlanet } from '@tabler/icons-react';
import { GoogleAdsense } from '@/components/google-adsense';
import { Toaster } from '@/components/ui/sonner';

const inter = Noto_Sans_KR({
  weight: ['400', '600', '800'],
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.hero.author}`,
    default: `${siteMetadata.hero.author}`,
  },
  description: `${siteMetadata.description}`,
  openGraph: {
    title: `${siteMetadata.title}`,
    description: `${siteMetadata.description}`,
    url: `${siteMetadata.siteUrl}`,
    siteName: `${siteMetadata.title}`,
    locale: `${siteMetadata.locale}`,
    type: 'website',
    images: [
      {
        url: siteMetadata.siteLogo,
        width: 1200,
        height: 630,
        alt: 'logo',
      },
    ],
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary',
    creator: `@${siteMetadata.hero.author}`,
  },
  icons: {
    shortcut: `/favicon.ico`,
  },
  alternates: {
    types: {
      // See the RSS Feed section for more details
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
};
const navItems = [
  {
    name: 'Main',
    link: '/',
    icon: <HomeIcon className="h-4 w-4 text-foreground/60" />,
  },
  {
    name: 'Blog',
    link: '/blog',
    icon: <NotebookPenIcon className="h-4 w-4 text-foreground/60" />,
  },
  {
    name: 'Portfolio',
    link: '/portfolio',
    icon: <IconPlanet className="h-4 w-4 text-foreground/60" />,
  },
  {
    name: 'Docs',
    link: '/docs',
    icon: <FileCode2Icon className="h-4 w-4 text-foreground/60" />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={cn('', inter.variable)} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />

          <div className="h-auto min-h-screen w-full rounded-md bg-background bg-grid-black/[0.04] dark:bg-grid-white/[0.04] font-noto-sans overflow-x-hidden">
            {children}
          </div>
          <DarkModeToggle />

          <Toaster />
        </ThemeProvider>
      </body>
      <GoogleAdsense pId={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PID || ''} />
    </html>
  );
}
