import { ScrollArea } from '@/components/ui/scroll-area';
import { DocsSidebarNav } from './_components/sidebar-nav';
import { docsConfig } from './docs';
import { GoogleAdsense } from '@/components/google-adsense';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="container px-6 pt-28 md:pt-40 flex-1 items-start lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-214px)] w-full shrink-0 lg:sticky lg:block">
        <ScrollArea className="h-full py-6 pr-6 lg:py-8">
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </ScrollArea>
      </aside>

      <div className="relative py-6 lg:gap-10 lg:py-8">{children}</div>
      <GoogleAdsense pId={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PID || ''} />
    </div>
  );
}
