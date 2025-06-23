<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\UsersExport;

class ExportController extends Controller
{
    public function export()
    {
        $filename = 'Data Pendaftar '.date('Y-m-d_H-i-s').'.xlsx';
        return Excel::download(new UsersExport, $filename);
    }
}
