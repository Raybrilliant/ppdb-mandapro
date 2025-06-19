import AdminLayout from "@/layouts/admin-layout";

const Dashboard = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            {/* Statistics */}
            <div className="stats shadow-xl w-full">
            <div className="stat place-items-center">
                <div className="stat-title">Jumlah Pendaftar</div>
                <div className="stat-value">{new Intl.NumberFormat().format(1000)}</div>
                <div className="stat-desc">↗︎ 40 (2%)</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Jumlah Siswa Lulus</div>
                <div className="stat-value text-secondary">{new Intl.NumberFormat().format(300)}</div>
                <div className="stat-desc text-secondary">↘︎ 40 (2%)</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Jumlah Siswa Lulus</div>
                <div className="stat-value">{new Intl.NumberFormat().format(1200)}</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
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
                        <tr>
                            <td>1</td>
                            <td>MAN 2 Kota Probolinggo</td>
                            <td>{new Intl.NumberFormat().format(1000)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Dashboard.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Dashboard;
