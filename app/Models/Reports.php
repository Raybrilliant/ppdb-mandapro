<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reports extends Model
{
    protected $fillable = [
        'user_id',
        'subject_id',
        'semester',
        'grade',
    ];
    
    public function subject()
    {
        return $this->belongsTo(Subjects::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
