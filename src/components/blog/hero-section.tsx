import { useTranslations } from 'next-intl';
import { LanguageToggleImage } from '../common/language-toggle-image';

export const HeroSection = () => {
  const t = useTranslations('Hero');
  return (
    <div className="md:flex items-center gap-4 p-2">
      <LanguageToggleImage
        width={160}
        height={160}
        className="shrink-0 mx-auto"
      />
      <div className="w-full font-semibold flex flex-col items-center md:items-start">
        <h4 className="text-3xl pb-1">{t('text_1')}</h4>
        <p className="text-2xl pb-2">{t('text_2')}</p>
        <p className="font-medium text-foreground/70">{t('text_3')}</p>
      </div>
    </div>
  );
};
