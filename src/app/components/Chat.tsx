'use client';
import { useState, useRef, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "../components/ThemeContext";

interface Message {
    role: "user" | "assistant";
    content: string;
    type?: "text" | "code";
    language?: string;
}

export default function Chat() {
    const { theme } = useTheme();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages: Message[] = [...messages, { role: "user", content: input, type: "text" }];
        setMessages(newMessages);
        setInput("");

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();

            let replyContent = data.reply || "AI cevap veremedi.";
            let replyType: "text" | "code" = "text";
            let language = "javascript";

            const codeMatch = replyContent.match(/```(\w+)?\n([\s\S]*?)```/);
            if (codeMatch) {
                replyType = "code";
                language = codeMatch[1] || "javascript";
                replyContent = codeMatch[2];
            }

            setMessages([...newMessages, { role: "assistant", content: replyContent, type: replyType, language }]);
        } catch (err) {
            console.error(err);
            setMessages([...newMessages, { role: "assistant", content: "API hatası!", type: "text" }]);
        }
    };

    const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

    return (
        <div className={`flex flex-col h-[80vh] w-full max-w-2xl mx-auto overflow-hidden transition-colors duration-300 bg-[#121212]`}>

            {/* Mesaj alanı */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-2 space-y-2 max-h-[72vh] scrollbar-hide"
            >
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                        {m.type === "code" ? (
                            <div
                                className={`relative w-full md:w-3/4 rounded-xl overflow-hidden
                                    ${m.role === "user"
                                        ? "bg-[#056a56] text-white"
                                        : "bg-[#1e1e1e] text-white"
                                    }`}
                                style={{ background: "none" }}
                            >
                                <button
                                    onClick={() => copyToClipboard(m.content)}
                                    className="absolute top-2 right-2 bg-black/30 text-white px-2 py-1 text-xs rounded hover:bg-black/50 z-10"
                                >
                                    Kopyala
                                </button>

                                <SyntaxHighlighter
                                    language={m.language}
                                    style={theme === "light" ? prism : oneDark}
                                    customStyle={{
                                        margin: 0,
                                        borderRadius: "12px",
                                        padding: "10px",
                                        background: "transparent !important",
                                    }}
                                >
                                    {m.content}
                                </SyntaxHighlighter>
                            </div>
                        ) : (
                            <div
                                className={`inline-block px-4 py-2 text-sm md:text-base rounded-xl max-w-[75%] break-words
                                    ${m.role === "user"
                                        ? "bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-br-none"
                                        : "bg-[#1e1e1e] text-white rounded-bl-none"
                                    }`}
                            >
                                {m.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mesaj giriş alanı */}
            <div className="px-4 py-3 border-t bg-transparent border-transparent">
                <div className="flex gap-3 items-center">
                    <input
                        className="flex-1 px-4 py-2 rounded-full text-sm placeholder-gray-400 transition bg-[#1f1f1f] text-white backdrop-blur-md shadow-inner"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Mesaj yaz..."
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-3 shadow-md transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
