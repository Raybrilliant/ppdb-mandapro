<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('home');
});

Route::get('/login', function () {
    return inertia('auth/login');
});

Route::get('/register', function () {
    return inertia('auth/register');
});

Route::prefix('dashboard')->group(function () {
    Route::get('/', function () {
        return inertia('user/dashboard');
    });
    Route::get('/profile', function () {
        return inertia('user/profile');
    });
});

Route::prefix('admin')->group(function () {
    Route::get('/', function () {
        return inertia('admin/dashboard');
    });
    Route::get('/pendaftaran', function () {
        return inertia('admin/pendaftaran');
    });
    Route::get('/berkas', function () {
        return inertia('admin/berkas');
    });
    Route::get('/setting', function () {
        return inertia('admin/setting');
    });
});