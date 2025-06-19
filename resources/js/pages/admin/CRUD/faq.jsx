import AdminLayout from "@/layouts/admin-layout";

const FAQ = () => {
    return (
        <div>
            <h1>Input FAQ</h1>
            <form>
                <div className="floating-label">
                    <span>Pertanyaan</span>
                    <input type="text" name="pertanyaan" className="input input-bordered" placeholder="Pertanyaan" />
                </div>
                <div className="floating-label">
                    <span>Jawaban</span>
                    <textarea placeholder="Jawaban" rows={4} name="jawaban" className="textarea textarea-bordered" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

FAQ.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default FAQ;
