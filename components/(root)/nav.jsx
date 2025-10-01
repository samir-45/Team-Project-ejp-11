"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const StackerLogo = ({
    className
}) => <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0z" fill="#4F46E5" />
        <path d="M19.333 9.333h-6.666v1.334h6.666V9.333z" fill="#fff" />
        <path d="M22.667 15.333h-10v1.334h10v-1.334z" fill="#fff" />
        <path d="M16 21.333h-3.333v1.334H16v-1.334z" fill="#fff" />
    </svg>;
const PlayIcon = ({
    className
}) => <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5v14l11-7z" />
    </svg>;
const MenuIcon = ({
    className
}) => <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>;
const CloseIcon = ({
    className
}) => <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>;

export default function Nav() {

      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const navLinks = ["Home", "Solutions", "Product", "Resources", "Pricing"];
      useEffect(() => {
        if (isMenuOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "unset";
        }
        return () => {
          document.body.style.overflow = "unset";
        };
      }, [isMenuOpen]);

    return (
        <div>
            <header className="py-6 px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between mx-auto">
                    <div className="flex items-center gap-2">
                        <StackerLogo className="h-8 w-8" />
                        <span className="font-bold text-2xl text-gray-900 dark:text-white">
                            stacker
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map(link => <a key={link} href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                            {link}
                        </a>)}
                    </div>
{/* 
                    <a href="#" className="hidden lg:inline-block bg-indigo-600 dark:bg-indigo-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors shadow-sm">
                        Get Started
                    </a> */}
                    <Link href="/register"  className="hidden lg:inline-block bg-indigo-600 dark:bg-indigo-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors shadow-sm">
                    Get Started
                    </Link>

                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(true)} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                            <MenuIcon className="h-6 w-6" />
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}
