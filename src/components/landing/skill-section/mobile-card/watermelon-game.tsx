'use client';

import React, { useEffect, useRef, useState } from 'react';
import Matter, {
  Engine,
  Render,
  World,
  Bodies,
  Body,
  Composite,
  Query,
} from 'matter-js';
import { IconHandClick } from '@tabler/icons-react';

const MAX_BALLS = 15;
const ballSize = 24; // 공 크기
const ballImageSize = 432; // 이미지 크기 (픽셀)
const ballImages = [
  '/static/ball_1.png',
  '/static/ball_2.png',
  '/static/ball_3.png',
  '/static/ball_4.png',
];

export const WatermelonGame = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engine = useRef<Engine | null>(null);
  const render = useRef<Render | null>(null);
  const [balls, setBalls] = useState<Body[]>([]);

  const getRandomBallImage = () => {
    const idx = Math.floor(Math.random() * ballImages.length);
    return ballImages[idx];
  };

  const createInitialBalls = React.useCallback((count: number) => {
    const newBalls: Body[] = [];

    for (let i = 0; i < count; ++i) {
      const x = Math.random() * (75 - ballSize) + ballSize / 2;
      const y = ballSize / 2;

      const newBall = Bodies.circle(x, y, ballSize / 2, {
        restitution: 0.5,
        render: {
          sprite: {
            texture: getRandomBallImage(), // 이미지 경로 설정
            xScale: ballSize / ballImageSize, // 이미지 크기 조정
            yScale: ballSize / ballImageSize, // 이미지 크기 조정
          },
        },
      });

      newBalls.push(newBall);
    }
    World.add(engine.current!.world, newBalls);
    setBalls(newBalls);
  }, []);

  useEffect(() => {
    // 엔진과 렌더링 설정을 한 번만 생성
    if (!engine.current) {
      engine.current = Engine.create();
    }

    if (sceneRef.current && !render.current) {
      render.current = Render.create({
        element: sceneRef.current!,
        engine: engine.current,
        options: {
          width: 75,
          height: 132,
          wireframes: false,
          background: '#ffffff', // 배경을 흰색으로 설정
          pixelRatio: window.devicePixelRatio, // 정확한 이미지 렌더링을 위해 추가
        },
      });

      // 월드의 경계 설정
      const boundaries = [
        // Bodies.rectangle(37.5, 0, 75, 8, {
        //   isStatic: true,
        //   render: { visible: false },
        // }), // 상단
        Bodies.rectangle(37.5, 132, 75, 8, {
          isStatic: true,
          render: { visible: false },
        }), // 하단
        Bodies.rectangle(0, 66, 8, 132, {
          isStatic: true,
          render: { visible: false },
        }), // 좌측
        Bodies.rectangle(75, 66, 8, 132, {
          isStatic: true,
          render: { visible: false },
        }), // 우측
      ];

      World.add(engine.current!.world, boundaries);

      Matter.Runner.run(engine.current);
      Render.run(render.current);

      // 처음에 공 4개 생성
      createInitialBalls(4);
    }

    return () => {
      if (render.current) {
        Render.stop(render.current);
      }
      if (engine.current) {
        Engine.clear(engine.current);
        Composite.clear(engine.current.world, false);
      }
    };
  }, [createInitialBalls]);

  const resetBalls = () => {
    if (!engine.current) return;
    World.clear(engine.current.world, false);
    setBalls([]);

    const boundaries = [
      Bodies.rectangle(37.5, 132, 75, 8, {
        isStatic: true,
        render: { visible: false },
      }), // 하단
      Bodies.rectangle(0, 66, 8, 132, {
        isStatic: true,
        render: { visible: false },
      }), // 좌측
      Bodies.rectangle(75, 66, 8, 132, {
        isStatic: true,
        render: { visible: false },
      }), // 우측
    ];

    World.add(engine.current!.world, boundaries);
    createInitialBalls(4);
  };

  // 공 생성 핸들러
  const handleClick = (e: React.MouseEvent) => {
    if (balls.length > MAX_BALLS) {
      resetBalls();
      return;
    }

    const rect = sceneRef.current!.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = -ballSize; // 공이 맨 위에서 생성되도록 설정
    const size = ballSize;

    // 공이 서로 붙어 있도록 겹치지 않는 위치 찾기
    const attempts = 10; // 최대 시도 횟수
    let foundPosition = false;
    for (let i = 0; i < attempts; i++) {
      const newBall = Bodies.circle(x, y, size / 2, {
        restitution: 0.5,
        render: {
          sprite: {
            texture: getRandomBallImage(), // 이미지 경로 설정
            xScale: size / ballImageSize, // 이미지 크기 조정
            yScale: size / ballImageSize, // 이미지 크기 조정
          },
        },
      });

      const collisions = Query.collides(newBall, balls);
      if (collisions.length === 0) {
        World.add(engine.current!.world, newBall);
        setBalls((prev) => [...prev, newBall]);
        foundPosition = true;
        break;
      } else {
        // 새로운 위치로 다시 시도
        x = Math.random() * (75 - size) + size / 2;
      }
    }

    if (!foundPosition) {
      console.warn(
        'Failed to find a non-overlapping position after multiple attempts'
      );
    }
  };

  return (
    <div
      className="w-[75px] h-[132px] relative select-none flex items-center"
      ref={sceneRef}
      onClick={handleClick}
    >
      <p className="absolute w-full flex gap-1 justify-center items-center text-xs font-bold text-purple-400 group-hover:scale-110 duration-200">
        Touch
        <IconHandClick className="text-foreground size-4 text-purple-400" />
      </p>
    </div>
  );
};
