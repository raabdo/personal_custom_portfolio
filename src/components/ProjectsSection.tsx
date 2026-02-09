import { forwardRef } from "react";
import { ProjectsTabs } from "@/components/ProjectTabs";
import type { Project } from "@/components/ProjectTabs";
import { projects } from "@/lib/projects";

export const ProjectsSection = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
> ((props, ref) => {
    const projectsData: Project[] = projects;
  return (
    <section ref={ref} {...props} id="projects" className="py-24 px-2 relative bg-secondary/30">
      <div className="container-2xl mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-secondary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm mx-auto mb-12">
          Below is a selection of projects I’ve worked on, showcasing my experience and approach to software development.
          <br />
          <strong>-Certain details in the screenshots have been intentionally redacted for privacy and data protection purposes-</strong>
        </p>
        <ProjectsTabs
            ref={ref}
            projects={projectsData}
        />
      </div>
    </section>
  );
});