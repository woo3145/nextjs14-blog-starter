import { heroTranslations } from './heroTranslation';
import { skillTranslations } from './skillTranslations';

export interface Translations {
  [key: string]: {
    [key: string]: string | string[];
  };
}

export const translations = {
  en: {
    ...heroTranslations.en,
    ...skillTranslations.en,
  },
  ko: {
    ...heroTranslations.ko,
    ...skillTranslations.ko,
  },
};
