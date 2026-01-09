import React from "react";
import bg from "../assets/stats-bg.jpg";

export default function StatsSection() {
  return (
    <section
      className="relative w-full bg-black bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-y-12 text-center md:grid-cols-4">
          
          <div>
            <h3 className="text-4xl md:text-5xl font-semibold text-white">
              05+
            </h3>
            <p className="mt-2 text-sm md:text-base text-white/70">
              Years of experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-semibold text-white">
              200+
            </h3>
            <p className="mt-2 text-sm md:text-base text-white/70">
              Satisfied Customers
            </p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-semibold text-white">
              2+
            </h3>
            <p className="mt-2 text-sm md:text-base text-white/70">
              Awards Won
            </p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-semibold text-white">
              200+
            </h3>
            <p className="mt-2 text-sm md:text-base text-white/70">
              Completed Projects
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
