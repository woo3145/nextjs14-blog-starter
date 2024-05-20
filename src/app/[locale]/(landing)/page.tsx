import { ContactSection } from '@/components/landing/contact-section';
import { HeroSection } from '@/components/landing/hero-section';
import { ProjectSection } from '@/components/landing/project-section';
import { SkillSection } from '@/components/landing/skill-section';
import { TechStackSection } from '@/components/landing/tech-stack-section';

interface LandingPageProps {
  params: {
    locale: string;
  };
}

export default async function LandingPage({ params }: LandingPageProps) {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <HeroSection className="" />
      <div className="px-4">
        <SkillSection />
        <TechStackSection className="py-24" />
        <ProjectSection locale={params.locale} />
        <ContactSection className="py-28" />
      </div>
    </div>
  );
}
