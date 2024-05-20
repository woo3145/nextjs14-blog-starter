import { Noto_Sans_KR } from 'next/font/google';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import './styles/globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import { GoogleAdsense } from '@/components/common/google-adsense';
import { FloatingNav } from '@/components/common/floating-navbar';
import { Footer } from '@/components/common/footer';
import { headerNavLinks } from '@/config/nav-config';
import { locales } from '@/config/app-config';

const inter = Noto_Sans_KR({
  weight: ['400', '600', '800'],
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const metadata = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: {
      template: `%s | ${metadata('title')}`,
      default: `${metadata('title')}`,
    },
    description: metadata('description'),
    alternates: {
      types: {
        'application/rss+xml': `${metadata('siteUrl')}/feed.xml`,
      },
    },
  };
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
};

// 참고 (unstable_setRequestLocale)
// https://next-intl-docs.vercel.app/docs/getting-started/app-router#add-unstable_setrequestlocale-to-all-layouts-and-pages
// 요약: [locale]이라는 동적 경로를 사용하기 때문에 하위에서 generateStaticParams를 통해 정적페이지를 렌더링 하기 위함
// 임시방편 API이기 때문에 추후 제거하는 방향으로 업데이트 예정
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={cn('', inter.variable)} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <FloatingNav navItems={headerNavLinks} />

            <div className="h-auto min-h-screen w-full rounded-md bg-background bg-grid-black/[0.04] dark:bg-grid-white/[0.04] font-noto-sans">
              <main>{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
          <Toaster />
        </ThemeProvider>
        <GoogleAdsense pId={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PID || ''} />
      </body>
    </html>
  );
}
