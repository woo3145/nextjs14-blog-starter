'use client';

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { components } from './docs-mdx-components';

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={components} />;
}
