import AdminLayout from "@/layouts/admin-layout";

const berkas = [
    {
        id: 2001231213,
        name: "Raihan Fikri Brilliansyach",
        nisn: "1234567890",
        created_at: "2024-01-01",
        file_kk: "https://api.arya.ai/images/test.pdf",
        file_ijazah: "https://api.arya.ai/images/test.pdf",
        file_raport: "https://api.arya.ai/images/test.pdf",
    }
]
const Berkas = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Berkas</h1>
            <input type="search" placeholder="Search" className="input input-bordered w-full rounded-full" />
            <div className="overflow-x-auto">
                <table className="table table-zebra text-sm">
                    <thead>
                        <tr>
                            <th>No Pendaftaran</th>
                            <th>Nama</th>
                            <th>NISN</th>
                            <th>Tanggal Pendaftaran</th>
                            <th>Kartu Keluarga</th>
                            <th>Ijazah</th>
                            <th>Raport</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {berkas.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.nisn}</td>
                                <td>{new Date(item.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td><a href={item.file_kk} target="_blank" rel="noopener noreferrer">Lihat</a></td>
                                <td><a href={item.file_ijazah} target="_blank" rel="noopener noreferrer">Lihat</a></td>
                                <td><a href={item.file_raport} target="_blank" rel="noopener noreferrer">Lihat</a></td>
                                <td>
                                    <button className="btn btn-warning btn-xs">Edit</button>
                                    <button className="btn btn-error btn-xs">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Berkas.layout = (children) => <AdminLayout>{children}</AdminLayout>;
export default Berkas;
