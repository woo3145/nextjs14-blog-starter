import { Bread } from '../_components/bread';
import { getDoc } from '@/lib/get-docs';
import { MdxBody } from '@/components/mdx/mdx-body';
import { notFound } from 'next/navigation';
import '@/app/styles/mdx.css';

export default async function IntroducePage() {
  const doc = await getDoc('introduce');
  if (!doc) return notFound();
  return (
    <div className="w-full flex flex-col md:px-6">
      <Bread items={['Docs', 'Introduce']} />

      <div className="">
        <div className="w-full">
          <MdxBody>{doc.body}</MdxBody>
        </div>
      </div>
    </div>
  );
}
