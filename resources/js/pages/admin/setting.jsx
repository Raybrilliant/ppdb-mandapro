import AdminLayout from "@/layouts/admin-layout";
import { Link } from "@inertiajs/react";
import { Plus } from "lucide-react";

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
const Setting = ({levels, testimonis, programs, faqs, subjects}) => {
    console.log(levels);
    
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
                        <th>No</th>
                        <th>Pengumuman</th>
                        <th>Tahap</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {levels.map((item, index) => (
                        item.announcement ? (
                            <tr key={item.announcement?.id}>
                                <td>{index + 1}</td>
                                <td className="w-1/2">{item.announcement?.content}</td>
                                <td>{ item.name}</td>
                                <td><Link href={`/admin/setting/pengumuman/${item.announcement?.id}`} className="btn btn-warning btn-xs">Edit</Link></td>
                            </tr>
                        ) : null
                    ))}
                </tbody>
            </table>
            </div>
            <hr />
            {/* Tahap */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Tahap</h2>
                <Link href="/admin/setting/tahapan" className="btn btn-neutral btn-sm"><Plus/> Tambah Tahap</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {levels.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="w-1/2">{item.name}</td>
                            <td><Link href={`/admin/setting/tahapan/${item.id}`} className="btn btn-warning btn-xs">Edit</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <hr />
            {/* Mapel */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Mapel</h2>
                <Link href="/admin/setting/mapel" className="btn btn-neutral btn-sm"><Plus/> Tambah Mapel</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="w-1/2">{item.name}</td>
                            <td><Link href={`/admin/setting/mapel/${item.id}`} className="btn btn-warning btn-xs">Edit</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <hr />

            {/* Testimoni */}
            {/* <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Testimoni</h2>
                <Link href="/admin/setting/testimoni" className="btn btn-neutral btn-sm"><Plus/> Tambah Testimoni</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                <thead>
                    <tr>
                        <th>No</th>
                        <th>Testimoni</th>
                        <th>Deskripsi</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {testimonis.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <button className="btn btn-warning btn-xs">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <hr /> */}
            {/* Program */}
            {/* <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Program</h2>
                <Link href="/admin/setting/program" className="btn btn-neutral btn-sm"><Plus/> Tambah Program</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                <thead>
                    <tr>
                        <th>No</th>
                        <th>Program</th>
                        <th>Deskripsi</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {programs.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <button className="btn btn-warning btn-xs">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <hr /> */}
            {/* FAQ */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">FAQ</h2>
                <Link href="/admin/setting/faq" className="btn btn-neutral btn-sm"><Plus/> Tambah FAQ</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                <thead>
                    <tr>
                        <th>No</th>
                        <th>Pertanyaan</th>
                        <th>Jawaban</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {faqs.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.question}</td>
                            <td>{item.answer}</td>
                            <td>
                                <Link href={`/admin/setting/faq/${item.id}`} className="btn btn-warning btn-xs">Edit</Link>
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
