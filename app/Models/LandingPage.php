<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LandingPage extends Model
{
    protected $fillable = [
        'foto_background',
        'foto_background_1',
        'foto_background_2',
        'jumlah_siswa_berprestasi',
        'pengumuman_ppdb',
        'pengumuman_ppdb_date',
        'deskripsi_ppdb',
        'nama_kepala_madrasah',
        'pesan_kepala_madrasah',
        'foto_kepala_madrasah',
        'persyaratan_umum',
        'persyaratan_khusus',
    ];
}
