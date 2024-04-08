import React, { ClassAttributes, HTMLAttributes, ReactElement } from 'react';
import { MdxCopyButton } from './mdx-copy-button';
import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconCode,
  IconTerminal,
} from '@tabler/icons-react';

const icons: { [key: string]: React.ReactElement } = {
  ts: <IconBrandTypescript />,
  tsx: <IconBrandTypescript />,
  typescript: <IconBrandTypescript />,
  js: <IconBrandJavascript />,
  jsx: <IconBrandTypescript />,
  javascript: <IconBrandTypescript />,
  bash: <IconTerminal />,
  default: <IconCode />,
};

export const Pre = (
  props: ClassAttributes<HTMLPreElement> &
    HTMLAttributes<HTMLPreElement> & { raw?: string }
) => {
  const classNames = (
    props?.children as ReactElement
  )?.props?.className?.replace('language-', '');
  const language = classNames?.split(' ')[0];
  if (!language) return <pre {...props} />;

  return (
    <pre data-code="" className="flex flex-col rounded-lg bg-[#1e1e1e] mt-4">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-lg">
            {icons[language] ? icons[language] : icons.default}
          </span>
          <span className="text-xs">{language}</span>
        </div>
        {props.raw ? <MdxCopyButton text={props.raw} /> : null}
      </div>
      {props.children}
    </pre>
  );
};
