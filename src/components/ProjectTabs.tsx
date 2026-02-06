import React, { useState } from "react";
import DirectionalImageSlider from "@/components/DirectionalImageSlider"
import { cn } from "../lib/utils";

interface ProjectsTabsProps {
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  screenshots: string[]; // image URLs
}

export const ProjectsTabs = React.forwardRef<
  HTMLElement,
  ProjectsTabsProps
>(({ projects }, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section ref={ref} className="px-1">
      {/* Tabs */}
      <div className="tabs text-primary justify-center h-full">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={cn(
                " px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                index === activeIndex 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveIndex(index)}
            >
              {project.title}
            </button>
          ))}
      </div>
      <div className="flex items-center justify-center h-screen my-20">
          <div className="px-4 w-3/4 group bg-card rounded-lg overflow-hidden shadow-xs card-hover gap-8 items-center">
            {/* Content */}
            <div className="w-full text-center">
              {/* Left: Description */}
              <div className="items-center justify-center py-2">
                <div className="mt-3 text-base text-foreground/90">
                  <p className="my-4 justify-center">{activeProject.description}</p>
                  <h3 className="text-2xl my-8 text-tertiary">Technologies</h3>
                  <ul className="flex flex-wrap gap-1 justify-center items-center">
                    {activeProject.techStack.map((tech) => (
                      <span className="px-2 py-1 gap-1 text-sm border font-medium rounded-full bg-secondary text-secondary-foreground">{tech}</span>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Right: Screenshots */}
            <DirectionalImageSlider
                images={activeProject.screenshots}
                interval={3000}
                className="w-full h-full"
            />
          </div>
      </div>
    </section>
  );
});
