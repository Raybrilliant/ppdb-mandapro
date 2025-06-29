import HomeLayout from "@/layouts/home-layout";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

function Register() {
    const {data, setData, post, processing} = useForm({
        name: '',
        nisn: '',
        password: '',
        password_confirmation: '',
        type: '',
    });

    const handleRegister = (e) => {
        e.preventDefault();
        if (data.password !== data.password_confirmation) {
            alert('Password tidak sama');
            return;
        }
        post('/register', {
            onSuccess: () => {
                alert('Register berhasil');
            },
            onError: () => {
                alert('NISN kamu sudah terdaftar');
            },
        });
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <img src="/logo/kemenag.png" alt="logo-kemenag" className="w-20 mx-auto" />
                    <h2 className="text-2xl font-bold text-center">MAN 2 Kota Probolinggo</h2>
                    <p className="text-sm font-semibold opacity-50 text-center">Silahkan mendaftar terlebih dahulu</p>
                    <form className="space-y-3" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nama Lengkap</span>
                            </label>
                            <input type="text" placeholder="nama" className="input input-bordered w-full" onChange={(e) => setData('name', e.target.value)} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Jalur Pendaftaran</span>
                            </label>
                            <select className="select select-bordered w-full" onChange={(e) => setData('type', e.target.value)} required>
                                <option disabled selected>Pilih Jalur Pendaftaran</option>
                                <option value="prestasi">Prestasi</option>
                                <option value="reguler">Reguler</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">NISN</span>
                            </label>
                            <input type="text" maxLength={10} minLength={10} placeholder="nisn" className="input input-bordered w-full" onChange={(e) => setData('nisn', e.target.value)} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered w-full" onChange={(e) => setData('password', e.target.value)} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Konfirmasi Password</span>
                            </label>
                            <input type="password" placeholder="konfirmasi password" className="input input-bordered w-full" onChange={(e) => setData('password_confirmation', e.target.value)} required />
                        </div>
                        <div className="form-control">
                            <button className="btn bg-emerald-600 text-white w-full" type="submit" disabled={processing || data.nisn.length != 10}>{processing ? 'Loading...' : 'Daftar'}</button>
                        </div>
                    </form>
                    <p className="text-sm font-semibold opacity-50 text-center">Sudah punya akun? <Link href="/login" className="text-emerald-600 font-bold">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

Register.layout = (page) => <HomeLayout>{page}</HomeLayout>;
export default Register;