import { MainSection } from './components/main-section/main-section';
import { SkillSection } from './components/skill-section/skill-section';
import { TechStackSection } from './components/tech-stack-section/tech-stack-section';

export default async function Landing() {
  return (
    <div className="flex flex-col gap-10 px-4">
      <MainSection />
      <SkillSection />
      <TechStackSection className="py-20" />
    </div>
  );
}
