"use client"
import { useApp } from '@/app/contexts/AppContext';
import Link from 'next/link';
import React, { useEffect } from 'react'

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

export default function SideNav() {

    const { isMenuOpen, setIsMenuOpen } = useApp();

    const navLinks = ["Home", "Services", "How it Works", "About", "Contact"]
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
            <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className="absolute inset-0 bg-black/60 dark:bg-black/80" onClick={() => setIsMenuOpen(false)}>hehe</div>

                <div className={`relative z-50 bg-white dark:bg-gray-900 h-full w-4/5 max-w-sm ml-auto p-6 flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex items-center justify-between mb-8">
                        <span className="font-bold text-2xl text-gray-900 dark:text-white">
                            Menu
                        </span>
                        <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                            <CloseIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <nav className="flex flex-col items-start gap-5">
                        {navLinks.map(link =>
                            // <a key={link} href="#" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg w-full text-left py-2">
                            //     {link}
                            // </a>
                            <Link key={link} href={`${link.toLowerCase().replace(/\s+/g, "-")}`}className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg w-full text-left py-2">
                                {link}
                            </Link>
                        )}
                        <a href="#" className="w-full mt-6 text-center bg-indigo-600 dark:bg-indigo-500 text-white font-semibold px-5 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors shadow-sm">
                            Get Started
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
