import AdminLayout from "@/layouts/admin-layout";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

const Berkas = ({user, search}) => {
    console.log(user);
    const {processing, put} = useForm();

    const handleUnvalidate = (id) => {
        put('/admin/berkas/unvalidate/' + id, {
            onSuccess: () => {
                alert('Data berhasil dikembalikan');
            },
        });
    };
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Berkas</h1>
            <form className="flex items-center gap-2">
                <input type="search" placeholder="Cari Nama / No Pendaftaran" name="s" defaultValue={search} className="input input-bordered w-full rounded-full" />
                <button type="submit" className="btn btn-primary rounded-full">Cari</button>
            </form>
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
                            <th>Ijazah/SKL</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user?.data.map((item, index) => (
                            <tr key={index}>
                                <td>{item?.nomor_pendaftaran}</td>
                                <td>{item?.name}</td>
                                <td>{new Date(item?.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td><a href={'/storage/' + item?.documents?.kartu_keluarga} disabled={!item?.documents?.kartu_keluarga} className="btn btn-xs btn-info" target="_blank" rel="noopener noreferrer">Lihat</a></td>
                                <td><a href={'/storage/' + item?.documents?.raport} disabled={!item?.documents?.raport} className="btn btn-xs btn-info" target="_blank" rel="noopener noreferrer">Lihat</a></td>
                                <td><a href={'/storage/' + item?.documents?.sertifikat_lomba} disabled={!item?.documents?.sertifikat_lomba} className="btn btn-xs btn-info" target="_blank" rel="noopener noreferrer">Lihat</a></td>
                                <td><a href={'/storage/' + item?.documents?.ijazah} disabled={!item?.documents?.ijazah} className="btn btn-xs btn-info" target="_blank" rel="noopener noreferrer">Lihat</a></td>
                                <td><button className="btn btn-xs btn-error" onClick={() => handleUnvalidate(item?.user_detail?.id)} disabled={processing}>{processing ? 'Sedang Mengirim..' : 'Data Tidak Lengkap'}</button></td>
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
