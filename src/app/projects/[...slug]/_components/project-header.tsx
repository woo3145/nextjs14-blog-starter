import { Project } from "#site/content";
import { ProjectTag } from "@/app/(landing)/_components/project-section/project-tag";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const ProjectHeader = ({ project }: { project: Project }) => {
  return (
    <header className={cn('flex flex-col gap-4 pb-12')}>
      <h2 className="font-heading mt-2 scroll-m-20 text-3xl font-bold leading-tight">
        {project.title}
      </h2>
      <div className="flex items-center space-x-4">
        <span className="text-foreground/60 font-semibold">
          {project.period}
        </span>
        <Separator orientation="vertical" />
        <div className="list-none flex items-center gap-4 ml-0">
          {project.tags.map((tag) => {
            return (
              <ProjectTag key={tag.text} text={tag.text} color={tag.color} />
            );
          })}
        </div>
      </div>
    </header>
  );
};
