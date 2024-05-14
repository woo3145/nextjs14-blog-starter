import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTranslations } from 'next-intl';

export const HeroCard = () => {
  const t = useTranslations('Hero');
  return (
    <div className="md:flex items-center gap-4 p-2">
      <Avatar className="w-40 h-40 shrink-0 mx-auto">
        <AvatarImage src={t('avatarUrl')} alt="avatar" />
        <AvatarFallback>{t('author')}</AvatarFallback>
      </Avatar>
      <div className="w-full font-semibold flex flex-col items-center md:items-start">
        <h4 className="text-3xl pb-1">{t('text_1')}</h4>
        <p className="text-2xl pb-2">{t('text_2')}</p>
        <p className="font-medium text-foreground/70">{t('text_3')}</p>
      </div>
    </div>
  );
};
