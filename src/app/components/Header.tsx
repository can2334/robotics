"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "../components/ThemeContext";

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [egitimOpen, setEgitimOpen] = useState(false);
    const [mobileEgitimOpen, setMobileEgitimOpen] = useState(false);

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "Hakkımızda", href: "/about" },
        { label: "İletişim", href: "/contact" },
        { label: "Eğitim", href: "/egitim" },
        { label: "Chat’e Git", href: "/chat" },
    ];

    const dersler = [
        { label: "HTML", href: "/html" },
        { label: "CSS", href: "/css" },
        { label: "JavaScript", href: "/javascript" },
        { label: "SQL", href: "/sql" },
        { label: "Python", href: "/python" },
    ];

    return (
        <>
            {/* HEADER */}
            <header
                className={`w-full flex justify-between items-center px-6 py-4 border-b sticky top-0 z-50 backdrop-blur-md transition-colors duration-500 ${theme === "light"
                    ? "bg-white/80 text-gray-900 border-gray-200"
                    : "bg-gray-900/80 text-white border-gray-800"
                    }`}
            >
                <h1 className="text-xl md:text-2xl font-bold tracking-tight select-none">
                    Türkiye Robotics Community
                </h1>

                {/* DESKTOP MENU */}
                <nav className="hidden md:flex items-center gap-6 relative">
                    {menuItems.map((item) =>
                        item.label !== "Eğitim" ? (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative font-medium group text-gray-700 dark:text-gray-200 transition-colors duration-300"
                            >
                                {item.label}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ) : (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => setEgitimOpen(true)}
                                onMouseLeave={() => setEgitimOpen(false)}
                            >
                                <button className="flex items-center gap-1 font-medium group text-gray-700 dark:text-gray-200 relative transition-colors duration-300">
                                    {item.label}
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-300 ${egitimOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full" />
                                </button>

                                {egitimOpen && (
                                    <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 animate-fadeIn">
                                        {dersler.map((ders) => (
                                            <Link
                                                key={ders.href}
                                                href={ders.href}
                                                className="block px-5 py-2 text-sm hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300"
                                            >
                                                {ders.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    )}

                    {/* THEME TOGGLE */}
                    <button
                        onClick={toggleTheme}
                        className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm"
                    >
                        {theme === "light" ? (
                            <Moon size={20} className="text-gray-800" />
                        ) : (
                            <Sun size={20} className="text-yellow-400" />
                        )}
                    </button>
                </nav>

                {/* MOBILE MENU */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                    >
                        {theme === "light" ? (
                            <Moon size={20} className="text-gray-800" />
                        ) : (
                            <Sun size={20} className="text-yellow-400" />
                        )}
                    </button>
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform active:scale-95"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* MOBILE SIDEBAR */}
            <div
                className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${sidebarOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500"
                    onClick={() => setSidebarOpen(false)}
                ></div>

                <div
                    className={`relative w-72 h-full shadow-2xl p-6 transform transition-transform duration-500 rounded-l-2xl ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
                        } ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-700 dark:text-gray-200"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X size={26} />
                    </button>

                    <nav className="mt-10 flex flex-col gap-2">
                        {menuItems.map((item) =>
                            item.label !== "Eğitim" ? (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-3 py-2 rounded-md hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors duration-300 font-medium"
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <div key={item.label} className="flex flex-col gap-1">
                                    <button
                                        onClick={() => setMobileEgitimOpen(!mobileEgitimOpen)}
                                        className="px-3 py-2 flex justify-between items-center font-semibold text-indigo-600 dark:text-indigo-400 rounded-md hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors duration-300"
                                    >
                                        Eğitim
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 ${mobileEgitimOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${mobileEgitimOpen ? "max-h-96 mt-1" : "max-h-0"
                                            }`}
                                    >
                                        {dersler.map((ders) => (
                                            <Link
                                                key={ders.href}
                                                href={ders.href}
                                                className="block px-5 py-2 rounded-md hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors duration-300 text-sm"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                {ders.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )
                        )}
                    </nav>
                </div>
            </div>

            {/* Fade-in animasyonu */}
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
        </>
    );
}
