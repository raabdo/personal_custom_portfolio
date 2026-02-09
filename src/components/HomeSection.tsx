import React, { forwardRef} from "react";
import { ArrowDown } from "lucide-react"
import { FiDownload } from "react-icons/fi";
import { cn } from "../lib/utils"

type TextParagraphProps = React.HTMLAttributes<HTMLElement> & {
  navRefs: NavRefs;
};

interface NavRefs {
  projectsRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

export const TextParagraph = forwardRef<
  HTMLElement,
  TextParagraphProps
>(({ navRefs, ...props }, ref) => {
  return (
    <section ref={ref} {...props} id="hero" className="py-30 px-4 relative bg-secondary/30 mb-12">
        <div className="container mx-auto max-w-3xl text-center z-10 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-secondary">Hello there! Welcome</span>
            </h1>
            <p className="text-xl text-center mb-12 max-w-3xl">
                I am a <strong className="text-primary">Full-Stack Developer</strong>
                <br></br>
                5 years of experience in delivering user-focused, cost-efficient IT solutions.
            </p>
            <div className="flex flex-col items-center justify-center space-y-8">
              <button 
                  className={cn(
                      "normal-button w-auto"
                  )}
                  onClick={ () => navRefs.projectsRef.current?.scrollIntoView()}
              >
                  {<span className="inline-flex px-4">Explore My Work</span>}
              </button>
              <button 
                  className={cn(
                      "normal-button w-auto"
                  )}
                  onClick={ () => navRefs.contactRef.current?.scrollIntoView()}
              >
                  {<span className="inline-flex px-4">Contact me</span>}
              </button>
              <a
                className="download-button w-auto"
                href="/files/rachid-abderrahmane-cv.pdf" 
                download
              >
                {<span className="inline-flex px-4">Resume/CV< FiDownload className="m-1"/></span>}
              </a>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll Down for more</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
  );
});
