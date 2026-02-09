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
    <section ref={ref} {...props} id="projects" className="py-30 px-2 relative bg-secondary/30">
      <div className="container-2xl mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-secondary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mx-auto mb-12">
          A selection of projects showcasing my work. Certain screenshot details are redacted for privacy.
        </p>
        <ProjectsTabs
            ref={ref}
            projects={projectsData}
        />
      </div>
    </section>
  );
});