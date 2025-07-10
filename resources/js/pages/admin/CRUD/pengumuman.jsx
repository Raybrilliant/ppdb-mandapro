import AdminLayout from "@/layouts/admin-layout";
import { useForm } from "@inertiajs/react";
import QuillEditor from "@/components/quillEditor";

const Pengumuman = ({ announcement, levels }) => {
    const { data, setData, processing, post, put, delete: del } = useForm({
        title: announcement?.title,
        content: announcement?.content,
        level_id: announcement?.level_id,
    });

    const handleSubmit = (e) => {
    e.preventDefault();
    if (announcement) {
        put(`/admin/setting/pengumuman/${announcement.id}`, {
            onSuccess: () => {
                alert('Data berhasil disimpan');
            },
        });
    } else {
        post(`/admin/setting/pengumuman`, {
            onSuccess: () => {
                alert('Data berhasil disimpan');
            },
        });
    }
};

const handleDelete = () => {
    del(`/admin/setting/pengumuman/${announcement.id}`, {
        onSuccess: () => {
            alert('Data berhasil dihapus');
        },
    });
};
    return (
        <div>
            <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">{announcement ? 'Edit' : 'Tambah'} Pengumuman</h1>
            <button className="btn btn-error btn-xs" hidden={!announcement} onClick={handleDelete}>Hapus</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 my-4 w-full">
                <div className="floating-label">
                    <span>Pengumuman</span>
                    <QuillEditor initialValue={data.content} onChange={(value) => setData('content', value)}/>
                </div>
                <div className="floating-label">
                    <span>Tahap</span>
                    <select className="select select-bordered w-full" name="tahap" defaultValue={data.level_id} onChange={(e) => setData('level_id', e.target.value)} required>
                        <option disabled selected>Pilih Tahap</option>
                        {levels.map((level) => (
                            <option key={level.id} value={level.id}>{level.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" disabled={processing}>{processing ? 'Processing...' : 'Submit'}</button>
            </form>
        </div>
    );
};

Pengumuman.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Pengumuman;
