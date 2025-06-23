<?php

namespace App\Http\Controllers;

use App\Models\UserDetail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Subjects;
use App\Models\Achievements;
use App\Models\Level;
use App\Models\Announcement;
use Illuminate\Support\Facades\Auth;

class UserDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $input = $request->input('s');
        $input = explode('-', $input);
        $search = end($input);

        if($search) {
            $user = User::where('name', 'LIKE', "%$search%")
            ->orWhere('id', (int)$search)
            ->with('userDetail')
            ->whereHas('userDetail', function ($query) {
                $query->where('validated', true);
            })->paginate(15);
        } else {
            $user = User::with('userDetail')->whereHas('userDetail', function ($query) {
                $query->where('validated', true);
            })->paginate(15);
        }
        return inertia('admin/pendaftaran', [
            'user' => $user,
        ]);
    }

    public function showBerkas(Request $request)
    {
        $input = $request->input('s');
        $input = explode('-', $input);
        $search = end($input);

        if($search) {
            $user = User::where('name', 'LIKE', "%$search%")
            ->orWhere('id', (int)$search)
            ->with('userDetail')
            ->whereHas('userDetail', function ($query) {
                $query->where('validated', true);
            })->paginate(15);
        } else {
            $user = User::with('documents')->whereHas('userDetail', function ($query) {
                $query->where('validated', true);
            })->paginate(15);
        }
        return inertia('admin/berkas', [
            'user' => $user,
        ]);
    }
    public function countDashboard()
    {
        $user = User::with('userDetail')->get();
        return inertia('admin/dashboard', [
            'user' => $user,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('user/profile');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->user_id = Auth::user()->id;
        if ($request->hasFile('photo')) {
            $request->photo = Storage::disk('public')->put('photos', $request->file('photo'));
        }
        $request->validate([
            'nisn' => 'required',
            'gender' => 'required',
            'birthplace' => 'required',
            'birthdate' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'province' => 'required',
            'city' => 'required',
            'district' => 'required',
            'village' => 'required',
            'school' => 'required',
        ]);
        
        $data = [
            'user_id' => $request->user_id,
            'nisn' => $request->nisn,
            'gender' => $request->gender,
            'birth_place' => $request->birthplace,
            'birth_date' => $request->birthdate,
            'phone' => $request->phone,
            'address' => $request->address,
            'province' => $request->province,
            'city' => $request->city,
            'district' => $request->district,
            'village' => $request->village,
            'photo' => $request->photo,
            'school' => $request->school,
        ];
        $user = UserDetail::create($data);
        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $id = Auth::user()->id;
        $user = User::where('id', $id)->with('userDetail','parents','reports','documents','achievements')->first();
        $mapel = Subjects::all();
        $tahap = Level::with('announcement')->get();
        return inertia('user/dashboard', [
            'user' => $user,
            'mapel' => $mapel,
            'tahap' => $tahap,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        $id = Auth::user()->id;
        $user = User::where('id', $id)->with('userDetail','parents','reports','documents','achievements')->first();
        $mapel = Subjects::all();
        return inertia('user/profile', [
            'user' => $user,
            'mapel' => $mapel,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->photo = UserDetail::find($id)->photo;
        if ($request->hasFile('photo')) {
            $oldPhotoRelativePath = str_replace('/storage/', '', $request->photo);
            Storage::disk('public')->delete($oldPhotoRelativePath);
            $request->photo = Storage::disk('public')->put('photos', $request->file('photo'));
        }

        $request->user_id = Auth::user()->id;
        $request->validate([
            'nisn' => 'required',
            'gender' => 'required',
            'birthplace' => 'required',
            'birthdate' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'province' => 'required',
            'city' => 'required',
            'district' => 'required',
            'village' => 'required',
            'school' => 'required',
        ]);
        
        $data = [
            'user_id' => $request->user_id,
            'nisn' => $request->nisn,
            'gender' => $request->gender,
            'birth_place' => $request->birthplace,
            'birth_date' => $request->birthdate,
            'phone' => $request->phone,
            'address' => $request->address,
            'province' => $request->province,
            'city' => $request->city,
            'district' => $request->district,
            'village' => $request->village,
            'photo' => $request->photo,
            'school' => $request->school,
        ];
        $data_user = [
            'name' => $request->name,
            'email' => $request->email,
        ];

        UserDetail::find($id)->update($data);
        User::where('id', $request->user_id)->update($data_user);
        return back();
    }

    // Update Bulk User
    public function updateBulkLolos(Request $request)
    {
        $tahap = Level::all();
        $users = $request->users;
        foreach ($users as $user) {
            $user = UserDetail::find($user);
            if($user->tahap <= $tahap->count()) {
                $user->update([
                    'status' => 1,
                    'tahap' => $user->tahap+1,
                    'message' => null,
                ]);
            } else {
                $user->update([
                    'status' => 1,
                    'message' => null,
                ]);
            }
        }
        return back();
    }

    public function updateBulkTidakLolos(Request $request)
    {
        $tahap = Level::all();
        $users = $request->users;
        foreach ($users as $user) {
            $user = UserDetail::find($user);
            if($user->tahap <= $tahap->count()) {
                $user->update([
                    'status' => 2,
                    'tahap' => $user->tahap+1,
                    'message' => $request->message,
                ]); 
            } else {
                $user->update([
                    'status' => 2,
                    'message' => $request->message,
                ]);
            }
        }
        return back();
    }

    public function updateValidate(Request $request, string $id)
    {
        $data = [
            'validated' => true,
        ];
        UserDetail::find($id)->update($data);
        return back();
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $users = $request->users;
        foreach ($users as $user) {
            $detail = UserDetail::find($user)->user_id;
            $user = User::where('id', $detail)->with('userDetail','documents')->first();
            if($user->userDetail->photo) {
                $oldPhotoRelativePath = str_replace('/storage/', '', $user->userDetail->photo);
                Storage::disk('public')->delete($oldPhotoRelativePath);
            }
            if($user->documents?->kartu_keluarga) {
                $oldKartuKeluargaRelativePath = str_replace('/storage/', '', $user->documents->kartu_keluarga);
                Storage::disk('public')->delete($oldKartuKeluargaRelativePath);
            }
            if($user->documents?->raport) {
                $oldRaportRelativePath = str_replace('/storage/', '', $user->documents->raport);
                Storage::disk('public')->delete($oldRaportRelativePath);
            }
            if($user->documents?->sertifikat_lomba) {
                $oldSertifikatLombaRelativePath = str_replace('/storage/', '', $user->documents->sertifikat_lomba);
                Storage::disk('public')->delete($oldSertifikatLombaRelativePath);
            }
            $user->delete();
        }
        return back();
    }
}
