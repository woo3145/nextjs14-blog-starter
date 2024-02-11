import { Bread } from '@/app/docs/_components/bread';

export default async function ConventionTypescriptPage() {
  return (
    <div>
      <Bread items={['Docs', 'Convention', 'Typescript']} />
      <div className="font-medium text-foreground">Typescript</div>
    </div>
  );
}
