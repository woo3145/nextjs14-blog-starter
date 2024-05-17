import { HeroSection } from './_components/hero-section';
import { ProjectSection } from './_components/project-section/project-section';
import { SkillSection } from './_components/skill-section/skill-section';
import { TechStackSection } from './_components/tech-stack-section/tech-stack-section';

interface LandingPageProps {
  params: {
    locale: string;
  };
}

export default async function LandingPage({ params }: LandingPageProps) {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <HeroSection className="" />
      <div className="py-20 px-4">
        <SkillSection />
        <TechStackSection className="py-24" />
        <ProjectSection className="pb-40" locale={params.locale} />
      </div>
    </div>
  );
}
