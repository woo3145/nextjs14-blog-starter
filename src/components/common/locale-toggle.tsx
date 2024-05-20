'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { useToggleLocale } from '@/hooks/use-toggle-locale';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { locales } from '@/config/app-config';

export function LocaleToggle() {
  const { icons, locale, labels, handleClick } = useToggleLocale();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Toggle locale"
          className="border-none"
        >
          {icons[locale]}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="z-50 min-w-[8rem] w-full p-0 mt-4">
        {locales.map((_locale) => (
          <div
            key={_locale}
            onClick={() => handleClick(_locale)}
            aria-label={`Switch to ${labels[_locale]}`}
            className="py-2 px-4 text-sm hover:bg-accent"
          >
            {icons[_locale]} {labels[_locale]}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
