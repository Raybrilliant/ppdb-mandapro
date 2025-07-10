import AdminLayout from "@/layouts/admin-layout";
import { useForm } from "@inertiajs/react";

const ProgramUnggulan = ({program}) => {
    const {data,setData,post,delete:del,processing, errors} = useForm({
        nama:program?.name,
        deskripsi:program?.description,
        icon:null,
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if (program) {
            post(`/admin/setting/program-unggulan/${program.id}`, {
                onSuccess: () => {
                    alert('Data berhasil disimpan');
                },
            });
        } else {
            post('/admin/setting/program-unggulan', {
                onSuccess: () => {
                    alert('Data berhasil disimpan');
                },
            });
        }
    };

    const handleDelete = () => {
        del(`/admin/setting/program-unggulan/${program.id}`, {
            onSuccess: () => {
                alert('Data berhasil dihapus');
            },
        });
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">{program ? 'Edit' : 'Tambah'} Program Unggulan</h1>
                <button className="btn btn-error btn-xs" hidden={!program} onClick={handleDelete}>Hapus</button>
            </div>
            <form onSubmit={onSubmit} className="space-y-4 my-4 w-full">
                <div className="floating-label">
                    <span>Nama</span>
                    <input type="text" className="input input-bordered w-full" name="nama" placeholder="Nama" value={data.nama} onChange={(e) => setData('nama', e.target.value)} />
                </div>
                <div className="floating-label">
                    <span>Deskripsi</span>
                    <textarea placeholder="Deskripsi" className="textarea textarea-bordered w-full" name="deskripsi" value={data.deskripsi} onChange={(e) => setData('deskripsi', e.target.value)} />
                </div>
                <div className="floating-label">
                    <span>Icon</span>
                    <input type="file" className="file-input file-input-bordered w-full" name="icon" onChange={(e) => setData('icon', e.target.files[0])} />
                    {errors.icon && <span className="text-error">{errors.icon}</span>}
                </div>
                <button type="submit" className="btn btn-primary" disabled={processing}>{processing ? 'Loading...' : 'Submit'}</button>
            </form>
        </div>
    );
};

ProgramUnggulan.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default ProgramUnggulan;
