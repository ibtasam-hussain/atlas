import { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "./navItems";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () =>
      navItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.href}
          className={({ isActive }) =>
            `text-[14px] font-medium transition-colors ${
              isActive
                ? "text-white"
                : "text-white/70 hover:text-white"
            }`
          }
        >
          {item.label}
        </NavLink>
      )),
    []
  );

  return (
    <header className="fixed top-0 z-50 w-full bg-black py-4 shadow-md shadow-black/20">
      <div className="mx-auto flex h-[56px] max-w-6xl items-center px-8">
        {/* LEFT: Nav links */}
        <nav className="hidden items-center gap-10 md:flex">
          {links}
        </nav>

        {/* RIGHT */}
        <div className="ml-auto flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-white px-6 py-[10px] text-[13px] font-semibold text-black transition hover:bg-white/90 md:inline-flex"
          >
            Book A Demo
          </Link>

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
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-white/80 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
              >
                Book A Demo
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
