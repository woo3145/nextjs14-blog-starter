'use client';
import { useState } from 'react';
import { ClipboardCheck, ClipboardIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MdxCopyButtonProps {
  text: string;
  className?: string;
}

export const MdxCopyButton = ({ text, className }: MdxCopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  const Icon = isCopied ? ClipboardCheck : ClipboardIcon;

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className={cn(
        'flex items-center text-xs font-medium text-white rounded',
        className
      )}
    >
      <Icon
        className={cn(
          `mr-1 h-4 w-4`,
          isCopied ? 'text-green-500' : 'text-white'
        )}
      />
      <span
        className={cn('text-xs', isCopied ? 'text-green-500' : 'text-white')}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </span>
    </button>
  );
};
