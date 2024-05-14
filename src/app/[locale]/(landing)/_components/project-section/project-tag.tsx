import { cn } from '@/lib/utils';

interface ProjectTagProps {
  text: string;
  color: string;
}

// MDX에서 색이 전달되기 때문에 컴포넌트는 이미 JIT 컴파일러에 의해 사용하지 않는 클래스를 모두 없애고 빌드한 상태
// 따라서 빌드에 포함될 수 있도록 아래와 같이 빌드단계에 색상들이 포함될 수 있도록 함

export const ProjectTag = ({ text, color }: ProjectTagProps) => {
  const defaultTagClassName = `border text-xs rounded-full px-2 py-0.5`;

  const blueClassNames =
    'border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400';
  const greenClassNames =
    'border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400';
  const redClassNames =
    'border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400';
  const zincClassNames =
    'border-zinc-500 bg-zinc-100 dark:bg-zinc-900/20 text-zinc-600 dark:text-zinc-400';
  const roseClassNames =
    'border-rose-500 bg-rose-100 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400';
  const fuchsiaClassNames =
    'border-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/20 text-fuchsia-600 dark:text-fuchsia-400';
  const purpleClassNames =
    'border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400';

  if (color === 'blue')
    return (
      <p key={text} className={cn(`${defaultTagClassName} ${blueClassNames}`)}>
        {text}
      </p>
    );
  if (color === 'green')
    return (
      <p key={text} className={cn(`${defaultTagClassName} ${greenClassNames}`)}>
        {text}
      </p>
    );
  if (color === 'red')
    return (
      <p key={text} className={cn(`${defaultTagClassName} ${redClassNames}`)}>
        {text}
      </p>
    );
  if (color === 'zinc')
    return (
      <p key={text} className={cn(`${defaultTagClassName} ${zincClassNames}`)}>
        {text}
      </p>
    );
  if (color === 'rose')
    return (
      <p key={text} className={cn(`${defaultTagClassName} ${roseClassNames}`)}>
        {text}
      </p>
    );
  if (color === 'fuchsia')
    return (
      <p
        key={text}
        className={cn(`${defaultTagClassName} ${fuchsiaClassNames}`)}
      >
        {text}
      </p>
    );
  if (color === 'purple')
    return (
      <p
        key={text}
        className={cn(`${defaultTagClassName} ${purpleClassNames}`)}
      >
        {text}
      </p>
    );
  return (
    <p key={text} className={cn(`${defaultTagClassName} ${zincClassNames}`)}>
      {text}
    </p>
  );
};
