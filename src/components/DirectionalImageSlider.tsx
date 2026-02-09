import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "../lib/utils";
import { createPortal } from "react-dom";
import { ImEnlarge } from "react-icons/im";

interface DirectionalImageSliderProps {
  images?: string[];
  interval?: number;
  className?: string;
  isButtonHidden?: boolean;
}

export default function DirectionalImageSlider({
  images = [],
  interval = 5000,
  className = "",
  isButtonHidden = false,
}: DirectionalImageSliderProps) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const intervalRef = useRef<number | null>(null);

  // -----------------------
  // Auto-slide functions
  // -----------------------
  const clearAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAutoSlide = () => {
    if (images.length <= 1) return;
    clearAutoSlide();
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
  };

  // -----------------------
  // Slide navigation
  // -----------------------
  const goNext = () => setIndex((prev) => (prev + 1) % images.length);
  const goPrev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  // -----------------------
  // Modal handling
  // -----------------------
  const openModal = (img: string) => {
    clearAutoSlide(); // stop auto-slide
    setActiveImage(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImage(null);
  };

  // -----------------------
  // Start auto-slide when component mounts or when modal closes
  // -----------------------
  useEffect(() => {
    if (!isOpen) startAutoSlide();
    return clearAutoSlide;
  }, [isOpen, images.length, interval]);

  if (!images.length) return null;

  return (
    <>
      {/* Slider */}
      <div className={`relative overflow-hidden aspect-video ${className} my-12`}>
        {/* Slide counter */}
        <div className={cn(
          "hidden",
          "md:block md:absolute md:opacity-50 md:top-2 md:left-1/2 md:-translate-x-1/2 md:bg-black/50 md:text-white md:text-xs md:px-2 md:py-1 md:rounded-md z-20"
          )}>
          {index + 1} / {images.length}
        </div>
        <div
          className={cn(
            "flex w-full h-full",
            "transition-transform duration-500 ease-in-out",
            isOpen && "transition-none", // freeze slider when modal is open
            "will-change-transform"
          )}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={cn(
                "shrink-0 w-full relative",
                isOpen ? "pointer-events-none" : "cursor-pointer"
              )}
              onClick={() => openModal(img)}
            >
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-contain"
                style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
              />
            </div>
          ))}
        </div>
        {/* Click-to-enlarge prompt */}
              {!isOpen && (
                <div className={cn(
                  "hidden",
                  "md:flex md:opacity-50 md:absolute md:bottom-2 md:left-1/2 md:-translate-x-1/2 bg-black/30 text-white text-sm md:px-2 md:py-1 rounded-md md:pointer-events-none"
                )}>
                  Click to < ImEnlarge className="m-1" />
                </div>
              )}

        {/* Left arrow */}
        <button
          onClick={goPrev}
          className={cn(
            isButtonHidden
              ? "hidden"
              : "absolute card-hover left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-tertiary text-white rounded-full"
          )}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right arrow */}
        <button
          onClick={goNext}
          className={cn(
            isButtonHidden
              ? "hidden"
              : "absolute card-hover right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-tertiary text-white rounded-full"
          )}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    {isOpen && activeImage &&
      createPortal(
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white z-50"
            onClick={closeModal}
          >
            <X size={28} />
          </button>
          <img
            src={activeImage}
            alt="Expanded view"
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )
    }

    </>
  );
}
