import { FloatingNav } from '@/components/ui/floating-navbar';
import { HomeIcon, LibraryIcon } from 'lucide-react';

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
];

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-auto w-full rounded-md bg-background bg-grid-black/[0.04] dark:bg-grid-white/[0.04]">
      <FloatingNav navItems={navItems} />
      {children}
    </div>
  );
}
