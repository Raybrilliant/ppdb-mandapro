<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('landing_pages', function (Blueprint $table) {
            $table->id();
            $table->string('foto_background')->nullable();
            $table->string('foto_background_1')->nullable();
            $table->string('foto_background_2')->nullable();
            $table->integer('jumlah_siswa_berprestasi')->nullable();
            $table->text('pengumuman_ppdb')->nullable();
            $table->string('pengumuman_ppdb_date')->nullable();
            $table->text('deskripsi_ppdb')->nullable();
            $table->string('nama_kepala_madrasah')->nullable();
            $table->text('pesan_kepala_madrasah')->nullable();
            $table->string('foto_kepala_madrasah')->nullable();
            $table->text('persyaratan_umum')->nullable();
            $table->text('persyaratan_khusus')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('landing_pages');
    }
};
