import { Lesson } from "../../components/ui/LessonViewer";

const cssLessons: Lesson[] = [
    {
        id: 1,
        title: "CSS Nedir?",
        level: "Başlangıç",
        desc: "CSS ile HTML öğelerine stil verilir.",
        theory: "CSS (Cascading Style Sheets), HTML öğelerinin görünümünü ve düzenini kontrol eder. Renk, font, boyut, arka plan ve layout gibi özellikleri belirlemek için kullanılır.",
        content: `<p style="color: blue;">Bu bir CSS örneğidir.</p>`
    },
    {
        id: 2,
        title: "Seçiciler (Selectors)",
        level: "Başlangıç",
        desc: "HTML elemanlarını hedeflemek için kullanılır.",
        theory: "Seçiciler, CSS'in en temel yapılarıdır. ID, class ve element adlarıyla öğeleri seçerek stiller uygulanabilir.",
        content: `<h1 id="baslik">Başlık</h1>
<p style="color:red;">Bu bir paragraf.</p>
<div class="kutu" style="background-color:yellow;">Kutu örneği</div>`
    },
    {
        id: 3,
        title: "Renkler ve Arka Plan",
        level: "Başlangıç",
        desc: "Renkler HEX, RGB veya isim olarak tanımlanabilir.",
        theory: "CSS'de renkler HEX, RGB, HSL veya isimlerle verilebilir.",
        content: `<p style="color:#ff6600;">Renk örneği</p>
<div style="background-color:#f4f4f4;">Arka plan örneği</div>`
    },
    {
        id: 4,
        title: "Box Model",
        level: "Orta",
        desc: "Her öğe; içerik, padding, border ve margin katmanlarından oluşur.",
        theory: "CSS box model, bir öğenin içerik, padding, border ve margin alanlarını belirler.",
        content: `<div style="width:200px;padding:20px;border:2px solid black;margin:10px;background-color:lightgray;">Box Model Örneği</div>`
    },
    {
        id: 5,
        title: "Linkler",
        level: "Başlangıç",
        desc: "Sayfalar arası gezinme stilleri.",
        theory: "Linkler için color, text-decoration, hover efektleri kullanılabilir.",
        content: `<a href="#" style="color:blue;text-decoration:none;">Ana Sayfa</a>`
    },
    {
        id: 6,
        title: "Fontlar ve Yazı Tipleri",
        level: "Başlangıç",
        desc: "Farklı fontlar ve boyutlar ayarlanabilir.",
        theory: "CSS ile font-family, font-size ve font-weight kullanılabilir.",
        content: `<p style="font-family:Arial;font-size:18px;">Arial yazı tipi örneği</p>`
    },
    {
        id: 7,
        title: "Metin Hizalama",
        level: "Başlangıç",
        desc: "Text-align ile metinler hizalanabilir.",
        theory: "CSS text-align ile metinleri sola, sağa veya ortaya hizalayabilirsiniz.",
        content: `<p style="text-align:center;">Ortalanmış metin</p>`
    },
    {
        id: 8,
        title: "Liste Stilleri",
        level: "Orta",
        desc: "Liste öğelerinin stilleri değiştirilebilir.",
        theory: "ul ve ol listeleri için list-style-type ve padding kullanabilirsiniz.",
        content: `<ul style="list-style-type:circle;">
<li>Madde 1</li>
<li>Madde 2</li>
</ul>`
    },
    {
        id: 9,
        title: "Arka Plan Resimleri",
        level: "Orta",
        desc: "Arka plan resimleri ekleyebilirsiniz.",
        theory: "CSS background-image, background-size, background-repeat kullanılır.",
        content: `<div style="width:500px;height:400px;background-image:url('https://iakademi.com/wp-content/uploads/2023/02/en-iyi-yazilim-programlari-1170x500.jpg');background-size:cover;"></div>`
    },
    {
        id: 10,
        title: "Kenarlıklar (Borders)",
        level: "Orta",
        desc: "Element kenarlıkları eklenebilir ve özelleştirilebilir.",
        theory: "border-width, border-style, border-color ile border ayarlanır.",
        content: `<div style="border:3px dashed red;padding:10px;">Border örneği</div>`
    },
    {
        id: 11,
        title: "Gölgelendirme (Box Shadow)",
        level: "İleri",
        desc: "Öğelere gölge efekti ekleyebilirsiniz.",
        theory: "box-shadow ile elemente gölge verilir.",
        content: `<div style="width:100px;height:100px;background-color:gray;box-shadow:5px 5px 10px black;"></div>`
    },
    {
        id: 12,
        title: "Yuvarlatılmış Köşeler (Border Radius)",
        level: "Orta",
        desc: "Öğelerin köşeleri yuvarlatılabilir.",
        theory: "border-radius ile köşeler yuvarlatılır.",
        content: `<div style="width:100px;height:100px;background-color:blue;border-radius:15px;"></div>`
    },
    {
        id: 13,
        title: "Opacity ve Transparanlık",
        level: "Orta",
        desc: "Element şeffaflığı ayarlanabilir.",
        theory: "opacity özelliği ile elementin saydamlığı ayarlanır.",
        content: `<div style="width:100px;height:100px;background-color:red;opacity:0.5;"></div>`
    },
    {
        id: 14,
        title: "Pozisyonlama (Position)",
        level: "İleri",
        desc: "Elementler absolute, relative veya fixed konumlandırılabilir.",
        theory: "position ve top/left/right/bottom ile konum belirlenir.",
        content: `<div style="position:absolute;top:50px;left:50px;background-color:green;width:100px;height:100px;"></div>`
    },
    {
        id: 15,
        title: "Flexbox",
        level: "Orta",
        desc: "Öğeleri esnek şekilde hizalayabilirsiniz.",
        theory: "display:flex ile flex container oluşturulur, justify-content ve align-items ile hizalama yapılır.",
        content: `<div style="display:flex;justify-content:center;align-items:center;height:100px;">
  <div style="background-color:red;width:50px;height:50px;"></div>
  <div style="background-color:blue;width:50px;height:50px;"></div>
</div>`
    },
    {
        id: 16,
        title: "Grid",
        level: "İleri",
        desc: "Öğeleri grid sistemi ile düzenleyebilirsiniz.",
        theory: "display:grid, grid-template-columns, grid-gap ile grid düzeni oluşturulur.",
        content: `<div style="display:grid;grid-template-columns:repeat(3,100px);grid-gap:10px;">
  <div style="background-color:red;height:50px;"></div>
  <div style="background-color:blue;height:50px;"></div>
  <div style="background-color:green;height:50px;"></div>
</div>`
    },
    {
        id: 17,
        title: "Media Queries",
        level: "İleri",
        desc: "Farklı ekran boyutlarına göre stil ayarlayabilirsiniz.",
        theory: "@media ile responsive tasarım yapılır.",
        content: `<div style="width:100%;background-color:purple;">
  <p style="color:white;">Responsive Örnek</p>
</div>`
    },
    {
        id: 18,
        title: "Transition",
        level: "Orta",
        desc: "Element geçişleri animasyonlu yapılabilir.",
        theory: "transition ile CSS animasyonları basitçe uygulanabilir.",
        content: `<div style="width:100px;height:100px;background-color:red;transition:all 0.5s;" 
  onmouseover="this.style.backgroundColor='blue';" 
  onmouseout="this.style.backgroundColor='red';"></div>`
    },
    {
        id: 19,
        title: "Transform",
        level: "İleri",
        desc: "Öğeler döndürülebilir, ölçeklendirilebilir veya taşınabilir.",
        theory: "transform ile rotate, scale, translate kullanılabilir.",
        content: `<div style="width:100px;height:100px;background-color:orange;transform:rotate(15deg);"></div>`
    },
    {
        id: 20,
        title: "Animation",
        level: "İleri",
        desc: "CSS animasyonları eklenebilir.",
        theory: "animation ile keyframes tanımlanıp uygulanabilir.",
        content: `<div style="width:50px;height:50px;background-color:red;animation:move 2s infinite;"></div>
<style>
@keyframes move {
  0% { transform: translateX(0); }
  50% { transform: translateX(50px); }
  100% { transform: translateX(0); }
}
</style>`
    },
    {
        id: 21,
        title: "Overflow",
        level: "Orta",
        desc: "Taşan içerikler kontrol edilebilir.",
        theory: "overflow ile hidden, scroll, auto gibi ayarlar yapılır.",
        content: `<div style="width:100px;height:50px;overflow:hidden;border:1px solid black;">
<p>Bu metin taşabilir ve gizlenir.</p>
</div>`
    },
    {
        id: 22,
        title: "Z-Index",
        level: "İleri",
        desc: "Elementlerin üst üste gelme sırası ayarlanabilir.",
        theory: "z-index ile stack order belirlenir, position gerekli.",
        content: `<div style="position:relative;z-index:1;background-color:red;width:100px;height:100px;"></div>
<div style="position:relative;z-index:2;background-color:blue;width:50px;height:50px;margin-top:-50px;"></div>`
    },
    {
        id: 23,
        title: "Opacity & RGBA",
        level: "Orta",
        desc: "Renklerde şeffaflık kullanabilirsiniz.",
        theory: "rgba ile renklerde alpha kanalı eklenir.",
        content: `<div style="width:100px;height:100px;background-color:rgba(255,0,0,0.5);"></div>`
    },
    {
        id: 24,
        title: "Cursor",
        level: "Başlangıç",
        desc: "Fare imlecini değiştirebilirsiniz.",
        theory: "cursor ile pointer, move, crosshair gibi imleçler kullanılabilir.",
        content: `<button style="cursor:pointer;">Tıkla</button>`
    },
    {
        id: 25,
        title: "Visibility",
        level: "Orta",
        desc: "Görünürlük kontrolü yapılabilir.",
        theory: "visibility ile visible ve hidden kullanılabilir.",
        content: `<div style="visibility:hidden;">Gizli Metin</div>`
    },
    {
        id: 26,
        title: "Min & Max Width/Height",
        level: "Orta",
        desc: "Minimum ve maksimum boyutlar ayarlanabilir.",
        theory: "min-width, max-width, min-height, max-height kullanılabilir.",
        content: `<div style="min-width:100px;max-width:200px;height:50px;background-color:green;"></div>`
    },
    {
        id: 27,
        title: "Overflow Scrolling",
        level: "İleri",
        desc: "Mobilde scroll davranışı kontrol edilebilir.",
        theory: "overflow:scroll ve -webkit-overflow-scrolling kullanılabilir.",
        content: `<div style="width:100px;height:50px;overflow:scroll;">
<p>Uzun metin uzar uzar...</p>
</div>`
    },
    {
        id: 28,
        title: "Clip-path",
        level: "İleri",
        desc: "Öğeleri şekillendirmek için clip-path kullanılabilir.",
        theory: "clip-path ile daire, poligon gibi şekiller oluşturabilirsiniz.",
        content: `<div style="width:100px;height:100px;background-color:red;clip-path:circle(50%);"></div>`
    },
    {
        id: 29,
        title: "Filter",
        level: "İleri",
        desc: "CSS filtreleri uygulanabilir.",
        theory: "filter ile blur, brightness, contrast kullanılabilir.",
        content: `<img src="https://iakademi.com/wp-content/uploads/2023/02/en-iyi-yazilim-programlari-1170x500.jpg" style="filter:blur(2px) brightness(150%);"/>`
    },
    {
        id: 30,
        title: "Variables (CSS Değişkenleri)",
        level: "İleri",
        desc: "CSS değişkenleri tanımlanabilir ve kullanılabilir.",
        theory: "CSS değişkenleri :root içinde tanımlanır ve var() ile kullanılır.",
        content: `<style>
:root { --ana-renk: #3498db; }
p { color: var(--ana-renk); }
</style>
<p>CSS Değişken Örneği</p>`
    }
];

export default cssLessons;
