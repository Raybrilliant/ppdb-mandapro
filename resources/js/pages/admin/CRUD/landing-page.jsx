import AdminLayout from "@/layouts/admin-layout";

const LandingPage = () => {
    return (
        <div>
            <h1>Input Landing Page</h1>
            <form>
                <label className="floating-label">
                    <span>Jumlah Siswa Berprestasi</span>
                    <input type="number" placeholder="Jumlah Siswa Berprestasi" name="jumlah_siswa_berprestasi" className="input input-md" />
                </label>
                <label className="floating-label">
                    <span>Pengumuman PPDB</span>
                    <input type="text" placeholder="Pengumuman PPDB" name="pengumuman_ppdb" className="input input-md" />
                </label>
                <label className="floating-label">
                    <span>Deskripsi PPDB</span>
                    <input type="text" placeholder="Deskripsi PPDB" name="deskripsi_ppdb" className="input input-md" />
                </label>
               <label className="floating-label">
                    <span>Nama Kepala Madrasah</span>
                    <input type="text" placeholder="Nama Kepala Sekolah" name="nama_kepala_madrasah" className="input input-md" />
                </label>
                <label className="floating-label">
                    <span>Pesan Kepala Madrasah</span>
                    <textarea placeholder="Pesan Kepala Madrasah" name="pesan_kepala_madrasah" className="textarea textarea-bordered" />
                </label>
                <label className="floating-label">
                    <span>Foto Kepala Madrasah</span>
                    <input type="file" placeholder="Foto Kepala Madrasah" name="foto_kepala_madrasah" className="file-input file-input-bordered" />
                </label>                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

LandingPage.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default LandingPage;