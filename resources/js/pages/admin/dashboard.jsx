import AdminLayout from "@/layouts/admin-layout";

const groupBySchoolName = (user) => {
    const grouped = user.reduce((acc, item) => {
        if (!acc[item?.user_detail?.school]) {
            acc[item?.user_detail?.school] = [];
        }
        acc[item?.user_detail?.school].push(item);
        return acc;
    }, {});
    return grouped;
}

const sortedMostRegiterSchool = (user) => {
    const grouped = groupBySchoolName(user);
    const sorted = Object.entries(grouped).sort((a, b) => b[1].length - a[1].length);
    return sorted;
}
const Dashboard = ({user}) => {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            {/* Statistics */}
            <div className="stats shadow-xl w-full">
                <div className="stat place-items-center">
                    <div className="stat-title">Jumlah Pendaftar</div>
                    <div className="stat-value">{new Intl.NumberFormat().format(user.length)}</div>
                    <div className="stat-desc">Siswa Baru</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Jumlah Terverifikasi</div>
                    <div className="stat-value">{new Intl.NumberFormat().format(user.filter((item) => item?.user_detail?.validated == true).length)}</div>
                    <div className="stat-desc">Siswa Terverifikasi</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Jumlah Calon Siswa Lulus</div>
                    <div className="stat-value text-secondary">{new Intl.NumberFormat().format(user.filter((item) => item?.user_detail?.status == '1').length)}</div>
                    <div className="stat-desc text-secondary">Siswa Lulus</div>
                </div>
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Nama Sekolah</th>
                            <th>Jumlah Pendaftar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedMostRegiterSchool(user).map((item,index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item[0]}</td>
                                <td>{new Intl.NumberFormat().format(item[1].length)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Dashboard.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Dashboard;
