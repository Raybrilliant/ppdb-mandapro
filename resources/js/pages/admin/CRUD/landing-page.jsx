import AdminLayout from "@/layouts/admin-layout";
import { useForm } from "@inertiajs/react";
import QuillEditor from "@/components/quillEditor";

const LandingPage = ({landingPage}) => {
    const {data,setData,post,delete:del,processing, errors} = useForm({
        foto_background:null,
        foto_background_1:null,
        foto_background_2:null,
        jumlah_siswa_berprestasi:landingPage?.jumlah_siswa_berprestasi,
        pengumuman_ppdb:landingPage?.pengumuman_ppdb,
        pengumuman_ppdb_date:landingPage?.pengumuman_ppdb_date,
        deskripsi_ppdb:landingPage?.deskripsi_ppdb,
        nama_kepala_madrasah:landingPage?.nama_kepala_madrasah,
        pesan_kepala_madrasah:landingPage?.pesan_kepala_madrasah,
        foto_kepala_madrasah:null,
        persyaratan_umum:landingPage?.persyaratan_umum,
        persyaratan_khusus:landingPage?.persyaratan_khusus,
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if (landingPage) {
            post(`/admin/setting/landing-page/${landingPage.id}`, {
                onSuccess: () => {
                    alert('Data berhasil disimpan');
                },
            });
        } else {
            post('/admin/setting/landing-page', {
                onSuccess: () => {
                    alert('Data berhasil disimpan');
                },
            });
        }
    };

    const handleDelete = () => {
        del(`/admin/setting/landing-page/${landingPage.id}`, {
            onSuccess: () => {
                alert('Data berhasil dihapus');
            },
        });
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">{landingPage ? 'Edit' : 'Tambah'} Landing Page</h1>
                <button className="btn btn-error btn-xs" hidden={!landingPage} onClick={handleDelete}>Hapus</button>
            </div>
            <form onSubmit={onSubmit} className="space-y-4 my-4 w-full">
                <label className="floating-label">
                    <span>Foto Background</span>
                    <input type="file" placeholder="Foto Background" name="foto_background" onChange={(e) => setData('foto_background', e.target.files[0])} className="file-input file-input-bordered w-full" />
                    {errors.foto_background && <span className="text-error">{errors.foto_background}</span>}
                </label>
                <label className="floating-label">
                    <span>Foto Background 1</span>
                    <input type="file" placeholder="Foto Background 1" name="foto_background_1" onChange={(e) => setData('foto_background_1', e.target.files[0])} className="file-input file-input-bordered w-full" />
                    {errors.foto_background_1 && <span className="text-error">{errors.foto_background_1}</span>}
                </label>
                <label className="floating-label">
                    <span>Foto Background 2</span>
                    <input type="file" placeholder="Foto Background 2" name="foto_background_2" onChange={(e) => setData('foto_background_2', e.target.files[0])} className="file-input file-input-bordered w-full" />
                    {errors.foto_background_2 && <span className="text-error">{errors.foto_background_2}</span>}
                </label>
                <label className="floating-label">
                    <span>Jumlah Siswa Berprestasi</span>
                    <input type="number" placeholder="Jumlah Siswa Berprestasi" name="jumlah_siswa_berprestasi" value={data.jumlah_siswa_berprestasi} onChange={(e) => setData('jumlah_siswa_berprestasi', e.target.value)} className="input input-md w-full" />
                </label>
                <label className="floating-label">
                    <span>Pengumuman PPDB</span>
                    <input type="text" placeholder="Pengumuman PPDB" name="pengumuman_ppdb" value={data.pengumuman_ppdb} onChange={(e) => setData('pengumuman_ppdb', e.target.value)} className="input input-md w-full" />
                </label>
                <label className="floating-label">
                    <span>Tanggal Pendaftaran PPDB</span>
                    <input type="text" placeholder="Tanggal Pendaftaran PPDB" name="pengumuman_ppdb_date" value={data.pengumuman_ppdb_date} onChange={(e) => setData('pengumuman_ppdb_date', e.target.value)} className="input input-md w-full" />
                </label>
                <label className="floating-label">
                    <span>Deskripsi PPDB</span>
                    <input type="text" placeholder="Deskripsi PPDB" name="deskripsi_ppdb" value={data.deskripsi_ppdb} onChange={(e) => setData('deskripsi_ppdb', e.target.value)} className="input input-md w-full" />
                </label>
               <label className="floating-label">
                    <span>Nama Kepala Madrasah</span>
                    <input type="text" placeholder="Nama Kepala Sekolah" name="nama_kepala_madrasah" value={data.nama_kepala_madrasah} onChange={(e) => setData('nama_kepala_madrasah', e.target.value)} className="input input-md w-full" />
                </label>
                <label className="floating-label">
                    <span>Pesan Kepala Madrasah</span>
                    <QuillEditor initialValue={data.pesan_kepala_madrasah} onChange={(value) => setData('pesan_kepala_madrasah', value)}/>
                </label>
                <label className="floating-label">
                    <span>Foto Kepala Madrasah</span>
                    <input type="file" placeholder="Foto Kepala Madrasah" name="foto_kepala_madrasah" onChange={(e) => setData('foto_kepala_madrasah', e.target.files[0])} className="file-input file-input-bordered w-full" />
                    {errors.foto_kepala_madrasah && <span className="text-error">{errors.foto_kepala_madrasah}</span>}
                </label>  
                <label className="floating-label">
                    <span>Persyaratan Umum</span>
                    <QuillEditor initialValue={data.persyaratan_umum} onChange={(value) => setData('persyaratan_umum', value)}/>
                </label>       
                <label className="floating-label">
                    <span>Persyaratan Khusus</span>
                    <QuillEditor initialValue={data.persyaratan_khusus} onChange={(value) => setData('persyaratan_khusus', value)}/>
                </label>       
                <button type="submit" className="btn btn-primary" disabled={processing}>{processing ? 'Loading...' : 'Submit'}</button>
            </form>
        </div>
    );
};

LandingPage.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default LandingPage;