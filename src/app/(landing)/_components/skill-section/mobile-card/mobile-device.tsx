'use client';
import * as React from 'react';

interface MobileDeviceProps {
  children: React.ReactNode;
}

export const MobileDevice = ({ children }: MobileDeviceProps) => {
  return (
    <div
      className="flex flex-col aspect-[9/16] h-auto border-[3px] border-black rounded-md bg-background relative
    group cursor-pointer"
    >
      {/* Top Nav */}
      <div className="flex items-start justify-center w-full h-2">
        <div className="w-12 h-[6px] rounded-full bg-black rounded-t-lg" />
      </div>

      {children}

      {/* Bottom Nav */}
      <div className="flex items-start justify-center w-full h-1">
        <div className="w-8 h-1 rounded-full bg-black border" />
      </div>
    </div>
  );
};
