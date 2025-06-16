import { Link } from "@inertiajs/react";

export default function AdminLayout({ children }) {
    return (
        <div className="bg-base-200">
            <div className="flex justify-between items-center bg-base-100 py-4 px-10 sticky">
                <h1 className="font-bold">Portal Pendaftaran MAN 2 Kota Probolinggo</h1>
                <button className="btn btn-error">Logout</button>
            </div>
            <section className="p-10">
                {children}
            </section>
        </div>
    );
}