'use client';
import { SnakeBeam } from '../landing/hero-section/snake-beam';
import { ComponentPreviewContainer } from './component-preview-container';

export const SnakeBeamPreview = () => {
  return (
    <ComponentPreviewContainer>
      <div className="h-[20rem] w-full bg-white dark:bg-black dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex flex-col items-center justify-center">
        <SnakeBeam />
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
          Snake
        </p>
      </div>
    </ComponentPreviewContainer>
  );
};
