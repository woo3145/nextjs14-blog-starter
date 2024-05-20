import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { CardBody, CardContainer, CardItem } from '../../ui/3d-card';
import { Project } from '#site/content';
import {
  IconBrandAppstore,
  IconBrandGithub,
  IconBrandGooglePlay,
} from '@tabler/icons-react';

interface ProjectCardProps {
  project: Project;
}

export function Project3dCard({ project }: ProjectCardProps) {
  return (
    <CardContainer>
      <CardBody className="bg-background relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] sm:w-[30rem] h-auto w-auto rounded-xl p-6 shadow-sm border">
        <CardItem translateZ="50" className="w-full mt-4">
          <div className="bg-muted w-full aspect-w-16 aspect-h-9">
            <Image
              src={project.image}
              alt="Project Image"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </CardItem>
        <CardItem
          as="h3"
          translateZ="60"
          className="scroll-m-20 text-2xl font-semibold tracking-tight mt-4"
        >
          {project.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm text-muted-foreground"
        >
          {project.type}
        </CardItem>
        <CardItem
          as="p"
          translateZ="50"
          className="leading-7 [&:not(:first-child)]:mt-6"
        >
          {project.description}
        </CardItem>
        {project.skills && (
          <CardItem translateZ="40" className="flex gap-2 flex-wrap mt-6">
            {project.skills.map((skill) => (
              <Badge key={skill} variant="default">
                {skill}
              </Badge>
            ))}
          </CardItem>
        )}
        <div className="flex justify-between items-center mt-10">
          <div className="flex items-center gap-2">
            {project.links?.github && (
              <Link href={project.links.github} target="_blank" passHref>
                <Button variant="ghost">
                  <IconBrandGithub className="mr-2" />
                  Github
                </Button>
              </Link>
            )}
            {project.links?.playstore && (
              <Link href={project.links.playstore} target="_blank" passHref>
                <Button variant="ghost">
                  <IconBrandGooglePlay className="mr-2" />
                  PlayStore
                </Button>
              </Link>
            )}
            {project.links?.appstore && (
              <Link href={project.links.appstore} target="_blank" passHref>
                <Button variant="ghost">
                  <IconBrandAppstore className="mr-2" />
                  AppStore
                </Button>
              </Link>
            )}
          </div>
          {project.links?.demo && (
            <CardItem translateZ={30}>
              <Link href={project.links.demo} target="_blank" passHref>
                <Button>
                  Live URL
                  <ExternalLink className="ml-2" />
                </Button>
              </Link>
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
