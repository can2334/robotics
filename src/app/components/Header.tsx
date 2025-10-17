"use client";

import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Header({
    theme,
    toggleTheme,
}: {
    theme: "light" | "dark";
    toggleTheme: () => void;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "Hakkımızda", href: "/about" },
        { label: "İletişim", href: "/contact" },
        { label: "Chat’e Git", href: "/chat" },
    ];

    return (
        <>
            {/* Header */}
            <header
                className={`w-full flex justify-between items-center px-6 py-4 border-b transition-colors duration-300
                ${theme === "light" ? "bg-white text-gray-900 border-gray-300" : "bg-gray-900 text-white border-gray-700"}`}
            >
                {/* Logo / Başlık */}
                <h1 className="text-2xl font-bold">Türkiye Robotics Community</h1>

                {/* Desktop Menü */}
                <nav className="hidden md:flex items-center gap-6">
                    {/* Tema ikonu */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform duration-150 active:scale-95"
                    >
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    {menuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="relative px-3 py-1 font-medium
                                       text-gray-700 dark:text-gray-200
                                       after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                                       after:bg-indigo-500 after:transition-all after:duration-300
                                       hover:after:w-full hover:text-indigo-600 dark:hover:text-indigo-400
                                       transition-transform duration-150 active:scale-95"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile: Tema + Hamburger */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform duration-150 active:scale-95"
                    >
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button onClick={() => setSidebarOpen(true)} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform duration-150 active:scale-95">
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Overlay */}
                <div
                    className="fixed inset-0 bg-black/50"
                    onClick={() => setSidebarOpen(false)}
                ></div>

                {/* Sidebar Panel */}
                <div
                    className={`relative bg-white dark:bg-gray-900 w-64 h-full shadow-md p-6 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Kapatma butonu */}
                    <button
                        className="absolute top-4 right-4 text-gray-700 dark:text-gray-200"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X size={24} />
                    </button>

                    {/* Sidebar Menü */}
                    <nav className="mt-8 flex flex-col gap-4 text-gray-900 dark:text-white">
                        {menuItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors duration-300"
                                onClick={() => setSidebarOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}
