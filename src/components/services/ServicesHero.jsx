// components/ServicesHero.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="w-full bg-black px-4 pt-16 pb-14 md:pt-20 md:pb-20">
      <div className="mx-auto max-w-6xl">
        {/* Top label + heading */}
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-white/60">
            SERVICES
          </p>

          <h1 className="mx-auto mt-4 max-w-[980px] font-serif text-[34px] leading-[1.05] tracking-tight text-white sm:text-[44px] md:text-[56px]">
            We provide amazing{" "}
            <span className="text-sky-400">video solutions</span>
          </h1>
        </div>

        {/* Image card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?auto=format&fit=crop&w=2000&q=80"
              alt="Video production"
              className="h-[240px] w-full object-cover sm:h-[320px] md:h-[420px]"
            />
            {/* subtle vignette like design */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          </div>
        </div>

        {/* Bottom content */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[1.05fr_1fr] md:gap-12">
          {/* Left big heading */}
          <div>
            <h2 className="font-serif text-[34px] leading-[1.05] tracking-tight text-white sm:text-[40px]">
              We help companies find{" "}
              <span className="block">their way to greatness.</span>
            </h2>
          </div>

          {/* Right text + button */}
          <div className="flex flex-col">
            <div className="space-y-4 text-[12px] leading-6 text-white/65">
              <p>
                We are in the thick of the digital age, and video has become one
                of the most powerful storytelling and brand communication tools.
                But did you know that behind every captivating video lies a
                creative team skilled in the art of professional video
                production?
              </p>
              <p>
                At Kaleidoscope Studio, we’re at the forefront of this art. We
                bring individuals’ and organizations’ visions to life through
                high-quality, professional video production that shakes things
                up.
              </p>
            </div>

            <div className="mt-7">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[12px] font-semibold text-black transition hover:bg-white/95 active:scale-[0.99]"
              >
                View Portfolios <span className="text-sm">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
