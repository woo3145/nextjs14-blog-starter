'use client';
import { SkillDataProvider } from './skill-data-provider';
import SkillText from './skill-text';

interface Skill {
  imageSrc: string;
  darkImageSrc?: string;
  width: number;
  height: number;
}

const frontSkills: Skill[] = [
  { imageSrc: '/skills/node-js.png', width: 100, height: 100 },
  { imageSrc: '/skills/js.png', width: 100, height: 100 },
  { imageSrc: '/skills/ts.png', width: 100, height: 100 },
  { imageSrc: '/skills/react-icon.png', width: 100, height: 100 },
  { imageSrc: '/skills/react-query.svg', width: 100, height: 100 },
  {
    imageSrc: '/skills/nextjs.svg',
    darkImageSrc: '/skills/nextjs-dark.svg',
    width: 100,
    height: 100,
  },
  { imageSrc: '/skills/tailwind-css.svg', width: 100, height: 100 },
  { imageSrc: '/skills/shadcn-ui.png', width: 100, height: 100 },
  { imageSrc: '/skills/socket-io.svg', width: 100, height: 100 },
];
const backSkills: Skill[] = [
  {
    imageSrc: '/skills/express.svg',
    darkImageSrc: '/skills/express-dark.svg',
    width: 100,
    height: 100,
  },
  { imageSrc: '/skills/nestjs.svg', width: 100, height: 100 },
  { imageSrc: '/skills/mysql.png', width: 100, height: 100 },
  { imageSrc: '/skills/postgre.png', width: 100, height: 100 },
  { imageSrc: '/skills/mongodb.png', width: 100, height: 100 },
  { imageSrc: '/skills/nginx.png', width: 100, height: 100 },
  { imageSrc: '/skills/firebase.png', width: 100, height: 100 },
];
const otherSkills: Skill[] = [
  { imageSrc: '/skills/aws.png', width: 100, height: 100 },
  { imageSrc: '/skills/docker.png', width: 100, height: 100 },
  {
    imageSrc: '/skills/vercel.svg',
    darkImageSrc: '/skills/vercel-dark.svg',
    width: 100,
    height: 100,
  },
  { imageSrc: '/문어_2.png', width: 100, height: 100 },
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
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
