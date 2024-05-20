export interface TechStack {
  imageSrc: string;
  darkImageSrc?: string;
  width: number;
  height: number;
  title: string;
  description?: string;
}

export const languageStacks: TechStack[] = [
  {
    imageSrc: '/stacks/js.png',
    width: 100,
    height: 100,
    title: 'javascript',
  },
  {
    imageSrc: '/stacks/ts.png',
    width: 100,
    height: 100,
    title: 'typescript',
  },
  { imageSrc: '/stacks/python.svg', width: 100, height: 100, title: 'python' },
  { imageSrc: '/stacks/dart.svg', width: 100, height: 100, title: 'dart' },
];

export const frontStacks: TechStack[] = [
  {
    imageSrc: '/stacks/react-icon.png',
    width: 100,
    height: 100,
    title: 'react',
  },
  {
    imageSrc: '/stacks/nextjs.svg',
    darkImageSrc: '/stacks/nextjs-dark.svg',
    width: 100,
    height: 100,
    title: 'nextjs',
  },
  {
    imageSrc: '/stacks/flutter.svg',
    width: 100,
    height: 100,
    title: 'flutter',
  },
  {
    imageSrc: '/stacks/react-query.svg',
    width: 100,
    height: 100,
    title: 'react-query',
  },
  {
    imageSrc: '/stacks/zustand.png',
    width: 100,
    height: 100,
    title: 'zustand',
  },
  {
    imageSrc: '/stacks/tailwind-css.svg',
    width: 100,
    height: 100,
    title: 'tailwindCSS',
  },
  {
    imageSrc: '/stacks/shadcn-ui.png',
    width: 100,
    height: 100,
    title: 'shadcn/ui',
  },
  {
    imageSrc: '/stacks/socket-io.svg',
    width: 100,
    height: 100,
    title: 'socket.io',
  },
];

export const backStacks: TechStack[] = [
  {
    imageSrc: '/stacks/express.svg',
    darkImageSrc: '/stacks/express-dark.svg',
    width: 100,
    height: 100,
    title: 'expressjs',
  },
  {
    imageSrc: '/stacks/nestjs.svg',
    width: 100,
    height: 100,
    title: 'nestjs',
  },
  {
    imageSrc: '/stacks/nginx.png',
    width: 100,
    height: 100,
    title: 'nginx',
  },
  {
    imageSrc: '/stacks/serverless.svg',
    width: 100,
    height: 100,
    title: 'serverless',
  },
];

export const dbStacks: TechStack[] = [
  { imageSrc: '/stacks/mysql.png', width: 100, height: 100, title: 'MySQL' },
  {
    imageSrc: '/stacks/postgre.png',
    width: 100,
    height: 100,
    title: 'postgreSQL',
  },
  {
    imageSrc: '/stacks/mongodb.png',
    width: 100,
    height: 100,
    title: 'mongodb',
  },
  {
    imageSrc: '/stacks/firebase.png',
    width: 100,
    height: 100,
    title: 'firebase',
  },
  {
    imageSrc: '/stacks/supabase.png',
    width: 100,
    height: 100,
    title: 'supabase',
  },
];

export const otherStacks: TechStack[] = [
  {
    imageSrc: '/stacks/aws.png',
    width: 100,
    height: 100,
    title: 'aws',
  },
  {
    imageSrc: '/stacks/docker.png',
    width: 100,
    height: 100,
    title: 'docker',
  },
  {
    imageSrc: '/stacks/vercel.svg',
    darkImageSrc: '/stacks/vercel-dark.svg',
    width: 100,
    height: 100,
    title: 'vercel',
  },
];
