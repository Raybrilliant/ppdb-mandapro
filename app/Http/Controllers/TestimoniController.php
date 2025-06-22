<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestimoniController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('admin/CRUD/testimoni');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        $data = [
            'name' => $request->name,
            'description' => $request->description,
        ];

        Testimoni::create($data);

        return redirect('/admin/setting/');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $testimoni = Testimoni::findOrFail($id);
        return inertia('admin/CRUD/testimoni', [
            'testimoni' => $testimoni,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        $data = [
            'name' => $request->name,
            'description' => $request->description,
        ];

        Testimoni::find($id)->update($data);

        return redirect('/admin/setting/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Testimoni::find($id)->delete();

        return redirect('/admin/setting/');
    }
}
