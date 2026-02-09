import { cn } from "../lib/utils";
import React from "react";

interface CardProps {
  icon?: React.ComponentType<{ size: number }>;
  image?: string | { src: string; alt: string };
  title: string;
  description: string[];
  ctaText?: string;
  onClick?: () => void;
}

export default function Card({ 
    icon: Icon,
    title,
    description 
}: CardProps) {
  
  return (
    <div 
      className={cn(
        "group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-6 text-center", 
        'flex flex-col justify-center min-h-40'
      )}
    >
      {(
        <div className="flex justify-center max-h-40 m-4">
          {Icon ? (
            <div className="text-primary">
              <Icon size={40} />
            </div>
          ) : null}
        </div>
      )}

      <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-1 mb-4 justify-center items-center">
        {description.map((item, index) => (
          <span key={index} className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
