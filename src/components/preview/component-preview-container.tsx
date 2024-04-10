'use client';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const ComponentPreviewContainer = ({ children }: Props) => {
  return (
    <div className="flex min-h-[450px] w-full justify-center p-8 sm:p-8 border items-center relative bg-muted">
      {children}
    </div>
  );
};
