"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (result.success) {
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitted(false), 5000); // 5 saniye sonra mesaj kaybolur
            } else {
                alert("Gönderilemedi: " + result.message);
            }
        } catch (error) {
            alert("Sunucu hatası: " + error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
            <Header />
            <h1 className="text-3xl font-bold mb-8">İletişim</h1>

            <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
                {submitted && (
                    <div className="bg-green-100 text-green-800 p-4 mb-6 rounded">
                        Mesajınız başarıyla gönderildi!
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Ad Soyad"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-posta"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        name="message"
                        placeholder="Mesajınız"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold px-6 py-3 rounded hover:bg-blue-600 transition-colors"
                    >
                        Gönder
                    </button>
                </form>

                <div className="mt-8 text-gray-700">
                    <p>E-posta: info@turkiyeroboticscommunity.com</p>
                    <p>Telefon: +90 555 555 55 55</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
