<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Level;
use App\Models\Announcement;
use App\Models\Testimoni;
use App\Models\Program;
use App\Models\FAQ;
use App\Models\Subjects;

class SettingsController extends Controller
{
    public function index()
    {
        $levels = Level::with('announcement')->orderBy('created_at', 'asc')->get();
        $subjects = Subjects::all();
        // $testimonis = Testimoni::all();
        // $programs = Program::all();
        $faqs = FAQ::all();
        return inertia('admin/setting', [
            'levels' => $levels,
            'subjects' => $subjects,
            // 'testimonis' => $testimonis,
            // 'programs' => $programs,
            'faqs' => $faqs,
        ]);
    }
}
