<?php

namespace App\Exports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Illuminate\Support\Facades\Storage;

class UsersExport implements FromCollection, WithHeadings, WithMapping
{

    protected $cities;
    protected $provinces;

    public function __construct()
    {
        $data = json_decode(Storage::get('geolocation.json'), true);
        $this->cities = collect($data['regencies'])->keyBy('id');
        $this->provinces = collect($data['provinces'])->keyBy('id');
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $user = User::with('userDetail', 'parents')->whereHas('userDetail', function ($query) {
            $query->where('validated', true)->where('status', 1);
        })->get();
        return $user;
    }

    public function headings(): array
    {
        return [
            'No Pendaftaran',
            'Nama',
            'Tempat Lahir',
            'Tanggal Lahir',
            'Jenis Kelamin',
            'Alamat',
            'Kota',
            'Provinsi',
            'No WA',
            'Email',
            'Asal Sekolah',
            'Nama Ayah',
            'Nama Ibu',
            'Nama Wali',
            'Pekerjaan Ayah',
            'Pekerjaan Ibu',
            'Pekerjaan Wali',
            'No WA Ayah',
            'No WA Ibu',
            'No WA Wali',
            'Penghasilan',
            'Status',
            'Tahap',
            'Pesan',
            'Tanggal Daftar',
        ];
    }

    public function map($user): array
    {
        $city = $this->cities->get($user->userDetail->city)['name'] ?? 'N/A';
        $province = $this->provinces->get($user->userDetail->province)['name'] ?? 'N/A';

        return [
            $user->nomor_pendaftaran,
            $user->name,
            $user->userDetail->birth_place,
            $user->userDetail->birth_date,
            $user->userDetail->gender,
            $user->userDetail->address,
            $city,
            $province,
            $user->userDetail->phone,
            $user->email,
            $user->userDetail->school,
            $user->parents->dad_name,
            $user->parents->mom_name,
            $user->parents->wali_name,
            $user->parents->dad_job,
            $user->parents->mom_job,
            $user->parents->wali_job,
            $user->parents->dad_phone,
            $user->parents->mom_phone,
            $user->parents->wali_phone,
            $user->parents->monthly_salary,
            $user->userDetail->status == 1 ? 'Lolos' : 'Tidak Lolos',
            $user->userDetail->tahap,
            $user->userDetail->message,
            $user->created_at,
        ];
    }
}
