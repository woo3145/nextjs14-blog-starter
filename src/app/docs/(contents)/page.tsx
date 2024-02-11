import { ChevronRightIcon } from 'lucide-react';
import { Bread } from '../_components/bread';

export default async function IntroducePage() {
  return (
    <div>
      <Bread items={['Docs', 'Introduce']} />
      <div className="font-medium text-foreground">Introduce</div>
    </div>
  );
}
