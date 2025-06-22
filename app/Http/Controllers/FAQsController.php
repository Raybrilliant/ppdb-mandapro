<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Faq;

class FAQsController extends Controller
{

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('admin/CRUD/faq');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'question' => 'required',
            'answer' => 'required',
        ]);

        $data = [
            'question' => $request->question,
            'answer' => $request->answer,
        ];

        Faq::create($data);

        return redirect('/admin/setting/');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $faq = Faq::findOrFail($id);
        return inertia('admin/CRUD/faq', [
            'faq' => $faq,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'question' => 'required',
            'answer' => 'required',
        ]);

        $data = [
            'question' => $request->question,
            'answer' => $request->answer,
        ];

        Faq::find($id)->update($data);

        return redirect('/admin/setting/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Faq::find($id)->delete();

        return redirect('/admin/setting/');
    }
}
