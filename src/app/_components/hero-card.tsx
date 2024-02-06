import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { siteMetadata } from '@/data/siteMetadata';

export const HeroCard = () => {
  return (
    <div className="flex items-center gap-4 p-2">
      <Avatar className="w-40 h-40 shrink-0">
        <AvatarImage src={siteMetadata.hero.avatarUrl} alt="avatar" />
        <AvatarFallback>{siteMetadata.hero.author}</AvatarFallback>
      </Avatar>
      <div className="w-full font-semibold">
        <h4 className="text-3xl pb-1">{siteMetadata.hero.text_1}</h4>
        <p className="text-2xl pb-2">{siteMetadata.hero.text_2}</p>
        <p className="font-medium text-foreground/70">
          {siteMetadata.hero.text_3}
        </p>
      </div>
    </div>
  );
};
