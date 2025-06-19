import AdminLayout from "@/layouts/admin-layout";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

Dashboard.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Dashboard;
