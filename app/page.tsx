import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import BreakingNewsTicker from "@/components/BreakingNewsTicker";
import AdvertisementBanner from "@/components/AdvertisementBanner";
import FeaturedNews from "@/components/FeaturedNews";
import TopNews from "@/components/TopNews";
import LatestNews from "@/components/LatestNews";
import CategoryNews from "@/components/CategoryNews";
import VideoNews from "@/components/VideoNews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA]">
      {/* Section 1: Header */}
      <Header />

      {/* Section 2: Navigation Bar (Sticky with dropdowns & mobile menu) */}
      <Navbar />

      {/* Section 4: Breaking News Ticker */}
      <BreakingNewsTicker />

      {/* Main Editorial Content Flow */}
      <main className="flex-1">
        {/* Section 5: Featured News Grid (1 large on left + 4 in 2x2 grid on right) */}
        <FeaturedNews />

        {/* Mid-page Leaderboard Advertisement (As seen in inspiration screenshot) */}
        <div className="max-w-[1280px] mx-auto px-4 my-2">
          <AdvertisementBanner size="leaderboard" slotName="Lok Lens Mid-Page Showcase" />
        </div>

        {/* Section 6: Top News (70% main + 30% trending ranked sidebar) */}
        <TopNews />

        {/* Section 7: Latest News (3-column responsive card layout) */}
        <LatestNews />

        {/* Section 8: Category News Sections (National, Politics, Business, Tech, Entertainment, Sports, Lifestyle) */}
        <CategoryNews />

        {/* Section 9: Video News (Cinematic dark theme with play button overlay) */}
        <VideoNews />

        {/* Section 10: Newsletter (Subscription with frontend validation & social channels) */}
        <Newsletter />
      </main>

      {/* Section 11: Footer */}
      <Footer />
    </div>
  );
}
