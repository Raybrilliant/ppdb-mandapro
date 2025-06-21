<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserDetailController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ParentsController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\DocumentsController;

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

    // Orang Tua
    Route::post('/profile/parents', [ParentsController::class, 'store']);
    Route::put('/profile/parents/{id}', [ParentsController::class, 'update']);

    // Raport
    Route::post('/profile/reports', [ReportsController::class, 'store']);
    Route::put('/profile/reports/{id}', [ReportsController::class, 'update']);

    // Dokumen
    Route::post('/profile/document', [DocumentsController::class, 'store']);
    Route::post('/profile/document/{id}', [DocumentsController::class, 'update']);

    // User Profile related routes (UserDetailController)
    Route::get('/profile/edit/{id}', [UserDetailController::class, 'edit']);
    Route::post('/profile/create', [UserDetailController::class, 'store']);
    Route::post('/profile/{id}', [UserDetailController::class, 'update']);

    // The most general route last:
    Route::get('/{id}', [UserDetailController::class, 'show'])->name('userDashboard');
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