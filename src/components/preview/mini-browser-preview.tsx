'use client';
import { MiniBrowser } from '../ui/mini-browser';
import { ComponentPreviewContainer } from './component-preview-container';

export const MiniBrowserPreview = () => {
  return (
    <ComponentPreviewContainer>
      <div className="h-[20rem] w-full bg-white dark:bg-black dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex flex-col items-center justify-center">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-500 pt-8">
          Mini Browser
        </p>
        <MiniBrowser />
      </div>
    </ComponentPreviewContainer>
  );
};
