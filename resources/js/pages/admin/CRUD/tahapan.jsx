import AdminLayout from "@/layouts/admin-layout";
import { useForm } from "@inertiajs/react";

const Tahapan = ({ level }) => {
    const {data, setData, processing, post, put, delete: del} = useForm({
        name: level?.name,
        level: level?.level,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (level) {
            put(`/admin/setting/tahapan/${level.id}`, {
                onSuccess: () => {
                    alert('Data berhasil disimpan');
                },
            });
        } else {
            post(`/admin/setting/tahapan`, {
                onSuccess: () => {
                    alert('Data berhasil disimpan');
                },
            });
        }
    };
    
    const handleDelete = () => {
        del(`/admin/setting/tahapan/${level.id}`, {
            onSuccess: () => {
                alert('Data berhasil dihapus');
            },
        });
    };
    
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">{level ? 'Edit' : 'Tambah'} Tahapan</h1>
                <button className="btn btn-error btn-xs" onClick={handleDelete}>Hapus</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 my-4 w-full">
                <div className="floating-label">
                    <span>Nama</span>
                    <input type="text" className="input input-bordered w-full" value={data.name} onChange={(e) => setData('name', e.target.value)} name="name" placeholder="Nama" required/>
                </div>
                <div className="floating-label">
                    <span>Tahap</span>
                    <input type="number" className="input input-bordered w-full" value={data.level} onChange={(e) => setData('level', e.target.value)} name="level" placeholder="Tahap" required/>
                </div>
                <button type="submit" className="btn btn-primary" disabled={processing}>{processing ? 'Processing...' : 'Simpan'}</button>
            </form>
        </div>
    );
};

Tahapan.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Tahapan;