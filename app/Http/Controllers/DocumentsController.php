<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Documents;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class DocumentsController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->user_id = Auth::user()->id;
        $request->validate([
            'raport' => 'required|file|mimes:pdf|max:5048',
            'kartu_keluarga' => 'required|file|mimes:pdf|max:5048',
            'sertifikat_lomba' => 'nullable|file|mimes:pdf|max:5048',
        ]);

        $raport = Storage::disk('public')->put('raports', $request->file('raport'));
        $kartu_keluarga = Storage::disk('public')->put('kartu_keluargas', $request->file('kartu_keluarga'));
        if ($request->hasFile('sertifikat_lomba')) {
            $sertifikat_lomba = Storage::disk('public')->put('sertifikat_lombas', $request->file('sertifikat_lomba'));
        }

        $data = [
            'user_id' => $request->user_id,
            'raport' => $raport,
            'kartu_keluarga' => $kartu_keluarga,
            'sertifikat_lomba' => $sertifikat_lomba,
        ];


        Documents::create($data);

        return back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->user_id = Auth::user()->id;
        $document = Documents::find($id);

        $newRaportPath = $document->raport;
        $newKartuKeluargaPath = $document->kartu_keluarga;
        $newSertifikatLombaPath = $document->sertifikat_lomba;

        if ($request->hasFile('raport')) {
            if ($document->raport) {
                $oldRaportRelativePath = str_replace('/storage/', '', $document->raport);
                Storage::disk('public')->delete($oldRaportRelativePath);
            }
            $newRaportPath = Storage::disk('public')->put('raports', $request->file('raport'));
        }

        if ($request->hasFile('kartu_keluarga')) {
            if ($document->kartu_keluarga) {
                $oldKartuKeluargaRelativePath = str_replace('/storage/', '', $document->kartu_keluarga);
                Storage::disk('public')->delete($oldKartuKeluargaRelativePath);
            }
            $newKartuKeluargaPath = Storage::disk('public')->put('kartu_keluargas', $request->file('kartu_keluarga'));
        }

        if ($request->hasFile('sertifikat_lomba')) {
            if ($document->sertifikat_lomba) {
                $oldSertifikatLombaRelativePath = str_replace('/storage/', '', $document->sertifikat_lomba);
                Storage::disk('public')->delete($oldSertifikatLombaRelativePath);
            }
            $newSertifikatLombaPath = Storage::disk('public')->put('sertifikat_lombas', $request->file('sertifikat_lomba'));
        } elseif ($request->input('sertifikat_lomba_removed')) {
            if ($document->sertifikat_lomba) {
                $oldSertifikatLombaRelativePath = str_replace('/storage/', '', $document->sertifikat_lomba);
                Storage::disk('public')->delete($oldSertifikatLombaRelativePath);
            }
            $newSertifikatLombaPath = null;
        }

        $dataToUpdate = [
            'user_id' => $request->user_id,
            'raport' => $newRaportPath,
            'kartu_keluarga' => $newKartuKeluargaPath,
            'sertifikat_lomba' => $newSertifikatLombaPath,
        ];
        
        $document->update($dataToUpdate);

        return back();
    }
}
