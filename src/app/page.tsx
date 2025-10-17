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
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />

      <main className="flex-1 p-6">

        {/* Slider Bölümü */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto flex overflow-x-scroll gap-6 snap-x snap-mandatory scrollbar-hide">
            {sliderData.map((slide) => (
              <div key={slide.id} className="min-w-[300px] md:min-w-[500px] snap-start bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <img src={slide.img} alt={slide.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{slide.title}</h3>
                  <p className="text-gray-700">{slide.description}</p>
                </div>
              </div>
            ))}
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
                <p className="text-sm text-gray-200 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </section>

      </main>

      <Footer />
    </div>
  );
}
