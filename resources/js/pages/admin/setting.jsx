import AdminLayout from "@/layouts/admin-layout";

const pengumuman = [
    {
        id: 1,
        name: "Siswa yang lolos dapat melakukan pendaftaraan ulang melalui link berikut https://man2kotaprobolinggo.sch.id/pendaftaran",
        tahap: 1,
    }
]
const Setting = () => {
    return (
        <div>
            <h1>Setting</h1>
            {/* Pengumuman */}
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Pengumuman</th>
                        <th>Tahap</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {pengumuman.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="w-1/2">{item.name}</td>
                            <td>{item.tahap}</td>
                            <td>
                                <button className="btn btn-warning btn-xs">Edit</button>
                                <button className="btn btn-error btn-xs">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

Setting.layout = (children) => <AdminLayout>{children}</AdminLayout>;

export default Setting;
