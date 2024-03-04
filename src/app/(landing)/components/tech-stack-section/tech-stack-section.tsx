'use client';
import { TechStackDataProvider } from './tech-stack-data-provider';
import { SkillText } from '../skill-section/skill-text';

interface TechStack {
  imageSrc: string;
  darkImageSrc?: string;
  width: number;
  height: number;
  title: string;
  description?: string;
}

const frontStacks: TechStack[] = [
  { imageSrc: '/stacks/node-js.png', width: 100, height: 100, title: 'nodejs' },
  { imageSrc: '/stacks/js.png', width: 100, height: 100, title: 'javascript' },
  {
    imageSrc: '/stacks/ts.png',
    width: 100,
    height: 100,
    title: 'typescript',
    description: 'js로 못돌아가겠어..',
  },
  {
    imageSrc: '/stacks/react-icon.png',
    width: 100,
    height: 100,
    title: 'react',
    description: '만들어 주신분.. 감사합니다',
  },
  {
    imageSrc: '/stacks/react-query.svg',
    width: 100,
    height: 100,
    title: 'react-query',
    description: '덕분에 리덕스 탈출 1',
  },
  {
    imageSrc: '/stacks/zustand.png',
    width: 100,
    height: 100,
    title: 'zustand',
    description:
      '덕분에 리덕스 탈출 2\n외에도 다양한 상태관리 라이브러리 학습가능',
  },
  {
    imageSrc: '/stacks/nextjs.svg',
    darkImageSrc: '/stacks/nextjs-dark.svg',
    width: 100,
    height: 100,
    title: 'nextjs',
    description: 'nextjs 블로그 읽는게 취미',
  },
  {
    imageSrc: '/stacks/tailwind-css.svg',
    width: 100,
    height: 100,
    title: 'tailwindCSS',
    description: '사용시 작업속도 2배 향상',
  },
  {
    imageSrc: '/stacks/shadcn-ui.png',
    width: 100,
    height: 100,
    title: 'shadcn/ui',
    description: '사용시 작업속도 2배 향상(2)',
  },
  {
    imageSrc: '/stacks/socket-io.svg',
    width: 100,
    height: 100,
    title: 'socket.io',
  },
];
const backStacks: TechStack[] = [
  {
    imageSrc: '/stacks/express.svg',
    darkImageSrc: '/stacks/express-dark.svg',
    width: 100,
    height: 100,
    title: 'expressjs',
  },
  {
    imageSrc: '/stacks/nestjs.svg',
    width: 100,
    height: 100,
    title: 'nestjs',
    description: 'express보다 선호',
  },
  { imageSrc: '/stacks/mysql.png', width: 100, height: 100, title: 'mysql' },
  {
    imageSrc: '/stacks/postgre.png',
    width: 100,
    height: 100,
    title: 'postgresql',
  },
  {
    imageSrc: '/stacks/mongodb.png',
    width: 100,
    height: 100,
    title: 'mongodb',
  },
  {
    imageSrc: '/stacks/nginx.png',
    width: 100,
    height: 100,
    title: 'nginx',
    description: '정적 페이지, 프록시 서버 구축',
  },
  {
    imageSrc: '/stacks/firebase.png',
    width: 100,
    height: 100,
    title: 'firebase',
    description: '백엔드 짜기 귀찮을때 1',
  },
  {
    imageSrc: '/stacks/supabase.png',
    width: 100,
    height: 100,
    title: 'supabase',
    description: '백엔드 짜기 귀찮을때 2',
  },
];
const otherStacks: TechStack[] = [
  {
    imageSrc: '/stacks/aws.png',
    width: 100,
    height: 100,
    title: 'aws',
    description:
      'EC2, S3, ElastiCache, RDS, CloudFront, Lambda 활용 가능\n상황에 맞춰 조사하고 활용하는편',
  },
  {
    imageSrc: '/stacks/docker.png',
    width: 100,
    height: 100,
    title: 'docker',
    description: 'docker, docker-compose 까진 가능',
  },
  {
    imageSrc: '/stacks/vercel.svg',
    darkImageSrc: '/stacks/vercel-dark.svg',
    width: 100,
    height: 100,
    title: 'vercel',
    description: '배포 딸깍...',
  },
  {
    imageSrc: '/문어_2.png',
    width: 100,
    height: 100,
    title: '하찮은 그림실력',
    description: '개발에 필요하다면 다방면으로 학습/활용',
  },
];

export const TechStackSection = () => {
  return (
    <section className="h-auto w-full flex justify-center overflow-hidden">
      <div className="w-full max-w-screen-xl space-y-4">
        <div className="space-y-12">
          <div className="flex justify-center items-center flex-wrap gap-6">
            {frontStacks.map((stack, idx) => {
              return (
                <TechStackDataProvider
                  key={idx}
                  srcDark={stack.darkImageSrc}
                  src={stack.imageSrc}
                  width={stack.width}
                  height={stack.height}
                  index={idx}
                  title={stack.title}
                  description={stack.description}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center flex-wrap gap-6">
            {backStacks.map((stack, idx) => {
              return (
                <TechStackDataProvider
                  key={idx}
                  src={stack.imageSrc}
                  srcDark={stack.darkImageSrc}
                  width={stack.width}
                  height={stack.height}
                  index={idx}
                  title={stack.title}
                  description={stack.description}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center flex-wrap gap-6">
            {otherStacks.map((stack, idx) => {
              return (
                <TechStackDataProvider
                  key={idx}
                  src={stack.imageSrc}
                  srcDark={stack.darkImageSrc}
                  width={stack.width}
                  height={stack.height}
                  index={idx}
                  title={stack.title}
                  description={stack.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
