import { FaBell } from "react-icons/fa";

const Topbar = () => {
    return (
        <div className="w-full h-16 bg-white flex justify-between items-center px-6 shadow">
            <h1 className="text-2xl font-semibold">Hello, Pich!</h1>
            <div className="flex items-center gap-4">
                <FaBell className="text-gray-500 cursor-pointer" />
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
        </div>
    );
};

export default Topbar;
