<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Parents extends Model
{
    protected $fillable = [
        'dad_name',
        'dad_phone',
        'dad_job',
        'mom_name',
        'mom_phone',
        'mom_job',
        'wali_name',
        'wali_phone',
        'wali_job',
        'monthly_salary',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
