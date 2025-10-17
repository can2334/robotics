import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, message: "Lütfen tüm alanları doldurun." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_ADDRESS,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Sana gidecek mail
        await transporter.sendMail({
            from: `"${name}" <${process.env.GMAIL_ADDRESS}>`,
            to: "turkiyeroboticscommunity@gmail.com",
            subject: `📩 Yeni iletişim mesajı: ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9fafb; border-radius: 10px;">
          <h2 style="color: #0d6efd;">Yeni İletişim Mesajı</h2>
          <p><strong>Gönderen:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Mesaj:</strong></p>
          <div style="padding: 10px; background: #fff; border-radius: 8px; border: 1px solid #eee;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <hr style="margin: 20px 0;">
          <p style="font-size: 12px; color: #888;">Bu mesaj web sitendeki iletişim formundan gönderilmiştir.</p>
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Mail send error:", err);
        return NextResponse.json(
            { success: false, message: "Sunucu hatası. Mail gönderilemedi." },
            { status: 500 }
        );
    }
}
