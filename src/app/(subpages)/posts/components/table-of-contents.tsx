'use client';

import { TransformedNode } from '@/lib/custom-remark';

export const TableOfContents = ({ nodes }: { nodes: TransformedNode[] }) => {
  if (!nodes?.length) {
    return null;
  }

  return (
    <div className={'toc sticky top-40'}>
      <h3 className={'secondary-text'}>Table of contents</h3>
      {renderNodes(nodes)}
    </div>
  );
};

function renderNodes(nodes: TransformedNode[]) {
  return (
    <ul>
      {nodes.map((node) => (
        <li key={node.data.hProperties.id}>
          <TOCLink node={node} />
          {node.children?.length > 0 && renderNodes(node.children)}
        </li>
      ))}
    </ul>
  );
}

const TOCLink = ({ node }: { node: TransformedNode }) => {
  const fontSizes: { [key: string]: string } = {
    '2': 'base',
    '3': 'sm',
    '4': 'xs',
  };
  const id = node.data.hProperties.id;

  return (
    <a
      href={`#${id}`}
      className={`block text-${
        fontSizes[node.depth.toString()]
      } hover:accent-color py-1`}
      onClick={(e) => {
        e.preventDefault();
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
