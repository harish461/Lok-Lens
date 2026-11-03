import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TRENDING_ARTICLES } from "@/lib/data/news";
import AdvertisementBanner from "./AdvertisementBanner";
import { Flame, Clock, Eye, TrendingUp, ArrowRight } from "lucide-react";

export default function TrendingSidebar() {
  return (
    <aside className="w-full flex flex-col gap-6">
      {/* Most Popular Right Now Card Box */}
      <div className="bg-white rounded-lg border border-gray-200/90 shadow-2xs overflow-hidden">
        {/* Header with Red Accent Underline */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D71920] pulse-dot" />
            <h3 className="text-sm font-black uppercase tracking-wider text-[#171717] flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#D71920]" />
              Most Popular Right Now
            </h3>
          </div>
          <span className="text-[10px] font-bold text-[#078DD0] uppercase tracking-wide">
            Live Rank
          </span>
        </div>

        {/* Numbered Ranked Articles List */}
        <div className="divide-y divide-gray-100">
          {TRENDING_ARTICLES.map((article, index) => (
            <Link
              key={article.id}
              href={`#${article.slug}`}
              className="p-3.5 flex items-start gap-3.5 hover:bg-gray-50/80 transition-colors group"
            >
              {/* Bold Editorial Ranking Number (01, 02, etc.) */}
              <div
                className={`w-7 text-center font-black text-xl sm:text-2xl leading-none shrink-0 pt-0.5 ${
                  index === 0
                    ? "text-[#D71920]"
                    : index === 1
                    ? "text-[#078DD0]"
                    : "text-gray-300 group-hover:text-gray-500"
                } transition-colors`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Thumbnail Image */}
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded overflow-hidden shrink-0 bg-gray-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="80px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title & Metadata */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#078DD0]">
                    {article.category}
                  </span>
                  <span className="text-[10px] text-gray-400">•</span>
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    {article.publishedAt.split("•")[0]}
                  </span>
                </div>

                <h4 className="text-xs font-bold leading-snug text-[#171717] group-hover:text-[#D71920] transition-colors line-clamp-2">
                  {article.title}
                </h4>

                <div className="mt-1 flex items-center gap-3 text-[10px] text-gray-500">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3 text-gray-400" />
                    {article.views?.toLocaleString()}
                  </span>
                  <span className="text-gray-400">{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Sidebar Ad Placement (300x250) */}
      <AdvertisementBanner size="sidebar" slotName="Lok Lens Executive Display" />

      {/* Hot Topics & Tags Cloud */}
      <div className="bg-white rounded-lg border border-gray-200/90 shadow-2xs p-4">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#171717] mb-3 pb-2 border-b border-gray-100 flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-[#078DD0]" />
          Trending Tags & Topics
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {[
            "National Economy",
            "Cabinet Decisions",
            "General Elections 2027",
            "Semiconductor Mission",
            "Green Energy",
            "Border-Gavaskar Trophy",
            "Varanasi Express",
            "UPI Global",
            "Space Research",
            "Box Office India",
          ].map((tag) => (
            <Link
              key={tag}
              href={`#${tag.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[11px] font-medium px-2.5 py-1 bg-gray-100 text-gray-700 rounded hover:bg-[#D71920] hover:text-white transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

