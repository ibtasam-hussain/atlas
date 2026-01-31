// components/GetInTouchForm.jsx
import React, { useMemo, useState } from "react";

export default function GetInTouchForm() {
  const services = useMemo(
    () => [
      "Web Design",
      "Branding",
      "UI/UX",
      "Web Development",
      "Landing Page",
      "E-commerce",
      "SEO",
      "Content / Social",
      "Other",
    ],
    []
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [open, setOpen] = useState(false);

  const selectedLabel = form.service || "What's services are you looking for?";

  const onChange = (key) => (e) =>
    setForm((p) => ({
      ...p,
      [key]: e.target.value,
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    // wire to API later
    console.log("submit", form);
  };

  return (
    <section className="w-full bg-black px-4 py-16 md:py-20">
      <div className="mx-auto w-full max-w-[620px]">
        <h2 className="text-center font-serif text-3xl tracking-tight text-white sm:text-4xl">
          Get In Touch
        </h2>

        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          {/* Name */}
          <Input
            placeholder="Name"
            value={form.name}
            onChange={onChange("name")}
            autoComplete="name"
          />

          {/* Email */}
          <Input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={onChange("email")}
            autoComplete="email"
          />

          {/* Custom Select */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={[
                "group w-full rounded-full border border-white/10 bg-transparent px-5 py-3 text-left",
                "text-[13px] text-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]",
                "outline-none transition",
                "hover:border-white/15",
                "focus:border-white/20 focus:ring-2 focus:ring-white/10",
              ].join(" ")}
            >
              <span className={form.service ? "text-white/80" : "text-white/60"}>
                {selectedLabel}
              </span>

              {/* caret */}
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60 transition group-hover:text-white/75">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={open ? "rotate-180 transition" : "transition"}
                >
                  <path
                    d="M7 10l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            {open && (
              <div
                className={[
                  "absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-white/10",
                  "bg-black/95 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur",
                ].join(" ")}
              >
                <ul className="max-h-60 overflow-auto py-2">
                  {services.map((s) => (
                    <li key={s}>
                      <button
                        type="button"
                        onClick={() => {
                          setForm((p) => ({ ...p, service: s }));
                          setOpen(false);
                        }}
                        className={[
                          "w-full px-4 py-3 text-left text-[13px]",
                          "text-white/75 hover:bg-white/[0.05] hover:text-white",
                        ].join(" ")}
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Message */}
          <textarea
            value={form.message}
            onChange={onChange("message")}
            placeholder="Your project description"
            className={[
              "min-h-[160px] w-full resize-none rounded-2xl border border-white/10 bg-transparent px-5 py-4",
              "text-[13px] text-white/80 placeholder:text-white/50",
              "outline-none transition",
              "hover:border-white/15",
              "focus:border-white/20 focus:ring-2 focus:ring-white/10",
            ].join(" ")}
          />

          {/* Button */}
          <div className="pt-3">
            <button
              type="submit"
              className={[
                "mx-auto flex w-full max-w-[520px] items-center justify-center gap-2 rounded-full",
                "bg-white px-6 py-3 text-[12px] font-medium text-black",
                "shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
                "transition hover:bg-white/95 active:scale-[0.99]",
              ].join(" ")}
            >
              <span>Send message</span>
              <span className="text-sm leading-none">↗</span>
            </button>
          </div>
        </form>
      </div>

      {/* click outside to close */}
      {open && (
        <button
          type="button"
          aria-label="Close dropdown"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-10 cursor-default"
        />
      )}
    </section>
  );
}

function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      {...props}
      className={[
        "w-full rounded-full border border-white/10 bg-transparent px-5 py-3",
        "text-[13px] text-white/80 placeholder:text-white/50",
        "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]",
        "outline-none transition",
        "hover:border-white/15",
        "focus:border-white/20 focus:ring-2 focus:ring-white/10",
      ].join(" ")}
    />
  );
}
