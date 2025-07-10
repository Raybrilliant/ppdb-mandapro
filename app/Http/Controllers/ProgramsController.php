<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Program;
use Illuminate\Support\Facades\Storage;

class ProgramsController extends Controller
{
    public function create(){
        return inertia('admin/CRUD/program-unggulan');
    }

    public function edit($id){
        $program = Program::find($id);
        return inertia('admin/CRUD/program-unggulan', [
            'program' => $program,
        ]);
    }

    public function store(Request $request){
        $request->validate([
            'nama' => 'required',
            'deskripsi' => 'required',
            'icon' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $icon = $request->file('icon');
        $icon = $icon->store('icon', 'public');
        $data = [
            'name' => $request->nama,
            'description' => $request->deskripsi,
            'image' => $icon,
        ];
        Program::create($data);
        return redirect('/admin/setting');
    }

    public function update(Request $request, $id){
        $request->validate([
            'nama' => 'required',
            'deskripsi' => 'required',
            'icon' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $program = Program::find($id);
        $request->icon = $program->image;
        if ($request->hasFile('icon')) {
            $oldIcon = $program->image;
            Storage::delete($oldIcon);
            $request->icon = $request->file('icon')->store('icon', 'public');
        }
        $data = [
            'name' => $request->nama,
            'description' => $request->deskripsi,
            'image' => $request->icon,
        ];
        $program->update($data);
        return redirect('/admin/setting');
    }

    public function destroy($id){
        $program = Program::find($id);
        $oldIcon = $program->image;
        if ($oldIcon) {
            Storage::delete($oldIcon);
        }
        $program->delete();
        return redirect('/admin/setting');
    }

}
