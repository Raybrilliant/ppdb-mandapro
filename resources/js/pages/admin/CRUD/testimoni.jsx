import AdminLayout from "@/layouts/admin-layout";

const Testimoni = () => {
    return (
        <div>
            <h1>Input Testimoni</h1>
            <form>
                <div className="floating-label">
                    <span>Nama</span>
                    <input type="text" className="input input-bordered" name="nama" placeholder="Nama" />
                </div>
                <div className="floating-label">
                    <span>Testimoni</span>
                    <textarea placeholder="Testimoni" className="textarea textarea-bordered" name="testimoni" />
                </div>
                <div className="floating-label">
                    <span>Foto</span>
                    <input type="file" className="file-input file-input-bordered" name="foto" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

Testimoni.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Testimoni;
