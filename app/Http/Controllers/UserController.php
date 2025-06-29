<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class UserController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'nisn' => 'required|unique:users,nisn',
            'type' => 'required',
            'password' => 'required',
        ]);

        try {
            User::create([
                'name' => $request->name,
                'nisn' => $request->nisn,
                'role' => 'user',
                'type' => $request->type,
                'password' => bcrypt($request->password),
            ]);
        } catch (\Throwable $th) {
            return back()->withErrors('error', 'NISN sudah terdaftar');
        }

        return redirect('/login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'nisn' => 'required',
            'password' => 'required',
        ]);
        if (Auth::attempt(['nisn' => $request->nisn, 'password' => $request->password])) {
            if (Auth::user()->role == 'user') {
                return redirect()->route('userDashboard');
            } else {
                return redirect()->route('adminDashboard');
            }
        }
        return back()->withErrors('error', 'NISN atau password salah');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
