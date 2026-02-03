import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react";

type Profile = {
    name: string;
};
export const Footer = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        fetch("/profile.json")
        .then((res) => {
            if (!res.ok) throw new Error("Failed to load profile");
            return res.json();
        })
        .then(setProfile)
        .catch(() => setError(true));
    }, []);

    if (error) return <p>Failed to load footer</p>;
    if (!profile) return <p>Loading...</p>;
    
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <div className="container flex items-center justify-between">

                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
                </p>
                <a 
                    href="#hero" 
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors "
                >
                    <ArrowUp size={20} />
                </a>
            </div>
        </footer>
    )
}
