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
    imageSrc: '/images/stacks/js.png',
    width: 100,
    height: 100,
    title: 'javascript',
  },
  {
    imageSrc: '/images/stacks/ts.png',
    width: 100,
    height: 100,
    title: 'typescript',
  },
  {
    imageSrc: '/images/stacks/python.svg',
    width: 100,
    height: 100,
    title: 'python',
  },
  {
    imageSrc: '/images/stacks/dart.svg',
    width: 100,
    height: 100,
    title: 'dart',
  },
];

export const frontStacks: TechStack[] = [
  {
    imageSrc: '/images/stacks/react-icon.png',
    width: 100,
    height: 100,
    title: 'react',
  },
  {
    imageSrc: '/images/stacks/nextjs.svg',
    darkImageSrc: '/images/stacks/nextjs-dark.svg',
    width: 100,
    height: 100,
    title: 'nextjs',
  },
  {
    imageSrc: '/images/stacks/flutter.svg',
    width: 100,
    height: 100,
    title: 'flutter',
  },
  {
    imageSrc: '/images/stacks/react-query.svg',
    width: 100,
    height: 100,
    title: 'react-query',
  },
  {
    imageSrc: '/images/stacks/zustand.png',
    width: 100,
    height: 100,
    title: 'zustand',
  },
  {
    imageSrc: '/images/stacks/tailwind-css.svg',
    width: 100,
    height: 100,
    title: 'tailwindCSS',
  },
  {
    imageSrc: '/images/stacks/shadcn-ui.png',
    width: 100,
    height: 100,
    title: 'shadcn/ui',
  },
  {
    imageSrc: '/images/stacks/socket-io.svg',
    width: 100,
    height: 100,
    title: 'socket.io',
  },
];

export const backStacks: TechStack[] = [
  {
    imageSrc: '/images/stacks/express.svg',
    darkImageSrc: '/images/stacks/express-dark.svg',
    width: 100,
    height: 100,
    title: 'expressjs',
  },
  {
    imageSrc: '/images/stacks/nestjs.svg',
    width: 100,
    height: 100,
    title: 'nestjs',
  },
  {
    imageSrc: '/images/stacks/nginx.png',
    width: 100,
    height: 100,
    title: 'nginx',
  },
  {
    imageSrc: '/images/stacks/serverless.svg',
    width: 100,
    height: 100,
    title: 'serverless',
  },
];

export const dbStacks: TechStack[] = [
  {
    imageSrc: '/images/stacks/mysql.png',
    width: 100,
    height: 100,
    title: 'MySQL',
  },
  {
    imageSrc: '/images/stacks/postgre.png',
    width: 100,
    height: 100,
    title: 'postgreSQL',
  },
  {
    imageSrc: '/images/stacks/mongodb.png',
    width: 100,
    height: 100,
    title: 'mongodb',
  },
  {
    imageSrc: '/images/stacks/firebase.png',
    width: 100,
    height: 100,
    title: 'firebase',
  },
  {
    imageSrc: '/images/stacks/supabase.png',
    width: 100,
    height: 100,
    title: 'supabase',
  },
];

export const otherStacks: TechStack[] = [
  {
    imageSrc: '/images/stacks/aws.png',
    width: 100,
    height: 100,
    title: 'aws',
  },
  {
    imageSrc: '/images/stacks/docker.png',
    width: 100,
    height: 100,
    title: 'docker',
  },
  {
    imageSrc: '/images/stacks/vercel.svg',
    darkImageSrc: '/images/stacks/vercel-dark.svg',
    width: 100,
    height: 100,
    title: 'vercel',
  },
];
