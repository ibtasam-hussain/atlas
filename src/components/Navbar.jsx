import { useMemo, useState } from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Portfolios", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () =>
      navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-[14px] font-medium text-white/70 transition-colors hover:text-white"
        >
          {item.label}
        </a>
      )),
    []
  );

  return (
    <header className="w-full bg-black py-4 shadow-md shadow-black/20 fixed top-0 z-50">
      <div className="mx-auto flex h-[56px] max-w-6xl items-center px-8">
        {/* LEFT: Nav links */}
        <nav className="hidden items-center gap-10 md:flex">
          {links}
        </nav>

        {/* RIGHT: Button + Mobile */}
        <div className="ml-auto flex items-center gap-3">
          <a
            href="#"
            className="hidden rounded-full bg-white px-6 py-[10px] text-[13px] font-semibold text-black transition hover:bg-white/90 md:inline-flex"
          >
            Book A Demo
          </a>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/80 hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-white/80 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
              >
                Book A Demo
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
