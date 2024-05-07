'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export const Radar = ({ className }: any) => {
  const { theme } = useTheme();
  const circles = new Array(8).fill(1);

  return (
    <div
      className={twMerge(
        'relative flex h-20 w-20 items-center justify-center rounded-full  ',
        className
      )}
    >
      <div
        style={{
          transformOrigin: 'right center',
        }}
        className="absolute right-1/2 top-1/2  z-40 flex h-[5px]
        overflow-hidden animate-radar-spin w-[400px] items-end justify-center bg-transparent"
      >
        {/* 레이더 선 */}
        <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      </div>
      {/* 레이더 원 */}
      {circles.map((circle, idx) => {
        const borderOpacity = 1 - (idx + 1) * 0.1;

        // 다크 모드에 따라 다른 색상 적용
        const borderColor =
          theme === 'dark'
            ? `rgba(71, 85, 105, ${borderOpacity})`
            : `rgba(148, 163, 184, ${borderOpacity})`;
        return (
          <Circle
            style={{
              height: `${(idx + 1) * 5}rem`,
              width: `${(idx + 1) * 5}rem`,
              border: `1px solid ${borderColor}`,
            }}
            key={`motion-${idx}`}
            className={''}
            idx={idx}
          />
        );
      })}
    </div>
  );
};

export const Circle = ({ className, children, idx, ...rest }: any) => {
  return (
    <motion.div
      {...rest}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: idx * 0.1,
        duration: 0.2,
      }}
      className={twMerge(
        'absolute inset-0 left-1/2 top-1/2 h-10 w-10  -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-border',
        className
      )}
    ></motion.div>
  );
};
