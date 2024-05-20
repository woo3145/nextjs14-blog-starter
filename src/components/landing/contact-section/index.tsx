import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';
import { IconMail } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface ContactSection {
  className?: string;
}

export const ContactSection = ({ className }: ContactSection) => {
  const t = useTranslations('Contact');
  const hero = useTranslations('Hero');
  return (
    <section
      className={cn(
        'flex flex-col items-center justify-center gap-4',
        className
      )}
    >
      <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center">
        {t('title')}
      </h2>
      <Reveal
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      >
        <p className="leading-7 lg:text-lg py-8 text-center">
          {t('description')}
        </p>
      </Reveal>
      <div className="flex gap-4">
        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.1 },
          }}
        >
          <Link href={`mailto:${hero('email')}`} target="_blank">
            <button className="px-4 py-2 bg-foreground text-background flex items-center justify-center gap-2 rounded-md border">
              <IconMail /> {t('button')}
            </button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
