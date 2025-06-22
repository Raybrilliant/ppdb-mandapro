<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FAQ;
use App\Models\User;
class LandingPagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $faqs = FAQ::all();
        $user = User::all()->count();
        return inertia('home', [
            'faqs' => $faqs,
            'user' => $user,
        ]);
    }
}
