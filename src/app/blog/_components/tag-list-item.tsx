import { cn } from '@/lib/utils';

interface TagListItemProps {
  tag: string;
  count: number;
  onClick: () => void;
  isSelected: boolean;
}

export const TagListItem = ({
  tag,
  onClick,
  count,
  isSelected,
}: TagListItemProps) => {
  return (
    <div
      className={cn(
        'text-sm px-4 py-1.5 bg-muted text-muted-foreground rounded-md cursor-pointer duration-200',
        isSelected
          ? 'bg-primary text-primary-foreground'
          : 'hover:bg-accent text-accent-foreground'
      )}
      onClick={onClick}
    >
      {tag} ({count})
    </div>
  );
};
