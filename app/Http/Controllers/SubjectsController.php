<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subjects;

class SubjectsController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('admin/CRUD/mapel');
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
        Subjects::create($data);

        return redirect('/admin/setting');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $subject = Subjects::findOrFail($id);
        return inertia('admin/CRUD/mapel', [
            'subject' => $subject,
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
        Subjects::find($id)->update($data);

        return redirect('/admin/setting');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Subjects::find($id)->delete();
        return redirect('/admin/setting');
    }
}
