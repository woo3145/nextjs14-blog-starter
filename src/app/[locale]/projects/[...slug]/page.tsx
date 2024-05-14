import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

import { cn } from '@/lib/utils';
import { TracingBeam } from '@/components/ui/tracking-beam';
import { BlogMdx } from '@/components/mdx/blog-mdx-components';
import { buttonVariants } from '@/components/ui/button';
import { projects as allProjects } from '#site/content';
import { TableOfContents } from '@/app/[locale]/blog/[...slug]/_components/toc';
import { ProjectHeader } from './_components/project-header';
import { getProjectBySlug } from '@/lib/project-utils';

interface ProjectPageProps {
  params: {
    slug: string[];
    locale: string;
  };
}

async function getProjectFromParams(params: ProjectPageProps['params']) {
  const slug = params?.slug?.join('/');
  const project = getProjectBySlug(params.locale, slug);
  return project || null;
}

export async function generateStaticParams(): Promise<
  {
    slug: string[];
  }[]
> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams(params);
  if (!project) return notFound();

  return (
    <article className="relative w-full max-w-7xl py-6 xl:flex xl:gap-10 xl:py-10">
      <div className="w-full xl:w-[calc(100%-340px)]">
        <TracingBeam className="">
          <Link
            href={`/${params.locale}/projects`}
            className={cn(buttonVariants({ variant: 'ghost' }))}
          >
            <ChevronLeft className="mr-2 size-4" />
            See all projects
          </Link>
          <ProjectHeader project={project} />
          <BlogMdx code={project.body} />
        </TracingBeam>
      </div>

      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 min-w-[300px] shrink-0 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <TableOfContents toc={project.toc} />
        </div>
      </div>
    </article>
  );
}
