import { MainSection } from '../_components/main-section';
import { SkillSection } from '../_components/skill-section';

export default async function Landing() {
  return (
    <div className="flex flex-col gap-10">
      <MainSection />
      <SkillSection />
    </div>
  );
}
