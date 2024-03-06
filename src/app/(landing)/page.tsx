import { MainSection } from './_components/main-section/main-section';
import { ProjectSection } from './_components/project-section/project-section';
import { SkillSection } from './_components/skill-section/skill-section';
import { TechStackSection } from './_components/tech-stack-section/tech-stack-section';

export default async function Landing() {
  return (
    <div className="flex flex-col gap-10">
      <MainSection />
      <SkillSection />
      <TechStackSection className="py-20" />
      <ProjectSection />
    </div>
  );
}
