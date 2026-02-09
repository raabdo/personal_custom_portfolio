import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-context";

export const StarBackground = () => {
  const {isDarkMode} = useTheme();

  type Star = {
    id: number;
    size: number;
    top: number;
    left: number;
    opacity: number;
    animationDuration: number;
  };

  type Meteor = {
    id: number;
    size: number;
    top: number;
    left: number;
    animationDuration: number;
  };

  type Cloud = {
    id: number;
    size: number;
    top: number;
    left: number;
  };

  const generateStars = (): Star[] => {
    const newStars: Star[] = [];
    for (let i = 0; i < 100; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 5 + 1,
      });
    }
    return newStars;
  };

  const generateMeteors = (): Meteor[] => {
    const meteors: Meteor[] = [];
    for (let i = 0; i < 4; i++) {
      meteors.push({
        id: i,
        size: Math.random() + 1,
        top: Math.random() * 20,
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    return meteors;
  };
  const generateClouds = (): Cloud[] => {
    const clouds: Cloud[] = [];
    for (let i = 0; i < 5; i++) {
      clouds.push({
        id: i,
        size: Math.random(),
        top: 10 + i * 15,
        left: -50 + Math.random() * 100,
      });
    }
    return clouds;
  };

  const [stars] = useState<Star[]>(() => generateStars());
  const [meteors] = useState<Meteor[]>(() => generateMeteors());
  const [clouds] = useState<Cloud[]>(() => generateClouds());

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Stars + Meteors (dark mode) */}
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          isDarkMode ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="md:absolute top-30 left-30 transform -translate-x-1/2">
          <Moon className="h-16 w-16 z-0 text-black-900 animate-bounce-slow opacity-20" />
        </div>
        {stars.map((star) => (
          <div
            key={star.id}
            className="star animate-pulse-subtle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}

        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
              width: `${meteor.size * 50}px`,
              height: `${meteor.size}px`,
              top: `${meteor.top}%`,
              left: `${meteor.left}%`,
              animationDuration: `${meteor.animationDuration}s`,
            }}
          />
        ))}
      </div>

      {/* Sun + Clouds (light mode) */}
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          isDarkMode ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="md:absolute top-30 left-30 transform -translate-x-1/2">
          <Sun className="h-16 w-16 z-0 text-yellow-400 animate-bounce-slow opacity-60" />
        </div>

        {clouds.map((cloud) => (
          <div
            key={cloud.id}
            className="cloud animate-cloud"
            style={{
              width: `${50 + cloud.size * 50}px`,
              height: `${20 + cloud.size * 20}px`,
              top: `${cloud.top}%`,
              left: `${cloud.left}%`
            }}
          />
        ))}
      </div>
    </div>
  );
};
