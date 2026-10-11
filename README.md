# 🌐 BMH231 — Web Programlama Ödev 1

**Yozgat Bozok Üniversitesi · Bilgisayar Mühendisliği**

Node.js kullanılarak geliştirilen bu proje, BMH231 Web Programlama dersi kapsamında hazırlanmış basit bir web sunucusudur.

Express gibi ek bir web çatısı kullanmadan, Node.js'in yerleşik `http` modülü ve `dayjs` paketiyle çalışır.

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Day.js-Date%20Library-FF5252?style=for-the-badge" alt="Day.js" />
  <img src="https://img.shields.io/badge/Express-Not%20Used-lightgrey?style=for-the-badge" alt="Express kullanılmıyor" />
</p>

---

## 📌 Proje Hakkında

Proje, HTTP isteklerini karşılayan ve istenen URL'ye göre HTML veya JSON yanıtları döndüren küçük bir web sunucusu içerir.

**Temel özellikler:**

- 🏠 HTML tabanlı ana sayfa
- 👤 Hakkımda sayfası
- 📚 Ders bilgilerini sunan JSON API'si
- 📅 AGEP teslim tarihi ve kalan gün bilgisi
- ⚠️ Hatalı URL'ler için `404` yanıtı
- 🚫 Desteklenmeyen HTTP metotları için `405` yanıtı

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Kullanım amacı |
|---|---|
| [Node.js](https://nodejs.org/) | Sunucu tarafında JavaScript çalıştırma |
| [http] | HTTP sunucusu oluşturma |
| [Day.js](https://day.js.org/) | Tarih ve zaman işlemleri |
| [npm] | Paket yönetimi |

## 🚀 Kurulum ve Çalıştırma

Projeyi bilgisayarına indirmek ve çalıştırmak için aşağıdaki adımları izle.

### 1. Depoyu klonla

```bash
git clone https://github.com/IbrahimCanKaya/bmh231-odev1.git
```

### 2. Proje klasörüne gir

```bash
cd bmh231-odev1
```

### 3. Bağımlılıkları yükle

```bash
npm install
```

### 4. Sunucuyu başlat

```bash
npm start
```

Sunucu başarıyla başladıktan sonra tarayıcından aşağıdaki adresi açabilirsin:

**🔗 http://localhost:3000**

---

## 🧭 Desteklenen URL Yolları

| Endpoint | HTTP Durumu | Açıklama |
|---|:---:|---|
| `/` | `200` | HTML ana sayfası ve Hakkımda bağlantısı |
| `/hakkimda` | `200` | Hakkımda sayfası |
| `/api/ders` | `200` | Ders bilgilerini JSON formatında döndürür |
| `/api/agep` | `200` | AGEP teslim tarihi ve kalan gün sayısını JSON formatında döndürür |
| Diğer yollar | `404` | Sayfa bulunamadı yanıtı |
| GET dışındaki metotlar | `405` | Yöntem desteklenmiyor yanıtı |

## 📡 API Kullanımı

### Ders bilgileri

```http
GET /api/ders
```

Ders kodu, ders adı ve ders günü bilgilerini JSON formatında sunar.

### AGEP teslim tarihi

```http
GET /api/agep
```

AGEP son teslim tarihini ve teslim tarihine kalan gün sayısını JSON formatında sunar.

> **Not:** AGEP son teslim tarihi `sunucu.js` dosyası içerisinde tanımlanmıştır.

## ⚙️ Hata Yönetimi

Sunucu, desteklenmeyen istekleri uygun HTTP durum kodlarıyla karşılar.

- **404 Not Found:** Tanımlanmamış URL yolları için `Sayfa başarısız oldu` yanıtı döndürülür.
- **405 Method Not Allowed:** GET dışındaki HTTP metotları için `Yöntem desteklenmiyor` yanıtı döndürülür. İzin verilen metot `GET` olarak belirtilir.

---

## 👨‍💻 Geliştirici

**İbrahim Can Kaya**

Yozgat Bozok Üniversitesi  
Bilgisayar Mühendisliği

📂 [GitHub Deposu](https://github.com/IbrahimCanKaya/bmh231-odev1)

---

<p align="center">
  <i>BMH231 Web Programlama · Ödev 1</i>
</p>
