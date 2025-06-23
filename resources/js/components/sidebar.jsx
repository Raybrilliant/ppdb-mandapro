import { Link } from "@inertiajs/react";
import { Home, User, LogOut, File, Settings } from "lucide-react";
import { usePage } from "@inertiajs/react";

const menu = [
    { label: "Dashboard", icon: <Home/>, href: "/admin/dashboard" },
    { label: "Pendaftaran", icon: <User/>, href: "/admin/pendaftaran" },
    { label: "Berkas", icon: <File/>, href: "/admin/berkas" },
    { label: "Setting", icon: <Settings/>, href: "/admin/setting" },
];

const Sidebar = ({className}) => {
    const {url} = usePage();
    return (
        <ul className={`menu bg-base-200 rounded-box w-full h-screen sticky top-0 justify-between ${className}`}>
            <div>
                <h1 className="text-center font-semibold mb-5">Admin Panel MAN 2 Kota Probolinggo</h1>
                {menu.map((item) => (
                    <li key={item.label}><Link href={item.href} className={url.startsWith(item.href) ? "menu-active" : ""}>{item.icon} {item.label}</Link></li>
                ))}
            </div>
            <li className="text-red-600"><Link href="/logout"> <LogOut/> Logout</Link></li>
        </ul>
    );
};

export default Sidebar;
