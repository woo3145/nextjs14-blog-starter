import { ClassAttributes, HTMLAttributes } from 'react';
import '@/app/styles/mdx.css';

export const CodeBlock = ({
  className,
  ...props
}: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>) => {
  return <code className={className} {...props} />;
};
