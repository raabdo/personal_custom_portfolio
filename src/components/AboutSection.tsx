import React, { forwardRef } from "react";
import DirectionalImageSlider  from "./DirectionalImageSlider";

export const AboutSection = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
> ((_props, ref) => {
    const images = [
        '/static/img/my/3.jpg',
        '/static/img/my/1.png',
        '/static/img/my/2.png'
    ];
     return (
        <section 
            ref={ref}
            id="about" 
            className="py-30 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                    {/* Text column */}
                    <div className="w-full mx-auto md:mx-0 space-y-4 text-foreground/90 text-justify">
                        
                        <p>
                          Always passionate about building software that is both practical and well-designed.
                        <br></br>
                          Traveling and living abroad have given me a global perspective and adaptability, which I bring into my work as an engineer.
                          Outside of coding, I enjoy different sports, practice martial arts, and relax by playing board and video games, all of which reinforce focus, strategy, and perseverance. 
                          I’m always eager to learn, improve my craft, and take on meaningful challenges
                        <br></br>
                          Feel free to reach out if you need my services or even if you want to have a friendly chess match 🙂
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