'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeContext";
import { useState } from "react";

export default function ContactPage() {
    const { theme, toggleTheme } = useTheme(); // ThemeContext'ten alıyoruz
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
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                alert("Gönderilemedi: " + result.message);
            }
        } catch (error) {
            alert("Sunucu hatası: " + error);
        }
    };

    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === "light" ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-gray-100"}`}>
            <Header />
            <title>TRC - İletişim</title>

            <main className="flex-1 w-full max-w-3xl mx-auto p-6">
                <h1 className={`text-3xl font-bold mb-8 text-center ${theme === "light" ? "text-gray-900" : "text-white"}`}>İletişim</h1>

                <div className={`w-full rounded-xl shadow-lg p-8 ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-gray-100"}`}>
                    {submitted && (
                        <div className={`bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 p-4 mb-6 rounded`}>
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
                            className={`border rounded px-4 py-2 focus:outline-none focus:ring-2 ${theme === "light" ? "border-gray-300 focus:ring-blue-400 text-gray-900" : "border-gray-600 focus:ring-blue-500 text-gray-100 bg-gray-700"}`}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-posta"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`border rounded px-4 py-2 focus:outline-none focus:ring-2 ${theme === "light" ? "border-gray-300 focus:ring-blue-400 text-gray-900" : "border-gray-600 focus:ring-blue-500 text-gray-100 bg-gray-700"}`}
                        />
                        <textarea
                            name="message"
                            placeholder="Mesajınız"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className={`border rounded px-4 py-2 focus:outline-none focus:ring-2 resize-none ${theme === "light" ? "border-gray-300 focus:ring-blue-400 text-gray-900" : "border-gray-600 focus:ring-blue-500 text-gray-100 bg-gray-700"}`}
                        />
                        <button
                            type="submit"
                            className={`bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition-colors`}
                        >
                            Gönder
                        </button>
                    </form>

                    <div className={`mt-8 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
                        <p>E-posta: info@turkiyeroboticscommunity.com</p>
                        <p>Telefon: +90 555</p>
                    </div>
                </div>
            </main>

            <Footer theme={theme} />
        </div>
    );
}
