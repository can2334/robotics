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

    // ▶️ Canlı çalıştır
    const calistir = () => {
        if (!iframeRef.current) return;
        const doc = iframeRef.current.contentDocument;
        if (!doc) return;

        const extraCSS =
            theme === "dark"
                ? `<style>
            body { background-color: #fff !important; }
          </style>`
                : "";


        const finalHTML = kod.includes("</head>")
            ? kod.replace("</head>", `${extraCSS}</head>`)
            : `<head>${extraCSS}</head>${kod}`;

        doc.open();
        doc.write(finalHTML);
        doc.close();
        setCalisiyor(true);
    };

    // ⏹ Durdur
    const durdur = () => {
        if (iframeRef.current) iframeRef.current.srcdoc = "";
        setCalisiyor(false);
    };

    // 🔄 Sıfırla
    const sifirla = () => {
        setKod(lesson.content);
        durdur();
    };

    // 📋 Kopyala
    const kopyala = async () => {
        await navigator.clipboard.writeText(kod);
        alert("Kod panoya kopyalandı ✅");
    };

    // Ders veya tema değiştiğinde resetle
    useEffect(() => {
        setKod(lesson.content);
        durdur();
    }, [lesson]);

    useEffect(() => {
        if (calisiyor) calistir();
    }, [theme]);

    return (
        <div className="space-y-6">
            {/* 📘 Teori */}
            <div
                className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: lesson.theory }}
            />

            {/* 💻 Kod Editörü */}
            <div
                className="rounded-xl relative p-4 mb-4 bg-black text-green-400"
                style={{ border: "1px solid #333" }}
            >
                <div
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) =>
                        setKod((e.target as HTMLDivElement).innerText)
                    }
                    className="font-mono whitespace-pre-wrap break-words overflow-auto min-h-[200px] outline-none p-2 rounded-lg"
                    style={{ backgroundColor: "#000", color: "#00ff66" }}
                >
                    {kod}
                </div>

                <div className="flex gap-2 mt-3 flex-wrap">
                    <Button onClick={calistir} disabled={calisiyor}>
                        Başlat
                    </Button>
                    <Button onClick={durdur} variant="secondary" disabled={!calisiyor}>
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
