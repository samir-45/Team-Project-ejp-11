"use client";

import { Wrench, BookOpen, Lightbulb, Laptop, Users, Brush } from "lucide-react"; 


const services = [
  {
    id: 1,
    title: "Plumbing Services",
    description:
      "Find expert plumbers for installations, repairs, and maintenance in your area.",
    icon: <Wrench className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 2,
    title: "Tutoring Services",
    description:
      "Hire skilled tutors for school, college, or professional skill-building.",
    icon: <BookOpen className="w-10 h-10 text-green-500" />,
  },
  {
    id: 3,
    title: "Electrical Repair",
    description:
      "Get certified electricians for safe wiring, lighting, and appliance repairs.",
    icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
  },
  {
    id: 4,
    title: "Tech Support",
    description:
      "Assistance with software setup, troubleshooting, and device repairs.",
    icon: <Laptop className="w-10 h-10 text-purple-500" />,
  },
  {
    id: 5,
    title: "Community Helpers",
    description:
      "Reliable helpers for cleaning, gardening, moving, and other home tasks.",
    icon: <Users className="w-10 h-10 text-pink-500" />,
  },
  {
    id: 6,
    title: "Home Cleaning",
    description:
      "Professional cleaning services for homes, offices, and apartments.",
    icon: <Brush className="w-10 h-10 text-cyan-500" />, 
  },
];

export default function ServicesPage() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Local Community Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#FCDE70] mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="bg-[#FCDE70] text-black px-5 py-2 rounded-lg hover:bg-[#f6db7a] transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
