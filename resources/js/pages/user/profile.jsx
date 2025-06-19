import UserLayout from "@/layouts/user-layout";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const fetchAddress = async (endpoint) => {
    const response = await axios.get('/api/address/' + endpoint);
    return response.data ?? [];
}

const mapel = [
    {
        id: 1,
        name: 'Matematika',
    },
    {
        id: 2,
        name: 'Bahasa Indonesia',
    },
    {
        id: 3,
        name: 'Bahasa Inggris',
    },
    {
        id: 4,
        name: 'IPS',
    },
    {
        id: 5,
        name: 'IPS',
    },
    {
        id: 6,
        name: 'Pendidikan Agama Islam',
    },
    {
        id: 7,
        name: 'Qurdis',
    },
    {
        id: 8,
        name: 'Akidah Akhlak',
    },
    {
        id: 9,
        name: 'Fikih',
    },
    {
        id: 10,
        name: 'SKI',
    },
]

function Profile() {
    const [province, setProvince] = useState([]);
    const [city, setCity] = useState([]);
    const [district, setDistrict] = useState([]);
    const [village, setVillage] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [province_id, setProvinceId] = useState(null);
    const [city_id, setCityId] = useState(null);
    const [district_id, setDistrictId] = useState(null);
    const [village_id, setVillageId] = useState(null);
    
    useEffect(() => {
        const fetchProvince = async () => {
            try {
                const response = await fetchAddress('provinces');
                setProvince(response);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        const fetchCity = async () => {
            try {
                const response = await fetchAddress('regencies/' + province_id);
                setCity(response);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        const fetchDistrict = async () => {
            try {
                const response = await fetchAddress('districts/' + city_id);
                setDistrict(response);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        const fetchVillage = async () => {
            try {
                const response = await fetchAddress('villages/' + district_id);
                setVillage(response);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
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

    return (
        <div>
            {/* Input Detail Data Diri */}
            <section className="card outline outline-black">
                <div className="p-5">
                    <h1 className="text-xl font-bold mb-5">Detail Data Diri</h1>
                    <form>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="name">Nama</label>
                                <input type="text" id="name" name="name" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="nisn">NISN</label>
                                <input type="text" id="nisn" name="nisn" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="whatsapp">No. WhatsApp</label>
                                <input type="tel" id="whatsapp" name="whatsapp" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="gender">Jenis Kelamin</label>
                                <select name="gender" id="gender" className="select select-bordered w-full" required>
                                    <option value="male">Laki-laki</option>
                                    <option value="female">Perempuan</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="address">Alamat</label>
                                <input type="text" id="address" name="address" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="province">Provinsi</label>
                                <select name="province" id="province" className="select select-bordered w-full" onChange={(e) => setProvinceId(e.target.value)} required>
                                    <option value="">Pilih Provinsi</option>
                                    {province.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="city">Kota</label>
                                <select name="city" id="city" className="select select-bordered w-full" onChange={(e) => setCityId(e.target.value)} required>
                                    <option value="">Pilih Kota</option>
                                    {city.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="district">Kecamatan</label>
                                <select name="district" id="district" className="select select-bordered w-full" onChange={(e) => setDistrictId(e.target.value)} required>
                                    <option value="">Pilih Kecamatan</option>
                                    {district.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="village">Kelurahan</label>
                                <select name="village" id="village" className="select select-bordered w-full" onChange={(e) => setVillageId(e.target.value)} required>
                                    <option value="">Pilih Desa</option>
                                    {village.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="photo">Foto</label>
                                <input type="file" id="photo" name="photo" className="input input-bordered w-full" />
                                <p className="text-sm text-gray-500">Foto ukuran 3x4 background merah format file .jpg</p>
                            </div>
                            <div>
                                <label htmlFor="school">Asal Sekolah</label>
                                <input type="text" id="school" name="school" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="btn bg-emerald-600 text-white px-10 rounded-full mt-5">Simpan</button>
                        </div>
                    </form>
                </div>
            </section>
            {/* Input Data Orang Tua */}
            <section className="card outline outline-black my-10">
                <div className="p-5">
                    <h1 className="text-xl font-bold mb-5">Data Orang Tua</h1>
                    <div className=" alert alert-info mb-5">Jika tidak ada data orang tua atau wali dapat di isi dengan tanda "-"</div>

                    <form>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="father_name">Nama Ayah</label>
                                <input type="text" id="father_name" name="father_name" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="mother_name">Nama Ibu</label>
                                <input type="text" id="mother_name" name="mother_name" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="father_whatsapp">No. WhatsApp Ayah</label>
                                <input type="tel" id="father_whatsapp" name="father_whatsapp" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="mother_whatsapp">No. WhatsApp Ibu</label>
                                <input type="tel" id="mother_whatsapp" name="mother_whatsapp" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="father_occupation">Pekerjaan Ayah</label>
                                <input type="text" id="father_occupation" name="father_occupation" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="mother_occupation">Pekerjaan Ibu</label>
                                <input type="text" id="mother_occupation" name="mother_occupation" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="wali_name">Nama Wali</label>
                                <input type="text" id="wali_name" name="wali_name" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="wali_whatsapp">No. WhatsApp Wali</label>
                                <input type="tel" id="wali_whatsapp" name="wali_whatsapp" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="wali_occupation">Pekerjaan Wali</label>
                                <input type="text" id="wali_occupation" name="wali_occupation" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label htmlFor="monthly_income">Penghasilan Bulanan Orang Tua / Wali</label>
                                <input type="text" id="monthly_income" name="monthly_income" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="btn bg-emerald-600 text-white px-10 rounded-full mt-5">Simpan</button>
                        </div>
                    </form>
                </div>
            </section>
            {/* Data Raport */}
            <section className="card outline outline-black my-10">
                <div className="p-5">
                    <h1 className="text-xl font-bold mb-5">Data Raport</h1>
                    <div className=" alert alert-info mb-5">Jika tidak memiliki nilai dapat di isi 0</div>
                    <form>
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
                                        <td><input type="number" max={100} min={0} name={`semester_1_${item.name}`} className="input input-bordered w-full" required /></td>
                                        <td><input type="number" max={100} min={0} name={`semester_2_${item.name}`} className="input input-bordered w-full" required /></td>
                                        <td><input type="number" max={100} min={0} name={`semester_3_${item.name}`} className="input input-bordered w-full" required /></td>
                                        <td><input type="number" max={100} min={0} name={`semester_4_${item.name}`} className="input input-bordered w-full" required /></td>
                                        <td><input type="number" max={100} min={0} name={`semester_5_${item.name}`} className="input input-bordered w-full" required /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-end">
                            <button type="submit" className="btn bg-emerald-600 text-white px-10 rounded-full mt-5">Simpan</button>
                        </div>
                    </form>
                </div>
            </section>
            {/* Upload Dokumen */}
            <section className="card outline outline-black my-10">
                <div className="p-5">
                    <h1 className="text-xl font-bold mb-5">Upload Dokumen</h1>
                    <form>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="raport">Raport</label>
                                <input type="file" id="raport" name="raport" className="input input-bordered w-full" />
                                <p className="text-sm text-gray-500">File dijadikan 1 PDF</p>
                            </div>
                            <div>
                                <label htmlFor="kartu_keluarga">Kartu Keluarga</label>
                                <input type="file" id="kartu_keluarga" name="kartu_keluarga" className="input input-bordered w-full" />
                                <p className="text-sm text-gray-500">Format file: PDF, Max. 5MB</p>
                            </div>
                            <div>
                                <label htmlFor="sertifikat_lomba">Sertifikat Lomba (Jika Ada)</label>
                                <input type="file" id="sertifikat_lomba" name="sertifikat_lomba" className="input input-bordered w-full" />
                                <p className="text-sm text-gray-500">File dijadikan 1 PDF</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="btn bg-emerald-600 text-white px-10 rounded-full mt-5">Simpan</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

Profile.layout = (page) => <UserLayout>{page}</UserLayout>;
export default Profile;
