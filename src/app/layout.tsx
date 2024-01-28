import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Woo3145',
    default: 'Woo3145',
  },
  description: 'Full-stack developer.',
  openGraph: {
    title: 'Woo3145',
    description: 'Full-stack developer.',
    url: '',
    siteName: "Woo3145's site",
    locale: 'ko_KR',
    type: 'website',
    // To use your own endpoint, refer to https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation
    // Note that an official `app/` solution is coming soon.
    images: [
      {
        url: `https://mysite.com/api/og?title=${encodeURIComponent(
          "Woo3145's site"
        )}`,
        width: 1200,
        height: 630,
        alt: '',
      },
    ],
  },
  twitter: {
    title: 'Woo3145',
    card: 'summary_large_image',
    creator: '@max_leiter',
  },
  icons: {
    shortcut: 'https://mysite.com/favicons/favicon.ico',
  },
  alternates: {
    types: {
      // See the RSS Feed section for more details
      'application/rss+xml': 'https://mysite.com/feed.xml',
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
