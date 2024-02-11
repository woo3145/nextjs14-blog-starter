import { ReactNode } from 'react';

interface DocPageProps {
  children: ReactNode;
}

export default async function DocPage({ children }: DocPageProps) {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 ">
      <div className="">{children}</div>
    </main>
  );
}
