import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { DarkModeToggle } from '@/components/darkmode-toggle';
import { siteMetadata } from '@/data/siteMetadata';

const inter = Inter({ subsets: ['latin'] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>{children}</div>
          <DarkModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
