import { HeatMapData, Palette, Zandi } from '../ui/zandi';
import { ComponentPreviewContainer } from './component-preview-container';

const dummyHeatMapData: HeatMapData[] = [
  { date: '2024-03-02', value: 4 },
  { date: '2024-03-01', value: 10 },
  { date: '2024-02-29', value: 20 },
  { date: '2024-02-28', value: 30 },
  { date: '2024-02-26', value: 40 },
  { date: '2024-02-25', value: 20 },
  { date: '2024-02-24', value: 30 },
  { date: '2024-02-22', value: 20 },
  { date: '2024-02-21', value: 10 },
  { date: '2024-02-20', value: 5 },
  { date: '2024-02-19', value: 100 },
  { date: '2024-02-18', value: 33 },
];

const dummyPalette: Palette = [
  { threshold: 1, color: '#d6e685' },
  { threshold: 10, color: '#8cc665' },
  { threshold: 20, color: '#44a340' },
  { threshold: 30, color: '#1e6823' },
];

export const ZandiPreview = () => {
  const today = new Date('2024-03-02');
  const sixMonthAgo = new Date('2023-11-02');
  return (
    <ComponentPreviewContainer>
      <div className="relative flex flex-col items-center justify-center h-[auto] w-full py-10 overflow-hidden bg-white dark:bg-black dark:bg-grid-white/[0.1] bg-grid-black/[0.1] overflow-y-scroll">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-lime-200 to-lime-500 py-4">
          Zandi
        </p>
        <Zandi
          className="h-[auto]"
          heatMapData={dummyHeatMapData}
          palette={dummyPalette}
          startDate={sixMonthAgo}
          endDate={today}
          locale="ko-KR"
        />
      </div>
    </ComponentPreviewContainer>
  );
};
