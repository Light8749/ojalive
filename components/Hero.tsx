"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/data/heroSlides";

const SLIDE_TIME = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // change slide every few seconds, unless paused or the user prefers less motion
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (paused || reduceMotion) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_TIME);

    return () => clearInterval(timer);
  }, [paused]);

  function goToPrevious() {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }

  function goToNext() {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured markets"
      className="relative overflow-hidden bg-brand-900 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* background slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== current}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* dark overlay so the text is easy to read */}
      <div className="absolute inset-0 bg-black/60 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/80 sm:via-black/60 sm:to-black/30" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-24 lg:px-8">
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          See it live, ask questions, and only pay the vendor when your order
          arrives.
        </h1>

        <p className="mt-4 max-w-xl text-base text-slate-200 sm:text-lg">
          Shop from trusted Nigerian vendors on live video. Your money stays
          safe with us until you confirm delivery.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-full">
            <a href="#live-now">Start watching</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a href="#how-it-works">How it works</a>
          </Button>
        </div>

        {/* carousel controls */}
        <div className="mt-12 flex items-center justify-between gap-4 sm:mt-16">
          <div className="flex gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Show slide ${index + 1} of ${heroSlides.length}`}
                aria-current={index === current}
                className={`h-1.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  index === current ? "w-8 bg-white" : "w-4 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              aria-label="Previous slide"
              className="rounded-full border-white/40 bg-black/20 text-white hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              aria-label="Next slide"
              className="rounded-full border-white/40 bg-black/20 text-white hover:bg-white/10 hover:text-white"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
