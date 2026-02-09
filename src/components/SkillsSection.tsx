import { forwardRef } from "react";
import { skills } from "../lib/skills";
import Card from "@/components/Card"

export const SkillsSection = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
> ((props, ref) => {
  return (
    <section ref={ref} {...props} id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-secondary">Expertise</span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <Card key={i} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
});