import { Link } from "@inertiajs/react";
import UserLayout from "@/layouts/user-layout";

const myData = {
    name: 'Raihan Fikri Brilliansyach',
    id: '1234567890',
    nisn: '1234567890',
    gender: 'Laki-laki',
    birthplace: 'Probolinggo',
    birthdate: '2007-06-14',
    phone: '081234567890',
    email: 'raihanfikrib@gmail.com',
    address: 'Jl. Probolinggo No. 123',
    province: 'Jawa Timur',
    city: 'Probolinggo',
    photo: 'https://man2kotaprobolinggo.sch.id/wp-content/uploads/2024/11/IMG_20241123_201600.jpg',
    status: true,
    tahap: 2,
}

const parentData = {
    fatherName : "Budi Setiawan",
    motherName : "Siti Aminah",
    fatherPhone : "081234567890",
    motherPhone : "081234567890",
    fatherJob : "PNS",
    motherJob : "Ibu Rumah Tangga",
    fatherSalary : 5000000,
    motherSalary : 5000000,
}

const schoolData = {
    name: 'MTsN Kota Probolinggo',
    address: 'Jl. Probolinggo No. 123',
    city: 'Probolinggo',
    province: 'Jawa Timur',
}

const raport = [
    {
        name: 'Matematika',
        semester1: 82,
        semester2: 85,
        semester3: 88,
        semester4: 90,
        semester5: 92,
    },
    {
        name: 'Bahasa Indonesia',
        semester1: 78,
        semester2: 80,
        semester3: 82,
        semester4: 84,
        semester5: 86,
    },
    {
        name: 'Bahasa Inggris',
        semester1: 75,
        semester2: 77,
        semester3: 79,
        semester4: 81,
        semester5: 83,
    },
]

const prestasi = [
    {
        title: 'Juara 1 Olimpiade Matematika',
        type: 'Nasional',
        year: 2024,
    },
    {
        title: 'Juara 2 Olimpiade Bahasa Indonesia',
        type: 'Nasional',
        year: 2024,
    },
    {
        title: 'Juara 3 Olimpiade Bahasa Inggris',
        type: 'Nasional',
        year: 2024,
    },
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

function Dashboard() {
    return (
        <div>
            {/* Pengumuman */}
            <div className="alert alert-warning text-center">
                <p className="text-sm font-semibold">Pengumuman |</p>
                <p>Pengumpulan berkas dapat dilakukan di MAN 2 Kota Probolinggo mulai tanggal <span className="font-bold">10-12 Juli 2025 Pukul 08.00 - 11.30 WIB</span></p>
            </div>
            <h1 className="text-2xl font-bold my-10">Detail Pendaftar</h1>
            <div className=" card outline outline-black my-10">
                <div className="p-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <img src={myData.photo} alt="photo" className="w-[10em] h-[15em] object-cover object-center rounded " />
                            <div className="space-y-3">
                                <h2 className="card-title">{myData.name}</h2>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-semibold opacity-50">No Pendaftaran : {myData.id}</p>
                                    <p className="text-sm font-semibold opacity-50">Status : <span className="text-red-600 font-bold">Belum Lengkap</span></p>
                                </div>
                                <Link href="/dashboard/profile" className="btn btn-accent ">Lengkapi Profil</Link>
                            </div>
                        </div>
                    </div>
                    {/* Data Detail */}
                    <div className="grid grid-cols-2 gap-5 my-5">
                        {/* Data Pribadi */}
                        <div className="space-y-2">
                            <h2 className="card-title">Data Pribadi</h2>
                            <div className="flex items-center justify-between">
                                <p>NISN</p>
                                <p>{myData.nisn}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>No WhatsApp</p>
                                <p>{myData.phone}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Email</p>
                                <p>{myData.email}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Jenis Kelamin</p>
                                <p>{myData.gender}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Tempat Lahir</p>
                                <p>{myData.birthplace}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Tanggal Lahir</p>
                                <p>{new Date(myData.birthdate).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Alamat</p>
                                <p>{myData.address}, {myData.city}, {myData.province}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Sekolah Asal</p>
                                <p>{schoolData.name}</p>
                            </div>
                        </div>
                        {/* Data Orang Tua */}
                        <div className="space-y-2">
                            <h2 className="card-title">Data Orang Tua</h2>
                            <div className="flex items-center justify-between gap-2">
                                <p>Nama Ayah</p>
                                <p>{parentData.fatherName}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between gap-2">
                                <p>No WhatsApp Ayah</p>
                                <p>{parentData.fatherPhone}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between gap-2">
                                <p>Pekerjaan Ayah</p>
                                <p>{parentData.fatherJob}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between gap-2">
                                <p>Nama Ibu</p>
                                <p>{parentData.motherName}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between gap-2">
                                <p>No WhatsApp Ibu</p>
                                <p>{parentData.motherPhone}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between gap-2">
                                <p>Pekerjaan Ibu</p>
                                <p>{parentData.motherJob}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between gap-2">
                                <p>Penghasilan Orangtua</p>
                                <p>{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(parentData.fatherSalary + parentData.motherSalary)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Raport & Prestasi */}
            <div className="card outline outline-black my-10">
                <div className="p-5">
                    <h2 className="card-title">Raport</h2>
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>Mapel</th>
                                <th>Semester 1</th>
                                <th>Semester 2</th>
                                <th>Semester 3</th>
                                <th>Semester 4</th>
                                <th>Semester 5</th>
                                <th>Rata-Rata</th>
                            </tr>
                        </thead>
                        <tbody>
                            {raport.map((raport, index) => (
                                <tr key={index}>
                                    <td>{raport.name}</td>
                                    <td>{raport.semester1}</td>
                                    <td>{raport.semester2}</td>
                                    <td>{raport.semester3}</td>
                                    <td>{raport.semester4}</td>
                                    <td>{raport.semester5}</td>
                                    <td>{Math.round((raport.semester1 + raport.semester2 + raport.semester3 + raport.semester4 + raport.semester5) / 5)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h2 className="card-title mt-5">Prestasi</h2>
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>Tingkat</th>
                                <th>Prestasi</th>
                                <th>Tahun</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prestasi.map((prestasi, index) => (
                                <tr key={index}>
                                    <td>{prestasi.type}</td>
                                    <td>{prestasi.title}</td>
                                    <td>{prestasi.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Progress */}
            <div className="card outline outline-black my-10">
                <div className="p-5">
                    <h2 className="card-title">Progress Pendaftaran</h2>
                    <ul className="steps w-full">
                        {tahap.map((item) => (
                            <li key={item.id} className={"step" + (item.id <= myData.tahap ? " step-neutral" : "")}>{item.name}</li>
                        ))}
                    </ul>
                    {myData.status ? (
                        <div role="alert" className="alert alert-success mt-5">
                            <span>Selamat ! <span className="font-bold">{myData.name}</span> Anda berhasil lolos {tahap.find((item) => item.id === myData.tahap).name}</span>
                        </div>
                    ) : (
                        <div role="alert" className="alert alert-error mt-5">
                            <span>Mohon Maaf ! <span className="font-bold">{myData.name}</span> Anda tidak lolos Tahap {tahap.find((item) => item.id === myData.tahap).name}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

Dashboard.layout = (page) => <UserLayout>{page}</UserLayout>;
export default Dashboard;
