let daftarfilm = [
    {
        judul: "Inception",
        desc: "Mimpi dalam mimpi",
        kategori: "Sci-Fi",
        sutradara: "Christopher Nolan",
        tahun: 2010,
        rating: 8.8,
        image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
    },
    {
        judul: "Interstellar",
        desc: "Perjalanan antar planet, mencari tempat tinggal baru",
        kategori: "Sci-Fi",
        sutradara: "Christopher Nolan",
        tahun: 2014,
        rating: 8.6,
        image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
    }
];

// Challenge 2: Fungsi tampil menerima parameter array (untuk filter)
function tampilkanDaftarFilm(filmArray) {
    let container = document.getElementById("daftar-film");
    container.innerHTML = ""; // bersihkan isi sebelumnya

    if (filmArray.length === 0) {
        container.innerHTML = '<p class="no-result">Film tidak ditemukan.</p>';
        return;
    }

    filmArray.forEach(function (film, index) {
        let filmDiv = document.createElement("div");
        filmDiv.classList.add("film-card");

        // Challenge 1: Tampilkan field baru di kartu
        filmDiv.innerHTML = `
            <img src="${film.image || 'https://via.placeholder.com/220x300?text=No+Image'}" alt="${film.judul}">
            <div class="film-info">
                <h3>${film.judul}</h3>
                <p>${film.desc}</p>
                <p class="film-sutradara">🎬 ${film.sutradara}</p>
                <div class="film-meta">
                    <span class="badge badge-kategori">${film.kategori}</span>
                    <span class="badge badge-tahun">${film.tahun}</span>
                    <span class="badge badge-rating">⭐ ${film.rating}</span>
                </div>
            </div>
            <div class="film-actions">
                <button onclick="editFilm(${index})">Edit</button>
                <button onclick="hapusFilm(${index})">Hapus</button>
            </div>
        `;
        container.appendChild(filmDiv);
    });
}

// Panggil fungsi pertama kali
tampilkanDaftarFilm(daftarfilm);

// ─────────────────────────────────────────
// Challenge 2: Filter pencarian
// Gunakan event keyup pada elemen <input>
// ─────────────────────────────────────────
let inputCari = document.getElementById("cari-film");

inputCari.addEventListener("keyup", function () {
    let keyword = inputCari.value.toLowerCase();

    // Gunakan .filter() untuk menyaring film berdasarkan judul
    let hasilFilter = daftarfilm.filter(function (film) {
        return film.judul.toLowerCase().includes(keyword);
    });

    // Panggil kembali tampilkanDaftarFilm() dengan hasil pencarian
    tampilkanDaftarFilm(hasilFilter);
});

// ─────────────────────────────────────────
// Form tambah film
// ─────────────────────────────────────────
let formFilm = document.getElementById("form-film");

formFilm.addEventListener("submit", function (event) {
    event.preventDefault(); // supaya tidak reload halaman

    let judul     = document.getElementById("judul").value;
    let deskripsi = document.getElementById("deskripsi").value;
    let kategori  = document.getElementById("kategori").value;
    let gambar    = document.getElementById("gambar").value;

    // Challenge 1: Ambil nilai field baru dari form
    let sutradara = document.getElementById("sutradara").value;
    let tahun     = parseInt(document.getElementById("tahun").value);
    let rating    = parseFloat(document.getElementById("rating").value);

    let filmBaru = {
        judul: judul,
        desc: deskripsi,
        kategori: kategori,
        image: gambar,
        sutradara: sutradara,   // field baru
        tahun: tahun,           // field baru
        rating: rating          // field baru
    };

    daftarfilm.push(filmBaru);

    tampilkanDaftarFilm(daftarfilm); // refresh daftar
    formFilm.reset();                // reset form input
    inputCari.value = "";            // reset kolom pencarian
});

// ─────────────────────────────────────────
// Fungsi Edit & Hapus
// ─────────────────────────────────────────
function editFilm(index) {
    let film = daftarfilm[index];

    let judulBaru     = prompt("Edit judul:", film.judul);
    let descBaru      = prompt("Edit deskripsi:", film.desc);
    let kategoriBaru  = prompt("Edit kategori:", film.kategori);
    let sutradaraBaru = prompt("Edit sutradara:", film.sutradara);  // field baru
    let tahunBaru     = prompt("Edit tahun terbit:", film.tahun);   // field baru
    let ratingBaru    = prompt("Edit rating (1-10):", film.rating); // field baru
    let gambarBaru    = prompt("Edit URL gambar:", film.image);

    if (judulBaru !== null)     daftarfilm[index].judul     = judulBaru;
    if (descBaru !== null)      daftarfilm[index].desc      = descBaru;
    if (kategoriBaru !== null)  daftarfilm[index].kategori  = kategoriBaru;
    if (sutradaraBaru !== null) daftarfilm[index].sutradara = sutradaraBaru;
    if (tahunBaru !== null)     daftarfilm[index].tahun     = parseInt(tahunBaru);
    if (ratingBaru !== null)    daftarfilm[index].rating    = parseFloat(ratingBaru);
    if (gambarBaru !== null)    daftarfilm[index].image     = gambarBaru;

    tampilkanDaftarFilm(daftarfilm);
}

function hapusFilm(index) {
    daftarfilm.splice(index, 1);
    tampilkanDaftarFilm(daftarfilm);
}
