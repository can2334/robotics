'use client';

import Chat from "../components/Chat";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeContext";

export default function ChatPage() {
    const { theme, toggleTheme } = useTheme(); // Tema context’ini alıyoruz

    return (
        <div className={`flex flex-col min-h-screen transition-colors duration-300 ${theme === "light" ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-white"}`}>
            <Header theme={theme} toggleTheme={toggleTheme} />

            <main className="flex-1 p-8 w-full max-w-4xl mx-auto">
                <h1 className={`text-3xl font-bold mb-6 text-center ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                    Robotics AI Chat
                </h1>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <Chat />
                </div>
            </main>

            <Footer theme={theme} />
        </div>
    );
}
