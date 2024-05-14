import { projects as allProjects } from '#site/content';
import { ProjectList } from '../(landing)/_components/project-section/project-list';

export default async function ProjectsPage() {
  const projects = allProjects
    .filter((project) => project.published)
    .sort((a, b) => {
      return b.id - a.id;
    });
  return (
    <div className="w-full">
      <h2 className="text-center py-20 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
        프로젝트
      </h2>
      <ProjectList projects={projects} className="pb-20" />
    </div>
  );
}
