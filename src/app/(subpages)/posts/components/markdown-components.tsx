import { Code } from 'bright';
import { MDXComponents } from 'mdx/types';
import { MDXImage } from './mdx-image';

// 마크다운 파일에 사용할 커스텀 구성요소
export const mdxComponents: MDXComponents = {
  img: MDXImage as any,
  pre: ({
    children,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLPreElement
  >) => {
    return (
      <Code {...props} theme="material-default">
        {children as any}
      </Code>
    );
  },
};
