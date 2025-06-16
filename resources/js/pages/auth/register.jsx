import HomeLayout from "../../../layouts/home-layout";
import { Link } from "@inertiajs/react";

function Register() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kementerian_Agama_new_logo.png/640px-Kementerian_Agama_new_logo.png" alt="logo-kemenag" className="w-20 mx-auto" />
                    <h2 className="text-2xl font-bold text-center">MAN 2 Kota Probolinggo</h2>
                    <p className="text-sm font-semibold opacity-50 text-center">Silahkan mendaftar terlebih dahulu</p>
                    <form className="space-y-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nama Lengkap</span>
                            </label>
                            <input type="text" placeholder="nama" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Konfirmasi Password</span>
                            </label>
                            <input type="password" placeholder="konfirmasi password" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <button className="btn bg-emerald-600 text-white w-full">Daftar</button>
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