import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const msg = {
            to: "turkiyeroboticscommunity@gmail.com", // Mesajın geleceği mail
            from: "umutcansalman3@gmail.com", // SendGrid’de onaylı domain
            subject: `Yeni iletişim mesajı: ${name}`,
            text: `İsim: ${name}\nEmail: ${email}\nMesaj: ${message}`,
            html: `<p><strong>İsim:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mesaj:</strong> ${message}</p>`,
        };

        await sgMail.send(msg);

        return NextResponse.json({ success: true, message: "Mesaj gönderildi!" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Bir hata oluştu." }, { status: 500 });
    }
}
