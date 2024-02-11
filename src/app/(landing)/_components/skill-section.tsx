'use client';
import { SkillDataProvider } from './skill-data-provider';
import SkillText from './skill-text';

interface Skill {
  imageSrc: string;
  darkImageSrc?: string;
  width: number;
  height: number;
  title: string;
  description?: string;
}

const frontSkills: Skill[] = [
  { imageSrc: '/skills/node-js.png', width: 100, height: 100, title: 'nodejs' },
  { imageSrc: '/skills/js.png', width: 100, height: 100, title: 'javascript' },
  {
    imageSrc: '/skills/ts.png',
    width: 100,
    height: 100,
    title: 'typescript',
    description: 'js로 못돌아가겠어..',
  },
  {
    imageSrc: '/skills/react-icon.png',
    width: 100,
    height: 100,
    title: 'react',
    description: '만들어 주신분.. 감사합니다',
  },
  {
    imageSrc: '/skills/react-query.svg',
    width: 100,
    height: 100,
    title: 'react-query',
    description: '덕분에 리덕스 탈출 1',
  },
  {
    imageSrc: '/skills/zustand.png',
    width: 100,
    height: 100,
    title: 'zustand',
    description:
      '덕분에 리덕스 탈출 2\n외에도 다양한 상태관리 라이브러리 학습가능',
  },
  {
    imageSrc: '/skills/nextjs.svg',
    darkImageSrc: '/skills/nextjs-dark.svg',
    width: 100,
    height: 100,
    title: 'nextjs',
    description: 'nextjs 블로그 읽는게 취미',
  },
  {
    imageSrc: '/skills/tailwind-css.svg',
    width: 100,
    height: 100,
    title: 'tailwindCSS',
    description: '사용시 작업속도 2배 향상',
  },
  {
    imageSrc: '/skills/shadcn-ui.png',
    width: 100,
    height: 100,
    title: 'shadcn/ui',
    description: '사용시 작업속도 2배 향상(2)',
  },
  {
    imageSrc: '/skills/socket-io.svg',
    width: 100,
    height: 100,
    title: 'socket.io',
  },
];
const backSkills: Skill[] = [
  {
    imageSrc: '/skills/express.svg',
    darkImageSrc: '/skills/express-dark.svg',
    width: 100,
    height: 100,
    title: 'expressjs',
  },
  {
    imageSrc: '/skills/nestjs.svg',
    width: 100,
    height: 100,
    title: 'nestjs',
    description: 'express보다 선호',
  },
  { imageSrc: '/skills/mysql.png', width: 100, height: 100, title: 'mysql' },
  {
    imageSrc: '/skills/postgre.png',
    width: 100,
    height: 100,
    title: 'postgresql',
  },
  {
    imageSrc: '/skills/mongodb.png',
    width: 100,
    height: 100,
    title: 'mongodb',
  },
  {
    imageSrc: '/skills/nginx.png',
    width: 100,
    height: 100,
    title: 'nginx',
    description: '정적 페이지, 프록시 서버 구축',
  },
  {
    imageSrc: '/skills/firebase.png',
    width: 100,
    height: 100,
    title: 'firebase',
    description: '백엔드 짜기 귀찮을때 1',
  },
  {
    imageSrc: '/skills/supabase.png',
    width: 100,
    height: 100,
    title: 'supabase',
    description: '백엔드 짜기 귀찮을때 2',
  },
];
const otherSkills: Skill[] = [
  {
    imageSrc: '/skills/aws.png',
    width: 100,
    height: 100,
    title: 'aws',
    description:
      'EC2, S3, ElastiCache, RDS, CloudFront, Lambda 활용 가능\n상황에 맞춰 조사하고 활용하는편',
  },
  {
    imageSrc: '/skills/docker.png',
    width: 100,
    height: 100,
    title: 'docker',
    description: 'docker, docker-compose 까진 가능',
  },
  {
    imageSrc: '/skills/vercel.svg',
    darkImageSrc: '/skills/vercel-dark.svg',
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

export const SkillSection = () => {
  return (
    <section className="h-auto w-full flex justify-center">
      <div className="w-full max-w-screen-xl space-y-4">
        <SkillText />
        <div className="space-y-12">
          <div className="flex justify-center items-center flex-wrap gap-6">
            {frontSkills.map((skill, idx) => {
              return (
                <SkillDataProvider
                  key={idx}
                  srcDark={skill.darkImageSrc}
                  src={skill.imageSrc}
                  width={skill.width}
                  height={skill.height}
                  index={idx}
                  title={skill.title}
                  description={skill.description}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center flex-wrap gap-6">
            {backSkills.map((skill, idx) => {
              return (
                <SkillDataProvider
                  key={idx}
                  src={skill.imageSrc}
                  srcDark={skill.darkImageSrc}
                  width={skill.width}
                  height={skill.height}
                  index={idx}
                  title={skill.title}
                  description={skill.description}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center flex-wrap gap-6">
            {otherSkills.map((skill, idx) => {
              return (
                <SkillDataProvider
                  key={idx}
                  src={skill.imageSrc}
                  srcDark={skill.darkImageSrc}
                  width={skill.width}
                  height={skill.height}
                  index={idx}
                  title={skill.title}
                  description={skill.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
