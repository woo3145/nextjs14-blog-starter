import { ScrollArea } from '@/components/ui/scroll-area';
import { DocsSidebarNav } from './_components/sidebar-nav';
import { docsConfig } from './docs';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { HomeIcon, LibraryIcon } from 'lucide-react';

interface DocsLayoutProps {
  children: React.ReactNode;
}
const navItems = [
  {
    name: 'Landing',
    link: '/landing',
    icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: 'Blog',
    link: '/',
    icon: <LibraryIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: 'Docs',
    link: '/docs',
    icon: <LibraryIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="h-auto w-full rounded-md bg-background bg-grid-black/[0.04] dark:bg-grid-white/[0.04]">
      <FloatingNav navItems={navItems} />
      <div className="container pt-40 flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </ScrollArea>
        </aside>

        <div>{children}</div>
      </div>
    </div>
  );
}
