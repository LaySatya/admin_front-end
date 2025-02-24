import { useState } from "react";
import { menuItems } from "../data/menuItems";

const Sidebar = ({ onSelect }) => {
    const [active, setActive] = useState("overview");

    return (
        <div className="w-64 h-screen bg-white md:block hidden">
            <h2 className="text-xl font-bold mb-5 p-5">LOGO</h2>
            <ul className="space-y-1">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => {
                            setActive(item.id);
                            onSelect(item.id);
                        }}
                        className={`flex justify-between items-center cursor-pointer hover:bg-slate-100 h-14 ${
                            active === item.id
                                ? "text-yellow-500 font-semibold bg-yellow-50"
                                : "text-gray-700"
                        }`}
                    >
                        <p className="pl-6 flex items-center gap-3">
                            {item.icon} {item.name}
                        </p>
                        {active === item.id && <div className="bg-yellow-500 w-1 rounded-md h-14"></div>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
