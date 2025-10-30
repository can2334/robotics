"use client";

import { useState } from "react";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header({
    theme,
    toggleTheme,
}: {
    theme: "light" | "dark";
    toggleTheme: () => void;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [egitimOpen, setEgitimOpen] = useState(false);

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "Hakkımızda", href: "/about" },
        { label: "İletişim", href: "/contact" },
        // Eğitim artık dropdown olacak
        { label: "Eğitim", href: "/egitim" },
        { label: "Chat’e Git", href: "/chat" },
    ];

    const dersler = [
        { label: "HTML", href: "/egitim/html" },
        { label: "CSS", href: "/egitim/css" },
        { label: "JavaScript", href: "/egitim/javascript" },
        { label: "SQL", href: "/egitim/sql" },
        { label: "Python", href: "/egitim/python" },
    ];

    return (
        <>
            {/* Header */}
            <header
                className={`w-full flex justify-between items-center px-6 py-4 border-b transition-colors duration-300
                ${theme === "light" ? "bg-white text-gray-900 border-gray-300" : "bg-gray-900 text-white border-gray-700"}`}
            >
                <h1 className="text-2xl font-bold">Türkiye Robotics Community</h1>

                {/* Desktop Menü */}
                <nav className="hidden md:flex items-center gap-6 relative">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform duration-150 active:scale-95"
                    >
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    {menuItems.map((item) =>
                        item.label !== "Eğitim" ? (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative px-3 py-1 font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            // Eğitim dropdown
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => setEgitimOpen(true)}
                                onMouseLeave={() => setEgitimOpen(false)}
                            >
                                <button className="flex items-center gap-1 px-3 py-1 font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
                                    {item.label} <ChevronDown size={16} />
                                </button>

                                {egitimOpen && (
                                    <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-50">
                                        {dersler.map((ders) => (
                                            <Link
                                                key={ders.href}
                                                href={ders.href}
                                                className="block px-4 py-2 hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors"
                                            >
                                                {ders.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    )}
                </nav>

                {/* Mobile Menü */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform duration-150 active:scale-95"
                    >
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform duration-150 active:scale-95"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div
                    className="fixed inset-0 bg-black/50"
                    onClick={() => setSidebarOpen(false)}
                ></div>

                <div
                    className={`relative bg-white dark:bg-gray-900 w-64 h-full shadow-md p-6 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-700 dark:text-gray-200"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X size={24} />
                    </button>

                    <nav className="mt-8 flex flex-col gap-4 text-gray-900 dark:text-white">
                        {menuItems.map((item) =>
                            item.label !== "Eğitim" ? (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors"
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <div key={item.label} className="flex flex-col gap-2">
                                    <span className="px-3 py-2 font-semibold">Eğitim</span>
                                    {dersler.map((ders) => (
                                        <Link
                                            key={ders.href}
                                            href={ders.href}
                                            className="px-4 py-2 rounded hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            {ders.label}
                                        </Link>
                                    ))}
                                </div>
                            )
                        )}
                    </nav>
                </div>
            </div>
        </>
    );
}
