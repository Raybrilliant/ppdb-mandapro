# PPDB MAN 2 Kota Probolinggo

Aplikasi web Pendaftaran Peserta Didik Baru (PPDB) untuk **MAN 2 Kota Probolinggo**. Proyek ini dibangun menggunakan **Laravel** sebagai *backend*, **Inertia.js** sebagai penghubung antara *backend* dan *frontend*, dan **React.js** untuk antarmuka pengguna. Fitur *styling* ditangani oleh **Tailwind CSS** yang diperkaya dengan komponen **Daisy UI**, serta manajemen *routing* menggunakan **Rombo**. Database yang digunakan adalah **SQLite** untuk kemudahan *setup* pada lingkungan pengembangan lokal.

## Fitur Utama

* **Formulir Pendaftaran Online**: Calon siswa dapat mengisi dan mengirimkan data pendaftaran secara mandiri melalui web.
* **Dasbor Administrator**: Modul untuk administrator dalam mengelola data pendaftar, melakukan verifikasi, dan mencetak laporan.
* **Manajemen Data Peserta**: Fungsionalitas CRUD (Create, Read, Update, Delete) untuk pengelolaan data pendaftar.
* **Informasi PPDB**: Halaman statis yang menyajikan informasi penting terkait PPDB, seperti jadwal, persyaratan, dan lain-lain.
* *(Tambahkan fitur lain yang relevan jika ada, misal: sistem notifikasi, unggah dokumen, dll.)*

---

## Persyaratan Sistem

Pastikan sistem Anda telah memiliki perangkat lunak dan *tool* berikut terinstal:

* **PHP** (versi 8.0 atau lebih tinggi sangat direkomendasikan)
* **Composer** (manajer dependensi PHP)
* **Bun** (sebagai *package manager* JavaScript; versi terbaru direkomendasikan)
* **Git** (untuk kloning repositori)

---

## Panduan Instalasi dan Menjalankan Proyek (Lokal)

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di lingkungan pengembangan lokal Anda:

### 1. Kloning Repositori

Mulai dengan mengkloning repositori proyek ini dari GitHub:

```bash
git clone https://github.com/Raybrilliant/ppdb-mandapro.git
cd ppdb-mandapro
```

### 2. Instalasi Dependensi Backend

Masuk ke direktori proyek dan instal semua dependensi PHP menggunakan Composer:

```bash
composer install
```

### 3. Konfigurasi Environment

* Buat salinan file `.env.example` dan ubah namanya menjadi `.env`:

    ```bash
    cp .env.example .env
    ```

* Buka file `.env` yang baru dibuat dan pastikan konfigurasi database Anda mengarah ke SQLite sebagai berikut:

    ```env
    # Konfigurasi Database
    DB_CONNECTION=sqlite
    DB_DATABASE=database/database.sqlite
    
    # Opsional: Sesuaikan APP_URL jika diperlukan
    APP_URL=http://localhost:8000
    ```

    *Catatan:* Anda tidak perlu membuat file `database.sqlite` secara manual. Laravel akan secara otomatis membuatnya saat Anda menjalankan perintah migrasi.

### 4. Generasi Kunci Aplikasi

Ini adalah langkah krusial untuk keamanan aplikasi Laravel Anda:

```bash
php artisan key:generate
```

### 5. Jalankan Migrasi Database

Perintah ini akan membuat semua tabel database berdasarkan skema yang didefinisikan dalam file migrasi:

```bash
php artisan migrate
```

Apabila Anda ingin mengisikan data *dummy* (contoh data) untuk keperluan pengujian, gunakan perintah berikut:

```bash
php artisan migrate --seed
```

### 6. Instalasi Dependensi Frontend

Karena proyek ini menggunakan **Bun** sebagai *package manager*, instalasi dependensi *frontend* dilakukan dengan:

```bash
bun install
```

### 7. Menjalankan Development Server

Untuk memulai *development server* yang mencakup Laravel *backend* dan Bun untuk *frontend*, gunakan perintah yang sudah dikonfigurasi di `composer.json` proyek:

```bash
composer run dev
```

*Pastikan skrip `dev` di `package.json` Anda mengarahkan ke `bun --bun run dev` atau perintah `vite` yang relevan untuk proses kompilasi aset.*

Untuk membangun aset *frontend* yang dioptimasi untuk lingkungan produksi:

```bash
bun run build # Atau composer run build jika sudah dikonfigurasi
```

Setelah server berjalan, Anda dapat mengakses aplikasi melalui *browser* pada alamat: `http://127.0.0.1:8000` (atau port lain yang mungkin tertera jika ada konflik).

---

## Struktur Proyek (Ringkas)

* `app/`: Direktori inti aplikasi Laravel yang berisi Model, Controller, Middleware, dan lainnya.
* `config/`: Berisi file-file konfigurasi aplikasi.
* `database/migrations/`: File-file definisi struktur tabel database.
* `database/seeders/`: File-file untuk pengisian data awal atau data *dummy*.
* `public/`: Direktori publik yang menyimpan aset terkompilasi (CSS, JS) dan file statis lainnya.
* `resources/js/`: Berisi semua komponen React dan halaman Inertia.js. Juga tempat konfigurasi **Tailwind CSS**, **Daisy UI**, dan *routing* **Rombo**.
* `resources/views/`: Berisi `app.blade.php`, *layout* utama untuk aplikasi Inertia.js.
* `routes/`: Definisi rute aplikasi (web, api, console).
* `storage/`: Menyimpan *log*, *cache*, dan file yang diunggah oleh aplikasi.