"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  // Event music / concert images (Unsplash)
  "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1600",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600",
  "https://images.unsplash.com/photo-1518972559570-0b5cfd0e1b02?q=80&w=1600",
  "https://images.unsplash.com/photo-1464375117522-1311dd6d0cd8?q=80&w=1600",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  };

  const nextSlide = () => {
    setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));
  };

  return (
    <section className="w-full py-6">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SLIDER CARD (UKURAN DIPERKECIL) */}
        <div
          className="
            relative
            h-[160px] sm:h-[200px] md:h-[240px]
            overflow-hidden
            rounded-xl
            bg-black
            shadow-md
            group
          "
        >
          {/* SLIDES */}
          {slides.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`Event music ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            aria-label="Slide sebelumnya"
            className="
              absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20
              w-8 h-8 sm:w-9 sm:h-9
              rounded-full
              bg-black/40 backdrop-blur
              flex items-center justify-center
              text-white
              transition-all duration-300
              hover:bg-black/60 hover:scale-110
              active:scale-95
              opacity-100 md:opacity-0 md:group-hover:opacity-100
            "
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            aria-label="Slide berikutnya"
            className="
              absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20
              w-8 h-8 sm:w-9 sm:h-9
              rounded-full
              bg-black/40 backdrop-blur
              flex items-center justify-center
              text-white
              transition-all duration-300
              hover:bg-black/60 hover:scale-110
              active:scale-95
              opacity-100 md:opacity-0 md:group-hover:opacity-100
            "
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* DOT INDICATOR */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current
                    ? "bg-white scale-110"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
