export interface HeatMapData {
  date: string;
  value: number;
}

interface PaletteItem {
  threshold: number;
  color: string;
}

export type Palette = PaletteItem[];
