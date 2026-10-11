const http = require('http');
const dayjs = require('dayjs');

const PORT = 3000;

// Cevap göndermek için yardımcı fonksiyon
function gonder(res, kod, tur, icerik, ekBaslik = {}) {
    res.writeHead(kod, { 'Content-Type': tur + '; charset=utf-8', ...ekBaslik });
    res.end(icerik);
}

const anaSayfa = `<!DOCTYPE html>
<html lang="tr">
<head><meta charset="utf-8"><title>BMH231 Ödev 1</title></head>
<body>
<h1>BMH231 Ödev 1</h1>
<a href="/hakkimda">Hakkımda</a>
</body>
</html>`;

const hakkimda = `<!DOCTYPE html>
<html lang="tr">
<head><meta charset="utf-8"><title>Hakkımda</title></head>
<body>
<h1>Hakkımda</h1>
<p>Ben İbrahim Can Kaya, Yozgat Bozok Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Bu sayfa BMH231 Web Programlama dersi Ödev 1 için yazdığım küçük Node.js sunucusunun bir parçası.</p>
<a href="/">Ana sayfa</a>
</body>
</html>`;

const sunucu = http.createServer((req, res) => {
    console.log(req.method, req.url);


    if (req.method !== 'GET') {
        return gonder(res, 405, 'text/plain', 'Yöntem desteklenmiyor', { Allow: 'GET' });
    }

    // Sorgu dizesini atıp sadece yolu al
    const yol = req.url.split('?')[0];

    if (yol === '/') {
        gonder(res, 200, 'text/html', anaSayfa);
    } else if (yol === '/hakkimda') {
        gonder(res, 200, 'text/html', hakkimda);
    } else if (yol === '/api/ders') {
        gonder(res, 200, 'application/json',
            JSON.stringify({ kod: 'BMH231', ad: 'Web Programlama', gun: 'CUMA' }));
    } else if (yol === '/api/agep') {
        const sonTeslim = dayjs('2026-10-23');
        const kalanGun = sonTeslim.startOf('day').diff(dayjs().startOf('day'), 'day');
        gonder(res, 200, 'application/json',
            JSON.stringify({ sonTeslim: '23.10.2026', kalanGun: kalanGun }));
    } else {
        gonder(res, 404, 'text/plain', 'Sayfa bulunamadı');
    }
});

sunucu.listen(PORT, () => {
    console.log('Sunucu http://localhost:' + PORT + ' adresinde çalışıyor');
});