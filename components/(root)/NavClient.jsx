// components/NavClient.jsx
"use client"

import { logOut } from "@/app/actions/authActions"
import { useApp } from "@/app/contexts/AppContext";
import Link from "next/link"
import { useState, useEffect } from "react"

export default function NavClient({ session }) {
  const { isMenuOpen, setIsMenuOpen } = useApp();
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = ["Home", "Services", "How it Works", "About", "Contact"]

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl text-gray-900 dark:text-white">
            stacker
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            
            <Link
              key={link}
              href={link === "Home" ? "/" : `${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        {session?.user ? (
          <div className="flex gap-2 items-center">
            <span className="font-semibold border-2 border-dashed border-indigo-600 px-5 py-2 rounded-lg">
              {session.user.name}
            </span>
            <form action={logOut}>
              <button
                type="submit"
                className="hidden lg:inline-block bg-indigo-600 dark:bg-indigo-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors shadow-sm"
              >
                Logout
              </button>
            </form>
          </div>
        ) : (
          <Link
            href="/register"
            className="hidden lg:inline-block bg-indigo-600 dark:bg-indigo-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors shadow-sm"
          >
            Get Started
          </Link>
        )}

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  )
}
