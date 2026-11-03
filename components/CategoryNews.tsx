"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORY_ARTICLES, CATEGORIES } from "@/lib/data/news";
import { CategoryType } from "@/lib/data/types";
import { Clock, Eye, ArrowRight, ChevronRight } from "lucide-react";

export default function CategoryNews() {
  const categoriesToRender: {
    name: CategoryType;
    nameHi: string;
    id: string;
    accent: string;
    layout: "split" | "grid" | "stacked";
  }[] = [
    {
      name: "National",
      nameHi: "देश",
      id: "national",
      accent: "#D71920",
      layout: "split",
    },
    {
      name: "Politics",
      nameHi: "राजनीति",
      id: "politics",
      accent: "#A90F16",
      layout: "grid",
    },
    {
      name: "Business",
      nameHi: "व्यापार",
      id: "business",
      accent: "#057A55",
      layout: "split",
    },
    {
      name: "Technology",
      nameHi: "तकनीक",
      id: "technology",
      accent: "#6C2BD9",
      layout: "grid",
    },
    {
      name: "Entertainment",
      nameHi: "मनोरंजन",
      id: "entertainment",
      accent: "#E02424",
      layout: "split",
    },
    {
      name: "Sports",
      nameHi: "खेल",
      id: "sports",
      accent: "#D97706",
      layout: "grid",
    },
    {
      name: "International",
      nameHi: "दुनिया",
      id: "international",
      accent: "#078DD0",
      layout: "grid",
    },
    {
      name: "Lifestyle",
      nameHi: "समाज व संस्कृति",
      id: "lifestyle",
      accent: "#0891B2",
      layout: "split",
    },
  ];

  return (
    <div className="w-full space-y-12 py-6">
      {categoriesToRender.map((cat, index) => {
        const data = CATEGORY_ARTICLES[cat.name];
        if (!data) return null;
        const { featured, list } = data;

        return (
          <section
            key={cat.name}
            id={cat.id}
            className="w-full scroll-mt-20"
          >
            <div className="max-w-[1280px] mx-auto px-4">
              {/* Category Header */}
              <div className="flex items-center justify-between pb-2.5 mb-5 border-b-2 border-gray-200">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3.5 h-3.5 rounded-xs shrink-0"
                    style={{ backgroundColor: cat.accent }}
                  />
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#171717] font-hindi">
                    {cat.nameHi} <span className="text-gray-400 font-light">•</span>{" "}
                    <span className="font-normal text-gray-500 text-xs sm:text-sm uppercase tracking-wider font-sans">
                      {cat.name}
                    </span>
                  </h3>
                </div>

                <Link
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-gray-700 hover:text-[#D71920] transition-colors font-hindi"
                >
                  सभी {cat.nameHi} खबरें देखें
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Layout Variation A: Split (Featured on Left, 3 Horizontal Stacked Cards on Right) */}
              {cat.layout === "split" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                  {/* Left Featured Big Card (7 cols) */}
                  <article className="lg:col-span-7 bg-white rounded-lg border border-gray-200 overflow-hidden group shadow-2xs flex flex-col justify-between">
                    <Link href={`#${featured.slug}`} className="block">
                      <div className="relative w-full h-[240px] sm:h-[300px] overflow-hidden bg-gray-900">
                        <Image
                          src={featured.image}
                          alt={featured.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute top-3 left-3">
                          <span
                            className="text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded shadow-xs"
                            style={{ backgroundColor: cat.accent }}
                          >
                            {featured.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-5">
                        <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2">
                          <span>{featured.publishedAt}</span>
                          <span>•</span>
                          <span>By {featured.author.name}</span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-[#171717] group-hover:text-[#D71920] transition-colors leading-snug">
                          {featured.title}
                        </h4>
                        <p className="mt-2 text-xs text-[#555555] line-clamp-2 leading-relaxed">
                          {featured.excerpt}
                        </p>
                        <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs text-[#078DD0] font-semibold">
                          <span>Read Full Story</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </article>

                  {/* Right Stacked List of 3 Horizontal Cards (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col gap-3.5 justify-between">
                    {list.slice(0, 3).map((item) => (
                      <article
                        key={item.id}
                        className="bg-white rounded-lg border border-gray-200 p-3 sm:p-3.5 hover:shadow-xs transition-shadow group flex items-start gap-3.5"
                      >
                        <Link href={`#${item.slug}`} className="flex items-start gap-3.5 w-full">
                          {/* Thumbnail */}
                          <div className="relative w-24 h-20 sm:w-28 sm:h-22 rounded overflow-hidden shrink-0 bg-gray-100">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="120px"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] text-gray-400 block mb-1">
                              {item.publishedAt} • By {item.author.name}
                            </span>
                            <h5 className="text-xs sm:text-[13px] font-bold text-[#171717] group-hover:text-[#D71920] transition-colors leading-snug line-clamp-2">
                              {item.title}
                            </h5>
                            <span className="mt-2 text-[11px] text-[#078DD0] font-semibold inline-flex items-center gap-0.5">
                              Read <ArrowRight className="w-2.5 h-2.5" />
                            </span>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Layout Variation B: 4-Column Card Grid */}
              {cat.layout === "grid" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                  {/* First item is the featured card with larger emphasis */}
                  <article className="bg-white rounded-lg border border-gray-200 overflow-hidden group shadow-2xs flex flex-col justify-between">
                    <Link href={`#${featured.slug}`} className="block flex flex-col h-full">
                      <div className="relative w-full h-[160px] overflow-hidden bg-gray-900">
                        <Image
                          src={featured.image}
                          alt={featured.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span
                            className="text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-xs"
                            style={{ backgroundColor: cat.accent }}
                          >
                            Special Report
                          </span>
                        </div>
                      </div>
                      <div className="p-3.5 flex flex-col flex-1 justify-between">
                        <div>
                          <span className="text-[10px] text-gray-400 block mb-1">
                            {featured.publishedAt}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-[#171717] group-hover:text-[#D71920] transition-colors line-clamp-2 leading-snug">
                            {featured.title}
                          </h4>
                          <p className="mt-1.5 text-xs text-[#555555] line-clamp-2">
                            {featured.excerpt}
                          </p>
                        </div>
                        <div className="mt-2.5 pt-2 border-t border-gray-100 text-[11px] text-[#078DD0] font-semibold flex items-center justify-between">
                          <span>{featured.readTime}</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </article>

                  {/* 3 Supporting Cards */}
                  {list.slice(0, 3).map((item) => (
                    <article
                      key={item.id}
                      className="bg-white rounded-lg border border-gray-200 overflow-hidden group shadow-2xs flex flex-col justify-between"
                    >
                      <Link href={`#${item.slug}`} className="block flex flex-col h-full">
                        <div className="relative w-full h-[160px] overflow-hidden bg-gray-900">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 25vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                        </div>
                        <div className="p-3.5 flex flex-col flex-1 justify-between">
                          <div>
                            <span className="text-[10px] text-gray-400 block mb-1">
                              {item.publishedAt} • By {item.author.name}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-[#171717] group-hover:text-[#D71920] transition-colors line-clamp-2 leading-snug">
                              {item.title}
                            </h4>
                            <p className="mt-1.5 text-xs text-[#555555] line-clamp-2">
                              {item.excerpt}
                            </p>
                          </div>
                          <div className="mt-2.5 pt-2 border-t border-gray-100 text-[11px] text-[#078DD0] font-semibold flex items-center justify-between">
                            <span>{item.readTime}</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}

