import { useState } from "react";
import "./App.css";
import AdminLayout from "./layouts/AdminLayout";
import NotFound from "./pages/404";
import Categories from "./pages/Category";
import Dashboard from "./pages/Dashboard";
import Deliveries from "./pages/Delivery";
import Orders from "./pages/Order";
import Products from "./pages/Product";


function App() {
    const [selectedPage, setSelectedPage] = useState("overview");

    const renderPage = () => {
        switch (selectedPage) {
            case "overview":
                return <Dashboard />;
            case "orders":
                return <Orders />;
            case "products":
                return <Products />;
            case "categories":
                return <Categories />;
            case "deliveries":
                return <Deliveries />;
            default:
                return <NotFound />;
        }
    };

    return <AdminLayout onSelectPage={setSelectedPage}>{renderPage()}</AdminLayout>;
}

export default App;
