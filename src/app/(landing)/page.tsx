import { HeroSection } from './_components/hero-section';
import { ProjectSection } from './_components/project-section/project-section';
import { SkillSection } from './_components/skill-section/skill-section';
import { TechStackSection } from './_components/tech-stack-section/tech-stack-section';
import { TranslationProvider } from './translation-provider';

export default async function Landing() {
  return (
    <TranslationProvider>
      <div className="flex flex-col gap-10">
        <HeroSection />
        <div className="py-20">
          <SkillSection />
          <TechStackSection className="py-20" />
          <ProjectSection className="pb-40" />
        </div>
      </div>
    </TranslationProvider>
  );
}
