# PPDB MAN 2 Kota Probolinggo

Aplikasi Web Pendaftaran Peserta Didik Baru (PPDB) untuk **MAN 2 Kota Probolinggo**. Dibangun dengan **Laravel** sebagai *backend*, **Inertia.js** sebagai jembatan antara *backend* dan *frontend*, dan **React.js** untuk *user interface*-nya. Database yang digunakan adalah **SQLite** agar *setup* lokal lebih mudah dan cepat.

## Fitur Utama

* **Formulir Pendaftaran Online**: Calon siswa bisa mengisi data pendaftaran secara mandiri.
* **Dashboard Administrator**: Admin dapat mengelola data pendaftar, memverifikasi, dan mencetak laporan.
* **Manajemen Data Peserta**: Fitur CRUD (Create, Read, Update, Delete) untuk data pendaftar.
* **Informasi PPDB**: Halaman statis untuk menampilkan informasi umum terkait PPDB (jadwal, persyaratan, dll.).

---

## Persyaratan Sistem

Pastikan lu punya software dan *tools* berikut terinstal di sistem lu:

* **PHP** (versi 8.0 atau lebih tinggi direkomendasikan)
* **Composer** (Manajer dependensi PHP)
* **Node.js** (Versi LTS direkomendasikan)
* **NPM**
* **Git** (Untuk kloning repositori)

---
## Cara Menjalankan Project (Lokal)

Ikutin langkah-langkah di bawah ini biar project-nya jalan di komputer lu:

### 1. Kloning Repositori

```bash
git clone <URL_REPOSITORI_LU_DI_GITHUB_ATAU_GITLAB>
cd ppdb-man2-probolinggo # Ganti dengan nama folder project lu kalo beda
```

### 2. Instal Dependensi Backend

```bash
composer install
```

### 3. Konfigurasi Environment

* Buat salinan file `.env.example` dan ganti namanya jadi `.env`:

    ```bash
    cp .env.example .env
    ```

* Buka file `.env` yang baru dibuat dan pastikan konfigurasi database lu mengarah ke SQLite seperti di bawah ini:

    ```env
    # Konfigurasi Database
    DB_CONNECTION=sqlite
    DB_DATABASE=database/database.sqlite
    
    # Optional: Sesuaikan APP_URL jika perlu
    APP_URL=http://localhost:8000
    ```

    *Catatan:* Lu nggak perlu bikin file `database.sqlite` secara manual. Laravel bakal bikin otomatis pas lu jalanin migrasi.

### 4. Buat Key Aplikasi

Ini penting banget buat keamanan aplikasi Laravel lu:

```bash
php artisan key:generate
```

### 5. Jalankan Migrasi Database

Perintah ini akan membuat tabel-tabel database berdasarkan file migrasi yang ada:

```bash
php artisan migrate
```

Kalo lu mau sekalian isi data *dummy* (contoh data) buat testing:

```bash
php artisan migrate --seed
```

### 6. Instal Dependensi Frontend

```bash
npm install # Kalo pake NPM
# atau
yarn install # Kalo pake Yarn
```

### 7. Kompilasi Aset Frontend

* Untuk pengembangan (development) dengan *hot-reloading* (perubahan kode langsung terlihat di browser):

    ```bash
    npm run dev # atau yarn dev
    ```

* Untuk produksi (production) agar aset di-optimize dan ukurannya lebih kecil:

    ```bash
    npm run build # atau yarn build
    ```

### 8. Jalankan Server Laravel

```bash
php artisan serve
```

Sekarang lu bisa buka aplikasi di *browser* lu: `http://127.0.0.1:8000` (atau port lain kalo ada konflik, Laravel biasanya kasih tahu).

---

## Struktur Project (Ringkas)

* `app/`: Folder utama aplikasi Laravel (Model, Controller, Middleware, dll.).
* `config/`: File-file konfigurasi aplikasi.
* `database/migrations/`: File-file untuk membuat dan memodifikasi tabel database.
* `database/seeders/`: File-file untuk mengisi data awal atau data *dummy* ke database.
* `public/`: Direktori publik tempat semua aset yang dikompilasi (CSS, JS) dan file statis lainnya berada.
* `resources/js/`: Berisi semua komponen dan halaman React yang digunakan oleh Inertia.js.
* `resources/views/`: Berisi `app.blade.php`, *layout* utama untuk aplikasi Inertia.js.
* `routes/`: Definisi rute aplikasi (web, api, console).
* `storage/`: Berisi *logs*, *cache*, dan file-file yang di-upload oleh aplikasi.