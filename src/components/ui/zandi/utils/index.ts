import { HeatMapData } from '../types';

const formatDateStr = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const generateDates = (startDate: Date, endDate: Date): Date[] => {
  const dates = [];
  for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
    dates.push(new Date(day));
  }
  return dates;
};

export const groupByWeeks = (dates: Date[], heatMapData: HeatMapData[]) => {
  const heatMapDataMap = new Map(
    heatMapData.map((item) => [item.date, item.value])
  );

  const weeks: {
    dates: HeatMapData[];
    month: number;
    isFirstWeek: boolean;
  }[] = [];

  let week: HeatMapData[] = [];
  let lastMonth: number | null = null;

  dates.forEach((date, idx) => {
    const month = date.getMonth();
    const dateStr = formatDateStr(date);
    const heatMapValue = heatMapDataMap.get(dateStr) || 0;
    // 주 시작이면 week객체 푸시 후 초기화
    if (date.getDay() === 0 && 0 < week.length) {
      weeks.push({
        dates: week,
        month: month + 1,
        isFirstWeek: lastMonth !== month,
      });
      week = [];

      lastMonth = month;
    }
    week.push({
      date: dateStr,
      value: heatMapValue,
    });
    if (idx === dates.length - 1) {
      weeks.push({
        dates: week,
        month: month + 1,
        isFirstWeek: lastMonth !== month,
      });
    }
  });

  return weeks.reverse(); // 최신 데이터가 위로가도록 뒤집기
};
