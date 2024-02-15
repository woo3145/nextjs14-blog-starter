'use client';
import * as React from 'react';

export const ImageCaption = ({
  text,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { text: string }) => {
  return (
    <p
      className="text-sm mx-auto text-foreground/60 text-center pt-2"
      {...props}
    >
      {text}
    </p>
  );
};
