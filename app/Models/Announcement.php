<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    protected $fillable = [
        'level_id',
        'content',
    ];

    public function level()
    {
        return $this->belongsTo(Level::class);
    }
}
