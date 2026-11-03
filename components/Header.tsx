"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  X,
} from "lucide-react";
import {
  FacebookIcon,
  TwitterXIcon,
  InstagramIcon,
  YoutubeIcon,
  TelegramIcon,
} from "./SocialIcons";

export default function Header() {
  const [currentDateStr, setCurrentDateStr] = useState("Sunday, November 1, 2026");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDateStr(today.toLocaleDateString("hi-IN", options));
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top Utilities Micro-Bar */}
      <div className="bg-[#171717] text-white text-xs py-1.5">
        <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between">
          {/* Left: Date and Day in Hindi */}
          <div className="flex items-center text-gray-300 text-xs font-medium font-hindi">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D71920]" />
              {currentDateStr}
            </span>
          </div>

          {/* Right: Official Social Media Icons from Lok Lens News */}
          <div className="flex items-center gap-3 text-gray-300">
            <a
              href="https://www.facebook.com/share/14oHT61Yfq8/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#078DD0] transition-colors p-0.5"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#078DD0] transition-colors p-0.5"
              aria-label="Twitter / X"
            >
              <TwitterXIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/loklens_news?igsh=MXB5a2VwZzg2cmU3MA=="
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D71920] transition-colors p-0.5"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com/@loklensnews?si=6f1shocna_onuuw2"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D71920] transition-colors p-0.5"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#078DD0] transition-colors p-0.5"
              aria-label="Telegram"
            >
              <TelegramIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header with Logo & Search */}
      <div className="max-w-[1280px] mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Newspaper Branding */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-102">
              <Image
                src="/images/loklens-logo.jpg"
                alt="Official Lok Lens News Logo"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 64px, 80px"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717] group-hover:text-[#D71920] transition-colors">
                  LOK LENS
                </span>
                <span className="text-2xl sm:text-3xl font-black text-[#D71920] tracking-wide">
                  NEWS
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#D71920] font-bold font-hindi tracking-wide mt-0.5">
                आपकी आवाज़, आपकी खबर
              </p>
              <p className="text-[11px] text-gray-500 font-hindi hidden sm:block">
                उत्तराखंड व देश-दुनिया की निष्पक्ष एवं ताज़ा खबरें
              </p>
            </div>
          </Link>

          {/* Right Header: Modern Search Bar */}
          <div className="flex items-center w-full md:w-auto md:min-w-[320px] lg:min-w-[380px] justify-end">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="खबरें, मुद्दे, शहर या नेता खोजें..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm border border-gray-300 rounded-full bg-gray-50 focus:bg-white focus:outline-none focus:border-[#078DD0] focus:ring-1 focus:ring-[#078DD0] transition-all font-hindi"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5 sm:top-3" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 sm:top-3 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
