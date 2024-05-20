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
    imageSrc: '/static/stacks/js.png',
    width: 100,
    height: 100,
    title: 'javascript',
  },
  {
    imageSrc: '/static/stacks/ts.png',
    width: 100,
    height: 100,
    title: 'typescript',
  },
  {
    imageSrc: '/static/stacks/python.svg',
    width: 100,
    height: 100,
    title: 'python',
  },
  {
    imageSrc: '/static/stacks/dart.svg',
    width: 100,
    height: 100,
    title: 'dart',
  },
];

export const frontStacks: TechStack[] = [
  {
    imageSrc: '/static/stacks/react-icon.png',
    width: 100,
    height: 100,
    title: 'react',
  },
  {
    imageSrc: '/static/stacks/nextjs.svg',
    darkImageSrc: '/static/stacks/nextjs-dark.svg',
    width: 100,
    height: 100,
    title: 'nextjs',
  },
  {
    imageSrc: '/static/stacks/flutter.svg',
    width: 100,
    height: 100,
    title: 'flutter',
  },
  {
    imageSrc: '/static/stacks/react-query.svg',
    width: 100,
    height: 100,
    title: 'react-query',
  },
  {
    imageSrc: '/static/stacks/zustand.png',
    width: 100,
    height: 100,
    title: 'zustand',
  },
  {
    imageSrc: '/static/stacks/tailwind-css.svg',
    width: 100,
    height: 100,
    title: 'tailwindCSS',
  },
  {
    imageSrc: '/static/stacks/shadcn-ui.png',
    width: 100,
    height: 100,
    title: 'shadcn/ui',
  },
  {
    imageSrc: '/static/stacks/socket-io.svg',
    width: 100,
    height: 100,
    title: 'socket.io',
  },
];

export const backStacks: TechStack[] = [
  {
    imageSrc: '/static/stacks/express.svg',
    darkImageSrc: '/static/stacks/express-dark.svg',
    width: 100,
    height: 100,
    title: 'expressjs',
  },
  {
    imageSrc: '/static/stacks/nestjs.svg',
    width: 100,
    height: 100,
    title: 'nestjs',
  },
  {
    imageSrc: '/static/stacks/nginx.png',
    width: 100,
    height: 100,
    title: 'nginx',
  },
  {
    imageSrc: '/static/stacks/serverless.svg',
    width: 100,
    height: 100,
    title: 'serverless',
  },
];

export const dbStacks: TechStack[] = [
  {
    imageSrc: '/static/stacks/mysql.png',
    width: 100,
    height: 100,
    title: 'MySQL',
  },
  {
    imageSrc: '/static/stacks/postgre.png',
    width: 100,
    height: 100,
    title: 'postgreSQL',
  },
  {
    imageSrc: '/static/stacks/mongodb.png',
    width: 100,
    height: 100,
    title: 'mongodb',
  },
  {
    imageSrc: '/static/stacks/firebase.png',
    width: 100,
    height: 100,
    title: 'firebase',
  },
  {
    imageSrc: '/static/stacks/supabase.png',
    width: 100,
    height: 100,
    title: 'supabase',
  },
];

export const otherStacks: TechStack[] = [
  {
    imageSrc: '/static/stacks/aws.png',
    width: 100,
    height: 100,
    title: 'aws',
  },
  {
    imageSrc: '/static/stacks/docker.png',
    width: 100,
    height: 100,
    title: 'docker',
  },
  {
    imageSrc: '/static/stacks/vercel.svg',
    darkImageSrc: '/static/stacks/vercel-dark.svg',
    width: 100,
    height: 100,
    title: 'vercel',
  },
];
