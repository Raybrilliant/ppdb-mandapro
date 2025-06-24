import { Link } from "@inertiajs/react";
import UserLayout from "@/layouts/user-layout";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { regencies, provinces } from "@/components/geolocation";

function Dashboard({user,mapel,tahap}) {
    console.log(user.nomor_pendaftaran);
    const [lengkap, setLengkap] = useState(false);
    const {data, setData, put, processing} = useForm({
        grades: {
            1:{},
            2:{},
            3:{},
            4:{},
            5:{},
        },
    });

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

        if (user.type == 'prestasi') {
            if (user.user_detail && user.parents && user.reports.length > 0 && user.documents && user.achievements) {
                setLengkap(true);
            } else {
                setLengkap(false);
            }
        } else {
            if (user.user_detail && user.parents && user.reports.length > 0 && user.documents) {
                setLengkap(true);
            } else {
                setLengkap(false);
            }
        }

    }, [user]);

    const handleValidate = () => {
        if (!lengkap) {
            alert('Data tidak lengkap');
            return;
        }
        put('/dashboard/validate/' + user.user_detail.id, {
            onSuccess: () => {
                alert('Data berhasil Dikirim');
            },
        });
    }

    const announcement = (tahap) => {

        let announcement = null;
        tahap.map((item) => {
            if (!item?.announcement) {
                return null;
            }
            if (item.level == user?.user_detail?.tahap) {
                announcement = (
                    <div className="alert alert-warning text-center my-2" key={item?.announcement?.id}>
                        <p className="text-sm font-semibold">Pengumuman |</p>
                        <p>{item?.announcement?.content}</p>
                    </div>
                )
            }
        })
        return announcement;
    }

    return (
        <div>
            {/* Pengumuman */}
            {announcement(tahap)}
            <h1 className="text-2xl font-bold my-10">Detail Pendaftar</h1>
            <div className=" card outline outline-black my-10">
                <div className="p-5">
                    <div className="flex items-center justify-between">
                        <div className="flex max-sm:flex-col items-center gap-5">
                            <img src={'/storage/' + user?.user_detail?.photo} alt="photo" className="w-[10em] h-[15em] object-cover object-center rounded " />
                            <div className="space-y-3">
                                <h2 className="card-title">{user?.name}</h2>
                                <div className="flex max-sm:flex-col items-center gap-2">
                                    <p className="text-sm font-semibold opacity-50">No Pendaftaran : {user?.nomor_pendaftaran}</p>
                                    <p className="text-sm font-semibold opacity-50">Status : {lengkap ? <span className="text-green-600 font-bold">Lengkap</span> : <span className="text-red-600 font-bold">Belum Lengkap</span>}</p>
                                </div>
                                <div className="flex max-sm:flex-col items-center gap-2">
                                    <Link href="/dashboard/profile/edit" className="btn btn-accent " disabled={user?.user_detail?.validated}>{lengkap ? 'Ubah Profil' : 'Lengkapi Profil'}</Link>
                                    <button className="btn btn-warning" onClick={handleValidate} disabled={processing || user?.user_detail?.validated}>{processing ? 'Sedang Mengirim..' : 'Kirim Validasi'}</button>
                                    <button onClick={()=>print()} className="btn btn-accent" hidden={!user?.user_detail?.validated}>Cetak Bukti Pendaftaran</button>
                                </div>
                                <div className="alert alert-warning"><b>Perhatian !</b> Jika status sudah lengkap maka silahkan kirim validasi. Setelah mengirim validasi, data tidak dapat diubah lagi !</div>
                            </div>
                        </div>
                    </div>
                    {/* Data Detail */}
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:text-sm gap-5 my-5">
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
                                <p className="capitalize">{user?.user_detail?.gender}</p>
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
                                <p className="uppercase max-sm:ms-8">{user?.user_detail?.address}, {regencies.find(regency => regency.id == user?.user_detail?.city)?.name}, {provinces.find(province => province.id == user?.user_detail?.province)?.name}</p>
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
                        <section className="flex max-sm:flex-col gap-2">
                            <a href={'/storage/' + user?.documents?.raport} target="_blank" rel="noopener noreferrer" disabled={!user?.documents?.raport} className="btn btn-primary">Raport</a>
                            <a href={'/storage/' + user?.documents?.kartu_keluarga} target="_blank" rel="noopener noreferrer" disabled={!user?.documents?.kartu_keluarga} className="btn btn-primary">Kartu Keluarga</a>
                            <a href={'/storage/' + user?.documents?.sertifikat_lomba} target="_blank" rel="noopener noreferrer" disabled={!user?.documents?.sertifikat_lomba} className="btn btn-primary">Prestasi</a>
                        </section>
                    </div>
                </div>
            </div>
            {/* Raport */}
            <div className="card outline outline-black my-10">
                <div className="p-5">
                    <h2 className="card-title">Raport</h2>
                    <div className=" overflow-auto">
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
                    </div>
                    {/* Prestasi */}
                    <h2 className="card-title mt-5">Prestasi</h2>
                    {user.achievements ? (
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>Tingkat</th>
                                    <th>Prestasi</th>
                                    <th>Tahun</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="capitalize">{user?.achievements?.level}</td>
                                    <td className="capitalize">{user?.achievements?.name}</td>
                                    <td>{user?.achievements?.year}</td>
                                </tr>
                            </tbody>
                        </table>):(<p>Tidak ada prestasi</p>)}
                </div>
            </div>
            {/* Progress */}
            <div className="card outline outline-black my-10">
                <div className="p-5">
                    <h2 className="card-title">Progress Pendaftaran</h2>
                    <ul className="steps w-full">
                        {tahap?.map((item) => (
                            <li key={item.id} className={"step" + (item.level <= user?.user_detail?.tahap ? " step-neutral" : "")}>{item.name}</li>
                        ))}
                    </ul>
                    {user?.user_detail?.status == 2 ? (
                        <div role="alert" className="alert alert-error mt-5">
                            <span>Mohon Maaf ! <span className="font-bold">{user?.name}</span> Anda tidak lolos Tahap {tahap.find((item) => item.level == user?.user_detail?.tahap)?.name} dengan alasan {user?.user_detail?.message}</span>
                        </div>
                    ) : (
                        user?.user_detail?.status == 1 ? (
                            <div role="alert" className="alert alert-success mt-5">
                                <span>Selamat ! <span className="font-bold">{user?.name}</span> Anda berhasil lolos {tahap.find((item) => item.level == user?.user_detail?.tahap)?.name}</span>
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
