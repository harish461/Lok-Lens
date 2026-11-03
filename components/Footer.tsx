"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  ChevronUp,
} from "lucide-react";
import {
  FacebookIcon,
  TwitterXIcon,
  InstagramIcon,
  YoutubeIcon,
  TelegramIcon,
} from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categories = [
    { name: "देश (National)", href: "#national" },
    { name: "प्रदेश (उत्तराखंड)", href: "#pradesh" },
    { name: "समाज (Society)", href: "#lifestyle" },
    { name: "राजनीति (Politics)", href: "#politics" },
    { name: "खेल (Sports)", href: "#sports" },
    { name: "दुनिया (World)", href: "#international" },
    { name: "वीडियो (Video)", href: "#video-news" },
    { name: "विचार (Opinion)", href: "#opinion" },
  ];

  const quickLinks = [
    { name: "हमारे बारे में", href: "#about" },
    { name: "संपादकीय नीति व मानक", href: "#editorial" },
    { name: "तथ्य-जांच नीति (Fact Check)", href: "#factcheck" },
    { name: "शिकायत निवारण अधिकारी", href: "#grievance" },
    { name: "गोपनीयता नीति (Privacy)", href: "#privacy" },
    { name: "नियम व शर्तें (Terms)", href: "#terms" },
    { name: "विज्ञापन दें", href: "#advertise" },
    { name: "संपर्क करें", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[#111315] text-gray-300 border-t-4 border-[#D71920]">
      {/* Main Footer Columns */}
      <div className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Brand & Editorial Mission (4 of 12) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="flex items-center gap-3 group mb-4">
              <div className="relative w-14 h-14 rounded-md overflow-hidden border border-gray-700 bg-white shadow-xs">
                <Image
                  src="/images/loklens-logo.jpg"
                  alt="Lok Lens News Official Logo"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold text-white tracking-tight">
                    LOK LENS
                  </span>
                  <span className="text-xl font-black text-[#D71920] tracking-wide">
                    NEWS
                  </span>
                </div>
                <span className="text-xs text-[#D71920] font-bold font-hindi tracking-wide">
                  आपकी आवाज़, आपकी खबर
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-[13px] text-gray-400 font-hindi leading-relaxed">
              लोक लेंस न्यूज़ उत्तराखंड, देश और दुनिया की सच्ची, निष्पक्ष और तेज़ खबरें आप तक पहुंचाने के लिए प्रतिबद्ध डिजिटल न्यूज़ मीडिया पोर्टल है।
            </p>

            <div className="mt-4 p-3 rounded bg-gray-900/80 border border-gray-800 text-[11px] text-gray-400 flex items-center gap-2 font-hindi">
              <ShieldCheck className="w-4 h-4 text-[#078DD0] shrink-0" />
              <span>
                प्रेस काउंसिल एवं डिजिटल मीडिया आचार संहिता का पूर्ण अनुपालन।
              </span>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/share/14oHT61Yfq8/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-gray-800 hover:bg-[#078DD0] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-gray-800 hover:bg-[#078DD0] text-white flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/loklens_news?igsh=MXB5a2VwZzg2cmU3MA=="
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-gray-800 hover:bg-[#D71920] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@loklensnews?si=6f1shocna_onuuw2"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-gray-800 hover:bg-[#D71920] text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-gray-800 hover:bg-[#078DD0] text-white flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: News Categories (3 of 12) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4 pb-2 border-b border-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D71920] rounded-xs" />
              News Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    className="hover:text-white hover:translate-x-1 transition-all inline-block text-gray-400"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Ethics (2 of 12) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4 pb-2 border-b border-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#078DD0] rounded-xs" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 transition-all inline-block text-gray-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Bureau (3 of 12) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4 pb-2 border-b border-gray-800 flex items-center gap-2 font-hindi">
              <span className="w-2 h-2 bg-yellow-500 rounded-xs" />
              संपर्क व ब्यूरो
            </h4>
            <div className="space-y-3 text-xs text-gray-400 font-hindi">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <span>
                  लोक लेंस न्यूज़ नेटवर्क<br />
                  रानीखेत • अल्मोड़ा • देहरादून,<br />
                  उत्तराखंड (भारत)
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#078DD0] shrink-0" />
                <a
                  href="mailto:contact@loklensnews.com"
                  className="hover:text-white transition-colors"
                >
                  contact@loklensnews.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-green-500 shrink-0" />
                <span>+91 94120 00000 / +91 11 4890 2200</span>
              </div>
            </div>

            {/* Newsletter Mini Callout */}
            <div className="mt-5 p-3 rounded bg-gray-900 border border-gray-800 text-[11px]">
              <span className="font-bold text-white block mb-1">
                Press Releases & Pitch Submissions
              </span>
              <p className="text-gray-400">
                Send verified whistleblower tips & releases to tips@loklensnews.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-[#0b0c0e] py-4 border-t border-gray-800/80 text-[11px] text-gray-500">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} Lok Lens News. All rights reserved. Reproduction in whole or part without permission is prohibited.
          </div>
          <div className="flex items-center gap-4">
            <Link href="#privacy" className="hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link href="#terms" className="hover:text-gray-300 transition-colors">
              Terms
            </Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
