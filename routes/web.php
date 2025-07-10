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
use App\Http\Controllers\AchievementsController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\LandingPagesController;
use App\Http\Controllers\TestimoniController;
use App\Http\Controllers\ProgramsController;

Route::get('/', [LandingPagesController::class, 'index']);

Route::prefix('login')->group(function () {
    Route::get('/', function () {
        return inertia('auth/login');
    });
    Route::post('/', [UserController::class, 'login']);
});

Route::prefix('register')->group(function () {
    Route::get('/', function () {
        return inertia('auth/register');
    });
    Route::post('/', [UserController::class, 'register']);
});

Route::get('/logout', [UserController::class, 'logout']);

Route::middleware('user')->group(function () {
    Route::prefix('dashboard')->group(function () {    
    // Prestasi
    Route::post('/profile/achievements', [AchievementsController::class, 'store']);
    Route::put('/profile/achievements', [AchievementsController::class, 'update']);

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
    Route::get('/profile/edit', [UserDetailController::class, 'edit']);
    Route::post('/profile/create', [UserDetailController::class, 'store']);
    Route::post('/profile/{id}', [UserDetailController::class, 'update']);
    Route::put('/validate/{id}', [UserDetailController::class, 'updateValidate']);


    // The most general route last:
    Route::get('/', [UserDetailController::class, 'show'])->name('userDashboard');
    });
});

Route::middleware('admin')->group(function () {
    Route::prefix('admin')->group(function () {
    Route::get('/dashboard', [UserDetailController::class, 'countDashboard'])->name('adminDashboard');
    Route::get('/pendaftaran', [UserDetailController::class, 'index']);
    Route::get('/export', [ExportController::class, 'export']);
    Route::put('/pendaftaran/bulk/lolos', [UserDetailController::class, 'updateBulkLolos']);
    Route::put('/pendaftaran/bulk/tidak-lolos', [UserDetailController::class, 'updateBulkTidakLolos']);
    Route::delete('/pendaftaran/bulk/hapus', [UserDetailController::class, 'destroy']);
    Route::get('/berkas', [UserDetailController::class, 'showBerkas']);
    Route::put('/berkas/unvalidate/{id}', [UserDetailController::class, 'updateUnvalidate']);
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

        // Landing Page
        Route::get('/landing-page', [LandingPagesController::class, 'create']);
        Route::post('/landing-page', [LandingPagesController::class, 'store']);
        Route::get('/landing-page/{id}', [LandingPagesController::class, 'edit']);
        Route::post('/landing-page/{id}', [LandingPagesController::class, 'update']);
        Route::delete('/landing-page/{id}', [LandingPagesController::class, 'destroy']);

        // Program Unggulan
        Route::get('/program-unggulan', [ProgramsController::class, 'create']);
        Route::post('/program-unggulan', [ProgramsController::class, 'store']);
        Route::get('/program-unggulan/{id}', [ProgramsController::class, 'edit']);
        Route::post('/program-unggulan/{id}', [ProgramsController::class, 'update']);
        Route::delete('/program-unggulan/{id}', [ProgramsController::class, 'destroy']);

        // Testimoni
        Route::get('/testimoni', [TestimoniController::class, 'create']);
        Route::post('/testimoni', [TestimoniController::class, 'store']);
        Route::get('/testimoni/{id}', [TestimoniController::class, 'edit']);
        Route::post('/testimoni/{id}', [TestimoniController::class, 'update']);
        Route::delete('/testimoni/{id}', [TestimoniController::class, 'destroy']);
    });
    });
});