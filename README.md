@'

\# BMH231 Ödev 1



Bu proje, Yozgat Bozok Üniversitesi BMH231 Web Programlama dersi Ödev 1 için

yazılmış küçük bir Node.js web sunucusudur. Sadece Node.js'in `http` modülünü

ve `dayjs` paketini kullanır (Express yoktur).



\## Kurulum ve çalıştırma



&#x20;   git clone https://github.com/IbrahimCanKaya/bmh231-odev1.git

&#x20;   cd bmh231-odev1

&#x20;   npm install

&#x20;   npm start



Sunucu http://localhost:3000 adresinde çalışır.



\## Desteklenen yollar



| Yol          | Durum | Yanıt                                              |

|--------------|-------|----------------------------------------------------|

| /            | 200   | Ana sayfa (HTML), /hakkimda bağlantısı             |

| /hakkimda    | 200   | Hakkımda sayfası (HTML)                            |

| /api/ders    | 200   | Ders kodu, adı ve günü (JSON)                      |

| /api/agep    | 200   | AGEP son teslim tarihi ve kalan gün sayısı (JSON)  |

| diğer yollar | 404   | "Sayfa bulunamadı" (düz metin)                     |

| GET dışı     | 405   | "Yöntem desteklenmiyor" (düz metin, Allow: GET)    |



Not: AGEP son teslim tarihi `sunucu.js` içinde yazılıdır.

'@ | Set-Content -Path README.md -Encoding UTF8

