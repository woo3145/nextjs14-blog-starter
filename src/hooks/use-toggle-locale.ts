import { useParams } from 'next/navigation';
import { useRouter, usePathname } from '@/navigation';
import { useLocale } from 'next-intl';

export const useToggleLocale = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const handleClick = (target: (typeof locale)[number]) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: target }
    );
  };

  const localeIcons: { [key: (typeof locale)[number]]: string } = {
    en: '🇺🇸',
    ko: '🇰🇷',
  };
  const localeLabels: { [key: (typeof locale)[number]]: string } = {
    en: 'English',
    ko: 'Korean',
  };

  return {
    locale: locale as (typeof locale)[number],
    icons: localeIcons,
    labels: localeLabels,
    handleClick,
  };
};
