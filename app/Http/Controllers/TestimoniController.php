<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Testimoni;
use Illuminate\Support\Facades\Storage;

class TestimoniController extends Controller
{
    public function create()
    {
        return inertia('admin/CRUD/testimoni');
    }

    public function edit($id){
        $testimoni = Testimoni::find($id);
        return inertia('admin/CRUD/testimoni', [
            'testimoni' => $testimoni,
        ]);
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'message' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $image = $request->file('image');
        $image = $image->store('image', 'public');
        $data = [
            'name' => $request->name,
            'message' => $request->message,
            'image' => $image,
        ];
        Testimoni::create($data);
        return redirect('/admin/setting');
    }

    public function update(Request $request, $id){
        $request->validate([
            'name' => 'required',
            'message' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $testimoni = Testimoni::find($id);
        $request->image = $testimoni->image;
        if ($request->hasFile('image')) {
            $oldImage = $testimoni->image;
            Storage::delete($oldImage);
            $request->image = $request->file('image')->store('image', 'public');
        }
        $data = [
            'name' => $request->name,
            'message' => $request->message,
            'image' => $request->image,
        ];
        $testimoni->update($data);
        return redirect('/admin/setting');
    }

    public function destroy($id){
        $testimoni = Testimoni::find($id);
        $oldImage = $testimoni->image;
        if ($oldImage) {
            Storage::delete($oldImage);
        }
        $testimoni->delete();
        return redirect('/admin/setting');
    }
}
