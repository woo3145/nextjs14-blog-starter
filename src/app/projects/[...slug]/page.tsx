import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { TracingBeam } from '@/components/ui/tracking-beam';
import { BlogMdx } from '@/components/mdx/blog-mdx-components';
import { buttonVariants } from '@/components/ui/button';
import { projects as allProjects } from '#site/content';
import { ProjectTag } from '@/app/(landing)/_components/project-section/project-tag';
import { TableOfContents } from '@/app/blog/[...slug]/_components/toc';

interface ProjectPageProps {
  params: {
    slug: string[];
  };
}

async function getProjectFromParams(params: ProjectPageProps['params']) {
  const slug = params?.slug?.join('/');
  const project = allProjects.find((project) => project.slugAsParams === slug);

  if (!project) {
    null;
  }

  return project;
}

export async function generateStaticParams(): Promise<
  ProjectPageProps['params'][]
> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams(params);

  if (!project) {
    notFound();
  }

  if (!project) return notFound();

  return (
    <article className="relative w-full max-w-7xl py-6 xl:flex xl:gap-10 xl:py-10">
      <div className="w-full xl:w-[calc(100%-340px)]">
        <TracingBeam className="">
          <Link
            href="/projects"
            className={cn(buttonVariants({ variant: 'ghost' }))}
          >
            <ChevronLeft className="mr-2 size-4" />
            See all projects
          </Link>
          <header className={cn('flex flex-col gap-4 pb-12')}>
            <h2 className="font-heading mt-2 scroll-m-20 text-3xl font-bold leading-tight">
              {project.title}
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-foreground/60 font-semibold">
                {project.period}
              </span>
              <Separator orientation="vertical" />
              <div className="list-none flex items-center gap-4 ml-0">
                {project.tags.map((tag) => {
                  return (
                    <ProjectTag
                      key={tag.text}
                      text={tag.text}
                      color={tag.color}
                    />
                  );
                })}
              </div>
            </div>
          </header>
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
