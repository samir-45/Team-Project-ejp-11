"use client";

import React from "react";
import {
  Bolt,
  Wrench,
  Book,
  Sparkles,
  Hammer,
  Leaf,
  PawPrint,
  Truck,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function FeaturedServices() {
  // Service Data with icons
  const services = [
    {
      icon: (
        <Bolt className="w-8 h-8 text-white group-hover:text-orange-500 transition-colors" />
      ),
      title: "Electricians",
      desc: "Certified experts providing safe wiring, lighting setup, and quick fault repairs for residential and commercial properties. We guarantee safety and quality in every job.",
    },
    {
      icon: (
        <Wrench className="w-8 h-8 text-white group-hover:text-orange-500 transition-colors" />
      ),
      title: "Plumbers",
      desc: "Reliable plumbing fixes, leak detection, drain cleaning, and water system installations for every home. Fast response for emergency burst pipes and sewer issues.",
    },
    {
      icon: (
        <Sparkles className="w-8 h-8 text-white group-hover:text-orange-500 transition-colors" />
      ),
      title: "Cleaners",
      desc: "From daily maintenance cleaning to deep sanitization services. We use eco-friendly products to keep your spaces spotless, fresh, and healthy for your family.",
    },
    {
      icon: (
        <Book className="w-8 h-8 text-white group-hover:text-orange-500 transition-colors" />
      ),
      title: "Tutors",
      desc: "Skilled educators offering personalized, one-on-one lessons across all academic subjects and professional skill development. Find the perfect coach or mentor here.",
    },
    {
      icon: (
        <Hammer className="w-8 h-8 text-white group-hover:text-orange-500 transition-colors" />
      ),
      title: "Handymen",
      desc: "All-around maintenance professionals ready to handle home improvements, furniture assembly, minor repairs, and odd jobs. No job is too small for our capable hands.",
    },
    {
      icon: (
        <Leaf className="w-8 h-8 text-white group-hover:text-orange-500 transition-colors" />
      ),
      title: "Gardeners",
      desc: "Professional garden design, regular lawn care, and seasonal outdoor maintenance. Transform your outdoor space into a beautiful, relaxing sanctuary all year round.",
    },
  ];

  const HeaderContent = () => (
    // Implementation of the flexed header layout from the reference image
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-20 gap-8">
      {/* Left Block: Subtitle and Main Title */}
      <div className="max-w-4xl">
        <p className="text-orange-500 font-semibold text-base mb-2 flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Our Services
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white leading-snug">
          We Provide Complete Local Services For Homes And Businesses. Trusted
          Professionals Ready To Help.
        </h2>
      </div>

      {/* Right Block: View All Services Button */}
      <a
        href="/services"
        className="btn bg-zinc-800 text-white border-none hover:bg-orange-600 transition-colors duration-300 rounded-lg shadow-lg text-base px-6 py-3"
      >
        View All Services
      </a>
    </div>
  );

  const ServiceCard = ({ service }) => {
    return (
      <div className="group h-full cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
        <div
          // Card design improvements: Dark background, border, shadow, increased height
          className="relative bg-zinc-900/90 dark:bg-zinc-800/90 p-8 rounded-xl border border-zinc-700/50 shadow-2xl transition-all duration-300 hover:border-orange-500 hover:shadow-orange-500/20 flex flex-col justify-between min-h-[360px]"
        >
          {/* Icon and Title Block */}
          <div className="flex flex-col gap-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-orange-600 group-hover:bg-zinc-100 transition-all shadow-md">
              {service.icon}
            </div>
            <h3 className="text-3xl font-bold text-white leading-snug">
              {service.title}
            </h3>
          </div>

          {/* Description Block */}
          <div className="mt-4">
            <p className="text-zinc-400 text-base leading-relaxed mb-6">
              {service.desc}
            </p>

            {/* Call to Action Link */}
            <a
              href={`/services/${service.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`}
              className="flex items-center gap-2 text-orange-500 font-semibold text-base hover:text-orange-400 transition-colors duration-300"
            >
              Discover Providers
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    // 1. Removed white background class. Now uses dark background
    <section className="py-12 md:py-24  dark:bg-zinc-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3. Fixed Intro Section Layout */}
        <HeaderContent />

        {/* Cards Grid: 3 columns on large screens, 2 on medium, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {/* Note: I reduced the list to 6 high-quality categories to fit the grid well */}
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
