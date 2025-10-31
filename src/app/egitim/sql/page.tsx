"use client";

import { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { useTheme } from "../../components/ThemeContext";
import sqlLessons from "./ders"; // Ders dosyan

export default function SqlEgitimPage() {
    const { theme } = useTheme();
    const [aktifDers, setAktifDers] = useState(sqlLessons[0]);
    const [menuAcik, setMenuAcik] = useState(false);
    const [kod, setKod] = useState(aktifDers.content);
    const [calisiyor, setCalisiyor] = useState(false);
    const outputRef = useRef<HTMLDivElement>(null);

    // Örnek Students tablosu
    const students = [
        { id: 1, name: "Ali", age: 20, grade: 90 },
        { id: 2, name: "Ayşe", age: 22, grade: 85 },
        { id: 3, name: "Mehmet", age: 21, grade: 75 },
        { id: 4, name: "Fatma", age: 23, grade: 95 },
        { id: 5, name: "Can", age: 20, grade: 88 },
        { id: 6, name: "Ece", age: 21, grade: 92 },
        { id: 7, name: "Burak", age: 22, grade: 78 },
        { id: 8, name: "Derya", age: 23, grade: 81 },
        { id: 9, name: "Emre", age: 24, grade: 69 },
        { id: 10, name: "Furkan", age: 20, grade: 94 },
        { id: 11, name: "Gül", age: 21, grade: 87 },
        { id: 12, name: "Hakan", age: 22, grade: 80 },
        { id: 13, name: "İrem", age: 23, grade: 91 },
        { id: 14, name: "Kaan", age: 24, grade: 76 },
        { id: 15, name: "Lara", age: 20, grade: 89 },
    ];

    const changeLesson = (id: number) => {
        const ders = sqlLessons.find(l => l.id === id);
        if (ders) {
            setAktifDers(ders);
            setKod(ders.content);
            setCalisiyor(false);
            if (outputRef.current) outputRef.current.innerHTML = "";
        }
    };

    const sifirla = () => {
        setKod(aktifDers.content);
        setCalisiyor(false);
        if (outputRef.current) outputRef.current.innerHTML = "";
    };

    const kopyala = () => {
        navigator.clipboard.writeText(kod);
        alert("Kod panoya kopyalandı ✅");
    };

    // SQL simülasyonu
    const calistir = () => {
        let sonuc: any[] = [];

        if (kod.includes("LIMIT")) {
            const limitMatch = kod.match(/LIMIT (\d+)/i);
            const limit = limitMatch ? parseInt(limitMatch[1]) : students.length;
            sonuc = students.slice(0, limit);
        } else if (kod.includes("WHERE grade > 85")) {
            sonuc = students.filter(o => o.grade > 85);
        } else if (kod.includes("ORDER BY grade DESC")) {
            sonuc = [...students].sort((a, b) => b.grade - a.grade);
        } else if (kod.includes("DISTINCT")) {
            const seen: any = {};
            sonuc = students.filter(o => {
                const key = o.grade;
                if (seen[key]) return false;
                seen[key] = true;
                return true;
            });
        } else {
            sonuc = students;
        }

        if (outputRef.current) {
            if (sonuc.length === 0) {
                outputRef.current.innerText = "Sonuç yok";
                return;
            }

            const headers = Object.keys(sonuc[0]);
            const table = document.createElement("table");
            table.style.width = "100%";
            table.style.borderCollapse = "collapse";
            table.style.backgroundColor = theme === "dark" ? "#111" : "#fff";
            table.style.color = theme === "dark" ? "#0f0" : "#000";

            const thead = document.createElement("thead");
            const trHead = document.createElement("tr");
            headers.forEach(h => {
                const th = document.createElement("th");
                th.innerText = h;
                th.style.border = "1px solid #666";
                th.style.padding = "4px";
                trHead.appendChild(th);
            });
            thead.appendChild(trHead);
            table.appendChild(thead);

            const tbody = document.createElement("tbody");
            sonuc.forEach(r => {
                const tr = document.createElement("tr");
                headers.forEach(h => {
                    const td = document.createElement("td");
                    td.innerText = r[h];
                    td.style.border = "1px solid #666";
                    td.style.padding = "4px";
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });
            table.appendChild(tbody);

            outputRef.current.innerHTML = "";
            outputRef.current.appendChild(table);
        }

        setCalisiyor(true);
    };

    return (
        <div className={`min-h-screen flex flex-col ${theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"}`}>
            <Header />

            <div className="flex flex-1 flex-col md:flex-row">
                {/* 🖥️ Sol Menü */}
                <aside className="hidden md:flex w-72 bg-white dark:bg-gray-800 p-6 flex-col shadow-lg">
                    <h2 className="text-xl font-bold mb-4">SQL Eğitimleri</h2>
                    <div className="flex flex-col gap-2 overflow-y-auto">
                        {sqlLessons.map(l => (
                            <Button
                                key={l.id}
                                variant={aktifDers.id === l.id ? "default" : "outline"}
                                onClick={() => changeLesson(l.id)}
                                className="justify-start"
                            >
                                {l.title}
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
                                onClick={e => e.stopPropagation()}
                            >
                                {sqlLessons.map(l => (
                                    <div
                                        key={l.id}
                                        onClick={() => {
                                            changeLesson(l.id);
                                            setMenuAcik(false);
                                        }}
                                        className={`p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${aktifDers.id === l.id ? "bg-gray-200 dark:bg-gray-700 font-semibold" : ""}`}
                                    >
                                        {l.title}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* 📚 Ana İçerik */}
                <main className="flex-1 p-6 overflow-y-auto space-y-6">
                    <h1 className="text-3xl font-bold">{aktifDers.title}</h1>
                    <p className="text-gray-500">{aktifDers.desc}</p>

                    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm prose dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: aktifDers.theory }}
                    />

                    {/* Kod Editörü */}
                    <div className="rounded-xl relative p-4 mb-4 bg-black text-green-400" style={{ border: "1px solid #333" }}>
                        <div
                            contentEditable
                            suppressContentEditableWarning
                            onInput={e => setKod((e.target as HTMLDivElement).innerText)}
                            className="font-mono whitespace-pre-wrap break-words overflow-auto min-h-[100px] outline-none p-2 rounded-lg"
                            style={{ backgroundColor: "#000", color: "#00ff66" }}
                        >
                            {kod}
                        </div>

                        <div className="flex gap-2 mt-3 flex-wrap">
                            <Button onClick={calistir} disabled={calisiyor}>Başlat</Button>
                            <Button onClick={sifirla} variant="destructive">Sıfırla</Button>
                            <Button onClick={kopyala} variant="outline">Kopyala</Button>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className={`rounded-lg shadow-md overflow-hidden border p-2 ${theme === "light" ? "bg-white border-gray-300" : "bg-gray-900 border-gray-700"}`}>
                        <div ref={outputRef} className="overflow-auto min-h-[100px] p-2"></div>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}
