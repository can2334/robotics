"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const lessons = [
    {
        title: "VEX Robotics Başlangıç",
        desc: "Temel robotik kavramlarını öğren ve ilk robotunu tasarla.",
        code: `// VEX örnek kodu
function startRobot() {
  console.log("Robot başladı!");
}
startRobot();`,
    },
    {
        title: "Arduino Temelleri",
        desc: "Arduino ile elektronik projelerine başla.",
        code: `// Arduino LED yanıp sönme simülasyonu
let led = false;
for (let i = 0; i < 5; i++) {
  led = !led;
  console.log("LED durumu:", led ? "Açık" : "Kapalı");
}`,
    },
    {
        title: "Web ve Mobil Yazılım",
        desc: "HTML, CSS ve JavaScript ile ilk uygulamanı yap.",
        code: `// Basit web etkileşimi
function selamVer() {
  alert("Merhaba Dünya!");
}
selamVer();`,
    },
];

export default function Egitim() {
    const [theme, setTheme] = useState<"light" | "dark" | null>(null);
    const [activeLesson, setActiveLesson] = useState<number>(0);
    const [editableCode, setEditableCode] = useState(lessons[0].code);
    const [output, setOutput] = useState<string>("");

    // Tema yükleme
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        setTheme(storedTheme ?? "light");
    }, []);

    useEffect(() => {
        if (!theme) return;
        const html = document.documentElement;
        if (theme === "dark") html.classList.add("dark");
        else html.classList.remove("dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

    // Ders değişince kodu güncelle
    useEffect(() => {
        setEditableCode(lessons[activeLesson].code);
        setOutput("");
    }, [activeLesson]);

    // Kod çalıştırma
    const runCode = () => {
        try {
            const log: string[] = [];
            const customConsole = { log: (...args: any[]) => log.push(args.join(" ")) };
            const fn = new Function("console", editableCode);
            fn(customConsole);
            setOutput(log.join("\n") || "✅ Kod başarıyla çalıştı!");
        } catch (err: any) {
            setOutput(`❌ Hata: ${err.message}`);
        }
    };

    // Kod kopyalama
    const copyCode = async () => {
        await navigator.clipboard.writeText(editableCode);
        alert("Kod kopyalandı!");
    };

    if (!theme) return null;

    return (
        <div
            className={`flex flex-col min-h-screen ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
                }`}
        >
            <Header theme={theme} toggleTheme={toggleTheme} />

            <main className="flex-1 max-w-6xl mx-auto p-6 space-y-12">
                <h1 className="text-4xl font-bold text-center mb-10">Eğitim Merkezi</h1>

                {/* Ders Menüleri */}
                <div className="flex overflow-x-auto gap-4 mb-8 px-2">
                    {lessons.map((lesson, idx) => (
                        <button
                            key={idx}
                            className={`flex-shrink-0 px-6 py-3 rounded-xl font-semibold transition 
                ${activeLesson === idx
                                    ? "bg-indigo-500 text-white"
                                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-indigo-400/80"
                                }`}
                            onClick={() => setActiveLesson(idx)}
                        >
                            {lesson.title}
                        </button>
                    ))}
                </div>

                {/* Aktif Ders */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        {lessons[activeLesson].title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        {lessons[activeLesson].desc}
                    </p>

                    {/* Kod Editörü */}
                    <div className="relative">
                        <button
                            onClick={copyCode}
                            className="absolute top-2 right-2 bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600 text-sm"
                        >
                            Kopyala
                        </button>
                        <textarea
                            value={editableCode}
                            onChange={(e) => setEditableCode(e.target.value)}
                            className="w-full h-56 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-100 focus:outline-none"
                        />
                    </div>

                    {/* Kod Çalıştır */}
                    <div className="mt-4 flex items-center gap-4">
                        <button
                            onClick={runCode}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                        >
                            ▶ Çalıştır
                        </button>
                        <button
                            onClick={() => setEditableCode(lessons[activeLesson].code)}
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                        >
                            Sıfırla
                        </button>
                    </div>

                    {/* Çıktı Alanı */}
                    <div className="mt-6 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg min-h-[100px] font-mono text-sm text-gray-800 dark:text-gray-100 whitespace-pre-wrap">
                        {output || "💡 Çıktı burada görünecek."}
                    </div>
                </div>
            </main>

            <Footer theme={theme} />
        </div>
    );
}
