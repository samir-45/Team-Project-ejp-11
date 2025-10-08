"use client";

import React from "react";
import { Clock, Shield, MessageSquare, Star, DollarSign } from "lucide-react";
import Test from "../Test";

export default function WhyChooseUsSection() {
  const benefits = [
    {
      title: "Instant Booking & Scheduling",
      desc: "View provider availability in real-time and book services with date-time selection right away. Eliminate phone tag and confirmation delays.",
      icon: <Clock className="w-5 h-5 text-white" />,
    },
    {
      title: "Verified Providers Only",
      desc: "Every professional is thoroughly vetted for credentials and experience. Hire with complete peace of mind, backed by community reviews.",
      icon: <Shield className="w-5 h-5 text-white" />,
    },
    {
      title: "Real-Time Chat (Socket.io)",
      desc: "Communicate instantly with your provider via our integrated chat feature. Discuss details, share photos, and confirm logistics effortlessly.",
      icon: <MessageSquare className="w-5 h-5 text-white" />,
    },
    {
      title: "Transparent Rating & Review System",
      desc: "Access unbiased ratings and reviews from past clients to make informed decisions. Your feedback helps maintain our high quality standards.",
      icon: <Star className="w-5 h-5 text-white" />,
    },
    {
      title: "Competitive Local Pricing",
      desc: "Support your local economy while ensuring you get fair, upfront pricing. Compare quotes and book services that fit your budget.",
      icon: <DollarSign className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-24 lg:pt-12">
            <p className="text-orange-500 font-semibold text-base mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Why Choose Us
            </p>

            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-8">
              Enjoy Fast, Reliable Service, Expert Solutions, And Long-Term
              Value All The Benefits You Need, Right At Your Fingertips.
            </h2>

            <p className="text-zinc-900 text-lg leading-relaxed mb-8">
              We are more than just a listing platform; we are a complete
              ecosystem designed for efficient, trustworthy local commerce.
              Every feature, from our <strong>real-time chat</strong> to our{" "}
              <strong>verified review system</strong>, is built to protect you
              and guarantee satisfaction.
            </p>

            <a
              href="/register"
              className="btn bg-gradient-to-r from-orange-500 to-amber-500 text-white border-none hover:opacity-90 transition duration-300 rounded-full shadow-md text-base px-8 py-3"
            >
              Join the Community Today
            </a>
          </div>

          <div className="pt-8">
            <ul className="timeline timeline-vertical">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <div className="timeline-middle bg-orange-500 p-3 rounded-full shadow-lg">
                    {benefit.icon}
                  </div>

                  <div className="timeline-end timeline-box bg-[#0f0f11] text-white shadow-xl p-6 rounded-xl border border-zinc-800 hover:border-orange-500 transition duration-300">
                    <h3 className="text-xl font-bold mb-2 text-white flex items-center gap-3">
                      <span className="text-orange-400 font-extrabold text-2xl w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-lg border border-zinc-700">
                        {index < 9 ? `0${index + 1}` : index + 1}
                      </span>
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed mt-2">
                      {benefit.desc}
                    </p>
                  </div>

                  {index < benefits.length - 1 && (
                    <hr className="bg-zinc-700 h-1" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
