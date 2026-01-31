// components/Testimonials.jsx
import React, { useMemo, useState } from "react";

export default function Testimonials() {
  const testimonials = useMemo(
    () => [
      {
        quote:
          "I really enjoy my work and it makes me more productive, happier and more successful. The coworking place builds confidence and inspires greater performance and greater success for both employees and employers.",
        name: "Rosiena Sanberg",
        role: "Project Manager at Paladora",
        company: "Paladora",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      },
      {
        quote:
          "Atlas felt like an extension of our team. Fast turnarounds, sharp creative, and consistent quality—our content pipeline finally stopped being a bottleneck.",
        name: "Daniel Torres",
        role: "Growth Lead",
        company: "Kaleidoscope",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      },
      {
        quote:
          "The branding refresh landed perfectly. Our new visuals increased trust instantly and we saw higher conversions on the first campaign launch.",
        name: "Amina Khalid",
        role: "Marketing Manager",
        company: "Nova Retail",
        avatar:
          "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
      },
      {
        quote:
          "From strategy to design to execution, the process was smooth. The team understood the brief quickly and delivered a premium look without the premium timeline.",
        name: "Ethan Brooks",
        role: "Founder",
        company: "Studio Eleven",
        avatar:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
      },
      {
        quote:
          "We needed content that actually performs, not just looks nice. The new creative system helped us ship faster and test more angles with better results.",
        name: "Sofia Nguyen",
        role: "Head of Content",
        company: "BrightWorks",
        avatar:
          "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80",
      },
    ],
    []
  );

  // show 2 cards like screenshot
  const [start, setStart] = useState(0);

  const total = testimonials.length;
  const visible = 2;

  const current = [
    testimonials[start % total],
    testimonials[(start + 1) % total],
  ];

  const prev = () => setStart((s) => (s - 1 + total) % total);
  const next = () => setStart((s) => (s + 1) % total);

  return (
    <section className="w-full bg-black px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10.2 11.6c-.2 2.3-1.6 4-4 4-.7 0-1.3-.1-1.9-.4.5-2.3 1.7-4.5 3.4-6.2.9-.9 1.9-1.6 3.1-2 .3 1.4.5 3 .4 4.6ZM21 11.6c-.2 2.3-1.6 4-4 4-.7 0-1.3-.1-1.9-.4.5-2.3 1.7-4.5 3.4-6.2.9-.9 1.9-1.6 3.1-2 .3 1.4.5 3 .4 4.6Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className="mt-4 text-center font-serif text-2xl tracking-tight text-white sm:text-3xl">
            What clients say about us
          </h2>

          {/* Controls */}
          <div className="mt-6 flex items-center gap-3">
            <IconBtn label="Previous" onClick={prev}>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M14.5 6.5L9 12l5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconBtn>

            <IconBtn label="Next" onClick={next}>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M9.5 6.5L15 12l-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconBtn>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {current.map((t, idx) => (
            <TestimonialCard key={`${t.name}-${idx}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
      {/* Quote */}
      <p className="text-[13px] leading-6 text-white/75">
        <span className="text-white/85">“ </span>
        {t.quote}
        <span className="text-white/85"> ”</span>
      </p>

      {/* Footer row */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-full border border-white/10 bg-white/[0.03]">
            <img
              src={t.avatar}
              alt={t.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <div className="text-sm font-semibold text-white/90">{t.name}</div>
            <div className="text-[11px] text-white/55">{t.role}</div>
          </div>
        </div>

        {/* Company mark */}
        <div className="flex items-center gap-2 text-white/45">
          <div className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.03]">
            <span className="text-[10px] font-semibold">◎</span>
          </div>
          <span className="text-sm font-semibold tracking-tight">{t.company}</span>
        </div>
      </div>
    </div>
  );
}

function IconBtn({ children, label, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={[
        "inline-flex h-10 w-10 items-center justify-center rounded-full",
        "border border-white/10 bg-white/[0.04] text-white/70",
        "transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white",
        "active:scale-[0.98]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
