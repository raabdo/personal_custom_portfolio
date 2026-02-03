import { cn } from "../lib/utils";

interface CardProps {
  icon?: React.ComponentType<{ size: number }>;
  image?: string | { src: string; alt: string };
  title: string;
  description: string;
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
        <div className="flex justify-center mb-4">
          {Icon ? (
            <div className="text-primary">
              <Icon size={40} />
            </div>
          ) : null}
        </div>
      )}

      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-foreground/80 text-sm mb-4">{description}</p>

    </div>
  );
}
