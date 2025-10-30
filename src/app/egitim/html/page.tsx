"use client";

import { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";

const dersler = [
    {
        id: 1,
        title: "HTML Giriş",
        content: `<!DOCTYPE html>
<html>
  <body>
    <h1>Merhaba, Dünya!</h1>
    <p>Bu benim ilk HTML sayfam 🎉</p>
  </body>
</html>`,
    },
    {
        id: 2,
        title: "Listeler",
        content: `<!DOCTYPE html>
<html>
  <body>
    <h2>Favori Meyvelerim</h2>
    <ul>
      <li>Elma</li>
      <li>Çilek</li>
      <li>Muz</li>
    </ul>
  </body>
</html>`,
    },
    {
        id: 3,
        title: "Bağlantılar ve Görseller",
        content: `<!DOCTYPE html>
<html>
  <body>
    <h2>Resim ve Link Örneği</h2>
    <a href="https://www.vexrobotics.com" target="_blank">VEX Robotics</a>
    <br><br>
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/VEX_Robotics_Logo.png" width="200" alt="VEX Logo">
  </body>
</html>`,
    },
    {
        id: 4,
        title: "Tablolar",
        content: `<!DOCTYPE html>
<html>
  <body>
    <h2>Örnek Tablo</h2>
    <table border="1">
      <tr>
        <th>İsim</th>
        <th>Yaş</th>
      </tr>
      <tr>
        <td>Ali</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Ayşe</td>
        <td>30</td>
      </tr>
    </table>
  </body>
</html>`,
    },
    {
        id: 5,
        title: "Formlar",
        content: `<!DOCTYPE html>
<html>
  <body>
    <h2>Giriş Formu</h2>
    <form onsubmit="handleSubmit(event)">
      Adınız: <input type="text" name="ad"><br><br>
      Email: <input type="email" name="email"><br><br>
      <input type="submit" value="Gönder">
    </form>

    <p id="sonuc" style="color:green; font-weight:bold; margin-top:10px;"></p>

    <script>
      function handleSubmit(e) {
        e.preventDefault();
        document.getElementById('sonuc').innerText = "Başarıyla Gönderildi ✅";
      }
    </script>
  </body>
</html>
`,
    },
    {
        id: 6,
        title: "HTML5 Semantik Etiketler",
        content: `<!DOCTYPE html>
<html>
  <body>
    <header>
      <h1>Başlık</h1>
    </header>
    <nav>
      <a href="#">Anasayfa</a> | <a href="#">Hakkımızda</a>
    </nav>
    <section>
      <h2>İçerik Bölümü</h2>
      <p>HTML5 semantik etiketler ile düzenli sayfa yapısı oluşturulur.</p>
    </section>
    <footer>
      <p>&copy; 2025 Tüm Hakları Saklıdır.</p>
    </footer>
  </body>
</html>`,
    },
    {
        id: 7,
        title: "Multimedya (Video & Audio)",
        content: `<!DOCTYPE html>
<html>
  <body>
    <h2>Video ve Ses Örneği</h2>
    <video width="320" height="240" controls>
      <source src="movie.mp4" type="video/mp4">
      Tarayıcınız video etiketini desteklemiyor.
    </video>
    <audio controls>
      <source src="audio.mp3" type="audio/mpeg">
      Tarayıcınız audio etiketini desteklemiyor.
    </audio>
  </body>
</html>`,
    },
];

export default function EgitimHTML() {
    const [aktifDers, setAktifDers] = useState(dersler[0]);
    const [kod, setKod] = useState(aktifDers.content);
    const [calisiyor, setCalisiyor] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const kodRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (kodRef.current) kodRef.current.innerText = kod;
    }, [kod]);

    const calistir = () => {
        if (!iframeRef.current || !kodRef.current) return;
        const iframeDoc = iframeRef.current.contentDocument;
        iframeDoc?.open();
        iframeDoc?.write(kodRef.current.innerText);
        iframeDoc?.close();
        setCalisiyor(true);
    };

    const durdur = () => {
        if (iframeRef.current) iframeRef.current.srcdoc = "";
        setCalisiyor(false);
    };

    const sifirla = () => {
        setKod(aktifDers.content);
        if (kodRef.current) kodRef.current.innerText = aktifDers.content;
        durdur();
    };

    const kopyala = async () => {
        if (kodRef.current)
            await navigator.clipboard.writeText(kodRef.current.innerText);
        alert("Kod panoya kopyalandı ✅");
    };

    const toggleTheme = () =>
        setTheme(theme === "light" ? "dark" : "light");

    return (
        <div
            className={`flex flex-col min-h-screen transition-colors duration-300 ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
                }`}
        >
            <Header theme={theme} toggleTheme={toggleTheme} />

            <div className="flex flex-1 h-full">
                {/* Sidebar */}
                <aside className="w-64 bg-gray-100 dark:bg-gray-800 shadow-lg p-4 flex flex-col">
                    <h2 className="text-xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-400">
                        HTML Dersleri
                    </h2>
                    <div className="flex flex-col gap-2 overflow-y-auto">
                        {dersler.map((ders) => (
                            <Button
                                key={ders.id}
                                variant={aktifDers.id === ders.id ? "default" : "outline"}
                                onClick={() => {
                                    setAktifDers(ders);
                                    setKod(ders.content);
                                    if (kodRef.current)
                                        kodRef.current.innerText = ders.content;
                                    setCalisiyor(false);
                                }}
                                className="justify-start"
                            >
                                {ders.title}
                            </Button>
                        ))}
                    </div>
                </aside>

                {/* İçerik */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <h1 className="text-3xl font-bold mb-4">{aktifDers.title}</h1>

                    {/* Kod Alanı */}
                    <div className="bg-gray-900 text-green-400 rounded-lg relative p-4 mb-4">
                        <div
                            ref={kodRef}
                            contentEditable
                            suppressContentEditableWarning
                            className="font-mono whitespace-pre overflow-auto min-h-[200px] outline-none"
                        />

                        {/* Butonlar */}
                        <div className="flex gap-2 mt-3 flex-wrap">
                            <Button onClick={calistir} disabled={calisiyor}>
                                Başlat
                            </Button>
                            <Button
                                onClick={durdur}
                                variant="secondary"
                                disabled={!calisiyor}
                            >
                                Durdur
                            </Button>
                            <Button onClick={sifirla} variant="destructive">
                                Sıfırla
                            </Button>
                            <Button onClick={kopyala} variant="outline">
                                Kopyala
                            </Button>
                        </div>
                    </div>

                    {/* Canlı Önizleme */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <iframe
                            ref={iframeRef}
                            className="w-full h-[400px] border-none"
                            title="Canlı Önizleme"
                        />
                    </div>
                </main>
            </div>

            <Footer theme={theme} />
        </div>
    );
}
