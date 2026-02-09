import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => { 
    
    const {isDarkMode, toggleTheme} = useTheme();

    return (
        <button 
            onClick={toggleTheme}
            className={cn(
                // mobile (default)
                "flex flex-col items-center",

                // desktop
                "md:flex md:z-50 md:rounded-full md:focus:ring-1 md:focus:ring-offset-2 md:focus:ring-accent",

                // shared styles
                "transition-colors duration-100",
                "hover:bg-accent hover:text-accent-foreground",
                "focus:outline-none"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {" "}
            {
            isDarkMode 
                ? (<Sun className="h-6 w-6 text-yellow-300 md:m-1" />) 
                : (<Moon className="h-6 w-6 text-black-900  md:m-1" /> )
            }
        </button>
    );
}