'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { IconBrandGithub, IconBrandGooglePlay } from '@tabler/icons-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { IconHome } from '@tabler/icons-react';
import { toast } from 'sonner';
import { CDN_IMAGES } from '@/data/cdn-images';
import { Project } from '#site/content';
import { ProjectCard } from './project-card';

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

export const ProjectList = ({ className, projects }: ProjectListProps) => {
  const [zoomedProjectId, setZoomedProjectId] = React.useState<number | null>(
    null
  );

  const handleOutsideClick = () => {
    setZoomedProjectId(null);
  };

  const handleZoomToggle = (projectId: number) => {
    setZoomedProjectId((prev) => (prev === projectId ? null : projectId));
  };

  React.useEffect(() => {
    const handleClickOutside = () => {
      handleOutsideClick();
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 max-w-6xl mx-auto',
        className
      )}
    >
      {projects.map((item, idx) => {
        return (
          <ProjectCard
            id={idx}
            key={idx}
            project={item}
            isZoomed={zoomedProjectId === idx}
            onZoomToggle={handleZoomToggle}
          />
        );
      })}
    </div>
  );
};

// 참고용으로 남겨놈
const items = [
  {
    imgSrc: CDN_IMAGES.project.pomodak_flutter,
    title: '뽀모닭 플러터 마이그레이션',
    description:
      '플레이스토어 개발자 계정 첫 앱 업로드 검수 기간(2주)동안 기존 뽀모닭 앱을 플러터로 마이그레이션하였습니다. 기존 앱의 기능을 최대한 유지하면서 플러터의 장점을 살려 개선하였습니다.',
    stacks: (
      <div className="flex items-center gap-1">
        <p className="border border-zinc-500 bg-zinc-100 dark:bg-zinc-900/20 text-zinc-600 dark:text-zinc-400 text-xs rounded-full px-2 py-0.5">
          개인
        </p>
        <p className="border border-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/20 text-fuchsia-600 dark:text-fuchsia-400 text-xs rounded-full px-2 py-0.5">
          Flutter
        </p>
      </div>
    ),
    footer: (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/pomodak/pomodak-flutter"
            target="_blank"
            className="hover:text-blue-500"
          >
            <IconBrandGithub className="w-6 h-6" />
          </Link>
          <Link
            href="https://pomodak.com"
            target="_blank"
            className="hover:text-blue-500"
          >
            <IconHome className="w-6 h-6" />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.pomodak.twa&hl=en-US&ah=I8yoP2zHmGifsLssApP5t8F_PYU"
            target="_blank"
            className="hover:text-blue-500"
          >
            <IconBrandGooglePlay className="w-6 h-6" />
          </Link>
        </div>

        <div
          // href="/portfolio/pomodak"
          onClick={() => toast('준비중입니다.')}
          className={cn(
            buttonVariants(),
            'h-8 bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-gray-200 dark:text-black'
          )}
        >
          자세히 보기
        </div>
      </div>
    ),
  },
  {
    imgSrc: CDN_IMAGES.project.woo3145,
    title: 'Woo3145.com',
    description:
      'NextJS를 사용하여 블로그, 포트폴리오, 문서 등을 정리한 사이트입니다. mdx를 통해 정적 컨텐츠를 제공하고 그리드한 느낌과 framer-motion을 활용했습니다.',
    stacks: (
      <div className="flex items-center gap-1">
        <p className="border border-gray-500 bg-gray-100 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400 text-xs rounded-full px-2 py-0.5">
          개인
        </p>
        <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs rounded-full px-2 py-0.5">
          NextJS
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs rounded-full px-2 py-0.5">
          MDX-Remote
        </p>
      </div>
    ),
    footer: (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/woo3145/woo3145.com"
            target="_blank"
            className="hover:text-blue-500"
          >
            <IconBrandGithub className="w-6 h-6" />
          </Link>
          <Link
            href="https://woo3145.com"
            target="_blank"
            className="hover:text-blue-500"
          >
            <IconHome className="w-6 h-6" />
          </Link>
        </div>

        <Link
          href="/portfolio/woo3145"
          className={cn(
            buttonVariants(),
            'h-8 bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-gray-200 dark:text-black'
          )}
        >
          자세히 보기
        </Link>
      </div>
    ),
  },
  {
    imgSrc: CDN_IMAGES.project.pomodak,
    title: '뽀모닭: 수집형 뽀모도로 타이머',
    description:
      'React + PWA를 사용하여 웹뷰 방식으로 플레이 스토어에 출시(예정) 한 프로젝트입니다. 타이머를 사용하면서 구매한 알의 시간을 채우고, 알을 부화시켜 새로운 캐릭터를 수집할 수 있습니다.',
    stacks: (
      <div className="flex items-center gap-1">
        <p className="border border-zinc-500 bg-zinc-100 dark:bg-zinc-900/20 text-zinc-600 dark:text-zinc-400 text-xs rounded-full px-2 py-0.5">
          Node 1명 + Java 2명
        </p>
        <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full px-2 py-0.5">
          ReactJS
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs rounded-full px-2 py-0.5">
          NestJS
        </p>
      </div>
    ),
    footer: (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/pomodak/pomodak-readme"
            target="_blank"
            className="hover:text-blue-500"
          >
            <IconBrandGithub className="w-6 h-6" />
          </Link>
          <Link
            href="https://pomodak.com"
            target="_blank"
            className="hover:text-blue-500"
          >
            <IconHome className="w-6 h-6" />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.pomodak.twa&hl=en-US&ah=I8yoP2zHmGifsLssApP5t8F_PYU"
            target="_blank"
            className="hover:text-blue-500"
          >
            <IconBrandGooglePlay className="w-6 h-6" />
          </Link>
        </div>

        <div
          // href="/portfolio/pomodak"
          onClick={() => toast('준비중입니다.')}
          className={cn(
            buttonVariants(),
            'h-8 bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-gray-200 dark:text-black'
          )}
        >
          자세히 보기
        </div>
      </div>
    ),
  },
  {
    imgSrc: CDN_IMAGES.project.jazzit,
    title: 'JAZZiT',
    description:
      'NextJS의 13.4에서 App라우터가 Stable로 전환되고 Server Actions이 막 생겼을 때 재밌어 보여서 만든 사이트입니다. 헥사고날 아키텍처 참고하여 RSC와 Server Actions에 맞는 설계를 고민해 보았습니다.',
    stacks: (
      <div className="flex items-center gap-1">
        <p className="border border-gray-500 bg-gray-100 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400 text-xs rounded-full px-2 py-0.5">
          개인
        </p>
        <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs rounded-full px-2 py-0.5">
          NextJS
        </p>
      </div>
    ),
    footer: (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/woo3145/jazzit-app"
            target="_blank"
            className="hover:text-blue-500"
          >
            <IconBrandGithub className="w-6 h-6" />
          </Link>
          <div
            // href="https://jazzit-app.vercel.app/"
            // target="_blank"
            onClick={() =>
              toast('AWS 프리티어가 끝나서 3만원과 함께 내렸습니다.')
            }
            className="hover:text-blue-500"
          >
            <IconHome className="w-6 h-6" />
          </div>
        </div>

        <div
          // href="/portfolio/pomodak"
          onClick={() => toast('준비중입니다.')}
          className={cn(
            buttonVariants(),
            'h-8 bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-gray-200 dark:text-black'
          )}
        >
          자세히 보기
        </div>
      </div>
    ),
  },
  {
    imgSrc: CDN_IMAGES.project.video_streaming,
    title: 'Woo3145 Videos',
    description:
      'React와 Firebase를 사용하여 만든 비디오 스트리밍 앱입니다. serverless 라이브러리를 통해 썸네일 추출 및 여러 해상도로 변환하는 lambda 함수를 배포하고 React에서 고정 비트레이트 or 적응형(hls) 비트레이트를 통해 비디오를 스트리밍합니다. 비디오만 달랑 있기 심심해서 구름도 추가했습니다.',
    stacks: (
      <div className="flex items-center gap-1 flex-wrap">
        <p className="border border-gray-500 bg-gray-100 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400 text-xs rounded-full px-2 py-0.5">
          개인
        </p>
        <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full px-2 py-0.5">
          React
        </p>
        <p className="border border-yellow-500 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 text-xs rounded-full px-2 py-0.5">
          Firebase
        </p>
        <p className="border border-rose-500 bg-rose-100 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 text-xs rounded-full px-2 py-0.5">
          Serverless(Lambda)
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs rounded-full px-2 py-0.5">
          MediaConvert
        </p>
      </div>
    ),
    footer: (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/woo3145/video-streaming-app"
            target="_blank"
            className="hover:text-blue-500"
          >
            <IconBrandGithub className="w-6 h-6" />
          </Link>
          <Link
            href="https://woo3145-videos.netlify.app/"
            target="_blank"
            className="hover:text-blue-500"
          >
            <IconHome className="w-6 h-6" />
          </Link>
        </div>

        <div
          onClick={() => toast('준비중입니다.')}
          className={cn(
            buttonVariants(),
            'h-8 bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-gray-200 dark:text-black'
          )}
        >
          자세히 보기
        </div>
      </div>
    ),
  },
  {
    imgSrc: CDN_IMAGES.project.etc,
    title: '그외 여러가지',
    description: '그때그때 재밌어 보이는걸 만들어 보았습니다.',
    stacks: (
      <div className="flex items-center gap-1 flex-wrap">
        <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full px-2 py-0.5">
          여러가지
        </p>
      </div>
    ),
    footer: (
      <div className="flex items-center justify-end">
        <div
          onClick={() => toast('준비중입니다.')}
          className={cn(
            buttonVariants(),
            'h-8 bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-gray-200 dark:text-black'
          )}
        >
          자세히 보기
        </div>
      </div>
    ),
  },
];
