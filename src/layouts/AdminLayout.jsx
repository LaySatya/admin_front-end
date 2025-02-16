import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AdminLayout = ({ children, onSelectPage }) => {
    return (
        <div className="flex">
            <Sidebar onSelect={onSelectPage} />
            <div className="flex-1 flex flex-col">
                <Topbar />
                <div className="p-6 bg-gray-50 min-h-screen">{children}</div>
            </div>
        </div>
    );
};

export default AdminLayout;
