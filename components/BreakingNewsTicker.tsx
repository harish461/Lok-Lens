"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BREAKING_NEWS } from "@/lib/data/news";
import { ChevronLeft, ChevronRight, Zap, Volume2, Pause, Play } from "lucide-react";

export default function BreakingNewsTicker() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BREAKING_NEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + BREAKING_NEWS.length) % BREAKING_NEWS.length);
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-2xs">
      <div className="max-w-[1280px] mx-auto px-4 py-2">
        <div className="flex items-center overflow-hidden rounded bg-gray-50 border border-gray-200">
          {/* Red BREAKING NEWS Badge */}
          <div className="bg-[#D71920] text-white px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2 font-black text-[11px] sm:text-xs tracking-wider uppercase shrink-0 shadow-xs z-10 font-hindi">
            <span className="w-2 h-2 rounded-full bg-white pulse-dot"></span>
            <Zap className="w-3.5 h-3.5 fill-white text-white" />
            <span className="hidden sm:inline">ब्रेकिंग न्यूज़</span>
            <span className="sm:hidden">ब्रेकिंग</span>
          </div>

          {/* Marquee Ticker Track */}
          <div
            className="flex-1 overflow-hidden relative py-1.5 px-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={`flex items-center gap-8 ${
                isPaused ? "" : "animate-ticker"
              }`}
            >
              {/* Duplicate the array to create seamless loop */}
              {[...BREAKING_NEWS, ...BREAKING_NEWS].map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="inline-flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-gray-200 text-gray-700">
                    {item.category}
                  </span>
                  <Link
                    href={`#${item.slug}`}
                    className="text-xs sm:text-[13px] font-medium text-[#171717] hover:text-[#D71920] transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{item.title}</span>
                    <span className="text-[11px] text-gray-400 font-normal">
                      ({item.timestamp})
                    </span>
                  </Link>
                  <span className="text-gray-300 font-light mx-2">•</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation Controls */}
          <div className="hidden md:flex items-center gap-1 px-2 border-l border-gray-200 text-gray-500 bg-white shrink-0">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="p-1 hover:text-[#D71920] transition-colors"
              title={isPaused ? "Play" : "Pause"}
              aria-label={isPaused ? "Play marquee" : "Pause marquee"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
            <button
              type="button"
              onClick={handlePrev}
              className="p-1 hover:text-[#D71920] transition-colors"
              title="Previous"
              aria-label="Previous headline"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-1 hover:text-[#D71920] transition-colors"
              title="Next"
              aria-label="Next headline"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

