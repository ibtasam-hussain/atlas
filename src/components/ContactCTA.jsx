import React from "react";
import bg from "../assets/background.png";
import { ArrowUpRight } from "lucide-react";
export default function ContactCTA() {
  return (
    <section className="w-full bg-black">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat px-10 py-16 md:px-16"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative max-w-md">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Have an idea?
            <br />
            <span className="text-emerald-400">Let’s Talk.</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/80">
            We create experiences that fuel connections between brands and the
            people vital to their success.
          </p>

<button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 hover:gap-3">
  Contact Us
  <ArrowUpRight size={16} />
</button>
        </div>
      </div>
    </section>
  );
}
