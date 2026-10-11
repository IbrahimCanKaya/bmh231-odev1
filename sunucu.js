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
</body>
</html>`;

const sunucu = http.createServer((req, res) => {
    console.log(req.method, req.url);

    // Sorgu dizesini atıp sadece yolu al
    const yol = req.url.split('?')[0];

    if (yol === '/') {
        gonder(res, 200, 'text/html', anaSayfa);
    } else {
        gonder(res, 404, 'text/plain', 'Sayfa bulunamadı');
    }
});

sunucu.listen(PORT, () => {
    console.log('Sunucu http://localhost:' + PORT + ' adresinde çalışıyor');
});