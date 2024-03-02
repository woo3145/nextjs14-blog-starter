import { HeatMapData, Palette } from '../types';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface ZandiItemProps {
  date: HeatMapData;
  palette: Palette;
}

export const ZandiItem = ({ date, palette }: ZandiItemProps) => {
  const { value } = date;
  let backgroundColor = '';

  for (let i = palette.length - 1; 0 <= i; --i) {
    if (palette[i].threshold <= value) {
      backgroundColor = palette[i].color;
      break;
    }
  }

  return (
    <Popover>
      <PopoverTrigger>
        <div
          key={date.date}
          style={{ backgroundColor }}
          className="bg-[#f5f5f5] dark:bg-[#262626] w-6 h-6 rounded-sm"
        />
      </PopoverTrigger>
      <PopoverContent className="w-28 space-y-1 py-2">
        <p className="text-sm font-semibold text-center">{date.value}</p>
        <p className="text-xs text-foreground/70 text-center">{date.date}</p>
      </PopoverContent>
    </Popover>
  );
};
