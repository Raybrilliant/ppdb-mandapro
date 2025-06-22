import AdminLayout from "@/layouts/admin-layout";
import { Link } from "@inertiajs/react";

const Berkas = ({user}) => {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Berkas</h1>
            <input type="search" placeholder="Search" className="input input-bordered w-full rounded-full" />
            <div className="overflow-x-auto">
                <table className="table table-zebra text-sm mb-5">
                    <thead>
                        <tr>
                            <th>No Pendaftaran</th>
                            <th>Nama</th>
                            <th>Tanggal Pendaftaran</th>
                            <th>Kartu Keluarga</th>
                            <th>Raport</th>
                            <th>Sertifikat Lomba</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user?.data.map((item, index) => (
                            <tr key={index}>
                                <td>{item?.id}</td>
                                <td>{item?.name}</td>
                                <td>{new Date(item?.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td><a href={'/storage/' + item?.documents?.kartu_keluarga} disabled={!item?.documents?.kartu_keluarga} className="btn btn-xs btn-info" target="_blank" rel="noopener noreferrer">Lihat</a></td>
                                <td><a href={'/storage/' + item?.documents?.raport} disabled={!item?.documents?.raport} className="btn btn-xs btn-info" target="_blank" rel="noopener noreferrer">Lihat</a></td>
                                <td><a href={'/storage/' + item?.documents?.sertifikat_lomba} disabled={!item?.documents?.sertifikat_lomba} className="btn btn-xs btn-info" target="_blank" rel="noopener noreferrer">Lihat</a></td>
                                <td>
                                    <button className="btn btn-error btn-xs">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-end">
                    {user?.links?.map((link,index) => (
                        <Link key={index} className={"btn btn-sm" + (link.active ? ' btn-active' : '')} href={link.url || '#'} dangerouslySetInnerHTML={{ __html: link.label}}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

Berkas.layout = (children) => <AdminLayout>{children}</AdminLayout>;
export default Berkas;
