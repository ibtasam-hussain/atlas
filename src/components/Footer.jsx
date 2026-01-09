import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-red-500 via-yellow-400 to-blue-500" />
              <span className="text-sm font-semibold">Kaleidoscope</span>
            </div>

            <p className="max-w-xs text-sm text-white/60">
              Atlas Creative Co. is a California-based creative marketing agency
              delivering breakthrough social media, design, web, and AI-powered
              animation experiences for brands ready to lead.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4 text-white/50">
              <span className="cursor-pointer hover:text-white">ⓕ</span>
              <span className="cursor-pointer hover:text-white">ⓣ</span>
              <span className="cursor-pointer hover:text-white">ⓘ</span>
            </div>
          </div>

          {/* Middle links */}
          <div>
            <ul className="space-y-4 text-sm">
              {["Home", "About Us", "Portfolios", "Services", "Contact Us"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between border-b border-white/10 pb-2 text-white/70 hover:text-white"
                  >
                    {item}
                    <span className="text-xs">↗</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right links */}
          <div>
            <ul className="space-y-4 text-sm">
              {[
                "Gumroad",
                "Figma Community",
                "Comming soon...",
                "Comming soon...",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between border-b border-white/10 pb-2 text-white/70 hover:text-white"
                >
                  {item}
                  <span className="text-xs">↗</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© Copyright 2023 Kaleidoscope. All Rights Reserved</p>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white">
              Terms & Conditions
            </span>
            <span className="cursor-pointer hover:text-white">Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
