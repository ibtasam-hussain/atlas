// components/ServicesList.jsx
import React, { useMemo, useState } from "react";

export default function ServicesList() {
  const items = useMemo(
    () => [
      "Commercials",
      "Multi Camera Broadcast",
      "Music Videos",
      "Coporate / Product Videos",
      "Marketing Videos",
      "Event / Wedding Videos",
    ],
    []
  );

  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-black px-4 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-center font-serif text-[30px] leading-[1.05] tracking-tight text-white sm:text-[36px] md:text-[44px]">
          We provide a wide
          <br className="hidden sm:block" />
          range of services
        </h2>

        {/* List */}
        <div className="mt-12">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {items.map((label, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={label}
                  type="button"
                  onMouseEnter={() => setActive(idx)}
                  onFocus={() => setActive(idx)}
                  className={[
                    "group flex w-full items-center justify-between gap-6 px-1 py-5 text-left",
                    "transition-colors",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "font-serif text-[24px] sm:text-[26px] md:text-[28px]",
                      isActive ? "text-white" : "text-white/85",
                    ].join(" ")}
                  >
                    {label}
                  </span>

                  {/* right icon */}
                  <span
                    className={[
                      "grid h-10 w-10 place-items-center rounded-full border",
                      isActive
                        ? "border-sky-400 bg-sky-400 text-black"
                        : "border-white/15 text-white/55",
                      "transition",
                    ].join(" ")}
                    aria-hidden="true"
                  >
  ↗
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
