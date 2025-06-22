import AdminLayout from "@/layouts/admin-layout";
import Pagination from "@/components/pagination";
import { useEffect, useState } from "react";
import { regencies, provinces } from "@/components/geolocation";
import { Link } from "@inertiajs/react";

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

    const handleSelectAll = () => {
        setAllSelected(!allSelected);
        setSelected(allSelected ? [] : user?.data.map(item => item.id));
    }
   const handleSelectOne = (id) => {
        setSelected(prev => {
            return prev.includes(id)
                ? prev.filter(itemId => itemId !== id)
                : [...prev, id];
        });
    };

    useEffect(() => {
        if (selected.length === user?.data.length) {
            setAllSelected(true);
        } else {
            setAllSelected(false);
        }
    }, [selected]);
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Pendaftaran</h1>
            <input type="search" placeholder="Search" className="input input-bordered w-full rounded-full" />
            <form className="space-y-4">
                <div className="flex items-center justify-end gap-2">
                    <button type="submit" className="btn btn-success btn-xs">Lolos</button>
                    <button type="submit" className="btn btn-warning btn-xs">Tidak Lolos</button>
                    <button type="submit" className="btn btn-error btn-xs">Hapus</button>
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
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user?.data.map((item) => (
                            <tr key={item?.id}>
                                <td><input type="checkbox" name="pendaftaran" className="checkbox" checked={selected.includes(item?.id)} onChange={() => handleSelectOne(item?.id)} /></td>
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
                                <td>
                                    <button className="btn btn-error btn-xs">Delete</button>
                                </td>
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
        </div>
    );
};

Pendaftaran.layout = (children) => <AdminLayout>{children}</AdminLayout>;
export default Pendaftaran;
