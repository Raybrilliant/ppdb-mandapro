<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Parents;

class ParentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->user_id = 1;
        $data = [
            'dad_name' => $request->father_name,
            'dad_phone' => $request->father_phone,
            'dad_job' => $request->father_job,
            'mom_name' => $request->mother_name,
            'mom_phone' => $request->mother_phone,
            'mom_job' => $request->mother_job,
            'wali_name' => $request->wali_name,
            'wali_phone' => $request->wali_phone,
            'wali_job' => $request->wali_job,
            'monthly_salary' => $request->monthly_salary,
            'user_id' => $request->user_id,
        ];
        Parents::create($data);
        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->user_id = 1;
        $data = [
            'dad_name' => $request->father_name,
            'dad_phone' => $request->father_phone,
            'dad_job' => $request->father_job,
            'mom_name' => $request->mother_name,
            'mom_phone' => $request->mother_phone,
            'mom_job' => $request->mother_job,
            'wali_name' => $request->wali_name,
            'wali_phone' => $request->wali_phone,
            'wali_job' => $request->wali_job,
            'monthly_salary' => $request->monthly_salary,
            'user_id' => $request->user_id,
        ];
        Parents::find($id)->update($data);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
