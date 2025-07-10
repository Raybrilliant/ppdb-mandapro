<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Achievements;
use Illuminate\Support\Facades\Auth;

class AchievementsController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->user_id = Auth::user()->id;
        $request->validate([
            'achievements.*.name' => 'required|string',
            'achievements.*.level' => 'required|string',
            'achievements.*.year' => 'required|integer',
        ]);
        foreach ($request->achievements as $achievement) {
            $data = [
                'user_id' => $request->user_id,
                'name' => $achievement['name'],
                'level' => $achievement['level'],
                'year' => $achievement['year'],
            ];
            Achievements::create($data);
        }
        return back();
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $request->validate([
            'achievements.*.name' => 'required|string',
            'achievements.*.level' => 'required|string',
            'achievements.*.year' => 'required|integer',
        ]);
        $request->user_id = Auth::user()->id;
        $oldAchievements = Achievements::where('user_id', $request->user_id)->get();
        foreach ($oldAchievements as $oldAchievement) {
            $oldAchievement->delete();
        }
        foreach ($request->achievements as $achievement) {
            $data = [
                'user_id' => $request->user_id,
                'name' => $achievement['name'],
                'level' => $achievement['level'],
                'year' => $achievement['year'],
            ];
            Achievements::create($data);
        }
        return back();
    }
}
