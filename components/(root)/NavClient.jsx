// components/NavClient.jsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { logOut } from "@/app/actions/authActions";
import { useApp } from "@/app/contexts/AppContext";

export default function NavClient({ session }) {
  const app = (() => {
    try {
      return useApp?.();
    } catch {
      return null;
    }
  })();

  const [fallbackOpen, setFallbackOpen] = useState(false);
  const isMenuOpen = app?.isMenuOpen ?? fallbackOpen;
  const setIsMenuOpen = app?.setIsMenuOpen ?? setFallbackOpen;

  const links = ["Home", "About", "Services", "Projects", "Contact"];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (

    <section>
      <header className="absolute inset-x-0 top-5 max-w-19/20 mx-auto z-50">
        <div className="px-4 pt-4">
          <div
            className="
              mx-auto max-w-6xl
              rounded-full border border-orange-500/25
              bg-white/8 backdrop-blur
              ring-1 ring-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              px-4 sm:px-6
            "
          >
            <div className="navbar min-h-16 text-white">
              {/* Brand */}
              <div className="navbar-start">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-2 py-1"
                >
                  <span className="text-xl font-extrabold tracking-tight">
                    COMMSERVE
                  </span>
                  <span className="hidden sm:inline-flex items-center rounded-full border border-orange-500/30 px-2 py-0.5 text-xs text-orange-400">
                    pro
                  </span>
                </Link>
              </div>

              {/* Desktop links */}
              <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1 px-1">
                  {links.map((l) => {
                    const href = l === "Home" ? "/" : `/${l.toLowerCase().replace(/\s+/g, "-")}`;
                    return (
                      <li key={l}>
                        <Link
                          href={href}
                          className="btn btn-ghost btn-sm rounded-full text-[15px] tracking-tight hover:bg-orange-500/10 hover:text-orange-400"
                        >
                          {l}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Right CTA + mobile toggle */}
              <div className="navbar-end gap-2">


                {session?.user ? (
                  <>
                    <span className="hidden md:inline-flex items-center h-9 px-4 rounded-full border border-dashed border-orange-500/50 font-semibold">
                      {session.user.name}
                    </span>
                    <form action={logOut} className="hidden lg:block">
                      <button
                        type="submit"
                        className="
                    hidden lg:inline-flex h-10 min-h-0 items-center rounded-full
                    bg-gradient-to-r from-orange-500 to-amber-500 px-5
                    font-semibold text-white shadow-md hover:opacity-95
                  "
                      >
                        Logout
                      </button>
                    </form>
                  </>
                ) : (
                  <Link
                    href="/register"
                    className="
                    hidden lg:inline-flex h-10 min-h-0 items-center rounded-full
                    bg-gradient-to-r from-orange-500 to-amber-500 px-5
                    font-semibold text-white shadow-md hover:opacity-95
                  "
                  >
                    Get Started
                  </Link>
                )}


                <button
                  aria-label="Open menu"
                  onClick={() => setIsMenuOpen(true)}
                  className="btn btn-ghost btn-circle lg:hidden"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute inset-x-3 top-6 rounded-3xl bg-[#0f0f11] text-white shadow-2xl border border-orange-500/25">
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-bold text-lg">COMMSERVE</span>
              <button
                aria-label="Close menu"
                className="btn btn-ghost btn-circle"
                onClick={() => setIsMenuOpen(false)}
              >
                ✕
              </button>
            </div>
            <ul className="menu p-4 gap-2">
              {links.map((l) => {
                const href = l === "Home" ? "/" : `/${l.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <li key={l}>
                    <Link
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="rounded-full text-base font-medium hover:bg-orange-500/10 hover:text-orange-400"
                    >
                      {l}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="p-4 pt-0">

              {session?.user ? (
                <>
                  <span className="flex md:hidden mx-auto w-full text-center my-4 items-center h-9 px-4 rounded-full border border-dashed border-orange-500/50 font-semibold">
                    {session.user.name}
                  </span>
                  <form action={logOut} className="lg:hidden">
                    <button
                      type="submit"
                      onClick={() => setIsMenuOpen(false)}
                      className="btn w-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0"
                    >
                      Logout
                    </button>
                  </form>
                </>
              ) : (
                <Link
                  href="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn w-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0"
                >
                  Get Started
                </Link>
              )}

              <div className="py-4" />
            </div>
          </div>
        </div>
      )}


    </section>



  );
}
