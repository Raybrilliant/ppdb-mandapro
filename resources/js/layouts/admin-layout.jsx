import Sidebar from "@/components/sidebar";

const AdminLayout = ({ children }) => {
    return (
        <div className="grid grid-cols-12">
            <Sidebar className="col-span-2"/>
            <div className="col-span-10 p-10">
                <div className=" card outline outline-black bg-base-100 shadow-2xl">
                    <div className="p-5">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;