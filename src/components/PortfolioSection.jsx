import React from "react";
import port from "../assets/port.png";
import port2 from "../assets/port2.png";
import { ArrowUpRight } from "lucide-react";


export default function PortfolioSection() {
  return (
    <section className="w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left text */}
          <div>
            <p className="mb-3 text-xs tracking-widest text-white/40">
              PORTFOLIO
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              We create beautiful, <br />
              <span className="text-emerald-400">Ideas that sell.</span>
            </h2>
          </div>

          {/* Button */}
          <button className="flex items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105 md:self-center">
            View All Works
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-neutral-900">
            <img
              src={port}
              alt="Pickle Pantry"
              className="h-[360px] w-full object-cover transition group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />


          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-neutral-900">
            <img
              src={port2}
              alt="Dekaf Branding"
              className="h-[360px] w-full object-cover transition group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

      
          </div>
        </div>
      </div>
    </section>
  );
}
