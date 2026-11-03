"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export interface NavItem {
  name: string;
  nameHi: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

// Exactly matching the attached navigation menu reference image:
// [Home Icon] | देश | प्रदेश | समाज | राजनीति | खेल | दुनिया | वीडियो | विचार
export const NAV_ITEMS: NavItem[] = [
  {
    name: "Desh",
    nameHi: "देश",
    href: "#national",
    submenu: [
      { name: "राष्ट्रीय खबरें", href: "#national" },
      { name: "दिल्ली व राज्य", href: "#national" },
      { name: "सुरक्षा व सेना", href: "#national" },
    ],
  },
  {
    name: "Pradesh",
    nameHi: "प्रदेश",
    href: "#pradesh",
    submenu: [
      { name: "देहरादून लाइव", href: "#pradesh" },
      { name: "अल्मोड़ा व रानीखेत", href: "#pradesh" },
      { name: "हल्द्वानी व नैनीताल", href: "#pradesh" },
      { name: "हरिद्वार व ऋषिकेश", href: "#pradesh" },
    ],
  },
  {
    name: "Samaj",
    nameHi: "समाज",
    href: "#lifestyle",
    submenu: [
      { name: "संस्कृति व परंपरा", href: "#lifestyle" },
      { name: "पहाड़ का जनजीवन", href: "#lifestyle" },
      { name: "स्वास्थ्य व शिक्षा", href: "#lifestyle" },
    ],
  },
  {
    name: "Rajniti",
    nameHi: "राजनीति",
    href: "#politics",
    submenu: [
      { name: "विधानसभा व संसद", href: "#politics" },
      { name: "सियासी हलचल", href: "#politics" },
      { name: "जनमंथन", href: "#politics" },
    ],
  },
  {
    name: "Khel",
    nameHi: "खेल",
    href: "#sports",
    submenu: [
      { name: "क्रिकेट लाइव", href: "#sports" },
      { name: "खेल महाकुंभ", href: "#sports" },
      { name: "राष्ट्रीय व स्थानीय खेल", href: "#sports" },
    ],
  },
  {
    name: "Duniya",
    nameHi: "दुनिया",
    href: "#international",
    submenu: [
      { name: "अंतरराष्ट्रीय समाचार", href: "#international" },
      { name: "पड़ोसी देश व कूटनीति", href: "#international" },
    ],
  },
  {
    name: "Video",
    nameHi: "वीडियो",
    href: "#video-news",
  },
  {
    name: "Vichar",
    nameHi: "विचार",
    href: "#opinion",
    submenu: [
      { name: "संपादकीय", href: "#opinion" },
      { name: "विशेष स्तंभ", href: "#opinion" },
      { name: "जन आवाज", href: "#opinion" },
    ],
  },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full bg-white border-y border-gray-200 transition-all duration-200 z-50 ${
          isSticky ? "sticky top-0 shadow-sm" : "relative"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex items-center justify-between lg:justify-start h-12">
            {/* Mobile Header Elements: Red Home + Title + Hamburger */}
            <div className="flex items-center justify-between w-full lg:hidden">
              <div className="flex items-center">
                <Link
                  href="/"
                  onClick={() => setActiveItem("Home")}
                  className="bg-[#D71920] text-white px-4 h-12 flex items-center justify-center rounded-l"
                  title="होम"
                >
                  <Home className="w-5 h-5 fill-white text-white" />
                </Link>
                <span className="ml-3 font-extrabold text-sm sm:text-base text-[#171717] tracking-tight">
                  LOK LENS <span className="text-[#D71920]">NEWS</span>
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded text-gray-800 hover:text-[#D71920] focus:outline-none"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Desktop Navigation Links matching attached image */}
            <div className="hidden lg:flex items-center h-full w-full">
              {/* Red Home Icon Button */}
              <Link
                href="/"
                onClick={() => setActiveItem("Home")}
                className="bg-[#D71920] hover:bg-[#A90F16] text-white px-5 h-12 flex items-center justify-center transition-colors mr-2 shrink-0 rounded-l"
                title="होम"
              >
                <Home className="w-5 h-5 fill-white text-white" />
              </Link>

              {/* Exact Menu Items: देश | प्रदेश | समाज | राजनीति | खेल | दुनिया | वीडियो | विचार */}
              <div className="flex items-center h-full space-x-1 xl:space-x-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeItem === item.name;
                  const hasSubmenu = item.submenu && item.submenu.length > 0;

                  return (
                    <div
                      key={item.name}
                      className="relative h-full flex items-center"
                      onMouseEnter={() => hasSubmenu && setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setActiveItem(item.name)}
                        className={`flex items-center gap-1 px-4 xl:px-5 h-full text-[15px] xl:text-[16px] font-bold transition-colors font-hindi tracking-wide ${
                          isActive
                            ? "text-[#D71920] border-b-2 border-[#D71920]"
                            : "text-[#171717] hover:text-[#D71920] border-b-2 border-transparent"
                        }`}
                      >
                        {item.nameHi}
                        {hasSubmenu && (
                          <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                        )}
                      </Link>

                      {/* Dropdown Menu */}
                      {hasSubmenu && activeDropdown === item.name && (
                        <div className="absolute top-full left-0 w-48 bg-white text-[#171717] shadow-lg rounded-b-md border-t-2 border-[#D71920] py-2 z-50 animate-in fade-in-50 slide-in-from-top-1 duration-150">
                          {item.submenu?.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => {
                                setActiveItem(item.name);
                                setActiveDropdown(null);
                              }}
                              className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-red-50 hover:text-[#D71920] transition-colors font-hindi"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation (Side Slide-out with only the attached menu links) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-4/5 max-w-xs bg-white text-gray-900 h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 bg-[#D71920] text-white">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 fill-white text-white" />
                <span className="font-extrabold text-base tracking-wide font-hindi">
                  लोक लेंस न्यूज़
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded hover:bg-black/20 text-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Category Links (Only attached links) */}
            <div className="py-2 flex-1 font-hindi">
              {/* Home */}
              <Link
                href="/"
                onClick={() => {
                  setActiveItem("Home");
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2.5 px-4 py-3 text-sm font-bold border-l-4 transition-colors ${
                  activeItem === "Home"
                    ? "border-[#D71920] bg-red-50 text-[#D71920]"
                    : "border-transparent text-gray-800 hover:bg-gray-50 hover:text-[#D71920]"
                }`}
              >
                <Home className="w-4 h-4 text-[#D71920]" />
                <span>होम</span>
              </Link>

              {NAV_ITEMS.map((item) => (
                <div key={item.name} className="border-t border-gray-100">
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 text-sm font-bold border-l-4 transition-colors ${
                      activeItem === item.name
                        ? "border-[#D71920] bg-red-50 text-[#D71920]"
                        : "border-transparent text-gray-800 hover:bg-gray-50 hover:text-[#D71920]"
                    }`}
                  >
                    <span>{item.nameHi}</span>
                  </Link>

                  {/* Mobile Submenu items */}
                  {item.submenu && (
                    <div className="bg-gray-50 py-1 pl-6 pr-4 space-y-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => {
                            setActiveItem(item.name);
                            setIsMobileMenuOpen(false);
                          }}
                          className="block py-1.5 text-xs text-gray-600 hover:text-[#D71920] transition-colors"
                        >
                          • {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Actions Footer */}
            <div className="p-4 border-t border-gray-200 bg-gray-50 text-xs font-hindi">
              <p className="text-[11px] text-gray-500 mb-2">
                लोक लेंस न्यूज़ — आपकी आवाज़, आपकी खबर
              </p>
              <div className="text-[10px] text-gray-400">
                © 2026 Lok Lens News. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
