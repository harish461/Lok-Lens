"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LATEST_NEWS_ARTICLES } from "@/lib/data/news";
import { Clock, Eye, ArrowRight, Share2, Bookmark } from "lucide-react";

export default function LatestNews() {
  return (
    <section className="w-full py-6 sm:py-8 bg-white border-y border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Section Heading with Red Underline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 mb-6 border-b-2 border-gray-200 relative">
          <div>
            <div className="text-[11px] font-bold text-[#D71920] uppercase tracking-widest mb-0.5 font-hindi">
              ताज़ा अपडेट्स • BREAKING UPDATES
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#171717] font-hindi">
              लेटेस्ट खबरें
            </h2>
          </div>
          {/* Active category pill filter / tabs */}
          <div className="flex items-center gap-2 overflow-x-auto text-xs pb-1 sm:pb-0 scrollbar-none font-hindi">
            {["सभी", "प्रदेश", "राजनीति", "व्यापार", "खेल"].map((tab, idx) => (
              <button
                key={tab}
                type="button"
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  idx === 0
                    ? "bg-[#D71920] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Signature Red Underline bar */}
          <div className="absolute -bottom-[2px] left-0 w-24 h-[2px] bg-[#D71920]" />
        </div>

        {/* Responsive Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LATEST_NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-[#F7F8FA] rounded-lg border border-gray-200 overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300"
            >
              <Link href={`#${article.slug}`} className="block flex flex-col h-full">
                {/* Image Container with Zoom effect */}
                <div className="relative w-full h-[200px] sm:h-[210px] overflow-hidden bg-gray-200">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#D71920] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded shadow-xs">
                      {article.category}
                    </span>
                  </div>

                  {/* Read Time Pill */}
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded">
                    {article.readTime}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Timestamp & Author */}
                    <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2">
                      <span className="flex items-center gap-1 font-medium text-gray-600">
                        <Clock className="w-3 h-3 text-[#078DD0]" />
                        {article.publishedAt}
                      </span>
                      <span>•</span>
                      <span>By {article.author.name}</span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-base font-extrabold text-[#171717] group-hover:text-[#D71920] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-2 text-xs sm:text-[13px] text-[#555555] line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read More Footer */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#078DD0] group-hover:text-[#D71920] flex items-center gap-1 transition-colors font-hindi">
                      पूरा पढ़ें <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[11px] text-gray-400 flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {article.views?.toLocaleString()}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* View More Latest News Button */}
        <div className="mt-8 text-center">
          <button
            type="button"
            className="px-6 py-2.5 bg-white border border-gray-300 text-gray-800 text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#D71920] hover:text-white hover:border-[#D71920] transition-all shadow-xs cursor-pointer inline-flex items-center gap-2 font-hindi"
          >
            और ताज़ा खबरें देखें
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

