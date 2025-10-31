import { Lesson } from "../../components/ui/LessonViewer";

const jsLessons: Lesson[] = [
    {
        id: 1,
        title: "JavaScript Nedir?",
        level: "Başlangıç",
        desc: "JavaScript web sayfalarına etkileşim kazandırır.",
        theory: "HTML yapıyı, CSS görünümü, JavaScript ise davranışı kontrol eder.",
        content: `<div id="jsNedir">Çıktı buraya gelecek</div>
<button onclick="document.getElementById('jsNedir').innerText='Merhaba Dünya! JavaScript ile yazıldı!'">Çalıştır</button>`
    },
    {
        id: 2,
        title: "Değişkenler",
        level: "Başlangıç",
        desc: "Veri saklamak için kullanılır.",
        theory: "let, const ve var ile değişken tanımlanabilir.",
        content: `<div id="degiskenler"></div>
<button onclick="let isim='Ahmet'; const yas=25; document.getElementById('degiskenler').innerText='İsim: '+isim+', Yaş: '+yas;">Göster</button>`
    },
    {
        id: 3,
        title: "Fonksiyonlar",
        level: "Başlangıç",
        desc: "Tekrar kullanılabilir kod bloklarıdır.",
        theory: "Bir görevi gerçekleştirmek için fonksiyonlar kullanılır.",
        content: `<div id="fonksiyon"></div>
<button onclick="function selamla(ad){document.getElementById('fonksiyon').innerText='Merhaba '+ad;} selamla('Ayşe');">Çalıştır</button>`
    },
    {
        id: 4,
        title: "If Else Koşulu",
        level: "Başlangıç",
        desc: "Karar vermeyi sağlar.",
        theory: "If-else ile belirli koşullara göre farklı kodlar çalıştırılır.",
        content: `<div id="kosul"></div>
<button onclick="let not=75; document.getElementById('kosul').innerText = not>=50 ? 'Geçtin!' : 'Kaldın!'">Kontrol Et</button>`
    },
    {
        id: 5,
        title: "For Döngüsü",
        level: "Başlangıç",
        desc: "Tekrarlayan işlemleri yapar.",
        theory: "Belirli bir sayıda işlem tekrarlamak için kullanılır.",
        content: `<div id="forLoop"></div>
<button onclick="let output=''; for(let i=1;i<=5;i++){output+='Sayı: '+i+'\\n';} document.getElementById('forLoop').innerText=output;">Çalıştır</button>`
    },
    {
        id: 6,
        title: "While Döngüsü",
        level: "Orta",
        desc: "Şart doğru olduğu sürece döner.",
        theory: "While döngüsü, koşul sağlandığı sürece tekrarlanır.",
        content: `<div id="whileLoop"></div>
<button onclick="let i=0; let output=''; while(i<3){output+='i: '+i+'\\n'; i++;} document.getElementById('whileLoop').innerText=output;">Çalıştır</button>`
    },
    {
        id: 7,
        title: "Array (Dizi)",
        level: "Orta",
        desc: "Birden fazla veri saklar.",
        theory: "Bir değişkende birden fazla öğe tutulabilir.",
        content: `<div id="arrayOutput"></div>
<button onclick="let renkler=['Kırmızı','Mavi','Yeşil']; document.getElementById('arrayOutput').innerText='İkinci renk: '+renkler[1];">Göster</button>`
    },
    {
        id: 8,
        title: "Obje Kullanımı",
        level: "Orta",
        desc: "Verileri anahtar-değer şeklinde tutar.",
        theory: "Objeler birden fazla özelliği bir arada taşır.",
        content: `<div id="objectOutput"></div>
<button onclick="let ogrenci={ad:'Ali', yas:20}; document.getElementById('objectOutput').innerText='Adı: '+ogrenci.ad+', Yaşı: '+ogrenci.yas;">Göster</button>`
    },
    {
        id: 9,
        title: "Event (Olay) Kullanımı",
        level: "Orta",
        desc: "Kullanıcı etkileşimlerini yakalar.",
        theory: "onclick gibi event'ler kullanılarak aksiyon alınabilir.",
        content: `<button onclick="document.getElementById('eventOutput').innerText='Butona tıklandı!'">Tıkla</button>
<div id="eventOutput"></div>`
    },
    {
        id: 10,
        title: "DOM Değiştirme",
        level: "Orta",
        desc: "Sayfadaki içerikleri güncelleme.",
        theory: "document.getElementById ile erişim sağlanır.",
        content: `<div id="yazi">Eski metin</div>
<button onclick="document.getElementById('yazi').innerText='Yeni metin'">Değiştir</button>`
    },
    {
        id: 11,
        title: "Matematik İşlemleri",
        level: "Başlangıç",
        desc: "Toplama, çıkarma, çarpma, bölme işlemleri.",
        theory: "+, -, *, / operatörleri kullanılır.",
        content: `<div id="mathOutput"></div>
<button onclick="let a=10,b=3; document.getElementById('mathOutput').innerText='Toplam: '+(a+b)+', Çarpım: '+(a*b);">Hesapla</button>`
    },
    {
        id: 12,
        title: "String İşlemleri",
        level: "Başlangıç",
        desc: "Metinlerle çalışma.",
        theory: "String’ler metinsel verileri temsil eder.",
        content: `<div id="stringOutput"></div>
<button onclick="let mesaj='Merhaba Dünya'; document.getElementById('stringOutput').innerText=mesaj.toUpperCase();">Göster</button>`
    },
    {
        id: 13,
        title: "Alert, Prompt, Confirm",
        level: "Başlangıç",
        desc: "Kullanıcıyla etkileşim kutuları.",
        theory: "Alert uyarı, prompt giriş, confirm onay alır.",
        content: `<button onclick="alert('Merhaba!'); let isim=prompt('Adınızı girin:'); let cevap=confirm('Devam edilsin mi?'); document.getElementById('alertOutput').innerText='İsim: '+isim+', Onay: '+cevap;">Test Et</button>
<div id="alertOutput"></div>`
    },
    {
        id: 14,
        title: "Date (Tarih)",
        level: "Orta",
        desc: "Tarih ve saat işlemleri.",
        theory: "Date nesnesiyle güncel zaman alınabilir.",
        content: `<div id="dateOutput"></div>
<button onclick="document.getElementById('dateOutput').innerText=new Date().toLocaleString();">Göster</button>`
    },
    {
        id: 15,
        title: "Random Sayı",
        level: "Orta",
        desc: "Rastgele sayı üretimi.",
        theory: "Math.random() fonksiyonu 0-1 arasında sayı üretir.",
        content: `<div id="randomOutput"></div>
<button onclick="document.getElementById('randomOutput').innerText=Math.random();">Üret</button>`
    },
    {
        id: 16,
        title: "Array Döngüsü",
        level: "Orta",
        desc: "forEach ile dizide dönme.",
        theory: "Dizilerde forEach metodu kullanılır.",
        content: `<div id="arrayLoopOutput"></div>
<button onclick="let meyveler=['Elma','Armut','Muz']; let out=''; meyveler.forEach(m=>out+=m+'\\n'); document.getElementById('arrayLoopOutput').innerText=out;">Döngüyü Çalıştır</button>`
    },
    {
        id: 17,
        title: "SetTimeout",
        level: "Orta",
        desc: "Belirli süre sonra işlem yapar.",
        theory: "setTimeout ile gecikmeli işlem yapılabilir.",
        content: `<div id="timeoutOutput"></div>
<button onclick="setTimeout(()=>document.getElementById('timeoutOutput').innerText='2 saniye geçti!',2000);">Başlat</button>`
    },
    {
        id: 18,
        title: "SetInterval",
        level: "Orta",
        desc: "Belirli aralıklarla işlem yapar.",
        theory: "setInterval ile sürekli tekrarlayan işlemler yapılır.",
        content: `<div id="intervalOutput"></div>
<button onclick="let count=0; let interval=setInterval(()=>{document.getElementById('intervalOutput').innerText='Sayaç: '+count; count++; if(count>5) clearInterval(interval);},1000);">Başlat</button>`
    },
    {
        id: 19,
        title: "Input ile Veri Alma",
        level: "Orta",
        desc: "Kullanıcıdan input ile veri alınır.",
        theory: "Input'tan alınan veriler JavaScript ile okunabilir.",
        content: `<input id="ad" placeholder="Adınızı girin" /><button onclick="document.getElementById('inputOutput').innerText=document.getElementById('ad').value;">Gönder</button><div id="inputOutput"></div>`
    },
    {
        id: 20,
        title: "Stil Değiştirme",
        level: "Orta",
        desc: "Elementin rengini değiştirme.",
        theory: "style özelliğiyle CSS değerleri değiştirilebilir.",
        content: `<div id="kutu" style="width:100px;height:100px;background:red;"></div>
<button onclick="document.getElementById('kutu').style.background='blue';">Rengi Değiştir</button>`
    },
    {
        id: 21,
        title: "Sayıyı Kare Almak",
        level: "Başlangıç",
        desc: "Matematik işlemi örneği.",
        theory: "Bir sayının karesi alınabilir.",
        content: `<div id="kareOutput"></div>
<button onclick="let x=4; document.getElementById('kareOutput').innerText='Karesi: '+(x*x);">Hesapla</button>`
    },
    {
        id: 22,
        title: "Array Map Kullanımı",
        level: "Orta",
        desc: "Veri dönüştürme.",
        theory: "map() diziyi dönüştürerek yeni bir dizi döner.",
        content: `<div id="mapOutput"></div>
<button onclick="let sayilar=[1,2,3]; let kareler=sayilar.map(s=>s*s); document.getElementById('mapOutput').innerText=kareler.join(', ');">Çalıştır</button>`
    },
    {
        id: 23,
        title: "Filter Kullanımı",
        level: "Orta",
        desc: "Koşula göre dizi süzme.",
        theory: "filter() istenen öğeleri döner.",
        content: `<div id="filterOutput"></div>
<button onclick="let sayilar=[2,5,8,10]; let sonuc=sayilar.filter(s=>s>5); document.getElementById('filterOutput').innerText=sonuc.join(', ');">Çalıştır</button>`
    },
    {
        id: 24,
        title: "Reduce Kullanımı",
        level: "Zor",
        desc: "Dizi değerlerini toplar.",
        theory: "reduce() diziyi tek değere indirger.",
        content: `<div id="reduceOutput"></div>
<button onclick="let sayilar=[1,2,3,4]; let toplam=sayilar.reduce((a,b)=>a+b); document.getElementById('reduceOutput').innerText='Toplam: '+toplam;">Çalıştır</button>`
    },
    {
        id: 25,
        title: "Switch Case",
        level: "Orta",
        desc: "Koşul alternatifleri.",
        theory: "Switch ile farklı değerler için farklı işlemler yapılır.",
        content: `<div id="switchOutput"></div>
<button onclick="let gun='Pazartesi'; let mesaj=''; switch(gun){case 'Pazartesi': mesaj='Hafta başı!'; break; default: mesaj='Güzel bir gün!';} document.getElementById('switchOutput').innerText=mesaj;">Çalıştır</button>`
    },
    {
        id: 26,
        title: "JSON Kullanımı",
        level: "Orta",
        desc: "Veri depolama biçimi.",
        theory: "JSON veri paylaşımında kullanılır.",
        content: `<div id="jsonOutput"></div>
<button onclick="let kisi={ad:'Ali', yas:30}; let json=JSON.stringify(kisi); document.getElementById('jsonOutput').innerText=json;">Çalıştır</button>`
    },
    {
        id: 27,
        title: "Try Catch",
        level: "Zor",
        desc: "Hata yakalama.",
        theory: "try-catch ile hatalar yönetilir.",
        content: `<div id="tryOutput"></div>
<button onclick="try{throw new Error('Bir hata oluştu');} catch(e){document.getElementById('tryOutput').innerText=e.message;}">Test Et</button>`
    },
    {
        id: 28,
        title: "LocalStorage",
        level: "Zor",
        desc: "Tarayıcıda veri saklama.",
        theory: "localStorage veriyi kalıcı saklar.",
        content: `<div id="storageOutput"></div>
<button onclick="localStorage.setItem('isim','Mehmet'); document.getElementById('storageOutput').innerText=localStorage.getItem('isim');">Kaydet ve Göster</button>`
    },
    {
        id: 29,
        title: "Mouse Eventleri",
        level: "Orta",
        desc: "Fare olaylarını yakalama.",
        theory: "onmouseover, onmouseout eventleri ile yapılır.",
        content: `<div id="mouseDiv" onmouseover="this.style.color='red';" onmouseout="this.style.color='black';">Üzerine Gel</div>`
    },
    {
        id: 30,
        title: "Keyboard Eventleri",
        level: "Zor",
        desc: "Klavye tuşlarını dinleme.",
        theory: "onkeydown event’iyle tuş algılanabilir.",
        content: `<input onkeydown="document.getElementById('keyOutput').innerText=event.key;" placeholder="Bir tuşa basın" />
<div id="keyOutput"></div>`
    }
];

export default jsLessons;
