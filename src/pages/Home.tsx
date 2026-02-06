import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { ContactSection } from '@/components/ContactSection'
import { useState, useEffect, useRef } from "react";
import { Footer } from "@/components/Footer";
import { SkillsSection } from "@/components/SkillsSection";
import { TextParagraph } from "@/components/HomeSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";

export const Home = () => {
    
    const heroRef = useRef<HTMLDivElement>(null!);
    const aboutRef = useRef<HTMLDivElement>(null!);
    const skillsRef = useRef<HTMLDivElement>(null!);
    const projectsRef = useRef<HTMLDivElement>(null!);
    const contactsRef = useRef<HTMLDivElement>(null!);

    const sectionRefs = {
        Home: heroRef,
        About: aboutRef,
        Skills: skillsRef,
        Projects: projectsRef,
        Contact: contactsRef
    };

    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
      document.title = "Portfolio";
      const handleScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight / 2;

        const sections = [
            { name: "Home", ref: heroRef },
            { name: "About", ref: aboutRef },
            { name: "Skills", ref: skillsRef },
            { name: "Projects", ref: projectsRef },
            { name: "Contact", ref: contactsRef }
        ];

        for (let i = sections.length - 1; i >= 0; i--) {
            const element = sections[i].ref.current;
            if (element && element.offsetTop <= scrollPos) {
                setActiveSection(sections[i].name);
                break;
            }
        }
      };
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // set initial active section
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const scrollToSection = (section: string): void => {
      const ref = sectionRefs[section as keyof typeof sectionRefs];
      if (ref?.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
          
          {/* Background effect */}
          < StarBackground />

          { /* Navbar */}
          < Navbar 
            scrollToSection={scrollToSection}
            activeSection={activeSection}
            refs={{ heroRef: heroRef, aboutRef: aboutRef, skillsRef: skillsRef, projectsRef: projectsRef, contactRef: contactsRef }}
          />

          {/* Home */}
          <TextParagraph 
            navRefs={{ projectsRef: projectsRef, contactRef: contactsRef }}
            ref={heroRef}
          />

          {/* Project */}
          <AboutSection
              ref={aboutRef}
          />

          {/* Main Content */}
          <SkillsSection
            ref={skillsRef}
          />

          {/* Project */}
          <ProjectsSection
              ref={projectsRef}
          />


          {/* Contact */}
          <ContactSection
              ref={contactsRef}
          />

          {/* Contact */}
          <Footer/>
        </div>
    );
}