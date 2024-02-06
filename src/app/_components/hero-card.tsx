import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const HeroCard = () => {
  return (
    <div className="flex items-center gap-4 p-2">
      <Avatar className="w-40 h-40 shrink-0">
        <AvatarImage src="펭귄_1.png" alt="woo3145" />
        <AvatarFallback>CW</AvatarFallback>
      </Avatar>
      <div className="w-full font-semibold">
        <h4 className="text-3xl pb-1">Woo3145</h4>
        <p className="text-2xl pb-2">Back-End 개발자 이창우 입니다.</p>
        <p className="font-medium text-foreground/70">
          Front/Back 상관없이 js 생태계에 관심이 많습니다.
        </p>
      </div>
    </div>
  );
};
