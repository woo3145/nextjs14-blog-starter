import { Bread } from '../_components/bread';
import { getDoc, getDocs } from '@/lib/get-docs';
import { MdxBody } from '@/components/mdx/mdx-body';
import { notFound } from 'next/navigation';
import { cn } from '@/lib/utils';
import { TracingBeam } from '@/components/ui/tracking-beam';
import '@/app/styles/mdx.css';
import { MdxContent } from '@/components/mdx/mdx-content';

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join('/') || '';
  const doc = await getDoc(slug);
  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateStaticParams(): Promise<
  DocPageProps['params'][]
> {
  const docs = await getDocs();
  return docs.map((doc) => ({
    slug: doc.frontmatter.slug.split('/'),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });
  if (!doc) return notFound();

  const { serialized, frontmatter } = doc;
  return (
    <div className="w-full flex flex-col md:px-6">
      <Bread items={['Docs', 'Introduce']} />

      <TracingBeam className="">
        <div className="w-full">
          <div className="space-y-2">
            <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
              {frontmatter.title}
            </h1>
            {frontmatter.description && (
              <p className="text-lg text-muted-foreground">
                {frontmatter.description}
              </p>
            )}
          </div>
          <MdxContent source={serialized} />
        </div>
      </TracingBeam>
    </div>
  );
}
