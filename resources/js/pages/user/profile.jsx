import UserLayout from "@/layouts/user-layout";
import { Link, useForm } from "@inertiajs/react";
import { provinces, regencies, districts, villages } from "@/components/geolocation";
import { useState } from "react";
import { useEffect } from "react";

function Profile({user,mapel}) {
    const [provinceData, setProvinceData] = useState([]);
    const [cityData, setCityData] = useState([]);
    const [districtData, setDistrictData] = useState([]);
    const [villageData, setVillageData] = useState([]);
    const [province_id, setProvinceId] = useState(user?.user_detail?.province);
    const [city_id, setCityId] = useState(user?.user_detail?.city);
    const [district_id, setDistrictId] = useState(user?.user_detail?.district);
    const [village_id, setVillageId] = useState(user?.user_detail?.village);

    // console.log(user);

    const {data,setData,post,put,processing} = useForm({
        name:user?.name,
        nisn:user?.user_detail?.nisn,
        gender:user?.user_detail?.gender,
        birthplace:user?.user_detail?.birth_place,
        birthdate:user?.user_detail?.birth_date,
        phone:user?.user_detail?.phone,
        email:user?.email,
        address:user?.user_detail?.address,
        province:user?.user_detail?.province,
        city:user?.user_detail?.city,
        district:user?.user_detail?.district,
        village:user?.user_detail?.village,
        photo:null,
        school:user?.user_detail?.school,

        // Data Orang Tua
        father_name:user?.parents?.dad_name,
        mother_name:user?.parents?.mom_name,
        father_phone:user?.parents?.dad_phone,
        mother_phone:user?.parents?.mom_phone,
        father_job:user?.parents?.dad_job,
        mother_job:user?.parents?.mom_job,
        wali_name:user?.parents?.wali_name,
        wali_phone:user?.parents?.wali_phone,
        wali_job:user?.parents?.wali_job,
        monthly_salary:user?.parents?.monthly_salary,

        // Data Raport
        grades:{
            1:{},
            2:{},
            3:{},
            4:{},
            5:{},
        },

        // Data Dokumen
        raport:null,
        kartu_keluarga:null,
        sertifikat_lomba:null,
    });

    console.log(data);
    
    // Input Data Diri
    const handleSubmitProfile = (e) => {
    e.preventDefault();
    if (user?.user_detail?.id) {
        post('/dashboard/profile/' + user?.user_detail?.id,{
            onSuccess: () => {
                alert('Data berhasil disimpan');
            },
        });
    } else {
        post('/dashboard/profile',{
            onSuccess: () => {
                alert('Data berhasil disimpan');
            },
        });
    }
}

// Input Data Orang Tua
const handleSubmitParents = (e) => {
    e.preventDefault();
    if (user?.parents?.id) {
        put('/dashboard/profile/parents/' + user?.parents?.id,{
            onSuccess: () => {
                alert('Data berhasil disimpan');
            },
        });
    } else {
        post('/dashboard/profile/parents',{
            onSuccess: () => {
                alert('Data berhasil disimpan');
            },
        });
    }
}

// Input Data Raport
const handleSubmitRaport = (e) => {
    e.preventDefault();
    if (user?.raport?.id) {
        put('/dashboard/profile/reports/' + user?.raport?.id,{
            onSuccess: () => {
                alert('Data berhasil disimpan');
            },
        });
    } else {
        post('/dashboard/profile/reports',{onSuccess: () => {
            alert('Data berhasil disimpan');
        }});
    }
}

// Input Data Dokumen
const handleSubmitDocument = (e) => {
    e.preventDefault();
    if (user?.documents?.id) {
        post('/dashboard/profile/document/' + user?.documents?.id,{
            onSuccess: () => {
                alert('Data berhasil disimpan');
            },
        });
    } else {
        post('/dashboard/profile/document',{onSuccess: () => {
            alert('Data berhasil disimpan');
        }});
    }
}
    
    useEffect(() => {
        const fetchProvince = () => {
            try {
                const response = provinces;
                setProvinceData(response);
            } catch (error) {
                setError(error);
            }
        }

        const fetchCity = () => {
            try {
                const response = regencies.filter((item) => item.province_id == province_id);
                setCityData(response);
            } catch (error) {
                setError(error);
            }
        }

        const fetchDistrict = () => {
            try {
                const response = districts.filter((item) => item.regency_id == city_id);
                setDistrictData(response);
            } catch (error) {
                setError(error);
            }
        }

        const fetchVillage = () => {
            try {
                const response = villages.filter((item) => item.district_id == district_id);
                setVillageData(response);
            } catch (error) {
                setError(error);
            }
        }

        if (province_id) {
            fetchCity();
        }

        if (city_id) {
            fetchDistrict();
        }

        if (district_id) {
            fetchVillage();
        }

        fetchProvince();
    }, [province_id, city_id, district_id, village_id]);

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
    }, [user]);

    return (
        <div>
            {/* Input Detail Data Diri */}
            <section className="card outline outline-black">
                <Link href="/dashboard/1" className="btn btn-primary w-fit m-2">Kembali</Link>
                <div className="p-5">
                    <h1 className="text-xl font-bold mb-5">Detail Data Diri</h1>
                    <form onSubmit={handleSubmitProfile}>
                        <div className="grid grid-cols-2 gap-5">
                            {user?.user_detail?.id ? (
                            <>
                            <div>
                                <label htmlFor="name">Nama</label>
                                <input type="text" id="name" name="name" defaultValue={data.name} onChange={(e) => setData('name', e.target.value)} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" defaultValue={data.email} onChange={(e) => setData('email', e.target.value)} className="input input-bordered w-full" required />
                            </div>
                            </>
                            ) : null
                            }
                            <div>
                                <label htmlFor="nisn">NISN</label>
                                <input type="text" id="nisn" name="nisn" defaultValue={data.nisn} onChange={(e) => setData('nisn', e.target.value)} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="phone">No. WhatsApp</label>
                                <input type="tel" id="phone" name="phone" defaultValue={data.phone} onChange={(e) => setData('phone', e.target.value)} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="birthplace">Tempat Lahir</label>
                                <input type="text" id="birthplace" name="birthplace" defaultValue={data.birthplace} onChange={(e) => setData('birthplace', e.target.value)} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="birthdate">Tanggal Lahir</label>
                                <input type="date" id="birthdate" name="birthdate" defaultValue={data.birthdate} onChange={(e) => setData('birthdate', e.target.value)} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="gender">Jenis Kelamin</label>
                                <select name="gender" id="gender" defaultValue={data.gender} onChange={(e) => setData('gender', e.target.value)} className="select select-bordered w-full" required>
                                    <option value="">Pilih Jenis Kelamin</option>
                                    <option value="laki-laki">Laki-laki</option>
                                    <option value="perempuan">Perempuan</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="address">Alamat</label>
                                <input type="text" id="address" name="address" defaultValue={data.address} onChange={(e) => setData('address', e.target.value)} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="province">Provinsi</label>
                                <select name="province" id="province" value={data.province} onChange={(e) => {setProvinceId(e.target.value), setData('province', e.target.value)}} className="select select-bordered w-full" required>
                                    <option value="">Pilih Provinsi</option>
                                    {provinceData.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="city">Kota</label>
                                <select name="city" id="city" value={data.city} onChange={(e) => {setCityId(e.target.value), setData('city', e.target.value)}} className="select select-bordered w-full" required>
                                    <option value="">Pilih Kota</option>
                                    {cityData.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="district">Kecamatan</label>
                                <select name="district" id="district" value={data.district} onChange={(e) => {setDistrictId(e.target.value), setData('district', e.target.value)}} className="select select-bordered w-full" required>
                                    <option value="">Pilih Kecamatan</option>
                                    {districtData.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="village">Kelurahan</label>
                                <select name="village" id="village" value={data.village} onChange={(e) => {setVillageId(e.target.value), setData('village', e.target.value)}} className="select select-bordered w-full" required>
                                    <option value="">Pilih Desa</option>
                                    {villageData.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="photo">Foto</label>
                                <input type="file" id="photo" name="photo" accept="image/jpeg" onChange={(e) => {setData('photo', e.target.files[0])}} className="file-input file-input-bordered w-full" />
                                <p className="text-sm text-gray-500">Foto ukuran 3x4 background merah format file .jpg</p>
                            </div>
                            <div>
                                <label htmlFor="school">Asal Sekolah</label>
                                <input type="text" id="school" name="school" defaultValue={data.school} onChange={(e) => {setData('school', e.target.value)}} className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="btn bg-emerald-600 text-white px-10 rounded-full mt-5" disabled={processing}>{processing ? 'Proses...' : 'Simpan'}</button>
                        </div>
                    </form>
                </div>
            </section>
            {/* Input Data Orang Tua */}
            <section className="card outline outline-black my-10">
                <div className="p-5">
                    <h1 className="text-xl font-bold mb-5">Data Orang Tua</h1>
                    <div className=" alert alert-info mb-5">Jika tidak ada data orang tua atau wali dapat di isi dengan tanda "-"</div>

                    <form onSubmit={handleSubmitParents}>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="father_name">Nama Ayah</label>
                                <input type="text" id="father_name" name="father_name" defaultValue={data.father_name} onChange={(e) => {setData('father_name', e.target.value)}} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="mother_name">Nama Ibu</label>
                                <input type="text" id="mother_name" name="mother_name" defaultValue={data.mother_name} onChange={(e) => {setData('mother_name', e.target.value)}} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="father_phone">No. WhatsApp Ayah</label>
                                <input type="tel" id="father_phone" name="father_phone" defaultValue={data.father_phone} onChange={(e) => {setData('father_phone', e.target.value)}} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="mother_phone">No. WhatsApp Ibu</label>
                                <input type="tel" id="mother_phone" name="mother_phone" defaultValue={data.mother_phone} onChange={(e) => {setData('mother_phone', e.target.value)}} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="father_job">Pekerjaan Ayah</label>
                                <input type="text" id="father_job" name="father_job" defaultValue={data.father_job} onChange={(e) => {setData('father_job', e.target.value)}} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="mother_job">Pekerjaan Ibu</label>
                                <input type="text" id="mother_job" name="mother_job" defaultValue={data.mother_job} onChange={(e) => {setData('mother_job', e.target.value)}} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="wali_name">Nama Wali</label>
                                <input type="text" id="wali_name" name="wali_name" defaultValue={data.wali_name} onChange={(e) => {setData('wali_name', e.target.value)}} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="wali_phone">No. WhatsApp Wali</label>
                                <input type="tel" id="wali_phone" name="wali_phone" defaultValue={data.wali_phone} onChange={(e) => {setData('wali_phone', e.target.value)}} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="wali_job">Pekerjaan Wali</label>
                                <input type="text" id="wali_job" name="wali_job" defaultValue={data.wali_job} onChange={(e) => {setData('wali_job', e.target.value)}} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="monthly_salary">Penghasilan Bulanan Orang Tua / Wali</label>
                                <input type="number" id="monthly_salary" name="monthly_salary" defaultValue={data.monthly_salary} onChange={(e) => {setData('monthly_salary', e.target.value)}} className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="btn bg-emerald-600 text-white px-10 rounded-full mt-5" disabled={processing}>{processing ? 'Proses...' : 'Simpan'}</button>
                        </div>
                    </form>
                </div>
            </section>
            {/* Data Raport */}
            <section className="card outline outline-black my-10">
                <div className="p-5">
                    <h1 className="text-xl font-bold mb-5">Data Raport</h1>
                    <div className=" alert alert-info mb-5">Jika tidak memiliki nilai dapat di isi 0</div>
                    <form onSubmit={handleSubmitRaport}>
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>Mata Pelajaran</th>
                                    <th>Semester 1</th>
                                    <th>Semester 2</th>
                                    <th>Semester 3</th>
                                    <th>Semester 4</th>
                                    <th>Semester 5</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mapel.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        {[1, 2, 3, 4, 5].map((semesterNum) => (
                                            <td key={`${item.id}-${semesterNum}`}>
                                                <input
                                                    type="number"
                                                    max={100}
                                                    min={0}
                                                    value={data.grades[semesterNum]?.[item.id] || ''}
                                                    onChange={(e) => setData(`grades.${semesterNum}.${item.id}`, e.target.value)}
                                                    className="input input-bordered w-full"
                                                    required
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-end">
                            <button type="submit" className="btn bg-emerald-600 text-white px-10 rounded-full mt-5" disabled={processing}>
                                {processing ? 'Proses...' : 'Simpan'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            {/* Upload Dokumen */}
            <section className="card outline outline-black my-10">
                <div className="p-5">
                    <h1 className="text-xl font-bold mb-5">Upload Dokumen</h1>
                    <form onSubmit={handleSubmitDocument}>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="raport">Raport</label>
                                <input type="file" id="raport" name="raport" accept="application/pdf" onChange={(e) => setData('raport', e.target.files[0])} className="file-input file-input-bordered w-full" />
                                <p className="text-sm text-gray-500">File dijadikan 1 PDF</p>
                            </div>
                            <div>
                                <label htmlFor="kartu_keluarga">Kartu Keluarga</label>
                                <input type="file" id="kartu_keluarga" name="kartu_keluarga" accept="application/pdf" onChange={(e) => setData('kartu_keluarga', e.target.files[0])} className="file-input file-input-bordered w-full" />
                                <p className="text-sm text-gray-500">Format file: PDF, Max. 5MB</p>
                            </div>
                            <div>
                                <label htmlFor="sertifikat_lomba">Sertifikat Lomba (Jika Ada)</label>
                                <input type="file" id="sertifikat_lomba" name="sertifikat_lomba" accept="application/pdf" onChange={(e) => setData('sertifikat_lomba', e.target.files[0])} className="file-input file-input-bordered w-full" />
                                <p className="text-sm text-gray-500">File dijadikan 1 PDF</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="btn bg-emerald-600 text-white px-10 rounded-full mt-5" disabled={processing}>{processing ? 'Proses...' : 'Simpan'}</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

Profile.layout = (page) => <UserLayout>{page}</UserLayout>;
export default Profile;
