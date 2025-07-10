import AdminLayout from "@/layouts/admin-layout";
import { useForm } from "@inertiajs/react";

const Testimoni = ({testimoni}) => {
    const {data, setData, processing, post, delete: del, errors} = useForm({
        name: testimoni?.name,
        message: testimoni?.message,
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (testimoni) {
            post(`/admin/setting/testimoni/${testimoni.id}`, {
                onSuccess: () => {
                    alert('Data berhasil disimpan');
                },
            });
        } else {
            post('/admin/setting/testimoni', {
                onSuccess: () => {
                    alert('Data berhasil disimpan');
                },
            });
        }
    };

    const handleDelete = () => {
        del(`/admin/setting/testimoni/${testimoni.id}`, {
            onSuccess: () => {
                alert('Data berhasil dihapus');
            },
        });
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">{testimoni ? 'Edit' : 'Tambah'} Testimoni</h1>
                <button className="btn btn-error btn-xs" hidden={!testimoni} onClick={handleDelete}>Hapus</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 my-4 w-full">
                <div className="floating-label">
                    <span>Nama</span>
                    <input type="text" className="input input-bordered w-full" name="name" placeholder="Nama" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                </div>
                <div className="floating-label">
                    <span>Testimoni</span>
                    <textarea placeholder="Testimoni" className="textarea textarea-bordered w-full" name="message" value={data.message} onChange={(e) => setData('message', e.target.value)} />
                </div>
                <div className="floating-label">
                    <span>Foto</span>
                    <input type="file" className="file-input file-input-bordered w-full" name="image" onChange={(e) => setData('image', e.target.files[0])} />
                    {errors.image && <span className="text-error">{errors.image}</span>}
                </div>
                <button type="submit" className="btn btn-primary" disabled={processing}>{processing ? 'Loading...' : 'Submit'}</button>
            </form>
        </div>
    );
};

Testimoni.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Testimoni;
