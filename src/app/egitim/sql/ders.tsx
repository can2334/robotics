import { Lesson } from "../../components/ui/LessonViewer";

// SQL dersleri
const sqlLessons: Lesson[] = [
    { id: 1, title: "SELECT ile tüm veriler", level: "Başlangıç", desc: "Tüm öğrencileri ve bilgilerini getirir.", theory: "SELECT * FROM Students; ile tablodaki tüm satırlar çekilir.", content: `SELECT * FROM Students;` },
    { id: 2, title: "WHERE ile koşul", level: "Başlangıç", desc: "Belirli bir koşula uyan satırları getirir.", theory: "Örneğin grade > 85 olan öğrenciler.", content: `SELECT name, grade FROM Students WHERE grade > 85;` },
    { id: 3, title: "ORDER BY ile sıralama", level: "Başlangıç", desc: "Satırları belirli bir sütuna göre sırala.", theory: "DESC büyükten küçüğe, ASC küçükten büyüğe sıralar.", content: `SELECT name, grade FROM Students ORDER BY grade DESC;` },
    { id: 4, title: "LIMIT ile sınır", level: "Başlangıç", desc: "Sadece belirli sayıda satır getir.", theory: "LIMIT 3 sadece ilk 3 satırı getirir.", content: `SELECT * FROM Students LIMIT 3;` },
    { id: 5, title: "SELECT DISTINCT", level: "Orta", desc: "Tekrarlayan değerleri kaldırır.", theory: "DISTINCT ile sadece benzersiz değerler çekilir.", content: `SELECT DISTINCT grade FROM Students;` },
    { id: 6, title: "AS ile takma ad", level: "Orta", desc: "Sütunlara takma ad verir.", theory: "AS kullanarak daha okunabilir isimler elde edilir.", content: `SELECT name AS student_name, grade AS score FROM Students;` },
    { id: 7, title: "BETWEEN ile aralık", level: "Orta", desc: "Belirli bir aralıktaki değerleri getirir.", theory: "BETWEEN 80 AND 90", content: `SELECT name, grade FROM Students WHERE grade BETWEEN 80 AND 90;` },
    { id: 8, title: "IN ile çoklu kontrol", level: "Orta", desc: "Belirli değerlerden biri eşleşirse getirir.", theory: "IN ile birden fazla değeri kontrol eder.", content: `SELECT name FROM Students WHERE grade IN (75, 90, 95);` },
    { id: 9, title: "LIKE ile desen eşleştirme", level: "Orta", desc: "Metinlerde belirli desenleri bulur.", theory: "LIKE 'A%' A ile başlayan isimler", content: `SELECT name FROM Students WHERE name LIKE 'A%';` },
    { id: 10, title: "COUNT ile sayma", level: "Orta", desc: "Satır sayısını bulur.", theory: "COUNT(*) toplam satır sayısı", content: `SELECT COUNT(*) FROM Students;` },
    { id: 11, title: "SUM ile toplam", level: "Orta", desc: "Belirli sütunun toplamını alır.", theory: "SUM ile sayısal sütunları toplar.", content: `SELECT SUM(grade) FROM Students;` },
    { id: 12, title: "AVG ile ortalama", level: "Orta", desc: "Belirli sütunun ortalamasını alır.", theory: "AVG ile sayısal sütunların ortalaması.", content: `SELECT AVG(grade) FROM Students;` },
    { id: 13, title: "MAX ve MIN", level: "Orta", desc: "En yüksek ve en düşük değeri bulur.", theory: "MAX ve MIN ile sütunlarda ekstrem değerler.", content: `SELECT MAX(grade), MIN(grade) FROM Students;` },
    { id: 14, title: "GROUP BY ile gruplama", level: "Zor", desc: "Verileri belirli sütunlara göre grupla.", theory: "GROUP BY ile veriler kategorilere ayrılır.", content: `SELECT grade, COUNT(*) FROM Students GROUP BY grade;` },
    { id: 15, title: "HAVING ile grup filtreleme", level: "Zor", desc: "Grupları koşula göre filtreler.", theory: "HAVING COUNT(*) > 1", content: `SELECT grade, COUNT(*) FROM Students GROUP BY grade HAVING COUNT(*) > 1;` },
    { id: 16, title: "INNER JOIN", level: "Zor", desc: "İki tabloyu eşleşen değerlerle birleştirir.", theory: "INNER JOIN ile sadece eşleşen satırlar gelir.", content: `SELECT Students.name, Courses.course_name FROM Students INNER JOIN Courses ON Students.id = Courses.student_id;` },
    { id: 17, title: "LEFT JOIN", level: "Zor", desc: "Sol tablodaki tüm satırları getirir.", theory: "LEFT JOIN sağdaki tabloda eşleşmese de sol tablo gelir.", content: `SELECT Students.name, Courses.course_name FROM Students LEFT JOIN Courses ON Students.id = Courses.student_id;` },
    { id: 18, title: "RIGHT JOIN", level: "Zor", desc: "Sağ tablodaki tüm satırları getirir.", theory: "RIGHT JOIN ile sağ tablo baz alınır.", content: `SELECT Students.name, Courses.course_name FROM Students RIGHT JOIN Courses ON Students.id = Courses.student_id;` },
    { id: 19, title: "FULL OUTER JOIN", level: "Zor", desc: "İki tabloyu birleştirir, eşleşmeyenleri de alır.", theory: "FULL OUTER JOIN ile tüm satırlar gelir.", content: `SELECT Students.name, Courses.course_name FROM Students FULL OUTER JOIN Courses ON Students.id = Courses.student_id;` },
    { id: 20, title: "UNION ile birleştirme", level: "Zor", desc: "İki SELECT sonucunu birleştirir.", theory: "UNION ile tekrar eden satırlar tekilleştirilir.", content: `SELECT name FROM Students UNION SELECT name FROM Alumni;` },
    { id: 21, title: "UNION ALL ile birleştirme", level: "Zor", desc: "Tüm satırları getirir, tekrar edenler dahil.", theory: "UNION ALL ile tüm satırlar gelir.", content: `SELECT name FROM Students UNION ALL SELECT name FROM Alumni;` },
    { id: 22, title: "CASE ile koşul", level: "Zor", desc: "Sütun değerine göre farklı çıktı verir.", theory: "CASE WHEN grade > 85 THEN 'Başarılı' ELSE 'Başarısız' END", content: `SELECT name, CASE WHEN grade > 85 THEN 'Başarılı' ELSE 'Başarısız' END AS status FROM Students;` },
    { id: 23, title: "Subquery (Alt sorgu)", level: "Zor", desc: "Bir sorgu içinde başka sorgu kullanılır.", theory: "Alt sorgu ile filtreleme yapılabilir.", content: `SELECT name FROM Students WHERE grade > (SELECT AVG(grade) FROM Students);` },
    { id: 24, title: "EXISTS ile kontrol", level: "Zor", desc: "Belirli kayıtların varlığını kontrol eder.", theory: "EXISTS ile alt sorguda kayıt var mı kontrol edilir.", content: `SELECT name FROM Students WHERE EXISTS (SELECT * FROM Courses WHERE Courses.student_id = Students.id);` },
    { id: 25, title: "NOT EXISTS", level: "Zor", desc: "Belirli kayıtların yokluğunu kontrol eder.", theory: "NOT EXISTS ile kayıt yoksa getir.", content: `SELECT name FROM Students WHERE NOT EXISTS (SELECT * FROM Courses WHERE Courses.student_id = Students.id);` },
    { id: 26, title: "DISTINCT ile birden fazla sütun", level: "Zor", desc: "Benzersiz kombinasyonları getir.", theory: "DISTINCT ile birden fazla sütunda tekrar yok.", content: `SELECT DISTINCT grade, age FROM Students;` },
    { id: 27, title: "Aliasing tablo", level: "Zor", desc: "Tabloya takma ad verilir.", theory: "Tabloya kısa isim vererek sorgu yazmak kolaylaşır.", content: `SELECT s.name, s.grade FROM Students AS s;` },
    { id: 28, title: "COALESCE ile NULL kontrolü", level: "Zor", desc: "NULL değer yerine varsayılan değer verir.", theory: "COALESCE ile null yerine 0 veya başka değer atanır.", content: `SELECT name, COALESCE(grade,0) FROM Students;` },
    { id: 29, title: "TRUNCATE TABLE", level: "Zor", desc: "Tabloyu tamamen temizler.", theory: "TRUNCATE ile tablo içi silinir.", content: `TRUNCATE TABLE Students;` },
    { id: 30, title: "DROP TABLE", level: "Zor", desc: "Tabloyu tamamen siler.", theory: "DROP TABLE ile tablo verisi ve yapısı silinir.", content: `DROP TABLE Students;` },
];

export default sqlLessons;
