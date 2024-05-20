'use client';
import { IconBrandGithub } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const Footer = () => {
  const hero = useTranslations('Hero');
  const metadata = useTranslations('Metadata');
  return (
    <footer className="mx-auto py-12 px-6 lg:px-0 flex justify-between items-center w-full max-w-screen-lg">
      <Link href={metadata('repoURL')} target="_blank">
        <p className="text-center text-md text-muted-foreground hover:text-foreground transition-all">
          © Designed & Built by Changwoo Lee · 2024
        </p>
      </Link>
      <div className="flex items-center gap-2">
        <Link
          href={hero('github')}
          target="_blank"
          className="border p-1.5 rounded-md hover:bg-accent"
        >
          <IconBrandGithub className="text-sm" />
        </Link>
      </div>
    </footer>
  );
};
