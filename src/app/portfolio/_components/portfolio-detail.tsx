import * as React from 'react';

interface PortfolioDetailProps {
  content: {
    title: string;
    description: string;
  }[];
  direction?: 'left' | 'right';
  imageContent: React.ReactNode;
}

export const PortfolioDetail = ({
  content,
  direction = 'right',
  imageContent,
}: PortfolioDetailProps) => {
  return (
    <div className="flex justify-center flex-col lg:flex-row relative gap-8 rounded-md px-4 lg:p-10">
      <div className="lg:hidden block h-auto w-full mx-auto max-w-md">
        {imageContent}
      </div>
      {direction === 'left' ? (
        <div className="hidden lg:block h-auto w-full max-w-md">
          {imageContent}
        </div>
      ) : null}
      <div className="div relative flex items-start px-2">
        <div className="max-w-2xl space-y-10">
          {content.map((item, index) => (
            <div key={item.title + index} className="">
              <h2 className="text-2xl font-bold font-sans text-neutral-700 dark:text-neutral-300">
                {item.title}
              </h2>
              <p className="text-md font-sans font-normal text-neutral-600 dark:text-neutral-300 w-full lg:max-w-md mt-6">
                {item.description}
              </p>
            </div>
          ))}
          <div className="h-20" />
        </div>
      </div>
      {direction === 'right' ? (
        <div className="hidden lg:block h-auto w-full max-w-md">
          {imageContent}
        </div>
      ) : null}
    </div>
  );
};
