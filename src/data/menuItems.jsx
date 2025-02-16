import { FaBox, FaClipboardList, FaCogs, FaDashcube, FaLayerGroup, FaTruck } from "react-icons/fa";

export const menuItems = [
    { id: "overview", name: "Overview", icon: <FaDashcube /> },
    { id: "orders", name: "Orders", icon: <FaClipboardList /> },
    { id: "products", name: "Products", icon: <FaBox /> },
    { id: "categories", name: "Categories", icon: <FaLayerGroup /> },
    { id: "deliveries", name: "Deliveries", icon: <FaTruck /> },
    { id: "setup", name: "Setup", icon: <FaCogs /> },
];
