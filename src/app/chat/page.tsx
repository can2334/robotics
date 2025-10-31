'use client';

import Chat from "../components/Chat";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeContext";

export default function ChatPage() {
    const { theme, toggleTheme } = useTheme(); // Tema context’ini alıyoruz

    return (
        <div className={`flex flex-col min-h-screen transition-colors duration-300 ${theme === "light" ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-white"}`}>
            <Header />
            <title>TRC - RoboticsAi</title>

            <main className="flex-1 p-8 w-full max-w-4xl mx-auto">
                <h1 className={`text-3xl font-bold mb-6 text-center ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                    Robotics AI Chat
                </h1>
                {/* Buradaki beyaz arka planı kaldırdık ve Chat component’in kendi arka planına bıraktık */}
                <div className={`rounded-xl shadow-md p-6 ${theme === "light" ? "bg-gray-100" : "bg-gray-900"}`}>
                    <Chat />
                </div>
            </main>

            <Footer />
        </div>
    );
}
