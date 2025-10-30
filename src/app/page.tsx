"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const sliderData = [
  { id: 1, title: "VEX Robotics 2025", description: "Ankara'da düzenlenen yarışmaya hazır olun!", img: "https://recf.org/wp-content/uploads/2025/05/Push-Back-Banner.jpg" },
  { id: 2, title: "FRC Robotik Etkinliği", description: "FRC yarışları hakkında tüm bilgiler.", img: "https://i.ytimg.com/vi/wffri7U5ywQ/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgZShbMA8=&rs=AOn4CLAieAWLOCmXVu4NpT93xdtsC_ZY3g" },
  { id: 3, title: "VEX Robotics High Stakes", description: "Ankara'da düzenlenen yarışmaya hazır olun!", img: "https://educatrobotics.com/wp-content/uploads/2024/09/VRC_High_Stakes.png" },
];

const cards = [
  { title: "Yazılım", desc: "Web ve mobil uygulama geliştirme", img: "/images/yazilim.jpg" },
  { title: "Robotics", desc: "VEX ve Arduino projeleri", img: "https://recf.org/wp-content/uploads/2025/05/Push-Back-Banner.jpg" },
  { title: "Tasarım", desc: "Abode Photoshop ve modern tasarım", img: "https://www.matbaanyaninda.com/upload/sayfa_resimleri/en%20iyi%20grafik%20tasarim%20programlari%20photoshop.jpg" },
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300
      ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <title>TRC - Anasayfa </title>


      <main className="flex-1 p-6">

        {/* Slider Bölümü */}
        <section className="mb-12 relative">
          <div className="max-w-6xl mx-auto relative">
            {/* Sol Ok */}
            <button
              onClick={() => {
                const container = document.getElementById("sliderContainer");
                if (container) container.scrollBy({ left: -300, behavior: "smooth" });
              }}
              className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 bg-opacity-70 dark:bg-opacity-70 hover:bg-opacity-90 dark:hover:bg-opacity-90 text-gray-700 dark:text-gray-200 rounded-full w-10 h-10 z-10 transition-colors"
            >
              ‹
            </button>

            {/* Sağ Ok */}
            <button
              onClick={() => {
                const container = document.getElementById("sliderContainer");
                if (container) container.scrollBy({ left: 300, behavior: "smooth" });
              }}
              className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 bg-opacity-70 dark:bg-opacity-70 hover:bg-opacity-90 dark:hover:bg-opacity-90 text-gray-700 dark:text-gray-200 rounded-full w-10 h-10 z-10 transition-colors"
            >
              ›
            </button>

            <div
              id="sliderContainer"
              className="flex overflow-x-scroll gap-6 snap-x snap-mandatory scrollbar-hide"
            >
              {sliderData.map((slide) => (
                <div
                  key={slide.id}
                  className="min-w-[300px] md:min-w-[500px] snap-start bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-colors duration-300"
                >
                  <img src={slide.img} alt={slide.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{slide.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kartlar Bölümü */}
        <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition duration-300"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-200 dark:text-gray-100 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </section>

      </main>

      <Footer theme={theme} />
    </div>
  );
}
