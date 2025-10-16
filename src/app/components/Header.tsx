"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <header className="w-full bg-white shadow-md flex justify-between items-center px-6 py-4">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">Türkiye Robotics Community</h1>
                </div>

                {/* Desktop menu */}
                <nav className="hidden md:flex gap-6 text-gray-700">
                    <ul className="flex gap-6">
                        <a href="./" onClick={() => setSidebarOpen(false)}>Home</a>
                        <li>Etkinlikler</li>
                        <a href="/about" onClick={() => setSidebarOpen(false)}>Hakkımızda</a>
                        <a href="#iletişim" onClick={() => setSidebarOpen(false)}>İletişim</a>
                        <a href="/chat" className="text-blue-500 hover:underline">
                            Chat’e Git
                        </a>

                    </ul>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setSidebarOpen(true)}
                >
                    <Menu size={24} />
                </button>
            </header>

            {/* Sidebar overlay */}
            <div
                className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Arka plan karartma */}
                <div
                    className="fixed inset-0 bg-black opacity-50"
                    onClick={() => setSidebarOpen(false)}
                ></div>

                {/* Sidebar panel */}
                <div
                    className={`relative bg-white w-64 h-full shadow-md p-6 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-700"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X size={24} />
                    </button>

                    <nav className="mt-8 flex flex-col gap-4 text-gray-700">
                        <a href="/page" onClick={() => setSidebarOpen(false)}>Home</a>
                        <a href="#etkinlikler" onClick={() => setSidebarOpen(false)}>Etkinlikler</a>
                        <a href="/about" onClick={() => setSidebarOpen(false)}>Hakkımızda</a>
                        <a href="#iletişim" onClick={() => setSidebarOpen(false)}>İletişim</a>
                        <a href="/chat" className="text-blue-500 hover:underline">
                            Chat’e Git
                        </a>

                    </nav>
                </div>
            </div>
        </>
    );
}
