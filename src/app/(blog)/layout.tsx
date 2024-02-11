import { HomeIcon, LibraryIcon } from 'lucide-react';
import Header from './_components/header';
import { FloatingNav } from '@/components/ui/floating-navbar';

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
    name: 'Posts',
    link: '/posts',
    icon: <LibraryIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-auto min-h-screen w-full rounded-md bg-background bg-grid-black/[0.04] dark:bg-grid-white/[0.04]">
      <FloatingNav navItems={navItems} />
      <div className="pt-40">{children}</div>
    </div>
  );
}
