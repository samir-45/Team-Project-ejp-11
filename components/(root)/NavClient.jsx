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

  const navLinks = ["Home", "Services", "How it Works", "About", "Contact"];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      {/* pill shell */}
      <div
        className="
          navbar mx-auto mt-3 max-w-8xl
          rounded-full shadow-xl
          bg-base-100/80 backdrop-blur
          border border-orange-500/20
          ring-1 ring-black/5 dark:ring-white/5
          transition-all
        "
        data-theme="light"
      >
        {/* left: brand */}
        <div className="navbar-start">
          <Link
            href="/"
            className="
              px-3 
              text-xl font-bold tracking-tight
            "
          >
            <div className="border-2 border-orange-500/20 rounded-full px-3 py-1 flex items-center gap-1">
              <span className="text-base-content">Stacker</span>
              <span className="badge ml-2 rounded-full bg-orange-500 text-white border-0">
                pro
              </span>
            </div>
          </Link>
        </div>

        {/* center: desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {navLinks.map((link) => {
              const href =
                link === "Home"
                  ? "/"
                  : `/${link.toLowerCase().replace(/\s+/g, "-")}`;
              return (
                <li key={link}>
                  <Link
                    href={href}
                    className="
                      btn btn-ghost btn-sm
                      rounded-full
                      text-base
                      hover:bg-orange-500/10
                      hover:text-orange-600
                    "
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* right: cta / auth */}
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
                    btn h-10 min-h-0 rounded-full
                    bg-gradient-to-r from-orange-500 to-amber-500
                    text-white border-0 hover:opacity-90
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
                btn h-10 min-h-0 rounded-full hidden lg:inline-flex
                bg-gradient-to-r from-orange-500 to-amber-500
                text-white border-0 hover:opacity-90
                shadow-md
              "
            >
              Get Started
            </Link>
          )}

          {/* mobile toggle */}
          <button
            aria-label="Open menu"
            className="btn btn-ghost btn-circle lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              className="h-6 w-6"
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

      {/* mobile drawer (full screen) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className="
              absolute inset-x-3 top-6 rounded-3xl
              bg-base-100 text-base-content
              shadow-2xl border border-orange-500/20
            "
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-bold text-lg">stacker</span>
              <button
                aria-label="Close menu"
                className="btn btn-ghost btn-circle"
                onClick={() => setIsMenuOpen(false)}
              >
                ✕
              </button>
            </div>
            <ul className="menu p-4 gap-2">
              {navLinks.map((link) => {
                const href =
                  link === "Home"
                    ? "/"
                    : `/${link.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <li key={link}>
                    <Link
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="
                        rounded-full text-base font-medium
                        hover:bg-orange-500/10 hover:text-orange-600
                      "
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="p-4 pt-0">
              {session?.user ? (
                <form action={logOut} className="w-full">
                  <button
                    type="submit"
                    className="
                      btn w-full rounded-full
                      bg-gradient-to-r from-orange-500 to-amber-500
                      text-white border-0
                    "
                  >
                    Logout
                  </button>
                </form>
              ) : (
                <Link
                  href="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    btn w-full rounded-full
                    bg-gradient-to-r from-orange-500 to-amber-500
                    text-white border-0
                  "
                >
                  Get Started
                </Link>
              )}
              <div className="py-4" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
