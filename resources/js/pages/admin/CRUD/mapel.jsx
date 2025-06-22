import AdminLayout from "@/layouts/admin-layout";
import { useForm } from "@inertiajs/react";

const Mapel = ({ subject }) => {
    const {data, setData, processing, post, put, delete: del} = useForm({
        name: subject?.name,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (subject) {
            put(`/admin/setting/mapel/${subject.id}`, {
                onSuccess: () => {
                    alert('Data berhasil disimpan');
                },
            });
        } else {
            post(`/admin/setting/mapel`, {
                onSuccess: () => {
                    alert('Data berhasil disimpan');
                },
            });
        }
    };
    
    const handleDelete = () => {
        del(`/admin/setting/mapel/${subject.id}`, {
            onSuccess: () => {
                alert('Data berhasil dihapus');
            },
        });
    };
    
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">{subject ? 'Edit' : 'Tambah'} Mapel</h1>
                <button className="btn btn-error btn-xs" onClick={handleDelete}>Hapus</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 my-4 w-full">
                <div className="floating-label">
                    <span>Nama</span>
                    <input type="text" className="input input-bordered w-full" value={data.name} onChange={(e) => setData('name', e.target.value)} name="name" placeholder="Nama" required />
                </div>
                <button type="submit" className="btn btn-primary" disabled={processing}>{processing ? 'Processing...' : 'Simpan'}</button>
            </form>
        </div>
    );
};

Mapel.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Mapel;