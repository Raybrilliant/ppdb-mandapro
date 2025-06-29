<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'nisn',
        'password',
        'role',
        'type',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    protected $appends = ['nomor_pendaftaran']; 

    public function getNomorPendaftaranAttribute(): string
{
    $prefix = 'REG';
    $year = now()->year;
    $paddedId = str_pad($this->id, 6, '0', STR_PAD_LEFT);

    return "{$prefix}-{$year}-{$paddedId}";
}

    public function detail()
    {
        return $this->belongsTo(UserDetail::class);
    }
    public function documents()
    {
        return $this->hasOne(Documents::class);
    }
    public function reports()
    {
        return $this->hasMany(Reports::class);
    }
    public function achievements()
    {
        return $this->hasOne(Achievements::class);
    }
    public function parents()
    {
        return $this->hasOne(Parents::class);
    }
    public function userDetail()
    {
        return $this->hasOne(UserDetail::class);
    }
}
