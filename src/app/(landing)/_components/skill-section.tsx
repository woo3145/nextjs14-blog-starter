'use client';
import { SkillDataProvider } from './skill-data-provider';
import SkillText from './skill-text';

const frontSkills = [
  { imageSrc: '/문어_1.png', width: 100, height: 100 },
  { imageSrc: '/문어_2.png', width: 100, height: 100 },
  { imageSrc: '/문어_1.png', width: 100, height: 100 },
  { imageSrc: '/문어_2.png', width: 100, height: 100 },
  { imageSrc: '/문어_1.png', width: 100, height: 100 },
  { imageSrc: '/문어_1.png', width: 100, height: 100 },
  { imageSrc: '/문어_2.png', width: 100, height: 100 },
  { imageSrc: '/문어_1.png', width: 100, height: 100 },
];
const backSkills = [
  { imageSrc: '/문어_1.png', width: 100, height: 100 },
  { imageSrc: '/문어_2.png', width: 100, height: 100 },
  { imageSrc: '/문어_2.png', width: 100, height: 100 },
  { imageSrc: '/문어_2.png', width: 100, height: 100 },
  { imageSrc: '/문어_2.png', width: 100, height: 100 },
];
const otherSkills = [
  { imageSrc: '/문어_1.png', width: 100, height: 100 },
  { imageSrc: '/문어_2.png', width: 100, height: 100 },
  { imageSrc: '/문어_2.png', width: 100, height: 100 },
  { imageSrc: '/문어_2.png', width: 100, height: 100 },
];

export const SkillSection = () => {
  return (
    <section className="h-auto w-full flex justify-center">
      <div className="w-full max-w-screen-xl">
        <SkillText />
        <div className="flex justify-center items-center flex-wrap gap-5">
          {frontSkills.map((skill, idx) => {
            return (
              <SkillDataProvider
                key={idx}
                src={skill.imageSrc}
                width={skill.width}
                height={skill.height}
                index={idx}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center flex-wrap gap-5">
          {backSkills.map((skill, idx) => {
            return (
              <SkillDataProvider
                key={idx}
                src={skill.imageSrc}
                width={skill.width}
                height={skill.height}
                index={idx}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center flex-wrap gap-5">
          {otherSkills.map((skill, idx) => {
            return (
              <SkillDataProvider
                key={idx}
                src={skill.imageSrc}
                width={skill.width}
                height={skill.height}
                index={idx}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
