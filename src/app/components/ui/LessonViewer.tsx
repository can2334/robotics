"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { useTheme } from "../../components/ThemeContext";

export type Lesson = {
    id: number;
    title: string;
    level: string;
    desc: string;
    content: string;
    theory: string;
};

export default function LessonViewer({ lesson }: { lesson: Lesson }) {
    const { theme } = useTheme();
    const [kod, setKod] = useState(lesson.content);
    const [calisiyor, setCalisiyor] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // ▶️ Çalıştır butonu
    const calistir = () => {
        if (!iframeRef.current) return;
        const doc = iframeRef.current.contentDocument;
        if (!doc) return;

        const extraCSS =
            theme === "dark"
                ? `<style>
            body { background-color: #111 !important; color: #eee !important; }
            p, h1, h2, h3, h4, h5, h6, td, th, li, label, a, span {
              color: #eee !important;
            }
            input, textarea, select, button {
              background-color: #222 !important;
              color: #eee !important;
              border: 1px solid #444 !important;
            }
          </style>`
                : "";

        const finalHTML = kod.includes("</head>")
            ? kod.replace("</head>", `${extraCSS}</head>`)
            : extraCSS + kod;

        doc.open();
        doc.write(finalHTML);
        doc.close();
        setCalisiyor(true);
    };

    const durdur = () => {
        if (iframeRef.current) iframeRef.current.srcdoc = "";
        setCalisiyor(false);
    };

    const sifirla = () => {
        setKod(lesson.content);
        durdur();
    };

    const kopyala = async () => {
        await navigator.clipboard.writeText(kod);
        alert("Kod panoya kopyalandı ✅");
    };

    useEffect(() => {
        setKod(lesson.content);
        durdur();
    }, [lesson]);

    return (
        <div className="space-y-6">
            {/* 📘 Teorik Bilgi */}
            <div
                className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: lesson.theory }}
            />

            {/* 💻 Kod Editörü — her zaman siyah & yeşil */}
            <div
                className="rounded-xl relative p-4 mb-4 bg-black text-green-400"
                style={{
                    border: "1px solid #333",
                }}
            >
                <div
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) =>
                        setKod((e.target as HTMLDivElement).innerText)
                    }
                    className="font-mono whitespace-pre-wrap break-words overflow-auto min-h-[200px] outline-none p-2 rounded-lg"
                    style={{
                        backgroundColor: "#000",
                        color: "#00ff66",
                    }}
                >
                    {kod}
                </div>

                <div className="flex gap-2 mt-3 flex-wrap">
                    <Button onClick={calistir} disabled={calisiyor}>
                        Başlat
                    </Button>
                    <Button
                        onClick={durdur}
                        variant="secondary"
                        disabled={!calisiyor}
                    >
                        Durdur
                    </Button>
                    <Button onClick={sifirla} variant="destructive">
                        Sıfırla
                    </Button>
                    <Button onClick={kopyala} variant="outline">
                        Kopyala
                    </Button>
                </div>
            </div>

            {/* 🌐 Canlı Önizleme */}
            <div
                className={`rounded-lg shadow-md overflow-hidden border p-1 ${theme === "light"
                        ? "bg-white border-gray-300"
                        : "bg-gray-900 border-gray-700"
                    }`}
            >
                <iframe
                    ref={iframeRef}
                    className="w-full h-[400px] md:h-[500px] border-none"
                    title="Canlı Önizleme"
                />
            </div>
        </div>
    );
}
