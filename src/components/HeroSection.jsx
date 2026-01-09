import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-black text-white py-16">
      <div className="mx-auto max-w-7xl px-12 py-16">
        {/* Top Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left Heading */}
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              We Create the Future <br />
              <span className="text-emerald-400">of Digital Media</span>
            </h1>
          </div>

          {/* Right Description */}
          <div className="space-y-4 text-sm text-white/70">
            <p>
              Atlas Creative Co. is a California-based creative marketing agency
              delivering breakthrough social media, design, web, and AI-powered
              animation experiences for brands ready to lead.
            </p>

            <div className="flex items-center gap-3">
              {/* Avatars */}
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i + 10}`}
                    alt="avatar"
                    className="h-8 w-8 rounded-full border border-black"
                  />
                ))}
              </div>
              <span className="text-xs text-white/60">
                +200 popular clients
              </span>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative mt-14 overflow-hidden rounded-2xl">
          <video
            className="h-[420px] w-full object-cover md:h-[520px]"
            poster="https://images.unsplash.com/photo-1517976487492-5750f3195933"
          />

          {/* Play Button */}
          <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              className="ml-1 h-6 w-6 fill-black"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* Floating Contact Badge */}
        <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 md:block">
          <div className="relative h-28 w-28 rounded-full bg-yellow-400 text-black">
            <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
              CONTACT US
            </div>
            <div className="absolute inset-3 rounded-full border border-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
