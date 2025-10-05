"use client";

import { useApp } from "@/app/contexts/AppContext";
import React, { useState, useEffect } from "react";
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
const HeroSection = () => {

    const { isMenuOpen, setIsMenuOpen } = useApp();

    // const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    return <div className="bg-gray-50 min-h-screen dark:bg-black font-sans text-gray-800 dark:text-gray-200 w-full">
       

            {/* Main content of hero section */}
            <main className="relative flex-1 flex min-h-screen items-center justify-center text-center w-full">
                <div className="relative flex flex-col items-center justify-center py-10 sm:py-16 px-4 max-w-5xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight max-w-4xl">
                        Where your{" "}
                        <span className="text-indigo-600 dark:text-indigo-400">data</span>{" "}
                        turns into software with a click
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                        Build custom portals, CRMs, and tools effortlessly. From concept
                        to launch in minutes, not months.
                    </p>
                    <button className="mt-8 flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-md transform hover:scale-105">
                        <PlayIcon className="h-6 w-6" />
                        <span>Watch Demo</span>
                    </button>
                </div>
            </main>
        
    </div>;
};
export default HeroSection;