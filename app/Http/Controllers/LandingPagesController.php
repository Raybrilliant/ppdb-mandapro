<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FAQ;
use App\Models\User;
use App\Models\LandingPage;
use App\Models\Testimoni;
use App\Models\Program;
use Illuminate\Support\Facades\Storage;

class LandingPagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $faqs = FAQ::all();
        $user = User::all()->count();
        $landingPage = LandingPage::first();
        $testimoni = Testimoni::first();
        $programs = Program::all();
        return inertia('home', [
            'faqs' => $faqs,
            'user' => $user,
            'landingPage' => $landingPage,
            'testimoni' => $testimoni,
            'programs' => $programs,
        ]);
    }

        // Landing Page

    public function create(){
        return inertia('admin/CRUD/landing-page');
    }

    public function edit($id){
        $landingPage = LandingPage::find($id);
        return inertia('admin/CRUD/landing-page', [
            'landingPage' => $landingPage,
        ]);
    }

    public function store(Request $request){
        $request->validate([
            'foto_background' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'foto_background_1' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'foto_background_2' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'jumlah_siswa_berprestasi' => 'required|numeric',
            'pengumuman_ppdb' => 'required',
            'pengumuman_ppdb_date' => 'required',
            'deskripsi_ppdb' => 'required',
            'nama_kepala_madrasah' => 'required',
            'pesan_kepala_madrasah' => 'required',
            'foto_kepala_madrasah' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'persyaratan_umum' => 'required',
            'persyaratan_khusus' => 'required',
        ]);
        $foto_background = $request->file('foto_background');
        $foto_background_1 = $request->file('foto_background_1');
        $foto_background_2 = $request->file('foto_background_2');
        $foto_kepala_madrasah = $request->file('foto_kepala_madrasah');

        if ($foto_background) {
            $foto_background = $foto_background->store('foto_background', 'public');
        }
        if ($foto_background_1) {
            $foto_background_1 = $foto_background_1->store('foto_background_1', 'public');
        }
        if ($foto_background_2) {
            $foto_background_2 = $foto_background_2->store('foto_background_2', 'public');
        }
        if ($foto_kepala_madrasah) {
            $foto_kepala_madrasah = $foto_kepala_madrasah->store('foto_kepala_madrasah', 'public');
        }

        $data = [
            'foto_background' => $foto_background,
            'foto_background_1' => $foto_background_1,
            'foto_background_2' => $foto_background_2,
            'jumlah_siswa_berprestasi' => $request->jumlah_siswa_berprestasi,
            'pengumuman_ppdb' => $request->pengumuman_ppdb,
            'pengumuman_ppdb_date' => $request->pengumuman_ppdb_date,
            'deskripsi_ppdb' => $request->deskripsi_ppdb,
            'nama_kepala_madrasah' => $request->nama_kepala_madrasah,
            'pesan_kepala_madrasah' => $request->pesan_kepala_madrasah,
            'foto_kepala_madrasah' => $foto_kepala_madrasah,
            'persyaratan_umum' => $request->persyaratan_umum,
            'persyaratan_khusus' => $request->persyaratan_khusus,
        ];
        LandingPage::create($data);
        return redirect('/admin/setting');
    }

    public function update(Request $request, $id){
        $request->validate([
            'jumlah_siswa_berprestasi' => 'required|numeric',
            'pengumuman_ppdb' => 'required',
            'pengumuman_ppdb_date' => 'required',
            'deskripsi_ppdb' => 'required',
            'nama_kepala_madrasah' => 'required',
            'pesan_kepala_madrasah' => 'required',
            'persyaratan_umum' => 'required',
            'persyaratan_khusus' => 'required',
        ]);
        $landingPage = LandingPage::find($id);

        $request->foto_background = $landingPage->foto_background;
        $request->foto_background_1 = $landingPage->foto_background_1;
        $request->foto_background_2 = $landingPage->foto_background_2;
        $request->foto_kepala_madrasah = $landingPage->foto_kepala_madrasah;

        if ($request->hasFile('foto_background')) {
            $oldFotoBackground = $landingPage->foto_background;
            Storage::delete($oldFotoBackground);
            $request->foto_background = $request->file('foto_background')->store('foto_background', 'public');
        }
        if ($request->hasFile('foto_background_1')) {
            $oldFotoBackground1 = $landingPage->foto_background_1;
            Storage::delete($oldFotoBackground1);
            $request->foto_background_1 = $request->file('foto_background_1')->store('foto_background_1', 'public');
        }
        if ($request->hasFile('foto_background_2')) {
            $oldFotoBackground2 = $landingPage->foto_background_2;
            Storage::delete($oldFotoBackground2);
            $request->foto_background_2 = $request->file('foto_background_2')->store('foto_background_2', 'public');
        }
        if ($request->hasFile('foto_kepala_madrasah')) {
            $oldFotoKepalaMadrasah = $landingPage->foto_kepala_madrasah;
            Storage::delete($oldFotoKepalaMadrasah);
            $request->foto_kepala_madrasah = $request->file('foto_kepala_madrasah')->store('foto_kepala_madrasah', 'public');
        }

        $data = [
            'foto_background' => $request->foto_background,
            'foto_background_1' => $request->foto_background_1,
            'foto_background_2' => $request->foto_background_2,
            'jumlah_siswa_berprestasi' => $request->jumlah_siswa_berprestasi,
            'pengumuman_ppdb' => $request->pengumuman_ppdb,
            'pengumuman_ppdb_date' => $request->pengumuman_ppdb_date,
            'deskripsi_ppdb' => $request->deskripsi_ppdb,
            'nama_kepala_madrasah' => $request->nama_kepala_madrasah,
            'pesan_kepala_madrasah' => $request->pesan_kepala_madrasah,
            'foto_kepala_madrasah' => $request->foto_kepala_madrasah,
            'persyaratan_umum' => $request->persyaratan_umum,
            'persyaratan_khusus' => $request->persyaratan_khusus,
        ];
        $landingPage->update($data);
        return redirect('/admin/setting');
    }

    public function destroy($id){
        $landingPage = LandingPage::find($id);
        if ($landingPage->foto_background) {
            Storage::delete($landingPage->foto_background);
        }
        if ($landingPage->foto_background_1) {
            Storage::delete($landingPage->foto_background_1);
        }
        if ($landingPage->foto_background_2) {
            Storage::delete($landingPage->foto_background_2);
        }
        if ($landingPage->foto_kepala_madrasah) {
            Storage::delete($landingPage->foto_kepala_madrasah);
        }
        $landingPage->delete();
        return redirect('/admin/setting');
    }
}
