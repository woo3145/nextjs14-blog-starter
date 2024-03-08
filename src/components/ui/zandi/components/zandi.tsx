'use client';
import * as React from 'react';

import { HeatMapData, Palette } from '../types';
import { ZandiItem } from './zandi-item';
import { generateDates, groupByWeeks } from '../utils';
import { cn } from '@/lib/utils';

interface ZandiProps {
  heatMapData: HeatMapData[];
  startDate: Date;
  endDate: Date;
  palette: Palette;
  locale?: string;
  className?: string;
}

export const Zandi = ({
  heatMapData,
  startDate,
  endDate,
  palette,
  locale = 'default',
  className,
}: ZandiProps) => {
  const dates = React.useMemo(
    () => generateDates(startDate, endDate),
    [startDate, endDate]
  );
  const weeks = React.useMemo(
    () => groupByWeeks(dates, heatMapData),
    [dates, heatMapData]
  );

  const dayHeaders = React.useMemo(() => {
    const format = new Intl.DateTimeFormat(locale, { weekday: 'short' });
    return Array.from({ length: 7 }, (_, i) =>
      format.format(new Date(1970, 0, i + 4))
    );
  }, [locale]);

  palette.sort((a, b) => a.threshold - b.threshold);

  return (
    <div className={cn('relative flex flex-col gap-2', className)}>
      <div className="grid grid-cols-7 gap-2 mb-2 text-foreground/70 text-xs text-center">
        {dayHeaders.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      {weeks.map((week, idx) => (
        <div key={idx} className={'grid grid-cols-7 gap-2'}>
          {/* 해당 주에 달이 바뀌면 왼쪽에 달 표시 */}
          {week.isFirstWeek ? (
            <p className="absolute -left-10 text-xs">{week.month}월</p>
          ) : null}
          {week.dates.map((date, dateIdx) => (
            <ZandiItem key={dateIdx} date={date} palette={palette} />
          ))}
        </div>
      ))}
    </div>
  );
};
