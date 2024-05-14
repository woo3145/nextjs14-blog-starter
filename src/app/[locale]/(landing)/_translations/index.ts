import { heroTranslations } from './hero-translations';
import { projectTranslations } from './project-translations';
import { skillTranslations } from './skill-translations';
import { teckStackTranslations } from './teck-stack-translation';

export interface Translations {
  [key: string]: {
    [key: string]: string | string[];
  };
}

export const translations = {
  en: {
    ...heroTranslations.en,
    ...skillTranslations.en,
    ...teckStackTranslations.en,
    ...projectTranslations.en,
  },
  ko: {
    ...heroTranslations.ko,
    ...skillTranslations.ko,
    ...teckStackTranslations.ko,
    ...projectTranslations.ko,
  },
};
