<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    protected $fillable = [
        'name',
        'level',
    ];

    public function announcement()
    {
        return $this->hasOne(Announcement::class);
    }
}
