'use client';
import { TransformedNode } from '@/lib/custom-remark';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

function useHighlighted(
  id: string
): [boolean, Dispatch<SetStateAction<string>>] {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '0% 0% -35% 0px',
    });
    const elements = document.querySelectorAll('h2, h3, h4');
    elements.forEach((elem) => {
      if (observer.current) {
        observer.current.observe(elem);
      }
    });
    return () => observer.current?.disconnect();
  }, []);

  return [activeId === id, setActiveId];
}

export const TOCLink = ({ node }: { node: TransformedNode }) => {
  const fontSizes: { [key: string]: string } = {
    '2': 'base',
    '3': 'sm',
    '4': 'xs',
  };
  const id = node.data.hProperties.id;
  const [highlighted, setHighlighted] = useHighlighted(id);

  return (
    <a
      href={`#${id}`}
      className={`block text-${
        fontSizes[node.depth.toString()]
      } hover:text-primary py-1 ${highlighted && 'text-primary'}`}
      onClick={(e) => {
        e.preventDefault();
        setHighlighted(id);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
    >
      {node.value}
    </a>
  );
};
