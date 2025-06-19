import AdminLayout from "@/layouts/admin-layout";

const ProgramUnggulan = () => {
    return (
        <div>
            <h1>Input Program Unggulan</h1>
            <form>
                <div className="floating-label">
                    <span>Nama</span>
                    <input type="text" className="input input-bordered" name="nama" placeholder="Nama" />
                </div>
                <div className="floating-label">
                    <span>Deskripsi</span>
                    <textarea placeholder="Deskripsi" className="textarea textarea-bordered" name="deskripsi" />
                </div>
                <div className="floating-label">
                    <span>Icon</span>
                    <input type="file" className="file-input file-input-bordered" name="icon" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

ProgramUnggulan.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default ProgramUnggulan;
