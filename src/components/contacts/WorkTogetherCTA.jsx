// components/WorkTogetherCTA.jsx
import React from "react";

export default function WorkTogetherCTA() {
  return (
    <section className="w-full bg-black px-4 pb-20 pt-16 md:pt-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-serif text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
            Atlas!
          </h2>
          <p className="mt-2 font-serif text-2xl tracking-tight text-emerald-400 sm:text-3xl md:text-4xl">
            Let&apos;s work together!
          </p>
        </div>

        {/* Card */}
        <div className="mt-10 overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
          <div className="grid grid-cols-1 md:grid-cols-[1.65fr_1fr]">
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                alt="Office lounge"
                className="h-[260px] w-full object-cover sm:h-[340px] md:h-full md:min-h-[420px]"
              />
              {/* subtle vignette like screenshot */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/25 md:to-black/35" />
            </div>

            {/* Info panel */}
            <div className="flex flex-col justify-between p-6 text-white sm:p-8">
              <div>
                <h3 className="font-serif text-lg text-white/90">Information</h3>

                <div className="mt-6 space-y-6">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-white/60">
                      ADDRESS
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/80">
                      Address:
                      <br />
                      4533 McArthur Blvd Street, A-2053, Newport Beach,
                      <br />
                     CA, 92660, United States
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-white/60">
                      CONTACT US
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/80">
               (704) 464-2169
                      <br />
                      Frank@atlascreatives.co
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-white/60">
                  FOLLOW US
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <SocialIcon label="Facebook">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.6-1.6H16.7V4.8c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.7V11H7v3h2.5v8h4z" />
                    </svg>
                  </SocialIcon>

                  <SocialIcon label="X / Twitter">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.6l-5.1-6.7L5.4 22H2.3l7.3-8.4L1 2h6.7l4.6 6.1L18.9 2Zm-1.2 18h1.8L6.6 3.9H4.7L17.7 20Z" />
                    </svg>
                  </SocialIcon>

                  <SocialIcon label="Dribbble">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2Zm7.9 9.2a16.9 16.9 0 00-6.6.2c-.2-.4-.3-.8-.5-1.2a13.2 13.2 0 005.2-4 8 8 0 011.9 5Zm-3.3-6.4a11.1 11.1 0 01-4.5 3.5A37.4 37.4 0 009.6 4a8 8 0 017 0ZM8 5.1a35.8 35.8 0 012.5 4.2A31.9 31.9 0 014 10a8 8 0 014-4.9ZM4 12.1v-.2a34.4 34.4 0 007.2-.8c.2.4.4.9.6 1.3A17.3 17.3 0 005.3 18 8 8 0 014 12.1Zm6.1 7.7a15.6 15.6 0 013-6.1 15.4 15.4 0 015.9-.3A8 8 0 0110.1 19.8Zm8.4-1.8a16.9 16.9 0 00-4.7-.1c.7 1.8 1.1 3.5 1.2 4.1A8 8 0 0018.5 18Z" />
                    </svg>
                  </SocialIcon>

                  <SocialIcon label="YouTube">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M21.6 7.2a3 3 0 00-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 002.4 7.2 31.6 31.6 0 002.4 12a31.6 31.6 0 00.0 4.8 3 3 0 002.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 002.1-2.1A31.6 31.6 0 0021.6 12a31.6 31.6 0 000-4.8ZM10.2 14.9V9.1L15.3 12l-5.1 2.9Z" />
                    </svg>
                  </SocialIcon>

                  <SocialIcon label="Vimeo">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M22 7.2c-.1 2.8-2.1 6.6-6 11.4-2 2.5-3.7 3.7-5.1 3.7-0.9 0-1.6-.8-2.2-2.4l-1.2-4.5c-.5-1.6-.9-2.4-1.4-2.4-.1 0-.6.3-1.4.9L3 12.2c1.3-1.1 2.6-2.2 3.9-3.3 1.8-1.6 3.2-2.5 4.2-2.6 1.2-.1 2 .8 2.4 2.7.4 2.1.7 3.4.9 4 .5 1.8.9 2.7 1.4 2.7.4 0 1-.6 1.8-1.7 0 0 1.2-1.7 1.3-2.9.1-1.1-.3-1.7-1.3-1.7-.5 0-1 .1-1.5.3 1-3.3 2.9-4.9 5.7-4.8 2 .1 3 1.4 2.9 3.9Z" />
                    </svg>
                  </SocialIcon>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* small bottom breathing room like screenshot */}
        <div className="mt-10 h-2 w-full" />
      </div>
    </section>
  );
}

function SocialIcon({ children, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
    >
      {children}
    </a>
  );
}
