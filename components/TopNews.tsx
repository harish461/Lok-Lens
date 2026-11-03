"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TOP_NEWS_LEAD, TOP_NEWS_GRID } from "@/lib/data/news";
import TrendingSidebar from "./TrendingSidebar";
import { Clock, Eye, Camera, ArrowRight, User } from "lucide-react";

export default function TopNews() {
  return (
    <section id="pradesh" className="w-full py-4 sm:py-6 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Section Title with Red Border Indicator */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#D71920] rounded-xs" />
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#171717]">
              TOP NEWS • प्रमुख समाचार
            </h2>
          </div>
          <span className="text-xs font-semibold text-[#078DD0] hover:text-[#D71920] cursor-pointer flex items-center gap-1 transition-colors">
            View All Top Stories <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* 70% Main Content / 30% Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Content Area (70% on desktop: lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Lead Top News Article (Inspired by the big feature in inspiration image) */}
            <article className="bg-white rounded-lg border border-gray-200/90 shadow-2xs overflow-hidden group">
              <Link href={`#${TOP_NEWS_LEAD.slug}`} className="block">
                {/* Large Featured Image */}
                <div className="relative w-full h-[260px] sm:h-[360px] md:h-[420px] bg-gray-900 overflow-hidden">
                  <Image
                    src={TOP_NEWS_LEAD.image}
                    alt={TOP_NEWS_LEAD.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Camera icon in center like inspiration image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-xs border border-white/30 flex items-center justify-center text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-[#D71920] transition-all shadow-md">
                      <Camera className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D71920] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded shadow-sm">
                      {TOP_NEWS_LEAD.category}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-5 sm:p-6">
                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2.5">
                    <span className="font-semibold text-gray-700 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#078DD0]" />
                      {TOP_NEWS_LEAD.author.name}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {TOP_NEWS_LEAD.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {TOP_NEWS_LEAD.views?.toLocaleString()} reads
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-lg sm:text-2xl font-extrabold text-[#171717] group-hover:text-[#D71920] transition-colors leading-tight">
                    {TOP_NEWS_LEAD.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2.5 text-xs sm:text-sm text-[#555555] leading-relaxed line-clamp-3">
                    {TOP_NEWS_LEAD.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
                    <span className="text-[#078DD0] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Continue Reading Full Story <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-gray-400">{TOP_NEWS_LEAD.readTime}</span>
                  </div>
                </div>
              </Link>
            </article>

            {/* Supporting Two-Column Article Grid (4 articles) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {TOP_NEWS_GRID.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg border border-gray-200/90 shadow-2xs overflow-hidden flex flex-col group"
                >
                  <Link href={`#${article.slug}`} className="block flex flex-col h-full">
                    {/* Image with Camera overlay */}
                    <div className="relative w-full h-[180px] sm:h-[190px] bg-gray-100 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                      <div className="absolute top-2.5 left-2.5">
                        <span className="bg-[#078DD0] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-2xs">
                          {article.category}
                        </span>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center">
                          <Camera className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-1.5">
                          <span className="font-medium text-gray-600">
                            By {article.author.name}
                          </span>
                          <span>•</span>
                          <span>{article.publishedAt}</span>
                        </div>

                        <h4 className="text-sm font-bold leading-snug text-[#171717] group-hover:text-[#D71920] transition-colors line-clamp-2">
                          {article.title}
                        </h4>

                        <p className="mt-2 text-xs text-[#555555] line-clamp-2 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                        <span>{article.readTime}</span>
                        <span className="text-[#078DD0] font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                          Read More <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Right Sidebar (30% on desktop: lg:col-span-4) */}
          <div className="lg:col-span-4">
            <TrendingSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}

