'use client';

import { TransformedNode } from '@/lib/custom-remark';
import { TOCLink } from './toc-link';

export const TableOfContents = ({ nodes }: { nodes: TransformedNode[] }) => {
  if (!nodes?.length) {
    return null;
  }

  return (
    <div className={'toc sticky top-40 prose-a:no-underline'}>
      <h3 className={'text-balance'}>Table of contents</h3>
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
