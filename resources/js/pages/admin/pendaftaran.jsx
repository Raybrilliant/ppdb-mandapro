import AdminLayout from "@/layouts/admin-layout";
import Pagination from "@/components/pagination";
import { useEffect, useState } from "react";

const pendaftaran = {
   total: 50,
   per_page: 15,
   current_page: 1,
   last_page: 4,
   current_page_url: "http://laravel.app?page=1",
   first_page_url: "http://laravel.app?page=1",
   last_page_url: "http://laravel.app?page=4",
   next_page_url: "http://laravel.app?page=2",
   prev_page_url: null,
   path: "http://localhost:8000/admin/pendaftaran",
   from: 1,
   to: 15,
   data:[
        {
            id: 1121212121,
            name: "Raihan Fikri Brilliansyach",
            nisn: "1234567890",
            status: "Lolos",
            tahap: 1,
            gender: "Laki-laki",
            birthplace: "Probolinggo",
            birthdate: "2007-06-14",
            phone: "081234567890",
            email: "raihanfikrib@gmail.com",
            address: "Jl. Probolinggo No. 123",
            province: "Jawa Timur",
            city: "Probolinggo",
            photo: "https://man2kotaprobolinggo.sch.id/wp-content/uploads/2024/11/IMG_20241123_201600.jpg",
        },
        {
            id: 2222222222,
            name: "Raihan Fikri Brilliansyach",
            nisn: "1234567890",
            status: "Tidak Lolos",
            tahap: 1,
            gender: "Laki-laki",
            birthplace: "Probolinggo",
            birthdate: "2007-06-14",
            phone: "081234567890",
            email: "raihanfikrib@gmail.com",
            address: "Jl. Probolinggo No. 123",
            province: "Jawa Timur",
            city: "Probolinggo",
            photo: "https://man2kotaprobolinggo.sch.id/wp-content/uploads/2024/11/IMG_20241123_201600.jpg",
        }
   ]
}

const Pendaftaran = () => {
    const [allSelected, setAllSelected] = useState(false);
    const [selected, setSelected] = useState([]);

    const handleSelectAll = () => {
        setAllSelected(!allSelected);
        setSelected(allSelected ? [] : pendaftaran.data.map(item => item.id));
    }
   const handleSelectOne = (id) => {
        setSelected(prev => {
            return prev.includes(id)
                ? prev.filter(itemId => itemId !== id)
                : [...prev, id];
        });
    };

    useEffect(() => {
        if (selected.length === pendaftaran.data.length) {
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
                        {pendaftaran.data.map((item) => (
                            <tr key={item.id}>
                                <td><input type="checkbox" name="pendaftaran" className="checkbox" checked={selected.includes(item.id)} onChange={() => handleSelectOne(item.id)} /></td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                                <td>{item.tahap}</td>
                                <td>{item.nisn}</td>
                                <td>{item.gender}</td>
                                <td>{item.birthplace}</td>
                                <td>{new Date(item.birthdate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td>{item.province}</td>
                                <td><img src={item.photo} alt="photo" className="w-20 h-20 object-cover" /></td>
                                <td>
                                    <button className="btn btn-warning btn-xs">Edit</button>
                                    <button className="btn btn-error btn-xs">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <Pagination total={pendaftaran.total} page={pendaftaran.current_page} url={pendaftaran.path} />
            </form>
        </div>
    );
};

Pendaftaran.layout = (children) => <AdminLayout>{children}</AdminLayout>;
export default Pendaftaran;
