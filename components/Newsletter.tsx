"use client";

import React, { useState } from "react";
import { Mail, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import {
  FacebookIcon,
  TwitterXIcon,
  InstagramIcon,
  YoutubeIcon,
  TelegramIcon,
} from "./SocialIcons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "validated">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleValidate = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!emailRegex.test(email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address (e.g., name@domain.com).");
      return;
    }

    // Frontend validation successful
    setStatus("validated");
    setErrorMessage("");
  };

  return (
    <section className="w-full py-10 sm:py-12 bg-gradient-to-r from-[#171717] via-[#222428] to-[#171717] text-white">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D71920]/20 border border-[#D71920]/40 text-[#ff4b52] text-xs font-bold uppercase tracking-wider mb-4 font-hindi">
            <Mail className="w-3.5 h-3.5" />
            लोक लेंस विशेष बुलेटिन
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-hindi">
            लोक लेंस न्यूज़ से जुड़े रहें
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-300 font-hindi">
            आपकी आवाज़, आपकी खबर — उत्तराखंड व देश-दुनिया की निष्पक्ष खबरें सीधे अपने इनबॉक्स में पाएं
          </p>
          <p className="mt-1 text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-hindi">
            रोजाना सुबह का सार, प्रमुख राजनीतिक हलचल और विशेष विश्लेषणात्मक रिपोर्ट मुफ्त प्राप्त करें।
          </p>

          {/* Subscription Form */}
          <form onSubmit={handleValidate} className="mt-6 sm:mt-8 max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="अपना ईमेल पता दर्ज करें..."
                  className="w-full px-4 py-3 pl-10 rounded-md bg-white/10 border border-gray-600 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#D71920] focus:ring-1 focus:ring-[#D71920] transition-colors font-hindi"
                />
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#D71920] hover:bg-[#b5141a] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-md cursor-pointer font-hindi"
              >
                <span>सब्सक्राइब करें</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Validation Feedback Messages */}
            {status === "error" && (
              <div className="mt-2 text-xs text-red-400 flex items-center justify-center gap-1.5 animate-in fade-in">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {status === "validated" && (
              <div className="mt-2.5 p-2 rounded bg-green-950/70 border border-green-700/60 text-xs text-green-300 flex items-center justify-center gap-2 animate-in fade-in">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span>
                  Valid email format verified! (Backend newsletter dispatch service is configured for Phase 2).
                </span>
              </div>
            )}
          </form>

          {/* Social Follow Links */}
          <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <span>Follow Lok Lens News on Official Channels:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-[#078DD0] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-[#078DD0] text-white flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-[#D71920] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-[#D71920] text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-[#078DD0] text-white flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
