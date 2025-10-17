import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_ADDRESS,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.GMAIL_ADDRESS,
            to: "turkiyeroboticscommunity@gmail.com", // Mesajın gideceği mail
            subject: `Yeni iletişim mesajı: ${name}`,
            text: `İsim: ${name}\nEmail: ${email}\nMesaj: ${message}`,
            html: `<p><strong>İsim:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mesaj:</strong> ${message}</p>`,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Mail send error:", err);
        return NextResponse.json({ success: false, message: "Sunucu hatası" }, { status: 500 });
    }
}
