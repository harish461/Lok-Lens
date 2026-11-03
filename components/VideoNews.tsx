"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VIDEO_ARTICLES } from "@/lib/data/news";
import { VideoArticle } from "@/lib/data/types";
import { Play, Eye, Clock, X, Radio, ArrowRight } from "lucide-react";

export default function VideoNews() {
  const [activeModalVideo, setActiveModalVideo] = useState<VideoArticle | null>(null);

  const mainVideo = VIDEO_ARTICLES.find((v) => v.isMain) || VIDEO_ARTICLES[0];
  const sideVideos = VIDEO_ARTICLES.filter((v) => !v.isMain).slice(0, 3);

  return (
    <section id="video-news" className="w-full py-8 sm:py-10 bg-[#121417] text-white">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Section Title with Live Video Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-6 border-b border-gray-800 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-3.5 h-3.5 rounded-full bg-[#D71920] pulse-dot" />
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white flex items-center gap-2">
              LOK LENS VIDEO NEWS • वीडियो बुलेटिन
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="flex items-center gap-1 text-[#078DD0] font-semibold">
              <Radio className="w-3.5 h-3.5" /> 24/7 Digital Desk
            </span>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Large Video (7 of 12) */}
          <div className="lg:col-span-7">
            <div
              onClick={() => setActiveModalVideo(mainVideo)}
              className="relative w-full h-[280px] sm:h-[380px] md:h-[420px] rounded-lg overflow-hidden bg-black group cursor-pointer border border-gray-800 shadow-xl"
            >
              <Image
                src={mainVideo.thumbnail}
                alt={mainVideo.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-103 transition-all duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />

              {/* Red Big Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D71920] text-white flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-[#a90f16] transition-all duration-300">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                </div>
              </div>

              {/* Video Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-[#D71920] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-xs flex items-center gap-1">
                  <Radio className="w-2.5 h-2.5 pulse-dot" /> Special Report
                </span>
                <span className="bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-1 rounded">
                  {mainVideo.duration}
                </span>
              </div>

              {/* Title & Metadata */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white">
                <div className="flex items-center gap-3 text-xs text-gray-300 mb-2">
                  <span className="text-[#078DD0] font-bold uppercase tracking-wider">
                    {mainVideo.category}
                  </span>
                  <span>•</span>
                  <span>{mainVideo.publishedAt}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {mainVideo.views}
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black leading-tight text-white group-hover:text-red-300 transition-colors">
                  {mainVideo.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Supporting 3 Videos (5 of 12) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {sideVideos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setActiveModalVideo(vid)}
                className="flex items-center gap-4 bg-gray-900/90 hover:bg-gray-800/90 border border-gray-800 rounded-lg p-3 group cursor-pointer transition-all duration-200"
              >
                {/* Thumbnail with mini play overlay */}
                <div className="relative w-32 sm:w-36 h-22 sm:h-24 rounded overflow-hidden shrink-0 bg-black">
                  <Image
                    src={vid.thumbnail}
                    alt={vid.title}
                    fill
                    sizes="150px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#D71920]/90 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                    {vid.duration}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-1">
                    <span className="text-[#078DD0] font-semibold uppercase">
                      {vid.category}
                    </span>
                    <span>•</span>
                    <span>{vid.publishedAt}</span>
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-white group-hover:text-red-300 transition-colors line-clamp-2 leading-snug">
                    {vid.title}
                  </h4>
                  <span className="mt-1.5 text-[10px] text-gray-400 flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {vid.views}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Player Modal Preview */}
        {activeModalVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 bg-black border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D71920] pulse-dot" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Lok Lens Video Player
                  </span>
                </div>
                <button
                  onClick={() => setActiveModalVideo(null)}
                  className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Simulation Screen */}
              <div className="relative w-full aspect-video bg-black flex flex-col items-center justify-center p-6 text-center">
                <Image
                  src={activeModalVideo.thumbnail}
                  alt={activeModalVideo.title}
                  fill
                  className="object-cover opacity-40 blur-xs"
                />
                <div className="relative z-10 max-w-lg">
                  <div className="w-16 h-16 rounded-full bg-[#D71920] text-white flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {activeModalVideo.title}
                  </h3>
                  <p className="text-xs text-gray-300">
                    High Definition Lok Lens News Broadcast Feed • Duration: {activeModalVideo.duration}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 bg-[#078DD0] text-white text-xs font-semibold rounded-full">
                    Streaming Server Ready
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-gray-950 flex items-center justify-between text-xs text-gray-400">
                <span>Published: {activeModalVideo.publishedAt}</span>
                <span>Views: {activeModalVideo.views}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

