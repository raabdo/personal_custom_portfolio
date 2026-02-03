import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from '@/components/ThemeToggle';

interface NavRefs {
    heroRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    skillsRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
}

interface NavItem {
    name: string;
    ref: React.RefObject<HTMLElement>;
}

export const Navbar = (
    { scrollToSection, activeSection, refs }: 
    { scrollToSection: (section: string) => void; activeSection: string; refs: NavRefs }
) => {
    
    const navItems = [
        { name: 'Home', ref: refs.heroRef  },
        { name: 'About', ref: refs.aboutRef  },
        { name: 'Skills', ref: refs.skillsRef  },
        { name: 'Projects', ref: refs.projectsRef },
        { name: 'Contact', ref: refs.contactRef },
    ];
    
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderNavItem = (item: NavItem) => {
        return (
            <button
                key={item.name}
                onClick={() => {
                    scrollToSection(item.name);
                    setIsMenuOpen(false);
                }}
                className={`${
                    activeSection === item.name ? "text-primary font-bold" : "text-foreground/80"
                } hover:text-primary transition-colors duration-300`}
            >
                {item.name}
            </button>
        );
    } 

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300",
                // mobile only
                isScrolled
                ? "py-5 navbar bg-background/90 shadow-md md:bg-transparent"
                : "py-7",
                // desktop only
                isScrolled
                ? "md:py-5 md:navbar md:bg-background/90 md:backdrop-blur-md md:shadow-md"
                : "md:py-7"
            )}
        >

            <div className="container flex items-center justify-between">
                
                <a className="order-2 md:order-1 text-lg font-bold text-primary flex items-center">
                    <span className="md:flex relative z-10">
                        <span className="text-glow text-foreground pr-2">Rachid</span>Dev portfolio
                    </span>
                </a>

                {/* desktop Nav */}
                <div className=" md:order-1 hidden md:flex space-x-8">
                    {navItems.map((item, key) => {
                        return <span key={key}>{renderNavItem(item)}</span>
                    })}
                    {/* Them Toggle */}
                    < ThemeToggle />
                </div>
                
                {/* mobile Nav */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden top-0 left-0 p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                > 
                    {isMenuOpen ? <X size={18} /> : <Menu size={25} />}
                </button> 

                {/* mobile Nav overlay */}
                <div
                    className={cn(
                    "fixed inset-0 z-40 md:hidden flex",
                    isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
                )}
                >
                {/* sliding drawer (LEFT) */}
                    <div
                        className={cn(
                        "h-full w-2/4 max-w-sm bg-background backdrop-blur-md shadow-lg z-50",
                        "transform transition-transform duration-300 ease-in-out",
                        isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        )}
                    >
                        <div className="flex flex-col space-y-8 text-xl p-8 mt-16">
                            {/* Them Toggle */}
                            < ThemeToggle />
                            {navItems.map((item, key) => (
                                <span key={key}>{renderNavItem(item)}</span>
                            ))}
                        </div>
                    </div>

                    {/* backdrop (RIGHT side) */}
                    <div
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                        "flex-4 bg-black/60 transition-opacity duration-300",
                        isMenuOpen ? "opacity-100" : "opacity-0"
                        )}
                    />
                </div>
            </div>
        </nav>
    );
}