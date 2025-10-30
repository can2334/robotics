"use client";

import { useState, useEffect } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);

  // Tema ayarı
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

  // Slider otomatik kaydırma
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500
      ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="flex-1 px-4 md:px-8 py-6 space-y-12">

        {/* Slider */}
        <section className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-xl shadow-lg h-64 md:h-96">
            {sliderData.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg max-w-sm">
                  <h3 className="text-2xl font-bold">{slide.title}</h3>
                  <p className="mt-1">{slide.description}</p>
                </div>
              </div>
            ))}

            {/* Dot Navigasyon */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {sliderData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full ${currentSlide === idx ? "bg-white" : "bg-gray-400"
                    }`}
                />
              ))}
            </div>

            {/* Sol / Sağ Oklar */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (currentSlide - 1 + sliderData.length) % sliderData.length
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center z-20"
            >
              ‹
            </button>
            <button
              onClick={() =>
                setCurrentSlide((currentSlide + 1) % sliderData.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center z-20"
            >
              ›
            </button>
          </div>
        </section>

        {/* Kartlar */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="mt-1 text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </section>

      </main>

      <Footer theme={theme} />
    </div>
  );
}
