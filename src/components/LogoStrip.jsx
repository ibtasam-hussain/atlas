import React from "react";
import logo1 from "../assets/logo1.png";

const logos = [
  { name: "Paladora", src: logo1 },
  { name: "WeiboTV", src: logo1 },
  { name: "Homme", src: logo1 },
  { name: "HuranTV", src: logo1 },
  { name: "Matsuri", src: logo1 },
  { name: "Radical", src: logo1 },
];

export default function LogoStrip() {
  return (
    <section className="w-full bg-black">
      <div className="mx-auto max-w-7xl px-6">
        {/* Tagline */}
        <p className="mb-4 text-center text-md tracking-widest text-white/40">
          Being different. Being Creative.
        </p>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-20">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="
                h-10
                sm:h-12
                md:h-14
                lg:h-16
                opacity-90
                grayscale
                transition
                duration-300
                hover:opacity-100
                hover:grayscale-0
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}
