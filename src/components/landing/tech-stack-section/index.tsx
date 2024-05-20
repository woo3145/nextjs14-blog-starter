import { Reveal } from '@/components/reveal';
import { TechStackText } from './teck-stack-text';
import {
  backStacks,
  dbStacks,
  frontStacks,
  languageStacks,
  otherStacks,
} from '../../../data/teck-stack-data';
import { TechStackItem } from './tech-stack-item';
import { cn } from '@/lib/utils';

interface TechStackSectionProps {
  className?: string;
}

export const TechStackSection = ({ className }: TechStackSectionProps) => {
  return (
    <section
      id="skills"
      className={cn(
        'flex flex-col items-center justify-center max-w-screen-xl mx-auto gap-4',
        className
      )}
    >
      <TechStackText />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-start pt-6 md:pt-12">
        {/* Languages */}
        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        >
          <div className="flex flex-col items-center justify-center gap-8">
            <h3 className="text-2xl font-semibold tracking-tight antialiased">
              Languages
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-6">
              {languageStacks.map((item) => {
                return <TechStackItem key={item.title} stack={item} />;
              })}
            </div>
          </div>
        </Reveal>
        {/* Frontend */}
        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.2 },
          }}
        >
          <div className="flex flex-col items-center justify-center gap-8">
            <h3 className="text-2xl font-semibold tracking-tight antialiased">
              Frontend
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-6">
              {frontStacks.map((item) => {
                return <TechStackItem key={item.title} stack={item} />;
              })}
            </div>
          </div>
        </Reveal>
        {/* Backend */}
        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.4 },
          }}
        >
          <div className="flex flex-col items-center justify-center gap-8">
            <h3 className="text-2xl font-semibold tracking-tight antialiased">
              Backend
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-6">
              {backStacks.map((item) => {
                return <TechStackItem key={item.title} stack={item} />;
              })}
            </div>
          </div>
        </Reveal>
        {/* Database */}
        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0 },
          }}
        >
          <div className="flex flex-col items-center justify-center gap-8">
            <h3 className="text-2xl font-semibold tracking-tight antialiased">
              Database
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-6">
              {dbStacks.map((item) => {
                return <TechStackItem key={item.title} stack={item} />;
              })}
            </div>
          </div>
        </Reveal>

        {/* Others */}
        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.2 },
          }}
        >
          <div className="flex flex-col items-center justify-center gap-8">
            <h3 className="text-2xl font-semibold tracking-tight antialiased">
              Others
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-6">
              {otherStacks.map((item) => {
                return <TechStackItem key={item.title} stack={item} />;
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
