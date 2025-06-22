<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Level;

class LevelsController extends Controller
{

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('admin/CRUD/tahapan');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $data = [
            'name' => $request->name,
        ];
        Level::create($data);

        return redirect('/admin/setting');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $level = Level::findOrFail($id);
        return inertia('admin/CRUD/tahapan', [
            'level' => $level,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $data = [
            'name' => $request->name,
        ];
        Level::find($id)->update($data);

        return redirect('/admin/setting');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Level::find($id)->delete();
        return redirect('/admin/setting');
    }
}
