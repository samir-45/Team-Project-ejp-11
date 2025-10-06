"use client";

import React from "react";
import { ShieldCheck, Cpu, Zap, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Electrical Security",
    desc: "Advanced electrical security solutions—smart monitoring, surge protection, and backup systems to keep your property safe and sound.",
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Electrical Diagnostic",
    desc: "We troubleshoot and resolve system issues with precision tools and fast diagnostics—keeping everything running efficiently.",
    icon: <Cpu className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Electrical Installation",
    desc: "Expert installations for homes, offices, and commercial setups—certified quality from lighting to full-scale wiring systems.",
    icon: <Zap className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Energy Efficiency Upgrades",
    desc: "Upgrade to energy-efficient systems. We help you reduce consumption and save on bills with modern lighting and smart controls.",
    icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="flex flex-col gap-14">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-2 text-orange-500 font-bold">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            Our Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-neutral-900">
            Showcasing Precision, Safety & Trust
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-neutral-600">
            Explore real projects built with care, integrity, and expert
            craftsmanship from diagnostics to full installations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-orange-100 p-3">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {project.desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-6">
          <a
            href="#"
            className="btn rounded-full bg-neutral-900 text-white hover:bg-neutral-800"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
