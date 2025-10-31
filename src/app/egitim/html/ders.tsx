import { Lesson } from "../../components/ui/LessonViewer";

const htmlLessons: Lesson[] = [
  { id: 1, title: "HTML Nedir?", level: "Başlangıç", desc: "HTML temel yapısı ve kullanımı.", theory: "HTML (HyperText Markup Language), web sayfalarının yapısını oluşturan işaretleme dilidir.", content: `<h1>Merhaba Dünya</h1><p>Bu bir HTML örneğidir.</p>` },
  { id: 2, title: "Başlık Etiketleri", level: "Başlangıç", desc: "H1-H6 başlık etiketleri.", theory: "H1-H6 etiketleri, içerik başlıklarını belirtmek için kullanılır.", content: `<h1>Başlık 1</h1><h2>Başlık 2</h2><h3>Başlık 3</h3>` },
  { id: 3, title: "Paragraflar", level: "Başlangıç", desc: "Paragraf etiketleri p kullanımı.", theory: "P etiketi, metinleri paragraf olarak ayırmak için kullanılır.", content: `<p>Bu bir paragraf örneğidir.</p><p>Bir diğer paragraf.</p>` },
  { id: 4, title: "Linkler", level: "Başlangıç", desc: "Sayfalar arası gezinme.", theory: "A etiketi, başka sayfalara veya sitelere bağlantı vermek için kullanılır.", content: `<a href="#">Ana Sayfa</a><br/><a href="#">İletişim</a>` },
  { id: 5, title: "Listeler", level: "Başlangıç", desc: "Sıralı ve sırasız listeler.", theory: "UL/OL ve LI etiketleri listeleri oluşturmak için kullanılır.", content: `<ul><li>Elma</li><li>Muz</li></ul><ol><li>Bir</li><li>İki</li></ol>` },
  { id: 6, title: "Resimler", level: "Başlangıç", desc: "IMG etiketi ile resim ekleme.", theory: "IMG etiketi, sayfaya görsel eklemek için kullanılır. Src ve alt özellikleri önemlidir.", content: `<img src="https://iakademi.com/wp-content/uploads/2023/02/en-iyi-yazilim-programlari-1170x500.jpg" alt="Örnek Resim"/>` },
  { id: 7, title: "Tablolar", level: "Orta", desc: "Table, tr ve td kullanımı.", theory: "Tablolar, verileri satır ve sütunlar halinde göstermek için kullanılır.", content: `<table border="1"><tr><th>Ad</th><th>Yaş</th></tr><tr><td>Ali</td><td>20</td></tr></table>` },
  {
    id: 8,
    title: "Formlar",
    level: "Orta",
    desc: "Input, textarea ve button kullanımı.",
    theory: "Formlar, kullanıcıdan veri almak için kullanılır. HTML formları <form> etiketi içinde input, textarea ve button gibi elemanlarla oluşturulur. Bu ders, basit bir formun nasıl çalıştığını ve gönderim sonrası kullanıcıya onay mesajı göstermeyi öğretir.",
    content: `
<form id="myForm">
  <input type="text" placeholder="Adınız" required />
  <button type="submit">Gönder</button>
  <span class="onay" id="onayMesaji" style="display:none; color:green; font-weight:bold; margin-top:10px;">Gönderildi ✅</span>
</form>

<script>
  const form = document.getElementById('myForm');
  const onayMesaji = document.getElementById('onayMesaji');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Sayfanın yenilenmesini engelle
    onayMesaji.style.display = 'inline'; // Mesajı göster
    form.reset(); // Formu sıfırla

    // 2 saniye sonra mesajı kaybettir
    setTimeout(() => {
      onayMesaji.style.display = 'none';
    }, 2000);
  });
</script>
`
  },
  { id: 9, title: "Iframe", level: "Orta", desc: "Başka sayfaları gömme.", theory: "Iframe, başka bir HTML sayfasını mevcut sayfa içine yerleştirmek için kullanılır.", content: `<iframe src="https://example.com" width="300" height="200"></iframe>` },
  { id: 10, title: "HTML Yorumları", level: "Başlangıç", desc: "Yorum ekleme.", theory: "HTML yorumları, tarayıcıda gözükmez ama kodu açıklamak için kullanılır.", content: `<!-- Bu bir yorumdur -->` },
  { id: 11, title: "Semantik Etiketler", level: "Orta", desc: "Header, footer, section kullanımı.", theory: "Semantik etiketler, sayfanın yapısını ve anlamını belirtir.", content: `<header>Başlık</header><section>İçerik</section><footer>Alt bilgi</footer>` },
  { id: 12, title: "Video", level: "Orta", desc: "Video ekleme.", theory: "Video etiketi ile sayfaya medya eklenebilir ve kontroller eklenebilir.", content: `<video width="320" height="240" controls><source src="movie.mp4" type="video/mp4"></video>` },
  { id: 13, title: "Ses", level: "Orta", desc: "Audio etiketi ile ses ekleme.", theory: "Audio etiketi, sayfaya ses eklemek için kullanılır.", content: `<audio controls><source src="audio.mp3" type="audio/mpeg"></audio>` },
  { id: 14, title: "Butonlar", level: "Başlangıç", desc: "Button kullanımı.", theory: "Butonlar kullanıcı etkileşimi için kullanılır.", content: `<button>Gönder</button><button disabled>Pasif Buton</button>` },
  { id: 15, title: "Meta Etiketleri", level: "Başlangıç", desc: "Sayfa bilgileri.", theory: "Meta etiketleri sayfa hakkında bilgi verir.", content: `<meta charset="UTF-8"><meta name="description" content="Örnek sayfa">` },
  { id: 16, title: "Div ve Span", level: "Başlangıç", desc: "Blok ve inline elementler.", theory: "Div blok, span inline elementtir.", content: `<div>Blok</div><span>Inline</span>` },
  { id: 17, title: "Gömülü Stiller", level: "Başlangıç", desc: "Style etiketi kullanımı.", theory: "HTML içinde CSS eklemek için style etiketi kullanılır.", content: `<style>p{color:red;}</style><p>Bu kırmızı bir paragraf.</p>` },
  { id: 18, title: "ID ve Class", level: "Orta", desc: "Öğe tanımlayıcıları.", theory: "ID ve class ile CSS veya JS seçimi yapılabilir.", content: `<div id="bir">ID Örneği</div><div class="iki">Class Örneği</div>` },
  { id: 19, title: "Link Hedefleri", level: "Orta", desc: "Hedef attribute kullanımı.", theory: "A etiketi target ile yeni pencerede açılabilir.", content: `<a href="#" target="_blank">Yeni Pencerede Aç</a>` },
  { id: 20, title: "Form Elemanları", level: "Orta", desc: "Checkbox, radio, select.", theory: "Form elemanları, kullanıcı veri girişi için kullanılır.", content: `<input type="checkbox"/> <input type="radio"/> <select><option>1</option></select>` },
  { id: 21, title: "Resim Boyutlandırma", level: "Orta", desc: "Width ve height kullanımı.", theory: "IMG etiketinde boyutları width ve height ile ayarlayabilirsiniz.", content: `<img src="https://iakademi.com/wp-content/uploads/2023/02/en-iyi-yazilim-programlari-1170x500.jpg" width="100" height="50"/>` },
  { id: 22, title: "Link Stilleri", level: "Orta", desc: "A etiketi stilleri.", theory: "CSS ile linkler renklendirilebilir ve hover efekti verilebilir.", content: `<a href="#" style="color:blue;text-decoration:none;">Link</a>` },
  { id: 23, title: "Tablo Stilleri", level: "Orta", desc: "CSS ile tablo stilleri.", theory: "Tabloların border ve arka plan rengi CSS ile değiştirilebilir.", content: `<table style="border:2px solid black;background:#eee;"><tr><td>Veri</td></tr></table>` },
  { id: 24, title: "Liste Stilleri", level: "Orta", desc: "UL/OL stilleri.", theory: "Listelerin marker ve padding değerleri CSS ile değiştirilebilir.", content: `<ul style="list-style-type:square;padding-left:20px;"><li>Elma</li></ul>` },
  { id: 25, title: "Form Stilleri", level: "Orta", desc: "Input ve button stilleri.", theory: "Form elemanları CSS ile özelleştirilebilir.", content: `<input type="text" style="border:1px solid red;"/> <button style="background:green;color:white;">Gönder</button>` },
  {
    id: 26,
    title: "Iframe ile Site Gömmek",
    level: "Orta",
    desc: "Başka bir siteyi sayfaya gömme.",
    theory: "Iframe etiketi başka bir web sayfasını veya dokümanı sayfa içine gömmenizi sağlar. Width ve height ile boyutlandırılır.",
    content: `<iframe src="https://example.com" width="400" height="250" style="border:2px solid #333;"></iframe>`
  },
  {
    id: 27,
    title: "HTML Yorumları",
    level: "Başlangıç",
    desc: "Kodun içinde not bırakmak için kullanılır.",
    theory: "HTML yorumları <!-- --> içinde yazılır ve tarayıcı tarafından görüntülenmez. Kodun anlaşılmasını kolaylaştırır.",
    content: `<p>Bu paragraf görünecek</p>
<!-- Bu paragraf sadece yorumdur ve görünmez -->
<p>Bu da görünür bir paragraf.</p>`
  },
  {
    id: 28,
    title: "Boş Elemanlar: BR ve HR",
    level: "Başlangıç",
    desc: "Satır atlamak ve yatay çizgi eklemek.",
    theory: "BR satır atlamak, HR yatay çizgi eklemek için kullanılır.",
    content: `<p>Satır 1<br/>Satır 2<br/>Satır 3</p>
<hr/>
<p>Yeni bölüm başlıyor</p>`
  },
  {
    id: 29,
    title: "Kod Blokları: Pre & Code",
    level: "Orta",
    desc: "Kodları düzgün biçimde göstermek.",
    theory: "Pre etiketi formatlı metin (whitespace korur), code etiketi kod parçalarını belirtir.",
    content: `<pre><code>
function merhaba() {
    console.log('Merhaba Dünya!');
}
merhaba();
</code></pre>`
  },
  {
    id: 30,
    title: "HTML5 Yenilikleri",
    level: "Orta",
    desc: "Audio, video ve canvas kullanımı.",
    theory: "HTML5 ile ses, video oynatma ve çizim yapmak için canvas eklenmiştir.",
    content: `<h3>Video Örneği</h3>
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Tarayıcınız video etiketini desteklemiyor.
</video>

<h3>Ses Örneği</h3>
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Tarayıcınız audio etiketini desteklemiyor.
</audio>

<h3>Canvas Örneği</h3>
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
Tarayıcınız canvas etiketini desteklemiyor.
</canvas>`
  }

];

export default htmlLessons;
