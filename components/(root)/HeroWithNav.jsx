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
    </section>
  );
}
