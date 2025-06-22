<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Announcement;
use App\Models\Level;

class AnnouncementsController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $levels = Level::all();
        return inertia('admin/CRUD/pengumuman', [
            'levels' => $levels,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required',
            'level_id' => 'required|exists:levels,id',
        ]);

        $data = [
            'content' => $request->content,
            'level_id' => $request->level_id,
        ];
        Announcement::create($data);

        return redirect('/admin/setting');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $announcement = Announcement::findOrFail($id);
        $levels = Level::all();
        return inertia('admin/CRUD/pengumuman', [
            'announcement' => $announcement,
            'levels' => $levels,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'content' => 'required',
            'level_id' => 'required|exists:levels,id',
        ]);

        $data = [
            'content' => $request->content,
            'level_id' => $request->level_id,
        ];
        Announcement::find($id)->update($data);
        return redirect('/admin/setting');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Announcement::find($id)->delete();
        return redirect('/admin/setting');
    }
}
