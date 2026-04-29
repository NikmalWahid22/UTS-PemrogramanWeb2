# WebSocket Real-Time Chat

Aplikasi chat real-time berbasis **WebSocket** yang dibangun menggunakan **Node.js** dan **WebSocket API** bawaan browser. Proyek ini dibuat sebagai bagian dari eksperimen untuk memahami cara kerja protokol WebSocket secara langsung.

---

## Deskripsi

Proyek ini mendemonstrasikan komunikasi dua arah (full-duplex) antara klien dan server menggunakan protokol WebSocket (RFC 6455). Berbeda dengan HTTP tradisional yang bersifat request-response, WebSocket memungkinkan server dan klien saling mengirim data kapan saja melalui satu koneksi TCP yang persisten.

---

## Fitur

- Chat real-time antar banyak pengguna
- Tampilan bubble chat (pesan sendiri vs orang lain)
- Timestamp otomatis setiap pesan
- Auto-scroll ke pesan terbaru
- Tampilan dark mode modern
- Deteksi koneksi & pemutusan otomatis
- Kirim pesan dengan tombol Enter

---

## Teknologi

| Teknologi | Keterangan |
|-----------|------------|
| Node.js | Runtime JavaScript sisi server |
| ws | Library WebSocket untuk Node.js |
| HTML/CSS/JS | Antarmuka klien (tanpa framework) |
| WebSocket API | API bawaan browser untuk koneksi WS |

---

## Struktur Proyek

```
websocket-eksperimen/
├── server.js         # Server WebSocket (Node.js)
├── index.html        # Antarmuka klien (browser)
├── package.json      # Konfigurasi npm
└── node_modules/     # Dependensi (ws library)
```

---

##  Cara Menjalankan

### 1. Clone atau download repository ini

```bash
git clone https://github.com/username/websocket-eksperimen.git
cd websocket-eksperimen
```

### 2. Install dependensi

```bash
npm install
```

### 3. Jalankan server

```bash
node server.js
```

Output yang muncul:
```
Server WebSocket berjalan di ws://localhost:8080
```

### 4. Buka klien di browser

Buka file `index.html` di browser. Untuk menguji chat antar pengguna, buka file yang sama di **dua tab browser secara bersamaan**.

---

## Hasil Eksperimen

[Gambar 1](UTS/eksperimen.png)
[Gambar 2](UTS/cmd.png)

Setelah eksperimen dilakukan, beberapa temuan penting:

- Pesan terkirim dan diterima secara **instan** tanpa jeda berarti
- Server mampu menangani **banyak klien** secara bersamaan
- Koneksi terputus **terdeteksi otomatis** oleh server
- Overhead komunikasi jauh lebih kecil dibanding HTTP polling

---

## Perbandingan WebSocket vs HTTP Polling

| Aspek | HTTP Polling | WebSocket |
|-------|-------------|-----------|
| Koneksi | Baru setiap request | Persisten |
| Arah | Satu arah | Dua arah (full-duplex) |
| Latensi | Tinggi | Rendah |
| Overhead | Besar | Kecil |
| Cocok untuk | Konten statis | Aplikasi real-time |

---

## Referensi

- [RFC 6455 — The WebSocket Protocol](https://www.rfc-editor.org/rfc/rfc6455)
- [MDN Web Docs — WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [ws — WebSocket Library for Node.js](https://github.com/websockets/ws)
- [High Performance Browser Networking — Ilya Grigorik](https://hpbn.co/websocket/)

---

## 👤 Author

**Muhamad Nikmal Wahid**  
Tugas UTS — Pemrograman Web
