import Link from 'next/link';
import { Home } from 'lucide-react';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto h-16 bg-background border-b">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'flex items-center h-12'
          )}
        >
          <span className="font-semibold text-lg">Woo3145</span>
          <Image
            src="/문어_1.png"
            alt="logo"
            className="w-14 h-14"
            width={200}
            height={200}
          />
        </Link>

        <nav>
          <ul className="flex items-center gap-2">
            <li>
              <Link
                href="/posts"
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'text-lg cursor-pointer font-medium h-12'
                )}
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
