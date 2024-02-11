import { ChevronRightIcon } from 'lucide-react';

interface DocPageProps {
  params: {
    slug: string[];
  };
}

export default async function DocPage({ params }: DocPageProps) {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 ">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Docs
          </div>
          <ChevronRightIcon className="h-4 w-4" />
          <div className="font-medium text-foreground">{params.slug}</div>
        </div>
      </div>
    </main>
  );
}
