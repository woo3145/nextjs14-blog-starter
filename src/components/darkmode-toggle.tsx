'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export function DarkModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="border-none">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="z-50 min-w-[8rem] w-full p-0 mt-4">
        <div
          className="py-2 px-4 text-sm hover:bg-accent"
          onClick={() => setTheme('light')}
        >
          Light
        </div>
        <div
          className="py-2 px-4 text-sm hover:bg-accent"
          onClick={() => setTheme('dark')}
        >
          Dark
        </div>
        <div
          className="py-2 px-4 text-sm hover:bg-accent"
          onClick={() => setTheme('system')}
        >
          System
        </div>
      </PopoverContent>
    </Popover>
  );
}
