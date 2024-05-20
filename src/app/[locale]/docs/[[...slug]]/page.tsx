import { notFound } from 'next/navigation';

import { cn } from '@/lib/utils';
import { TracingBeam } from '@/components/ui/tracking-beam';
import { DocsMdx } from '@/components/mdx/docs-mdx-components';
import { Bread } from '@/components/docs/bread';
import { getDocBySlug } from '@/lib/velite/doc-utils';
import { docs as allDocs } from '#site/content';

interface DocPageProps {
  params: {
    slug: string[];
    locale: string;
  };
}

async function getDocFromParams(params: DocPageProps['params']) {
  const slug = params.slug?.join('/') || '';
  const doc = getDocBySlug(params.locale, slug);
  return doc || null;
}

export async function generateStaticParams(): Promise<
  {
    slug: string[];
  }[]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split('/'),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params);
  if (!doc) return notFound();

  return (
    <div className="w-full flex flex-col md:px-6">
      <Bread items={['Docs', 'Introduce']} />

      <TracingBeam className="">
        <div className="w-full">
          <div className="space-y-4 mb-8">
            <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
              {doc.title}
            </h1>
            {doc.description && (
              <p className="text-lg text-muted-foreground">{doc.description}</p>
            )}
          </div>
          <DocsMdx code={doc.body} />
        </div>
      </TracingBeam>
    </div>
  );
}
