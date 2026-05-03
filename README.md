# Praktikum 7 — Pemrograman Web

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Status-Complete-00C851?style=for-the-badge"/>
</p>

---

## Deskripsi Tugas

Praktikum 7 mata kuliah Pemrograman Web berfokus pada **manipulasi DOM secara dinamis**
menggunakan JavaScript. Project ini berupa aplikasi **Daftar Film** yang menerapkan
operasi CRUD (Create, Read, Update, Delete) berbasis array dan DOM, dilengkapi dengan
fitur pencarian real-time dan tampilan grid card responsif.

---

## Dokumentasi

### 📄 index.html — Struktur Halaman

Halaman utama aplikasi dengan dua komponen utama: form input dan area tampil film.

| Elemen | ID | Fungsi |
|---|---|---|
| Form tambah film | `form-film` | Input data film baru |
| Input judul | `judul` | Nama film |
| Input deskripsi | `deskripsi` | Deskripsi singkat film |
| Input kategori | `kategori` | Genre film |
| Input gambar | `gambar` | URL poster film (opsional) |
| Input sutradara | `sutradara` | Nama sutradara *(Challenge 1)* |
| Input tahun | `tahun` | Tahun rilis (1900–2099) *(Challenge 1)* |
| Input rating | `rating` | Rating film 1–10 *(Challenge 1)* |
| Input pencarian | `cari-film` | Filter film by judul *(Challenge 2)* |
| Container film | `daftar-film` | Area render kartu film |

---

### 📄 script.js — JavaScript DOM & Logic

**Struktur Data:**

Array objek `daftarfilm` sebagai penyimpanan data in-memory dengan properti:
`judul`, `desc`, `kategori`, `sutradara`, `tahun`, `rating`, `image`

**Fungsi & Event Listener:**

| Fungsi / Event | Keterangan |
|---|---|
| `tampilkanDaftarFilm(filmArray)` | Render ulang seluruh kartu film ke DOM |
| `formFilm` — `submit` event | Ambil nilai form, buat objek film baru, push ke array |
| `inputCari` — `keyup` event | Filter array berdasarkan keyword judul *(Challenge 2)* |
| `editFilm(index)` | Edit data film via `prompt()`, update array, re-render |
| `hapusFilm(index)` | Hapus film dari array via `splice()`, re-render |

**Konsep JavaScript yang diterapkan:**

| Konsep | Penggunaan |
|---|---|
| `Array.push()` | Menambah film baru ke array |
| `Array.splice()` | Menghapus film berdasarkan index |
| `Array.filter()` | Menyaring film berdasarkan keyword pencarian |
| `Array.forEach()` | Iterasi array untuk render kartu |
| `document.createElement()` | Membuat elemen `div` kartu film secara dinamis |
| `element.classList.add()` | Menambahkan class CSS ke elemen |
| `innerHTML` | Menyisipkan konten HTML ke dalam kartu |
| `addEventListener()` | Menangani event `submit` dan `keyup` |
| `event.preventDefault()` | Mencegah reload halaman saat form submit |
| `parseInt()` / `parseFloat()` | Konversi string input ke tipe numerik |
| `prompt()` | Dialog input untuk fitur edit |
| `String.toLowerCase()` / `.includes()` | Pencarian case-insensitive |

---

### 🎨 style.css — Styling Dark Gold Theme

Tema gelap dengan aksen warna emas (`#e2b96f`) dan layout grid responsif.

| Fitur | Keterangan |
|---|---|
| CSS Grid | Layout kartu film `auto-fill` dengan `minmax(220px, 1fr)` |
| Flexbox | Layout info kartu & tombol aksi |
| Badge system | Label kategori, tahun, rating dengan warna berbeda |
| Hover transition | Kartu naik `translateY(-4px)` saat hover |
| Responsive input | Form & search bar max-width 600px, centered |

**Warna badge:**
| Badge | Background | Warna Teks |
|---|---|---|
| Kategori | `#1e3a2f` | `#6ecfa0` (hijau) |
| Rating | `#3a2d10` | `#e2b96f` (emas) |
| Tahun | `#1a2a3a` | `#7ab8e2` (biru) |

---

## Struktur File

```
Praktikum7_Pemweb/
├── index.html
├── script.js
├── style.css
└── README.md
```

---

## Author

<p>
  <a href="https://github.com/Shosho-protagon23">
    <img src="https://img.shields.io/badge/GitHub-Shosho--protagon23-00ff41?style=for-the-badge&logo=github&logoColor=black&labelColor=0d0d0d"/>
  </a>
</p>
