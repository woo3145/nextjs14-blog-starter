import { cn } from '@/lib/utils';
import { ChevronRightIcon } from 'lucide-react';

interface Props {
  items: string[];
}

export const Bread = ({ items }: Props) => {
  return (
    <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
      {items.map((item, idx) => {
        const lastItem = idx === items.length - 1;
        return (
          <>
            {idx !== 0 ? <ChevronRightIcon className="h-4 w-4" /> : null}
            <div className={cn('font-medium', lastItem && 'text-foreground')}>
              {item}
            </div>
          </>
        );
      })}
    </div>
  );
};
