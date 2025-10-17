import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Gmail transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_ADDRESS,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Mail gönderimi
        await transporter.sendMail({
            from: {
                name: "TRC İletişim Botu", // burada istediğin ismi yaz
                address: process.env.GMAIL_ADDRESS!,
            },
            to: "turkiyeroboticscommunity@gmail.com", // mesajın gideceği adres
            subject: `Yeni iletişim mesajı: ${name}`,
            text: `İsim: ${name}\nEmail: ${email}\nMesaj: ${message}`,
            html: `
        <div style="font-family:sans-serif; line-height:1.6; color:#333">
          <h2>Yeni iletişim mesajı</h2>
          <p><strong>İsim:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mesaj:</strong></p>
          <p style="background:#f3f3f3; padding:10px; border-radius:6px">${message}</p>
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Mail send error:", err);
        return NextResponse.json(
            { success: false, message: "Sunucu hatası" },
            { status: 500 }
        );
    }
}
