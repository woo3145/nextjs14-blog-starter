import Link from 'next/link';
import { Home } from 'lucide-react';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Home />
      </Link>
    </header>
  );
}
