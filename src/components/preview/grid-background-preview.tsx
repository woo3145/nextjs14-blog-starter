import ComponentPreviewContainer from './component-preview-container';

const GridBackgroundPreview = () => {
  return (
    <ComponentPreviewContainer>
      <div className="h-[40rem] w-full bg-white dark:bg-black dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
        {/* css masking */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Background
        </p>
      </div>
    </ComponentPreviewContainer>
  );
};

export default GridBackgroundPreview;
