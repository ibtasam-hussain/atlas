// components/AboutStatsSplit.jsx
import React from "react";

export default function AboutStatsSplit() {
  return (
    <section className="w-full bg-black px-4 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-[1.05fr_1fr] md:gap-12">
          {/* Left image card */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517638851339-4aa32003c11a?auto=format&fit=crop&w=1800&q=80"
                alt="Creator working with camera"
                className="h-[320px] w-full object-cover sm:h-[380px] md:h-full md:min-h-[520px]"
              />
              {/* soft vignette similar to screenshot */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-3xl tracking-tight text-white sm:text-4xl">
              Kaleidoscope
            </h3>

            <div className="mt-4 space-y-4 text-sm leading-6 text-white/70">
              <p>
                Based in California, United States, Atlas Creative Co. is a full-service
                creative marketing agency serving brands nationwide and globally.
              </p>
              <p>
                We combine creative storytelling, cutting-edge design, and AI innovation to
                deliver results that matter — visibility, growth, and authority.
              </p>
              <p>We believe creativity isn’t optional. It’s the advantage.</p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2">
              <Stat
                value="10+"
                title="Years of experience"
                desc="We believe in building relationships with our clients."
              />
              <Stat
                value="5+"
                title="Awards Won"
                desc="We believe in building relationships with our clients."
              />
              <Stat
                value="10K+"
                title="Satisfied Customers"
                desc="We believe in building relationships with our clients."
              />
              <Stat
                value="200+"
                title="Completed Projects"
                desc="We believe in building relationships with our clients."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, title, desc }) {
  return (
    <div>
      <div className="font-serif text-2xl text-white sm:text-[28px]">{value}</div>
      <div className="mt-1 text-[12px] font-semibold tracking-tight text-white/85">
        {title}
      </div>
      <p className="mt-2 text-[12px] leading-5 text-white/55">{desc}</p>
    </div>
  );
}
