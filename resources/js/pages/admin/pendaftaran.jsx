import AdminLayout from "@/layouts/admin-layout";
import { useEffect, useState } from "react";
import { regencies, provinces } from "@/components/geolocation";
import { Link, useForm } from "@inertiajs/react";

const checkStatus = (status) => {
    switch (status) {
        case 1:
            return 'Lolos';
        case 2:
            return 'Tidak Lolos';
        default:
            return '-';
    }
}
const Pendaftaran = ({user}) => {
    const [allSelected, setAllSelected] = useState(false);
    const [selected, setSelected] = useState([]);
    const {data, put, delete: del, setData, processing} = useForm({
        users: [],
        message: '',
    })

    console.log(data);
    

    const handleSelectAll = () => {
        setAllSelected(!allSelected);
        setSelected(allSelected ? [] : user?.data.map(item => item?.user_detail?.id));
        setData('users', allSelected ? [] : user?.data.map(item => item?.user_detail?.id));
    }
    const handleSelectOne = (id) => {
        const isCurrentlySelected = selected.includes(id);
        const updatedSelected = isCurrentlySelected 
            ? selected.filter(itemId => itemId !== id) 
            : [...selected, id]; 

        setSelected(updatedSelected);
        setData('users', updatedSelected);
    };

    useEffect(() => {
        if (data.users.length === user?.data.length) {
            setAllSelected(true);
        } else {
            setAllSelected(false);
        }
    }, [data.users]);
    
    const handleLolos = (e) => {
        e.preventDefault();
        put('/admin/pendaftaran/bulk/lolos', {
            onSuccess: () => {
                alert('Data berhasil disimpan');
            },
        });
    };
    const handleTidakLolos = (e) => {
        e.preventDefault();
        put('/admin/pendaftaran/bulk/tidak-lolos', {
            onSuccess: () => {
                setData('message', '');
                (document.getElementById('modalMessage')?.close());
                alert('Data berhasil disimpan');
            },
        });
    };
    const handleHapus = (e) => {
        e.preventDefault();
        del('/admin/pendaftaran/bulk/hapus', {
            onSuccess: () => {
                alert('Data berhasil disimpan');
            },
        });
    };
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Pendaftaran</h1>
            <input type="search" placeholder="Search" className="input input-bordered w-full rounded-full" />
            <form className="space-y-4">
                <div className="flex items-center justify-end gap-2">
                    <button type="submit" className="btn btn-success btn-xs" onClick={handleLolos} disabled={processing}>{processing ? 'Processing...' : 'Lolos'}</button>
                    <button type="button" className="btn btn-warning btn-xs" onClick={()=>document.getElementById('modalMessage').showModal()}>Tidak Lolos</button>
                    <button type="submit" className="btn btn-error btn-xs" onClick={handleHapus} disabled={processing}>{processing ? 'Processing...' : 'Hapus'}</button>
                </div>
                <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th><input type="checkbox" name="pendaftaran" className="checkbox" checked={allSelected} onChange={() => handleSelectAll()} /></th>
                            <th>No Pendaftaran</th>
                            <th>Nama</th>
                            <th>Status</th>
                            <th>Tahap</th>
                            <th>NISN</th>
                            <th>Jenis Kelamin</th>
                            <th>Tempat Lahir</th>
                            <th>Tanggal Lahir</th>
                            <th>WhatsApp</th>
                            <th>Email</th>
                            <th>Alamat</th>
                            <th>Kota</th>
                            <th>Provinsi</th>
                            <th>Foto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user?.data.map((item,index) => (
                            <tr key={index}>
                                <td><input type="checkbox" name="pendaftaran" className="checkbox" checked={selected.includes(item?.user_detail?.id)} onClick={() => handleSelectOne(item?.user_detail?.id)} /></td>
                                <td>{item?.id}</td>
                                <td>{item?.name}</td>
                                <td>{checkStatus(item?.user_detail?.status)}</td>
                                <td>{item?.user_detail?.tahap}</td>
                                <td>{item?.user_detail?.nisn}</td>
                                <td>{item?.user_detail?.gender}</td>
                                <td>{item?.user_detail?.birth_place}</td>
                                <td>{new Date(item?.user_detail?.birth_date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td>{item?.user_detail?.phone}</td>
                                <td>{item?.email}</td>
                                <td>{item?.user_detail?.address}</td>
                                <td>{regencies.find((regency) => regency.id == item?.user_detail?.city)?.name}</td>
                                <td>{provinces.find((province) => province.id == item?.user_detail?.province)?.name}</td>
                                <td><img src={'/storage/' + item?.user_detail?.photo} alt="photo" className="w-20 object-cover" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className="flex justify-end">
                    {user?.links?.map((link,index) => (
                        <Link key={index} className={"btn btn-sm" + (link.active ? ' btn-active' : '')} href={link?.url || '#'} dangerouslySetInnerHTML={{ __html: link?.label}}></Link>
                    ))}
                </div>
            </form>
            {/* Modal */}
            <dialog id="modalMessage" className="modal">
                <div className="modal-box space-y-4">
                    <h3 className="text-lg font-bold">Kenapa Tidak Lolos?</h3>
                    <input type="text" placeholder="Alasan" onChange={(e) => setData('message', e.target.value)} className="input input-bordered w-full" />
                    <button className="btn btn-error" onClick={handleTidakLolos} disabled={processing}>{processing ? 'Processing...' : 'Simpan'}</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

Pendaftaran.layout = (children) => <AdminLayout>{children}</AdminLayout>;
export default Pendaftaran;
