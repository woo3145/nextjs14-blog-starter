'use client';

import * as React from 'react';
import { locales } from '@/config';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToggleLocale } from '@/hooks/use-toggle-locale';

export function LocaleToggle() {
  const { icons, locale, labels, handleClick } = useToggleLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-10 right-[5.5rem]"
          aria-label="Toggle locale"
        >
          {icons[locale]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((_locale) => (
          <DropdownMenuItem
            key={_locale}
            onClick={() => handleClick(_locale)}
            aria-label={`Switch to ${labels[_locale]}`}
          >
            {icons[_locale]} {labels[_locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
