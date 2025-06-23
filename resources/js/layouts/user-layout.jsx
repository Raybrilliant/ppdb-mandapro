import { Link } from "@inertiajs/react";

export default function UserLayout({ children }) {
    return (
        <div className="bg-base-200">
            <div className="flex justify-between items-center bg-base-100 py-4 px-10 sticky">
                <h1 className="font-bold">Portal Pendaftaran MAN 2 Kota Probolinggo</h1>
                <Link href="/logout" className="btn btn-error">Logout</Link>
            </div>
            <section className="p-10">
                {children}
            </section>
        </div>
    );
}