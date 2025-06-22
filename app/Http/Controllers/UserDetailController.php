<?php

namespace App\Http\Controllers;

use App\Models\UserDetail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Subjects;

class UserDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::with('userDetail')->paginate(15);
        return inertia('admin/pendaftaran', [
            'user' => $user,
        ]);
    }

    public function showBerkas()
    {
        $user = User::with('documents')->paginate(15);
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
        $request->user_id = 1;
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
    public function show(string $id)
    {
        $user = User::find($id)->with('userDetail','parents','reports','documents')->first();
        $mapel = Subjects::all();
        return inertia('user/dashboard', [
            'user' => $user,
            'mapel' => $mapel,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::find($id)->with('userDetail','parents','reports','documents')->first();
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

        $request->user_id = 1;
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
        User::find($request->user_id)->update($data_user);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
