'use client';
import * as React from 'react';

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { cn } from '@/lib/utils';
import { SkillText } from './skill-text';
import { useTranslatedItems } from '../../_hooks/use-translated-items';

interface SkillSectionProps {
  className?: string;
}

export const SkillSection = ({ className }: SkillSectionProps) => {
  const { items } = useTranslatedItems();
  return (
    <section className={className}>
      <SkillText />
      <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn('[&>p:text-lg]', item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
