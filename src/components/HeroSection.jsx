import React from "react";
import Intro from "../assets/vid.mp4";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-black py-16 text-white">
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
<div className="relative mt-14">
  {/* Video wrapper – overflow only here */}
  <div className="overflow-hidden rounded-2xl">
    <video
      src={Intro}
      autoPlay
      loop
      muted
      className="h-full w-full object-cover"
    />
  </div>

  {/* CONTACT US button – now free, no clipping */}
  <div className="absolute -right-8 -top-8 z-20">
    <div className="relative h-[150px] w-[150px]">
      {/* Rotating ring */}
      <div className="absolute inset-0 animate-spin-slower rounded-full bg-[#FFD400]">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <path
              id="circlePath"
              d="
                M 50,50
                m -38,0
                a 38,38 0 1,1 76,0
                a 38,38 0 1,1 -76,0
              "
            />
          </defs>

          <text
            fill="#000"
            fontSize="6.2"
            fontWeight="500"
            letterSpacing="2.5"
          >
            <textPath href="#circlePath">
              ✱ CONTACT US ✱ CONTACT US ✱ CONTACT US ✱
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center play button */}
      <button className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:scale-105">
        <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-black">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
