"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroWithNav({ session }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const links = ["Home", "About", "Services", "Projects", "Contact","Dashboard"];

  return (
    <section
      className="
        relative isolate
        w-full min-h-[92vh]
        overflow-hidden
      "
    >
      {/* background: clean dark gradient + super soft orange glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f] via-[#111113] to-[#0a0a0b] rounded-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_380px_at_70%_40%,rgba(255,115,0,0.10),transparent_65%)]" />

      {/* NAVBAR (internal padding only) */}
      {/* <header className="absolute inset-x-0 top-0 z-50">
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
            <div className="navbar min-h-16 text-white  --Brand--">



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




              <nav className="navbar-center hidden lg:flex --Desktop links--">
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




              <div className="navbar-end gap-2 Right CTA + mobile toggle">


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
                  onClick={() => setMenuOpen(true)}
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
      </header> */}

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="grid items-center gap-y-10 gap-x-12 lg:grid-cols-12">
          {/* Left copy */}
          <div className="lg:col-span-7">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Your <span className="text-orange-500">&quot;Local&quot;</span>{" "}
              Community Services Hub
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-zinc-300">
              Browse and book trusted local pros. Post requests with date and
              time, chat in real time, and rate providers after the job.
              Providers manage profiles, portfolios, and bookings in one place.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-white/95 px-6 py-3 text-sm sm:text-base font-semibold text-gray-900 shadow hover:bg-white"
              >
                Browse Services
              </Link>
              <Link
                href="/providers"
                className="text-sm font-semibold text-orange-400 hover:text-orange-300"
              >
                Become a Provider
              </Link>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-300">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-orange-500 ring-4 ring-orange-500/20" />
              18k+ bookings completed with 4.9 average rating
            </div>
          </div>

          {/* Right feature card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
              <div className="absolute -top-4 left-6 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow">
                Built for communities
              </div>

              <div className="space-y-4 text-zinc-200">
                <p className="text-sm leading-relaxed">
                  Everything you need to match with the right pro and get work
                  done safely, quickly, and transparently.
                </p>

                <ul className="grid grid-cols-2 gap-3 text-sm">
                  <li className="rounded-lg bg-black/20 p-3">
                    <span className="block font-semibold text-white">
                      Booking
                    </span>
                    Pick date & time
                  </li>
                  <li className="rounded-lg bg-black/20 p-3">
                    <span className="block font-semibold text-white">
                      Reviews
                    </span>
                    Ratings & feedback
                  </li>
                  <li className="rounded-lg bg-black/20 p-3">
                    <span className="block font-semibold text-white">
                      Profiles
                    </span>
                    Portfolio & credentials
                  </li>
                  <li className="rounded-lg bg-black/20 p-3">
                    <span className="block font-semibold text-white">
                      Requests
                    </span>
                    Post and compare offers
                  </li>
                  <li className="rounded-lg bg-black/20 p-3 col-span-2">
                    <span className="block font-semibold text-white">
                      Real-time Chat
                    </span>
                    Instant messaging between users and providers
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 font-semibold text-white hover:opacity-95"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {/* {menuOpen && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-x-3 top-6 rounded-3xl bg-[#0f0f11] text-white shadow-2xl border border-orange-500/25">
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-bold text-lg">COMMSERVE</span>
              <button
                aria-label="Close menu"
                className="btn btn-ghost btn-circle"
                onClick={() => setMenuOpen(false)}
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
                      onClick={() => setMenuOpen(false)}
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
                  <span className="hidden md:inline-flex items-center h-9 px-4 rounded-full border border-dashed border-orange-500/50 font-semibold">
                    {session.user.name}
                  </span>
                  <form action={logOut} className="hidden lg:hidden">
                    <button
                      type="submit"
                      onClick={() => setMenuOpen(false)}
                      className="btn w-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0"
                    >
                      Logout
                    </button>
                  </form>
                </>
              ) : (
                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className="btn w-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0"
                >
                  Get Started
                </Link>
              )}

              <div className="py-4" />
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
}
