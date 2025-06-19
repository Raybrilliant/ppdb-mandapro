import AdminLayout from "@/layouts/admin-layout";

const Pengumuman = () => {
    return (
        <div>
            <h1>Input Pengumuman</h1>
            <form>
                <div className="floating-label">
                    <span>Pengumuman</span>
                    <textarea className="textarea textarea-bordered" name="pengumuman" placeholder="Pengumuman"></textarea>
                </div>
                <div className="floating-label">
                    <span>Tahap</span>
                    <select className="select select-bordered" name="tahap">
                        <option disabled selected>Choose your option</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

Pengumuman.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Pengumuman;
