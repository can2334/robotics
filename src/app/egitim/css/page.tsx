"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import LessonViewer from "../../components/ui/LessonViewer";
import { useTheme } from "../../components/ThemeContext";
import cssLessons from "./ders";

export default function CssEgitimPage() {
    const { theme, toggleTheme } = useTheme();
    const [aktifDers, setAktifDers] = useState(cssLessons[0]);
    const [menuAcik, setMenuAcik] = useState(false);

    return (
        <div
            className={`min-h-screen flex flex-col ${theme === "light"
                ? "bg-gray-100 text-gray-900"
                : "bg-gray-900 text-white"
                }`}
        >
            <Header />
            <title>TRC - CSS Eğitimleri</title>

            <div className="flex flex-1 flex-col md:flex-row">
                {/* 🖥️ Sol Menü */}
                <aside className="hidden md:flex w-72 bg-white dark:bg-gray-800 p-6 flex-col shadow-lg">
                    <h2 className="text-xl font-bold mb-4">CSS Eğitimleri</h2>
                    <div className="flex flex-col gap-2 overflow-y-auto">
                        {cssLessons.map((ders) => (
                            <Button
                                key={ders.id}
                                variant={aktifDers.id === ders.id ? "default" : "outline"}
                                onClick={() => setAktifDers(ders)}
                                className="justify-start"
                            >
                                {ders.title}
                            </Button>
                        ))}
                    </div>
                </aside>

                {/* 📱 Mobil Menü */}
                <div className="md:hidden p-4 bg-white dark:bg-gray-800 shadow sticky top-0 z-20">
                    <label className="block text-sm font-semibold mb-2">Ders Seç:</label>
                    <div className="relative">
                        <button
                            className="w-full text-left p-3 border rounded-lg dark:bg-gray-900 dark:text-white dark:border-gray-700 flex justify-between items-center"
                            onClick={() => setMenuAcik(!menuAcik)}
                        >
                            {aktifDers.title}
                            <span className="ml-2">▼</span>
                        </button>

                        {menuAcik && (
                            <div
                                className="absolute mt-2 w-full max-h-60 overflow-y-auto rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-700 shadow-lg z-50"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {cssLessons.map((ders) => (
                                    <div
                                        key={ders.id}
                                        onClick={() => {
                                            setAktifDers(ders);
                                            setMenuAcik(false);
                                        }}
                                        className={`p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${aktifDers.id === ders.id
                                            ? "bg-gray-200 dark:bg-gray-700 font-semibold"
                                            : ""
                                            }`}
                                    >
                                        {ders.title}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* 📚 Ana İçerik */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <h1 className="text-3xl font-bold mb-4">{aktifDers.title}</h1>
                    <p className="text-gray-500 mb-6">{aktifDers.desc}</p>
                    <LessonViewer lesson={aktifDers} />
                </main>
            </div>

            <Footer />
        </div>
    );
}
