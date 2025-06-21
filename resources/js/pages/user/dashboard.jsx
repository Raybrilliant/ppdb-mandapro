import { Link } from "@inertiajs/react";
import UserLayout from "@/layouts/user-layout";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { regencies, provinces } from "@/components/geolocation";

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

function Dashboard({user,mapel}) {
    console.log(user);
    const [lengkap, setLengkap] = useState(false);
    const {data, setData} = useForm({
        grades: {
            1:{},
            2:{},
            3:{},
            4:{},
            5:{},
        },
    });

    console.log(data);

    // This useEffect populates the `data.grades` state initially
    useEffect(() => {
        if (user && user.reports) {
            const initialGrades = {
                1: {},
                2: {},
                3: {},
                4: {},
                5: {},
            };

            user.reports.forEach(report => {
                const semester = report.semester;
                const subjectId = report.subject_id;
                const grade = report.grade;

                // Ensure the semester property exists and is an object
                if (initialGrades[semester]) {
                    initialGrades[semester][subjectId] = grade;
                }
            });

            // Set the initial grades in the form data
            setData('grades', initialGrades);
        }

        if (user.user_detail && user.parents && user.reports && user.documents) {
            setLengkap(true);
        }

    }, [user]);
   
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
                            <img src={'/storage/' + user?.user_detail?.photo} alt="photo" className="w-[10em] h-[15em] object-cover object-center rounded " />
                            <div className="space-y-3">
                                <h2 className="card-title">{user?.name}</h2>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-semibold opacity-50">No Pendaftaran : {user?.id}</p>
                                    <p className="text-sm font-semibold opacity-50">Status : {lengkap ? <span className="text-green-600 font-bold">Lengkap</span> : <span className="text-red-600 font-bold">Belum Lengkap</span>}</p>
                                </div>
                                <Link href="/dashboard/profile/edit/1" className="btn btn-accent ">{lengkap ? 'Ubah Profil' : 'Lengkapi Profil'}</Link>
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
                                <p>{user?.user_detail?.nisn}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>No WhatsApp</p>
                                <p>{user?.user_detail?.phone}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Email</p>
                                <p>{user?.email}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Jenis Kelamin</p>
                                <p>{user?.user_detail?.gender}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Tempat Lahir</p>
                                <p>{user?.user_detail?.birth_place}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Tanggal Lahir</p>
                                <p>{new Date(user?.user_detail?.birth_date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Alamat</p>
                                <p className="uppercase">{user?.user_detail?.address}, {regencies.find(regency => regency.id == user?.user_detail?.city)?.name}, {provinces.find(province => province.id == user?.user_detail?.province)?.name}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Sekolah Asal</p>
                                <p>{user?.user_detail?.school}</p>
                            </div>
                        </div>
                        {/* Data Orang Tua */}
                        <div className="space-y-2">
                            <h2 className="card-title">Data Orang Tua</h2>
                            <div className="flex items-center justify-between gap-2">
                                <p>Nama Ayah</p>
                                <p>{user?.parents?.dad_name}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between gap-2">
                                <p>No WhatsApp Ayah</p>
                                <p>{user?.parents?.dad_phone}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between gap-2">
                                <p>Pekerjaan Ayah</p>
                                <p>{user?.parents?.dad_job}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between gap-2">
                                <p>Nama Ibu</p>
                                <p>{user?.parents?.mom_name}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between gap-2">
                                <p>No WhatsApp Ibu</p>
                                <p>{user?.parents?.mom_phone}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between gap-2">
                                <p>Pekerjaan Ibu</p>
                                <p>{user?.parents?.mom_job}</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between gap-2">
                                <p>Penghasilan Orangtua</p>
                                <p>{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(user?.parents?.monthly_salary)}</p>
                            </div>
                        </div>
                        {/* Document */}
                        <section className="flex gap-2">
                            <a href={'/storage/' + user?.documents?.raport} target="_blank" rel="noopener noreferrer" disabled={!user?.documents?.raport} className="btn btn-primary">Raport</a>
                            <a href={'/storage/' + user?.documents?.kartu_keluarga} target="_blank" rel="noopener noreferrer" disabled={!user?.documents?.kartu_keluarga} className="btn btn-primary">Kartu Keluarga</a>
                            <a href={'/storage/' + user?.documents?.sertifikat_lomba} target="_blank" rel="noopener noreferrer" disabled={!user?.documents?.sertifikat_lomba} className="btn btn-primary">Prestasi</a>
                        </section>
                    </div>
                </div>
            </div>
            {/* Raport & Prestasi */}
            <div className="card outline outline-black my-10">
                <div className="p-5">
                    <h2 className="card-title">Raport</h2>
                    <table className=" table table-zebra">
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
                            {mapel.map((mapel, index) => (
                                <tr key={index}>
                                    <td>{mapel.name}</td>
                                    {[1,2,3,4,5].map((semester) => (
                                        <td key={semester}>{data.grades[semester][mapel.id]}</td>
                                    ))}
                                    <td>
                                        {(() => {
                                            const gradesForSubject = [
                                                data.grades[1]?.[mapel.id],
                                                data.grades[2]?.[mapel.id],
                                                data.grades[3]?.[mapel.id],
                                                data.grades[4]?.[mapel.id],
                                                data.grades[5]?.[mapel.id]
                                            ];
                                            const validGrades = gradesForSubject
                                                .filter(grade => grade !== undefined && grade !== null && grade !== '')
                                                .map(grade => parseFloat(grade));

                                            if (validGrades.length > 0) {
                                                const sum = validGrades.reduce((acc, current) => acc + current, 0);
                                                return Math.round(sum / validGrades.length);
                                            } else {
                                                return 'N/A';
                                            }
                                        })()}
                                    </td>
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
                            <li key={item.id} className={"step" + (item.id <= user?.user_detail?.tahap ? " step-neutral" : "")}>{item.name}</li>
                        ))}
                    </ul>
                    {user?.user_detail?.status == 2 ? (
                        <div role="alert" className="alert alert-error mt-5">
                            <span>Mohon Maaf ! <span className="font-bold">{user?.name}</span> Anda tidak lolos Tahap {tahap?.find((item) => item.id === user?.user_detail?.tahap)?.name}</span>
                        </div>
                    ) : (
                        user?.user_detail?.status == 1 ? (
                            <div role="alert" className="alert alert-success mt-5">
                                <span>Selamat ! <span className="font-bold">{user?.name}</span> Anda berhasil lolos {tahap?.find((item) => item.id === user?.user_detail?.tahap)?.name}</span>
                            </div>
                        ) : null
                    )}
                </div>
            </div>
        </div>
    );
}

Dashboard.layout = (page) => <UserLayout>{page}</UserLayout>;
export default Dashboard;
