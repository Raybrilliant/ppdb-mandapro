<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Documents extends Model
{
    protected $fillable = [
        'user_id',
        'raport',
        'kartu_keluarga',
        'sertifikat_lomba',
        'ijazah'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
