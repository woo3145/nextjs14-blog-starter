import { IconContainer } from '@/components/ui/icon-container';
import { Radar } from '@/components/ui/radar';
import {
  IconBrandApple,
  IconBrandAws,
  IconBrandDocker,
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandGooglePlay,
  IconBrandVercel,
  IconCloudNetwork,
} from '@tabler/icons-react';

export const CicdCard = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem]  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2">
      <div className="relative flex h-auto w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        <div className="mx-auto w-full">
          <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 px-10">
            <IconContainer
              text="App Store"
              delay={0.2}
              icon={<IconBrandApple className=" h-6 w-6 text-indigo-400" />}
            />
            <IconContainer
              delay={0.4}
              text="AWS"
              icon={<IconBrandAws className=" h-6 w-6 text-indigo-400" />}
            />
            <IconContainer
              delay={0.4}
              text="Vercel"
              icon={<IconBrandVercel className=" h-6 w-6 text-indigo-400" />}
            />
            <IconContainer
              text="CDN"
              delay={0.3}
              icon={<IconCloudNetwork className=" h-6 w-6 text-indigo-400" />}
            />
          </div>
        </div>
        <div className="mx-auto w-full">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="Google Play"
              delay={0.5}
              icon={
                <IconBrandGooglePlay className=" h-6 w-6 text-indigo-400" />
              }
            />
            <IconContainer
              text="Git Actions"
              icon={<IconBrandGithub className=" h-6 w-6 text-indigo-400" />}
              delay={0.2}
            />
            <IconContainer
              text="Docker"
              icon={<IconBrandDocker className=" h-6 w-6 text-indigo-400" />}
              delay={0.4}
            />
            <IconContainer
              text="Google Cloud"
              icon={<IconBrandGoogle className=" h-6 w-6 text-indigo-400" />}
              delay={0.8}
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>
    </div>
  );
};
