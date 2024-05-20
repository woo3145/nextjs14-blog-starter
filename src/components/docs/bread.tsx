import { cn } from '@/lib/utils';
import { ChevronRightIcon } from 'lucide-react';

interface Props {
  items: string[];
}

export const Bread = ({ items }: Props) => {
  return (
    <div className="mb-4 flex items-center text-muted-foreground">
      {items.map((item, idx) => {
        const lastItem = idx === items.length - 1;
        return (
          <div key={idx} className="flex items-center">
            {idx !== 0 ? (
              <ChevronRightIcon className="h-4 w-4 translate-y-0.5 mx-0.5" />
            ) : null}
            <div className={cn('font-sm', lastItem && 'text-foreground')}>
              {item}
            </div>
          </div>
        );
      })}
    </div>
  );
};
