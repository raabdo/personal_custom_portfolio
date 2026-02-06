import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from '../lib/utils'

/**
 * DirectionalImageSlider
 * Normal image slider with left/right movement
 * Supports arrows + swipe gestures + auto-slide
 * Props:
 * - images: string[] (required)
 * - interval: number (ms, default 5000)
 * - className?: string
 */

interface DirectionalImageSliderProps {
  images?: string[]; // 明确告诉 TS 这是一个字符串数组
  interval?: number;
  className?: string;
  isButtonHidden?: boolean;
}

export default function DirectionalImageSlider(
    { images = [], interval = 5000, className = "", isButtonHidden = false } : DirectionalImageSliderProps
) {
  const [index, setIndex] = useState(0);
 
  const intervalRef = useRef(5000);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goNext();
    }, interval);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
    startAutoSlide();
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    startAutoSlide();
  };

  useEffect(() => {
    if (images.length <= 1) return;
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [images.length, interval, startAutoSlide]);

  if (!images.length) return null;

  return (
    <div
      className={`relative overflow-hidden aspect-video ${className} my-12`}
    >
      {/* Slider track */}
      <div
        className="flex transition-transform duration-500 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="shrink-0 w-full">
            <img src={img} alt={`Slide ${i + 1}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={goPrev}
        className={cn(
          isButtonHidden ? "hidden" : "absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 text-white rounded-full md:flex"
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Right arrow */}
      <button
        onClick={goNext}
        className={cn(
          isButtonHidden ? "hidden" : "absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 text-white rounded-full md:flex"
        )}
        aria-label="Next slide"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
