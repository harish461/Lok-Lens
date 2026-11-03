import React from "react";

interface AdBannerProps {
  size?: "leaderboard" | "top-banner" | "sidebar" | "inline";
  className?: string;
  slotName?: string;
}

export default function AdvertisementBanner({
  size = "leaderboard",
  className = "",
  slotName = "Sponsored Ad",
}: AdBannerProps) {
  if (size === "sidebar") {
    return (
      <div className={`w-full max-w-[300px] mx-auto ${className}`}>
        <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1 text-center">
          Advertisement • विज्ञापन
        </div>
        <div className="h-[250px] w-full rounded border border-dashed border-gray-300 bg-gradient-to-br from-gray-100 to-gray-200/80 flex flex-col items-center justify-center p-4 text-center group hover:border-[#D71920] transition-colors">
          <div className="text-xs font-bold text-gray-600 group-hover:text-[#D71920] transition-colors">
            {slotName}
          </div>
          <div className="text-[11px] text-gray-500 mt-1">300 × 250 px</div>
          <div className="mt-3 px-3 py-1 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded shadow-sm group-hover:bg-[#D71920] group-hover:text-white group-hover:border-[#D71920] transition-all">
            Advertise With Us
          </div>
        </div>
      </div>
    );
  }

  if (size === "top-banner" || size === "leaderboard") {
    return (
      <div className={`w-full py-3 ${className}`}>
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">
              Sponsored Advertisement • विज्ञापन
            </span>
            <div className="w-full max-w-[970px] min-h-[90px] rounded border border-dashed border-gray-300 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 flex flex-col sm:flex-row items-center justify-between px-6 py-3 shadow-xs hover:border-[#D71920]/60 transition-colors">
              <div className="flex items-center gap-4 text-center sm:text-left mb-2 sm:mb-0">
                <div className="w-10 h-10 rounded bg-[#078DD0]/10 text-[#078DD0] font-bold flex items-center justify-center text-sm">
                  AD
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-800">
                    Lok Lens Digital Reach: Reach 5M+ Discerning Readers Daily
                  </h4>
                  <p className="text-[11px] text-gray-500 hidden sm:block">
                    Standard IAB Responsive Billboard • 970 × 90 / 728 × 90
                  </p>
                </div>
              </div>
              <button className="px-4 py-1.5 text-xs font-semibold text-white bg-[#078DD0] hover:bg-[#0671a7] rounded transition-all shadow-xs shrink-0 cursor-pointer">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Inline banner
  return (
    <div className={`w-full my-6 ${className}`}>
      <div className="w-full h-[90px] rounded border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 text-xs font-medium">
        Sponsored Content • 728 × 90 Leaderboard
      </div>
    </div>
  );
}

