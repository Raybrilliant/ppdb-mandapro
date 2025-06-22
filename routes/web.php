<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserDetailController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ParentsController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\DocumentsController;
use App\Http\Controllers\AnnouncementsController;
use App\Http\Controllers\LevelsController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\SubjectsController;
use App\Http\Controllers\FAQsController;
use App\Http\Controllers\LandingPagesController;

Route::get('/', [LandingPagesController::class, 'index']);

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
    Route::get('/', [UserDetailController::class, 'countDashboard']);
    Route::get('/pendaftaran', [UserDetailController::class, 'index']);
    Route::get('/berkas', [UserDetailController::class, 'showBerkas']);
    Route::prefix('/setting')->group(function () {
        Route::get('/', [SettingsController::class, 'index']);
        // Pengumuman
        Route::get('/pengumuman', [AnnouncementsController::class, 'create']);
        Route::post('/pengumuman', [AnnouncementsController::class, 'store']);
        Route::get('/pengumuman/{id}', [AnnouncementsController::class, 'edit']);
        Route::put('/pengumuman/{id}', [AnnouncementsController::class, 'update']);
        Route::delete('/pengumuman/{id}', [AnnouncementsController::class, 'destroy']);

        // Tahapan
        Route::get('/tahapan', [LevelsController::class, 'create']);
        Route::post('/tahapan', [LevelsController::class, 'store']);
        Route::get('/tahapan/{id}', [LevelsController::class, 'edit']);
        Route::put('/tahapan/{id}', [LevelsController::class, 'update']);
        Route::delete('/tahapan/{id}', [LevelsController::class, 'destroy']);

        // Mapel
        Route::get('/mapel', [SubjectsController::class, 'create']);
        Route::post('/mapel', [SubjectsController::class, 'store']);
        Route::get('/mapel/{id}', [SubjectsController::class, 'edit']);
        Route::put('/mapel/{id}', [SubjectsController::class, 'update']);
        Route::delete('/mapel/{id}', [SubjectsController::class, 'destroy']);

        // FAQ
        Route::get('/faq', [FAQsController::class, 'create']);
        Route::post('/faq', [FAQsController::class, 'store']);
        Route::get('/faq/{id}', [FAQsController::class, 'edit']);
        Route::put('/faq/{id}', [FAQsController::class, 'update']);
        Route::delete('/faq/{id}', [FAQsController::class, 'destroy']);
    });
});