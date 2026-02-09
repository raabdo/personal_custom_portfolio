import { forwardRef} from "react";

type TextParagraphProps = React.HTMLAttributes<HTMLElement> & {
  scrollToSection: (id: string) => void;
};

export const TextParagraph = forwardRef<
  HTMLElement,
  TextParagraphProps
>(({ scrollToSection, ...props }, ref) => {
  
  return (
    <section ref={ref} {...props} id="hero" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-secondary">Software Engineer</span>
            </h1>
            <p className="text-xl text-center mb-6">
                With more than 5 years of experience in delivering cost-efficient IT solutions
            </p>
        </div>
    </section>
  );
});
