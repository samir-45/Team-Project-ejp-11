"use client";

import React from "react";
import { Users, CheckCircle, Trophy, Smile } from "lucide-react";

/**
 * @fileoverview AboutUsSection component featuring introductory text,
 * a call-to-action button, and key statistics using daisyUI's stats component.
 * It follows the structure and dark theme established by FeaturedServices.jsx.
 */

export default function AboutUsSection() {
  // Key statistics data for the hub
  const statsData = [
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      value: "4.5K+",
      title: "Active Users",
      desc: "Professionals & Clients",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      value: "10K+",
      title: "Completed Jobs",
      desc: "Tasks managed successfully",
    },
    {
      icon: <Trophy className="w-6 h-6 text-orange-500" />,
      value: "95%",
      title: "Positive Ratings",
      desc: "Average satisfaction score",
    },
    {
      icon: <Smile className="w-6 h-6 text-orange-500" />,
      value: "1.2K+",
      title: "Verified Providers",
      desc: "Trusted local experts",
    },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        {/* === Header & Article Content Block === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Left Side: Text Content (Matching the image's text style) */}
          <div className="lg:max-w-xl">
            {/* Subtitle */}
            <p className="text-orange-500 font-semibold text-base mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              About the Hub
            </p>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800/80 leading-tight mb-6">
              Committed To Quality Matchmaking And Dependable Local Service.
            </h2>

            {/* Body Text / Article */}
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Our platform is the backbone of local service exchange. We connect
              neighbors with certified, reviewed professionals instantly. From
              booking to payment and real-time chat, we eliminate friction,
              ensuring every project, big or small, is handled with
              dependability and expert workmanship. We're building a stronger,
              more efficient local economy, one successful service booking at a
              time.
            </p>

            {/* Call to Action Button (Matching the style of the reference image) */}
            <a
              href="/about"
              className="btn bg-orange-600 text-white border-none hover:bg-orange-700 transition-colors duration-300 rounded-lg shadow-lg text-base px-8 py-3"
            >
              More About Us
            </a>
          </div>

          {/* Right Side: Secondary Article/Value Proposition (Filling the "image" gap) */}
          <div className="p-8 bg-zinc-800 rounded-xl shadow-2xl border border-zinc-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Seamless Local Commerce
            </h3>
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-orange-500" />
                <div>
                  <strong className="text-white">Real-Time Chat:</strong>{" "}
                  Integrated Socket.io messaging lets you discuss project
                  details, scope, and pricing directly with the service provider
                  instantly.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-orange-500" />
                <div>
                  <strong className="text-white">
                    Verified Ratings & Reviews:
                  </strong>{" "}
                  Trust is paramount. All providers are rated on
                  professionalism, punctuality, and quality of work.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-orange-500" />
                <div>
                  <strong className="text-white">Portfolio Management:</strong>{" "}
                  Providers showcase their best work and certifications, making
                  it easy for you to hire with confidence.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* === Statistics Section (using daisyUI stats component) === */}
        <div className="stats stats-vertical lg:stats-horizontal w-full bg-zinc-800 text-white shadow-xl rounded-xl border border-zinc-700/50">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`stat ${
                index < statsData.length - 1
                  ? "border-r border-zinc-700/50"
                  : ""
              }`}
            >
              <div className="stat-figure text-orange-500">{stat.icon}</div>
              <div className="stat-title text-zinc-400 text-sm">
                {stat.title}
              </div>
              <div className="stat-value text-3xl sm:text-4xl text-white">
                {stat.value}
              </div>
              <div className="stat-desc text-zinc-500 mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
