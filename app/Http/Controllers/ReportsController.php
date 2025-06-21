<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reports;

class ReportsController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {        
        $userId = 1;

        foreach ($request->grades as $semesterNumber => $subjectsAndGrades) {
            foreach ($subjectsAndGrades as $subjectId => $gradeValue) {
                $data = [
                    'user_id' => $userId,
                    'subject_id' => (int)$subjectId,
                    'semester' => (int)$semesterNumber,
                    'grade' => (int)$gradeValue,
                ];
                Reports::create($data);
            }
        }

        return back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $userId = 1;
        foreach ($request->grades as $semesterNumber => $subjectsAndGrades) {
            foreach ($subjectsAndGrades as $subjectId => $gradeValue) {
                $matchingAttributes = [
                    'user_id' => $userId,
                    'subject_id' => (int)$subjectId,
                    'semester' => (int)$semesterNumber,
                ];

                $valuesToUpdate = [
                    'grade' => (int)$gradeValue,
                ];

                Reports::update($matchingAttributes, $valuesToUpdate);
            }
        }

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Reports::find($id)->delete();
        return back();
    }
}
