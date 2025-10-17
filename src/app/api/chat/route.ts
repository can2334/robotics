import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        // API anahtarını al
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "API anahtarı bulunamadı." }, { status: 500 });
        }


        // OpenAI endpoint’ine isteği at
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: message }],
            }),
        });

        if (!response.ok) {
            const err = await response.text();
            console.error("OpenAI API hatası:", err);
            return NextResponse.json(
                { error: "AI cevap veremedi." },
                { status: 500 }
            );
        }

        const data = await response.json();
        const aiMessage = data.choices?.[0]?.message?.content || "AI cevap veremedi.";

        return NextResponse.json({ reply: aiMessage });
    } catch (error) {
        console.error("Sunucu hatası:", error);
        return NextResponse.json(
            { error: "AI cevap veremedi." },
            { status: 500 }
        );
    }
}
