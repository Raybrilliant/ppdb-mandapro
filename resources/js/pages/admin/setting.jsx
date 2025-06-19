import AdminLayout from "@/layouts/admin-layout";
import { Link } from "@inertiajs/react";
import { Plus } from "lucide-react";

const pengumuman = [
    {
        id: 1,
        name: "Siswa yang lolos dapat melakukan pendaftaraan ulang melalui link berikut https://man2kotaprobolinggo.sch.id/pendaftaran",
        tahap: 1,
    }
]

const tahap = [
    {
        id: 1,
        tahap: 1,
        name: "Verifikasi Berkas",
    },
    {
        id: 2,
        tahap: 2,
        name: "Seleksi Online",
    },
    {
        id: 3,
        tahap: 3,
        name: "Seleksi Offline",
    },
]
const testimoni = [
    {
        id: 1,
        name: "Raihan Fikri Brilliansyach",
        description: "Sekolah yang bagus",
    },
]
const program = [
    {
        id: 1,
        name: "Program A",
        description: "Siswa yang lolos asadadas asdasd ",
    }
]
const faq = [
    {
        id: 1,
        question: "Apakah orangtua dapat mengajukan pendaftaran ulang?",
        answer: "Siswa yang lolos dapat melakukan pendaftaraan ulang melalui link berikut https://man2kotaprobolinggo.sch.id/pendaftaran",
    }
]
const Setting = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Setting</h1>
            {/* Pengumuman */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Pengumuman</h2>
                <Link href="/admin/setting/pengumuman" className="btn btn-neutral btn-sm"><Plus/> Tambah Pengumuman</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                <thead>
                    <tr>
                        <th>Pengumuman</th>
                        <th>Tahap</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {pengumuman.map((item) => (
                        <tr key={item.id}>
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
            <hr />
            {/* Tahap */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Tahap</h2>
                <Link href="/admin/setting/tahap" className="btn btn-neutral btn-sm"><Plus/> Tambah Tahap</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                <thead>
                    <tr>
                        <th>Tahap</th>
                        <th>Nama</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {tahap.map((item) => (
                        <tr key={item.id}>
                            <td>{item.tahap}</td>
                            <td className="w-1/2">{item.name}</td>
                            <td>
                                <button className="btn btn-warning btn-xs">Edit</button>
                                <button className="btn btn-error btn-xs">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <hr />
            {/* Testimoni */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Testimoni</h2>
                <Link href="/admin/setting/testimoni" className="btn btn-neutral btn-sm"><Plus/> Tambah Testimoni</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                <thead>
                    <tr>
                        <th>Testimoni</th>
                        <th>Deskripsi</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {testimoni.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <button className="btn btn-warning btn-xs">Edit</button>
                                <button className="btn btn-error btn-xs">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <hr />
            {/* Program */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Program</h2>
                <Link href="/admin/setting/program" className="btn btn-neutral btn-sm"><Plus/> Tambah Program</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                <thead>
                    <tr>
                        <th>Program</th>
                        <th>Deskripsi</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {program.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <button className="btn btn-warning btn-xs">Edit</button>
                                <button className="btn btn-error btn-xs">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <hr />
            {/* FAQ */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">FAQ</h2>
                <Link href="/admin/setting/faq" className="btn btn-neutral btn-sm"><Plus/> Tambah FAQ</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                <thead>
                    <tr>
                        <th>Pertanyaan</th>
                        <th>Jawaban</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {faq.map((item) => (
                        <tr key={item.id}>
                            <td>{item.question}</td>
                            <td>{item.answer}</td>
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

Setting.layout = (children) => <AdminLayout>{children}</AdminLayout>;

export default Setting;
