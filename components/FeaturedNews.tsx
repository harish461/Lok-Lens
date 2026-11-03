"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_ARTICLES } from "@/lib/data/news";
import { Clock, Eye, Camera, Share2, ArrowRight } from "lucide-react";

export default function FeaturedNews() {
  const mainArticle = FEATURED_ARTICLES.find((a) => a.heroPosition === "main") || FEATURED_ARTICLES[0];
  const subArticles = FEATURED_ARTICLES.filter((a) => a.heroPosition !== "main").slice(0, 4);

  return (
    <section className="w-full py-4 sm:py-6">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Editorial 5-Card Featured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">
          {/* Main Large Hero Article (Left Column: 6 of 12 or 7 of 12) */}
          <div className="lg:col-span-6 xl:col-span-6 relative h-[360px] sm:h-[460px] lg:h-[500px] rounded-lg overflow-hidden group shadow-md bg-gray-900">
            <Link href={`#${mainArticle.slug}`} className="block w-full h-full">
              {/* Background Image with Zoom */}
              <Image
                src={mainArticle.image}
                alt={mainArticle.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for optimal legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity group-hover:from-black/90" />

              {/* Inspiration Image Overlay Camera Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white opacity-85 group-hover:opacity-100 group-hover:bg-[#D71920] transition-all">
                <Camera className="w-4 h-4" />
              </div>

              {/* Content Box */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 flex flex-col justify-end text-white">
                {/* Category & Metadata */}
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="bg-[#D71920] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded shadow-xs">
                    {mainArticle.category} • {mainArticle.categoryHi}
                  </span>
                  <span className="text-[11px] text-gray-300 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {mainArticle.publishedAt}
                  </span>
                  <span className="text-[11px] text-gray-300 hidden sm:flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {mainArticle.views?.toLocaleString()} views
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight text-white group-hover:text-red-200 transition-colors drop-shadow-sm">
                  {mainArticle.title}
                </h1>

                {/* Excerpt */}
                <p className="mt-2 text-xs sm:text-sm text-gray-200 line-clamp-2 leading-relaxed opacity-95">
                  {mainArticle.excerpt}
                </p>

                {/* Author Info */}
                <div className="mt-3.5 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    {mainArticle.author.avatar && (
                      <div className="w-6 h-6 rounded-full overflow-hidden relative border border-white/40">
                        <Image
                          src={mainArticle.author.avatar}
                          alt={mainArticle.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <span className="font-semibold text-white">
                      By {mainArticle.author.name}
                    </span>
                    <span className="text-gray-400 hidden sm:inline">• {mainArticle.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#078DD0] font-bold group-hover:translate-x-1 transition-transform">
                    Read Story <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column: 4 Supporting Articles in a 2x2 Grid */}
          <div className="lg:col-span-6 xl:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {subArticles.map((article, idx) => (
              <div
                key={article.id}
                className="relative h-[220px] sm:h-[240px] rounded-lg overflow-hidden group shadow-xs bg-gray-900"
              >
                <Link href={`#${article.slug}`} className="block w-full h-full">
                  {/* Background Image */}
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent transition-opacity group-hover:from-black/90" />

                  {/* Camera icon in center/corner like inspiration image */}
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white opacity-70 group-hover:opacity-100 group-hover:bg-[#078DD0] transition-all">
                    <Camera className="w-3.5 h-3.5" />
                  </div>

                  {/* Card Content */}
                  <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 flex flex-col justify-end text-white">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="bg-[#078DD0] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-2xs">
                        {article.category}
                      </span>
                      <span className="text-[10px] text-gray-300">
                        {article.publishedAt}
                      </span>
                    </div>

                    <h2 className="text-sm sm:text-[15px] font-bold leading-snug text-white group-hover:text-red-200 transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-gray-300">
                      <span>{article.readTime}</span>
                      <span className="text-[#078DD0] font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                        Read <ArrowRight className="w-2.5 h-2.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

