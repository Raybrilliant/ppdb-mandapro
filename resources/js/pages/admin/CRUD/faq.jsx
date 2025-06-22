import AdminLayout from "@/layouts/admin-layout";
import { useForm } from "@inertiajs/react";

const FAQ = ({faq}) => {
    const {data, setData, processing, post, put, delete:del} = useForm({
        question: faq?.question,
        answer: faq?.answer,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (faq) {
            put(`/admin/setting/faq/${faq.id}`, {
                onSuccess: () => {
                    alert('Data berhasil disimpan');
                },
            });
        } else {
            post(`/admin/setting/faq`, {
                onSuccess: () => {
                    alert('Data berhasil disimpan');
                },
            });
        }
    };
    
    const handleDelete = () => {
        del(`/admin/setting/faq/${faq.id}`, {
            onSuccess: () => {
                alert('Data berhasil dihapus');
            },
        });
    };
    
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">{faq ? 'Edit' : 'Tambah'} FAQ</h1>
                <button className="btn btn-error btn-xs" onClick={handleDelete}>Hapus</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 my-4 w-full">
                <div className="floating-label">
                    <span>Pertanyaan</span>
                    <input type="text" name="pertanyaan" className="input input-bordered w-full" placeholder="Pertanyaan" value={data.question} onChange={(e) => setData('question', e.target.value)} required />
                </div>
                <div className="floating-label">
                    <span>Jawaban</span>
                    <textarea placeholder="Jawaban" rows={4} name="jawaban" className="textarea textarea-bordered w-full" value={data.answer} onChange={(e) => setData('answer', e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    );
};

FAQ.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default FAQ;
