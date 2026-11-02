# 📖 Markdown Okuyucu (DEHB / ADHD Friendly)

DEHB (Dikkat Eksikliği ve Hiperaktivite Bozukluğu) olan veya uzun teknik metinleri okurken odaklanma güçlüğü / göz yorgunluğu yaşayanlar için özel olarak tasarlanmış, dikkat dağıtıcı unsurlardan arındırılmış minimalist bir masaüstü Markdown okuyucusu.

---

## ✨ Özellikler

- **🧠 DEHB Odaklı Tipografi:** Bilimsel araştırmalarla okuma hızını ve karakter ayırt edilebilirliğini artıran **Lexend** fontu entegrasyonu.
- **📄 Metin Duvarı Karşıtı Düzen:** Satırların birbirine girmesini engelleyen ferah satır aralığı (`1.85 line-height`) ve gözün yatay eksende yorulmaması için **760px sabit odak sütunu**.
- **🎨 Göz Dostu Tema:** Saf siyah/beyaz kontrastının yarattığı halelenmeyi (göz atlamasını) önleyen sakinleştirici **Catppuccin Mocha** renk paleti.
- **⚡ %100 Çevrimdışı ve Güvenli:** Harici CDN veya internet bağlantısı gerektirmez; Electron ana sürecinde yerel `marked` motoru ile çalışır.
- **📂 Kolay Dosya Açma:** Yerel Windows/macOS dosya seçici butonu veya doğrudan pencere içine **Sürükle & Bırak (Drag-and-Drop)** desteği.
- **🚀 Güncel Altyapı:** Modern **Electron v45.2.1** (Chromium 156 / Node.js 24) katı sandbox mimarisi.

---

## 🛠️ Ön Koşullar

1. Bilgisayarınızda **Node.js** yüklü olmalıdır.
2. Yazı tipinin doğru görüntülenmesi için [Google Fonts üzerinden Lexend fontunu](https://fonts.google.com/specimen/Lexend) indirip bilgisayarınıza kurmuş olmanız önerilir.

---

## 🚀 Kurulum ve Geliştirme

Projeyi yerelinizde çalıştırmak için:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirici modunda başlatın
npm start
```

---

## 📦 Masaüstü Programı (.exe) Olarak Derleme

Programı bilgisayarınızda bağımsız bir Windows uygulaması olarak kurmak için:

```bash
npm run build
```

Derleme tamamlandığında `dist/` klasörü içinde **`Markdown Okuyucu Setup 1.0.0.exe`** dosyası hazır olacaktır. Çift tıklayarak saniyeler içinde kurabilir, Başlat Menüsü'ne veya Görev Çubuğu'na sabitleyerek tek tıkla kullanabilirsiniz.

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır. Dilediğiniz gibi geliştirebilir, özelleştirebilir veya paylaşabilirsiniz.