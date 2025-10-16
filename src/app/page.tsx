import Header from "./components/Header";
import Footer from "./components/Footer";

const sliderData = [
  { id: 1, title: "VEX Robotics 2025", description: "Ankara'da düzenlenen yarışmaya hazır olun!", img: "https://recf.org/wp-content/uploads/2025/05/Push-Back-Banner.jpg" },
  { id: 2, title: "FRC Robotik Etkinliği", description: "FRC yarışları hakkında tüm bilgiler.", img: "https://i.ytimg.com/vi/wffri7U5ywQ/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgZShbMA8=&rs=AOn4CLAieAWLOCmXVu4NpT93xdtsC_ZY3g" },
  { id: 3, title: "VEX Robotics High Stakes", description: "Ankara'da düzenlenen yarışmaya hazır olun!", img: "https://educatrobotics.com/wp-content/uploads/2024/09/VRC_High_Stakes.png" },
];

const events = [
  { id: 1, title: "VEX Robotics Skills Challenge", date: "20 Ekim 2025", img: "https://nooby.tech/976-large_default/vex-robotics-competition-program-ages-14-18.jpg" },
  { id: 2, title: "Kodlama Semineri", date: "25 Ekim 2025", img: "/event2.jpg" },
  { id: 3, title: "VEX Takım Seçimi", date: "30 Ekim 2025", img: "/event3.jpg" },
];

const announcements = [
  { id: 1, title: "Yeni Robotik Takımı Kuruldu", date: "10 Ekim 2025" },
  { id: 2, title: "Etkinlik Tarihleri Güncellendi", date: "12 Ekim 2025" },
  { id: 3, title: "Sponsorlarımız Açıklandı", date: "13 Ekim 2025" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />

      <main className="flex-1 p-6">
        {/* Slider */}
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

        {/* Etkinlikler */}
        <section className="mb-12 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Etkinlikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                {/* Resim kapsayıcı */}
                <div className="w-full aspect-square flex justify-center items-center bg-gray-200">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Duyurular */}
        <section className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-6">Duyurular</h2>
          <ul className="space-y-4">
            {announcements.map((ann) => (
              <li key={ann.id} className="border-b border-gray-200 pb-2">
                <p className="font-semibold">{ann.title}</p>
                <p className="text-gray-600 text-sm">{ann.date}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );

}
