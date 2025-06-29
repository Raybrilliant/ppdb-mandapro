import HomeLayout from "@/layouts/home-layout";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

function Login() {
    const {data, setData, post, processing} = useForm({
        nisn: '',
        password: '',
    });

    const handleLogin = (e) => {
        e.preventDefault();
        post('/login', {
            onSuccess: () => {
                alert('Login berhasil');
            },
            onError: () => {
                alert("NISN atau password salah");
            },
        });
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <img src="/logo/kemenag.png" alt="logo-kemenag" className="w-20 mx-auto" />
                    <h2 className="text-2xl font-bold text-center">MAN 2 Kota Probolinggo</h2>
                    <p className="text-sm font-semibold opacity-50 text-center">Silahkan login untuk masuk ke dalam sistem</p>
                    <form className="space-y-3" onSubmit={handleLogin}>
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
                            <button className="btn bg-emerald-600 text-white w-full" type="submit" disabled={processing || data.nisn.length != 10}>{processing ? 'Loading...' : 'Login'}</button>
                        </div>
                    </form>
                    <p className="text-sm font-semibold opacity-50 text-center">Belum punya akun? <Link href="/register" className="text-emerald-600 font-bold">Daftar</Link></p>
                </div>
            </div>
        </div>
    );
}

Login.layout = (page) => <HomeLayout>{page}</HomeLayout>;
export default Login;