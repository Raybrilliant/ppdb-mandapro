import AdminLayout from "@/layouts/admin-layout";

const Tahapan = () => {
    return (
        <div>
            <h1>Input Tahapan</h1>
            <form>
                <div className="floating-label">
                    <span>Tahapan</span>
                    <input type="number" className="input input-bordered" name="tahapan" placeholder="Tahapan" />
                </div>
                <div className="floating-label">
                    <span>Nama</span>
                    <input type="text" className="input input-bordered" name="nama" placeholder="Nama" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

Tahapan.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Tahapan;