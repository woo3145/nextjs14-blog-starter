import { Bread } from '@/app/docs/_components/bread';

export default async function ConventionJavascriptPage() {
  return (
    <div>
      <Bread items={['Docs', 'Convention', 'Javascript']} />
      <div className="font-medium text-foreground">Javascript</div>
    </div>
  );
}
