// components/AboutHero.jsx
import React from "react";

export default function AboutHero() {
  return (
    <section className="w-full bg-black px-4 mt-10 pt-16 pb-10 md:pt-20 md:pb-14">
      <div className="mx-auto max-w-6xl">
        {/* Top tiny label */}
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-white/70">
            ABOUT US
          </p>

          {/* Headline */}
          <h1 className="mx-auto mt-4 max-w-[980px] font-serif text-[34px] leading-[1.05] tracking-tight text-white sm:text-[44px] md:text-[56px]">
            We invent, craft, and fuel content
            <br className="hidden sm:block" />
            driven experiences that{" "}
            <span className="text-amber-400">achieve more for global brands.</span>
          </h1>
        </div>

        {/* Image card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=2000&q=80"
              alt="Production camera shoot"
              className="h-[240px] w-full object-cover sm:h-[320px] md:h-[420px]"
            />
            {/* subtle edge-dark like screenshot */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
