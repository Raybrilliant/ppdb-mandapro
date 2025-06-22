<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Achievements;

class AchievementsController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->user_id = 1;
        $request->validate([
            'achievement' => 'required',
            'achievement_type' => 'required',
            'achievement_year' => 'required',
        ]);
        $data = [
            'user_id' => $request->user_id,
            'name' => $request->achievement,
            'level' => $request->achievement_type,
            'year' => $request->achievement_year,
        ];
        Achievements::create($data);
        return back();
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'achievement' => 'required',
            'achievement_type' => 'required',
            'achievement_year' => 'required',
        ]);
        $data = [
            'user_id' => $request->user_id,
            'name' => $request->achievement,
            'level' => $request->achievement_type,
            'year' => $request->achievement_year,
        ];
        Achievements::find($id)->update($data);
        return back();
    }
}
