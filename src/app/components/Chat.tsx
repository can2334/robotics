"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Message {
    role: "user" | "assistant";
    content: string;
    type?: "text" | "code";
    language?: string; // Kodun dili
}

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");

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
            let language = "javascript"; // default language

            // Eğer cevap ``` ile başlıyorsa kod bloğu
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
        <div className="flex flex-col max-w-xl mx-auto p-4 bg-gray-50 rounded-lg shadow-lg">
            <div className="flex-1 overflow-y-auto mb-4 space-y-3 max-h-[70vh]">
                {messages.map((m, i) => (
                    <div key={i} className={`mb-2 ${m.role === "user" ? "text-right" : "text-left"}`}>
                        {m.type === "code" ? (
                            <div className="relative rounded-lg shadow-md overflow-hidden">
                                <button
                                    onClick={() => copyToClipboard(m.content)}
                                    className="absolute top-1 right-1 bg-gray-700 px-2 py-1 text-xs rounded hover:bg-gray-600 z-10"
                                >
                                    Kopyala
                                </button>
                                <SyntaxHighlighter language={m.language} style={oneDark} customStyle={{ margin: 0, borderRadius: '8px' }}>
                                    {m.content}
                                </SyntaxHighlighter>
                            </div>
                        ) : (
                            <span className={`inline-block p-2 rounded ${m.role === "user" ? "bg-blue-400 text-white" : "bg-gray-200"}`}>
                                {m.content}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex gap-2">
                <input
                    className="flex-1 border p-2 rounded"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Mesaj yaz..."
                />
                <button className="bg-blue-500 text-white p-2 rounded" onClick={sendMessage}>
                    Gönder
                </button>
            </div>
        </div>
    );
}
