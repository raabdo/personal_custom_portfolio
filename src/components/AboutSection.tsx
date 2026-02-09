import React, { forwardRef } from "react";
import DirectionalImageSlider  from "./DirectionalImageSlider";
import { personal_images } from "@/lib/personal_images";

export const AboutSection = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
> ((_props, ref) => {
    const images = personal_images;
     return (
        <section 
            ref={ref}
            id="about" 
            className="py-30 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About Me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                    {/* Text column */}
                    <div className="w-full mx-auto md:mx-0 space-y-4 text-foreground/90 text-justify">
                        
                        <p>
                            I’m passionate about building software that is both practical and thoughtfully designed. Having traveled and lived abroad, I’ve gained a global perspective and adaptability that I bring into my work as an engineer.
                            <br></br>
                            Outside of coding, I enjoy staying active through various sports, practicing martial arts, and unwinding with board and video games—all of which strengthen my focus, strategic thinking, and perseverance. I’m always eager to learn, refine my craft, and take on meaningful challenges.
                            <br></br>
                            Feel free to reach out if you’re interested in working together—or even if you’d like a friendly game of chess 🙂
                        </p>
                    </div>

                    {/* Image column */}
                    <div className="w-auto flex justify-center md:justify-end">
                        <DirectionalImageSlider
                            images={images}
                            interval={3000}
                            className="w-full max-w-md h-64 md:h-90 lg:h-100 rounded-lg object-contain"
                            isButtonHidden={true}
                        />
                    </div>

                </div>
            </div>
        </section>
  );
});