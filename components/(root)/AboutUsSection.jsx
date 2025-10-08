"use client";

import React from "react";
import { Users, CheckCircle, Trophy, Smile } from "lucide-react";

export default function AboutUsSection() {
  const stats = [
    {
      icon: Users,
      value: "4.5k+",
      title: "Active Users",
      desc: "Professionals & Clients",
    },
    {
      icon: CheckCircle,
      value: "10k+",
      title: "Completed Jobs",
      desc: "Tasks managed successfully",
    },
    {
      icon: Trophy,
      value: "95%",
      title: "Satisfaction",
      desc: "Average satisfaction score",
    },
    {
      icon: Smile,
      value: "1.2k+",
      title: "Verified Providers",
      desc: "Trusted local experts",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
          {/* left: copy on creamy bg - dark text */}
          <div>
            <p className="text-orange-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              About the Hub
            </p>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Committed to quality matchmaking and dependable local service.
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our platform connects neighbors with certified, reviewed
              professionals. From booking to payment and real-time chat, we
              remove friction so every project is handled with care and
              competence.
            </p>

            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3 font-semibold text-white shadow-md transition-opacity hover:opacity-90"
            >
              More About Us
            </a>
          </div>

          {/* right: single dark surface card */}
          <div className="p-6 rounded-xl bg-[#111113] text-white border border-white/10 backdrop-blur">
            <h3 className="text-2xl font-bold mb-5">Seamless Local Commerce</h3>
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="w-5 h-5 mt-1 text-orange-500"
                  aria-hidden="true"
                />
                <div>
                  <strong className="text-white">Real-time chat:</strong>{" "}
                  Socket.io messaging to align on scope, timing, and pricing
                  instantly.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="w-5 h-5 mt-1 text-orange-500"
                  aria-hidden="true"
                />
                <div>
                  <strong className="text-white">
                    Verified ratings & reviews:
                  </strong>{" "}
                  Clarity on professionalism, punctuality, and quality.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="w-5 h-5 mt-1 text-orange-500"
                  aria-hidden="true"
                />
                <div>
                  <strong className="text-white">Provider portfolios:</strong>{" "}
                  Proof of work and certifications to hire with confidence.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* stats: dark mini-cards over creamy body */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-[#111113] p-6 text-white"
            >
              <div className="flex items-center gap-4">
                <stat.icon
                  className="h-7 w-7 text-orange-500"
                  aria-hidden="true"
                />
                <p className="text-3xl font-bold sm:text-4xl">{stat.value}</p>
              </div>
              <p className="mt-3 text-base font-semibold text-zinc-300">
                {stat.title}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
