import { Lesson } from "../../components/ui/LessonViewer";

const htmlLessons: Lesson[] = [
  // =======================
  // Başlangıç (1-15)
  // =======================
  {
    id: 1, title: "HTML Giriş", level: "Başlangıç", desc: "HTML’in temel yapısını öğrenin.", content: `<!DOCTYPE html>
<html>
<head><meta charset=\"UTF-8\"><title>HTML Giriş</title></head>
<body>
<h1>Merhaba, Dünya!</h1>
<p>HTML sayfasının temel yapısını öğrendik.</p>
</body>
</html>`, theory: "HTML temel sayfa yapısıdır."
  },
  {
    id: 2, title: "Başlıklar ve Paragraflar", level: "Başlangıç", desc: "Başlık ve paragraf etiketleri.", content: `<!DOCTYPE html>
<html>
<head><meta charset=\"UTF-8\"><title>Başlıklar ve Paragraflar</title></head>
<body>
<h1>Başlık 1</h1>
<h2>Başlık 2</h2>
<p>Bu bir paragraf örneğidir.</p>
</body>
</html>`, theory: "< h1 > - < h6 > ve < p > etiketleri."
  },
  {
    id: 3, title: "Listeler", level: "Başlangıç", desc: "Sıralı ve sırasız listeler.", content: `<!DOCTYPE html>
<html>
<head><meta charset=\"UTF-8\"><title>Listeler</title></head>
<body>
<ul><li>Elma</li><li>Muz</li><li>Çilek</li></ul>
<ol><li>İlk</li><li>İkinci</li><li>Üçüncü</li></ol>
</body>
</html>`, theory: "Sırasız < ul > ve sıralı  < ol > listeler."
  },
  {
    id: 4, title: "Linkler", level: "Başlangıç", desc: "Sayfalar arası gezinme.", content: `<!DOCTYPE html>
<html>
<head><meta charset=\"UTF-8\"><title>Linkler</title></head>
<body>
<a href=\"https://turkiyeroboticscommunity.vercel.app/" target=\"_blank\">Web sitesi</a>
</body>
</html>`, theory: " < a > ile bağlantılar."
  },
  {
    id: 5,
    title: "Görseller",
    level: "Başlangıç",
    desc: "Sayfaya resim ekleme ve açıklama ekleme.",
    content: `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Görseller</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      padding: 20px;
    }
    figure {
      display: inline-block;
      margin: 20px;
      border: 2px solid #3498db;
      padding: 10px;
      background-color: #ffffff;
    }
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
    figcaption {
      text-align: center;
      margin-top: 8px;
      font-style: italic;
      color: #555;
    }
  </style>
</head>
<body>
  <h1>Görsel Örneği</h1>
  <p>HTML sayfalarına görsel eklemek için <code>&lt;img&gt;</code> etiketini kullanırız. Ayrıca <code>&lt;figure&gt;</code> ve <code>&lt;figcaption&gt;</code> ile açıklama ekleyebiliriz.</p>
  <figure>
    <img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/1-26_small.jpg" alt="Anakart örneği">
    <figcaption>Anakart örneği görseli</figcaption>
  </figure>
</body>
</html>`,
    theory: "< img > etiketi ile görsel ekleme ve < figure > / < figcaption > ile açıklama ekleme."
  },
  {
    id: 6,
    title: "Form Stilleri",
    level: "Başlangıç",
    desc: "Form elemanları ve gönderim mesajı.",
    content: `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Form Stilleri</title>
<style>
  form {
    display: flex;
    flex-direction: column;
    width: 250px;
  }
  label {
    margin-top: 10px;
  }
  input {
    padding: 5px;
  }
  button {
    margin-top: 10px;
    padding: 5px;
  }
  #mesaj {
    margin-top: 10px;
    color: green;
    font-weight: bold;
  }
</style>
<script>
  function gonder() {
    document.getElementById('mesaj').textContent = "Gönderildi!";
    return false; // sayfa yenilenmesini engelle
  }
</script>
</head>
<body>
<h1>Form Örneği</h1>
<form onsubmit="return gonder()">
<input type="text" name="ad" id="ad" placeholder="Adınız">
<label for="ad">Adınız</label>
  <label for="email">Email:</label>
<input type="email" name="email" id="email" autocomplete="email">
  <button type="submit">Gönder</button>
</form>
<p id="mesaj"></p>
</body>
</html>`,
    theory: "Form elemanları: < input >, < label > ve < button >. Basit CSS ile stil ve JavaScript ile gönderim mesajı."
  },
  {
    id: 7, title: "Tablolar", level: "Başlangıç", desc: "HTML tabloları.", content: `<!DOCTYPE html>
<html>
<head><meta charset=\"UTF-8\"><title>Tablolar</title></head>
<body>
<table border=\"1\">
<tr><th>Ad</th><th>Yaş</th></tr>
<tr><td>Ali</td><td>25</td></tr>
<tr><td>Ayşe</td><td>30</td></tr>
</table>
</body>
</html>`, theory: "< table >, < tr >, < td >, < th > kullanımı."
  },
  {
    id: 8, title: "HTML Semantik", level: "Başlangıç", desc: "Semantik etiketler.", content: `<!DOCTYPE html>
<html>
<head><meta charset=\"UTF-8\"><title>Semantik Etiketler</title></head>
<body>
<header><h1>Başlık</h1></header>
<nav>Menü</nav>
<main>İçerik</main>
<footer>Altbilgi</footer>
</body>
</html>`, theory: "Semantik etiketler yapıyı anlama kolaylığı sağlar."
  },
  {
    id: 9,
    title: "Profil Kartları",
    level: "Orta",
    desc: "HTML ve CSS ile basit profil kartları oluşturma.",
    content: `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profil Kartları</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      gap: 20px;
    }
    .card {
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 8px;
      width: 200px;
      padding: 16px;
      text-align: center;
      box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 4px 4px 12px rgba(0,0,0,0.2);
    }
    .card img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    .card h2 {
      margin: 0;
      font-size: 1.2em;
    }
    .card p {
      font-size: 0.9em;
      color: #555;
    }
  </style>
</head>
<body>
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRMVvLRyims7YZDE1pRJQ5FYJSo4Lj95xlw&s" alt="Profil Resmi">
    <h2>Can Akbulut</h2>
    <p>Web Geliştirici</p>
  </div>
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRMVvLRyims7YZDE1pRJQ5FYJSo4Lj95xlw&s" alt="Profil Resmi">
    <h2>Ayşe Demir</h2>
    <p>Grafik Tasarımcı</p>
  </div>
</body>
</html>`,
    theory: "Orta seviyede HTML ve CSS ile kart tasarımı, hover efekti ve temel stil kullanımı."
  },
  {
    id: 10, title: "CSS Temelleri", level: "Orta", desc: "Renk ve yazı tipleri.", content: `<!DOCTYPE html>
<html>
<head>
<meta charset=\"UTF-8\">
<title>CSS Temelleri</title>
<style>
body { background-color: #f0f0f0; font-family: Arial; }
h1 { color: #2c3e50; }
p { color: #16a085; font-size: 18px; }
</style>
</head>
<body>
<h1>CSS ile Stiller</h1>
<p>Metin rengini değiştirdik.</p>
</body>
</html>`, theory: "CSS ile temel stiller, renk ve font ayarları."
  },
  {
    id: 11, title: "Box Model", level: "Orta", desc: "Box model ve kenarlık.", content: `<!DOCTYPE html>
<html>
<head>
<meta charset=\"UTF-8\">
<title>Box Model</title>
<style>
div { width: 200px; padding: 20px; border: 5px solid #3498db; margin: 20px; }
</style>
</head>
<body>
<div>Bu bir kutudur. Box model padding, border ve margin içerir.</div>
</body>
</html>`, theory: "Box model element boyut ve konum kontrolü sağlar."
  },
  {
    id: 12, title: "Tablo Stilleri", level: "Orta", desc: "CSS ile tablolar.", content: `<!DOCTYPE html>
<html>
<head>
<meta charset=\"UTF-8\">
<title>Tablo Stilleri</title>
<style>
table { border-collapse: collapse; width: 50%; }
th, td { border: 1px solid #333; padding: 8px; text-align: center; }
th { background-color: #3498db; color: white; }
</style>
</head>
<body>
<table>
<tr><th>Ad</th><th>Yaş</th></tr>
<tr><td>Ali</td><td>25</td></tr>
<tr><td>Ayşe</td><td>30</td></tr>
</table>
</body>
</html>`, theory: "CSS ile tablo stilleri oluşturma."
  },
  {
    id: 13,
    title: "Profil Kartı",
    level: "Orta",
    desc: "HTML ve CSS ile basit profil kartı oluşturma.",
    content: `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Profil Kartı</title>
<style>
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}
.card {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 200px;
  padding: 16px;
  text-align: center;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 4px 4px 12px rgba(0,0,0,0.2);
}
.card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.card h2 {
  margin: 0;
  font-size: 1.2em;
}
.card p {
  font-size: 0.9em;
  color: #555;
}
</style>
</head>
<body>
<div class="card">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRMVvLRyims7YZDE1pRJQ5FYJSo4Lj95xlw&s" alt="Profil Resmi">
  <h2>Can Akbulut</h2>
  <p>Web Geliştirici</p>
</div>
</body>
</html>`,
    theory: "Orta seviyede HTML ve CSS ile kart tasarımı, hover efekti ve temel stil kullanımı."
  },
  {
    id: 14,
    title: "Tablolar Gelişmiş",
    level: "Orta",
    desc: "CSS ile tablo başlık ve hücre stilleri.",
    content: `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Tablo Gelişmiş</title>
<style>
table { border-collapse: collapse; width: 60%; }
th { background-color: #3498db; color: white; padding: 8px; }
td { border: 1px solid #333; padding: 8px; text-align: center; }
</style>
</head>
<body>
<h1>Ürün Tablosu</h1>
<table>
<tr><th>Ürün</th><th>Fiyat</th><th>Stok</th></tr>
<tr><td>Kalem</td><td>5₺</td><td>20</td></tr>
<tr><td>Defter</td><td>12₺</td><td>15</td></tr>
<tr><td>Silgi</td><td>3₺</td><td>30</td></tr>
</table>
</body>
</html>`,
    theory: "CSS ile tablo başlık, hücre stilleri ve border kontrolü."
  },
  {
    id: 15,
    title: "Liste ve Menüler",
    level: "Orta",
    desc: "Liste stilleri ve menü oluşturma.",
    content: `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Liste ve Menü</title>
<style>
ul { list-style-type: square; }
ol { list-style-type: decimal-leading-zero; }
nav a { margin-right: 15px; text-decoration: none; color: #3498db; }
nav a:hover { color: #2ecc71; }
</style>
</head>
<body>
<h1>Örnek Menü</h1>
<nav>
  <a href="#">Anasayfa</a>
  <a href="#">Hakkımızda</a>
  <a href="#">İletişim</a>
</nav>
<h2>Alışveriş Listesi</h2>
<ul>
  <li>Elma</li>
  <li>Muz</li>
  <li>Çilek</li>
</ul>
<ol>
  <li>Adım 1</li>
  <li>Adım 2</li>
  <li>Adım 3</li>
</ol>
</body>
</html>`,
    theory: "Liste türleri: < ul >, < ol >. Menü linkleri < a > ve hover efekti."
  },
  {
    id: 16,
    title: "Resim Galerisi",
    level: "Orta",
    desc: "Birden fazla resim ile galeri oluşturma.",
    content: `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Bilgisayar Donanım Galerisi</title>
<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
}
h1 {
  text-align: center;
  color: #333;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
figure {
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 180px;
  text-align: center;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
}
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 8px;
}
figcaption {
  font-size: 0.9em;
  color: #555;
}
</style>
</head>
<body>
<h1>Bilgisayar Donanım Parçaları</h1>
<div class="gallery">
  <figure>
    <img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/1-26_small.jpg" alt="Anakart">
    <figcaption>Anakart: Bilgisayarın ana kartı</figcaption>
  </figure>
  <figure>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGXTDwi3Mt-ZaBwGhIWBu-jnHgdZ7yB39Ew&s" alt="Kasa">
    <figcaption>Kasa: Bilgisayar kasası</figcaption>
  </figure>
  <figure>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGXTDwi3Mt-ZaBwGhIWBu-jnHgdZ7yB39Ew&s" alt="Ekran Kartı">
    <figcaption>Ekran Kartı: Grafik işleme birimi</figcaption>
  </figure>
  <figure>
    <img src="https://longline.com.tr/wp-content/uploads/2021/11/RAM-Nedir-Ne-Ise-Yarar-Nasil-Calisir.jpg" alt="RAM">
    <figcaption>RAM: Bellek modülü</figcaption>
  </figure>
  <figure>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWew_hOztO48tg-dwMtHr78klVaw4UOwQ67w&s" alt="SSD">
    <figcaption>SSD: Depolama birimi</figcaption>
  </figure>
</div>
</body>
</html>
`,
    theory: "Birden fazla resim ekleme ve basit stil uygulama."
  },
  {
    id: 17,
    title: "Div ile Layout",
    level: "Orta",
    desc: "HTML div kullanımı ve temel layout.",
    content: `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Div Layout</title>
<style>
.container { display: flex; gap: 10px; }
.box { background-color: #3498db; color: white; padding: 20px; width: 100px; text-align: center; }
</style>
</head>
<body>
<h1>Div Layout Örneği</h1>
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
</body>
</html>`,
    theory: "Flexbox ile basit kutu düzeni oluşturma."
  },
  {
    id: 18,
    title: "Hover Efektleri",
    level: "Orta",
    desc: "CSS ile hover efektleri uygulama.",
    content: `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Hover Efekti</title>
<style>
.button { background-color: #3498db; color: white; padding: 10px 20px; text-decoration: none; display: inline-block; transition: all 0.3s ease; }
.button:hover { background-color: #2ecc71; transform: scale(1.1); }
</style>
</head>
<body>
<h1>Hover Örneği</h1>
<a href="#" class="button">Buton</a>
</body>
</html>`,
    theory: "CSS hover efekti ve basit animasyon ile etkileşim."
  },
  {
    id: 19,
    title: "Responsive Basit",
    level: "Orta",
    desc: "Media query ile temel responsive tasarım.",
    content: `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Responsive</title>
<style>
.box { width: 100%; padding: 20px; background-color: #3498db; color: white; text-align: center; }
@media (min-width: 600px) { .box { width: 50%; margin: auto; } }
</style>
</head>
<body>
<h1>Responsive Örnek</h1>
<div class="box">Responsive Kutusu</div>
</body>
</html>`,
    theory: "Media query ile temel responsive tasarım uygulama."
  },
  {
    id: 20,
    title: "Iframe Kullanımı",
    level: "Orta",
    desc: "Başka sayfaları iframe ile gösterme.",
    content: `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Iframe Örneği</title>
<style>
iframe { width: 100%; height: 300px; border: 2px solid #3498db; }
</style>
</head>
<body>
<h1>Iframe Örneği</h1>
<iframe src="https://www.example.com" title="Example Site"></iframe>
</body>
</html>`,
    theory: "Iframe ile başka bir sayfayı HTML içine gömme."
  }
];
export default htmlLessons