"use client";

import { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { X } from "lucide-react";
import { useTheme } from "../../components/ThemeContext";

const dersler = [
  // Başlangıç Seviyesi
  {
    id: 1,
    title: "HTML Giriş",
    level: "Başlangıç",
    desc: "HTML’in temel yapısını ve basit etiketleri öğrenin.",
    content: `<!DOCTYPE html>
<html>
  <body>
    <h1>Merhaba, Dünya!</h1>
    <p>HTML sayfasının temel yapısını öğrendik.</p>
    <!-- <h1>Başlık</h1>, <p>Paragraf</p> gibi etiketler başlangıç seviyesindedir -->
  </body>
</html>`,
  },
  {
    id: 2,
    title: "Listeler ve Bağlantılar",
    level: "Başlangıç",
    desc: "Liste ve link etiketlerini kullanarak içerik oluşturun.",
    content: `<!DOCTYPE html>
<html>
  <body>
    <h2>Favori Meyvelerim</h2>
    <ul>
      <li>Elma</li>
      <li>Çilek</li>
      <li>Muz</li>
    </ul>
    <p>Web siteleri arasında bağlantı için <a href="https://turkiyeroboticscommunity.vercel.app/" target="_blank">örnek link</a> kullanabilirsiniz.</p>
  </body>
</html>`,
  },
  {
    id: 3,
    title: "Görseller ve Medya",
    level: "Orta",
    desc: "Sayfalara resim ekleyin ve boyutlandırmayı öğrenin.",
    content: `<!DOCTYPE html>
<html>
  <body>
    <h2>Anakart Örneği</h2>
    <img src="https://www.gaming.gen.tr/wp-content/uploads/2024/01/asus-prime-b650m-r-7200mhz-oc-ddr5-soket-am5-m-2-hdmi-matx-anakart-3.jpg" width="200" alt="Anakart">
    <p>Resimlerle sayfalar daha görsel hale gelir.</p>
  </body>
</html>`,
  },
  // Orta Seviye
  {
    id: 4,
    title: "CSS Temelleri",
    level: "Orta",
    desc: "Renkler, yazı tipleri ve basit stiller ile CSS öğrenin.",
    content: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body { background-color: #f0f0f0; font-family: Arial, sans-serif; }
      h1 { color: #2c3e50; }
      p { color: #16a085; font-size: 18px; }
    </style>
  </head>
  <body>
    <h1>CSS ile Stiller</h1>
    <p>Renkleri ve yazı tiplerini CSS ile değiştirebilirsiniz.</p>
  </body>
</html>`,
  },
  {
    id: 5,
    title: "Box Model ve Kenarlıklar",
    level: "Orta",
    desc: "CSS box modelini ve kenarlık özelliklerini öğrenin.",
    content: `<!DOCTYPE html>
<html>
  <head>
    <style>
      div {
        width: 200px;
        padding: 20px;
        border: 5px solid #3498db;
        margin: 20px;
      }
    </style>
  </head>
  <body>
    <div>Bu bir kutudur. Box model padding, border ve margin içerir.</div>
  </body>
</html>`,
  },
  {
    id: 6,
    title: "Flexbox ile Düzen",
    level: "İleri",
    desc: "Flexbox kullanarak öğeleri hizalayın ve düzenleyin.",
    content: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        display: flex;
        justify-content: space-around;
        background-color: #ecf0f1;
        padding: 20px;
      }
      .item {
        background-color: #e74c3c;
        color: white;
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </body>
</html>`,
  },
  {
    id: 7,
    title: "CSS Grid",
    level: "İleri",
    desc: "Grid sistemiyle modern sayfa düzeni oluşturun.",
    content: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }
      .grid-item {
        background-color: #3498db;
        color: white;
        padding: 20px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
    </div>
  </body>
</html>`,
  },
  {
    id: 8,
    title: "Hover Efektleri ve Animasyonlar",
    level: "İleri",
    desc: "CSS hover ve basit animasyonları öğrenin.",
    content: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .button {
        background-color: #3498db;
        color: white;
        padding: 10px 20px;
        text-decoration: none;
        display: inline-block;
        transition: all 0.3s ease;
      }
      .button:hover {
        background-color: #2ecc71;
        transform: scale(1.1);
      }
    </style>
  </head>
  <body>
    <a href="#" class="button">Hover Efekti</a>
  </body>
</html>`,
  },
  {
    id: 9,
    title: "İleri CSS Animasyonları",
    level: "İleri",
    desc: "Keyframe ile karmaşık animasyonlar oluşturun.",
    content: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .box {
        width: 100px;
        height: 100px;
        background-color: #e74c3c;
        animation: move 2s infinite alternate;
      }
      @keyframes move {
        0% { transform: translateX(0); }
        100% { transform: translateX(200px); }
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>`,
  },
  {
    id: 10,
    title: "Responsive Tasarım",
    level: "İleri",
    desc: "Media query kullanarak sayfanızı mobil uyumlu hale getirin.",
    content: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: Arial; }
      .box { width: 100%; padding: 20px; background: #3498db; color: white; text-align: center; }
      @media (min-width: 600px) {
        .box { width: 50%; margin: auto; }
      }
    </style>
  </head>
  <body>
    <div class="box">Responsive Tasarım Kutusu</div>
  </body>
</html>`,
  },
];

export default function EgitimHTML() {
  const { theme, toggleTheme } = useTheme();
  const [aktifDers, setAktifDers] = useState(dersler[0]);
  const [kod, setKod] = useState(aktifDers.content);
  const [calisiyor, setCalisiyor] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const calistir = () => {
    if (!iframeRef.current) return;
    const doc = iframeRef.current.contentDocument;
    doc?.open();
    doc?.write(kod);
    doc?.close();
    setCalisiyor(true);
  };

  const durdur = () => {
    if (iframeRef.current) iframeRef.current.srcdoc = "";
    setCalisiyor(false);
  };

  const sifirla = () => {
    setKod(aktifDers.content);
    durdur();
  };

  const kopyala = async () => {
    await navigator.clipboard.writeText(kod);
    alert("Kod panoya kopyalandı ✅");
  };

  useEffect(() => {
    setKod(aktifDers.content);
    durdur();
  }, [aktifDers]);

  return (
    <div className={`flex flex-col min-h-screen ${theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex w-64 bg-white dark:bg-gray-800 p-4 flex-col shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center">HTML + CSS Dersleri</h2>
          <div className="flex flex-col gap-2 overflow-y-auto">
            {dersler.map(ders => (
              <Button
                key={ders.id}
                variant={aktifDers.id === ders.id ? "default" : "outline"}
                onClick={() => setAktifDers(ders)}
                className="justify-start"
              >
                {ders.title}
              </Button>
            ))}
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 z-50 flex md:hidden transition-opacity duration-300 ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}></div>
          <div className={`relative bg-white dark:bg-gray-900 w-3/4 max-w-xs h-full shadow-2xl p-6 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} rounded-r-2xl`}>
            <button className="absolute top-4 right-4 text-gray-700 dark:text-gray-200" onClick={() => setSidebarOpen(false)}>
              <X size={28} />
            </button>
            <h2 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">HTML + CSS Dersleri</h2>
            <nav className="flex flex-col gap-4">
              {dersler.map(ders => (
                <Button
                  key={ders.id}
                  variant={aktifDers.id === ders.id ? "default" : "outline"}
                  onClick={() => {
                    setAktifDers(ders);
                    setSidebarOpen(false);
                  }}
                  className="justify-start"
                >
                  {ders.title}
                </Button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-2">{aktifDers.title}</h1>
          <p className="mb-4">{aktifDers.desc}</p>

          {/* Kod Alanı */}
          <div className="bg-gray-900 text-green-400 rounded-lg relative p-4 mb-4">
            <div
              contentEditable
              suppressContentEditableWarning
              onInput={(e) => setKod((e.target as HTMLDivElement).innerText)}
              className="font-mono whitespace-pre-wrap break-words overflow-auto min-h-[200px] outline-none p-2"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {kod}
            </div>

            <div className="flex gap-2 mt-3 flex-wrap">
              <Button onClick={calistir} disabled={calisiyor}>Başlat</Button>
              <Button onClick={durdur} variant="secondary" disabled={!calisiyor}>Durdur</Button>
              <Button onClick={sifirla} variant="destructive">Sıfırla</Button>
              <Button onClick={kopyala} variant="outline">Kopyala</Button>
            </div>
          </div>

          {/* Canlı Önizleme */}
          <div className="bg-gray-900 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <iframe
              ref={iframeRef}
              className="w-full h-[400px] md:h-[500px] border-none"
              title="Canlı Önizleme"
              style={{
                backgroundColor: "#ffffff", // iframe içeriğinin sabit arka planı
              }}
            />
          </div>


          {/* Mobil Dersler Dropdown */}
          <div className="md:hidden mt-4">
            <h2 className="text-lg font-bold mb-2">Dersler</h2>
            <div className="flex flex-wrap gap-2">
              {dersler.map(ders => (
                <Button
                  key={ders.id}
                  variant={aktifDers.id === ders.id ? "default" : "outline"}
                  onClick={() => setAktifDers(ders)}
                  className="flex-1"
                >
                  {ders.title}
                </Button>
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer theme={theme} />
    </div>
  );
}
