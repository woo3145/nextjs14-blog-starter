export const BubbleMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-foreground text-background rounded-md px-2 py-1">
      <p className="text-background text-sm">{children}</p>
    </div>
  );
};
