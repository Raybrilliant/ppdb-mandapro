<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    protected $fillable = [
        'nisn',
        'phone',
        'gender',
        'birth_date',
        'birth_place',
        'address',
        'city',
        'province',
        'district',
        'village',
        'school',
        'photo',
        'user_id',
        'status',
        'tahap',
        'validated',
        'message',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
