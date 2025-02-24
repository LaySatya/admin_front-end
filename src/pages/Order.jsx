import { useState } from "react";
import Card from "../components/Card";

const initialOrders = [
  { id: "#001", customer: "John Doe", status: "Pending", total: "$25.99" },
  { id: "#002", customer: "Jane Smith", status: "Processing", total: "$45.00" },
  { id: "#003", customer: "Alice Brown", status: "Delivered", total: "$30.75" },
  { id: "#004", customer: "Michael Lee", status: "Pending", total: "$50.20" },
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [filterStatus, setFilterStatus] = useState("All");

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  // Filter orders based on selected status
  const filteredOrders = filterStatus === "All" 
    ? orders 
    : orders.filter(order => order.status === filterStatus);

  return (
    <>
      <h2 className="text-xl font-bold">📦 Orders Page</h2>

      <div className="bg-white md:flex p-4 rounded-lg shadow-md block items-center space-x-4 mt-4 border border-gray-200">
        <div className="flex items-center space-x-2">
          <i className="fas fa-shopping-cart text-yellow-500 text-2xl"></i>
          <span className="text-red-500 text-2xl font-bold">{orders.length}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg">Orders</span>
          <span className="font-bold">Manage customer orders</span>
        </div>
      </div>

      {/* Filter Dropdown */}
      <div className="mt-4 flex justify-end">
        <select
          className="border px-4 py-2 rounded-md shadow-sm text-gray-700"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Orders</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="w-full mt-6">
        <Card title="Customer Orders">
          <div className="overflow-x-auto m-3">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Order ID</th>
                  <th className="py-3 px-4 text-left">Customer</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Total</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="py-3 px-4">{order.id}</td>
                    <td className="py-3 px-4">{order.customer}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-md text-xs font-semibold ${
                        order.status === "Pending" ? "bg-yellow-200 text-yellow-700" :
                        order.status === "Processing" ? "bg-blue-200 text-blue-700" :
                        order.status === "Delivered" ? "bg-green-200 text-green-700" :
                        order.status === "Cancelled" ? "bg-red-200 text-red-700" : ""
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{order.total}</td>
                    <td className="py-3 px-4 flex justify-center gap-2">
                      {order.status !== "Cancelled" && order.status !== "Delivered" && (
                        <>
                          <button 
                            className="bg-green-500 text-white px-3 py-1 rounded-md text-sm"
                            onClick={() => updateOrderStatus(order.id, "Ready")}
                          >
                            Ready
                          </button>
                          <button 
                            className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"
                            onClick={() => updateOrderStatus(order.id, "Cancelled")}
                          >
                            Cancel
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredOrders.length === 0 && (
              <p className="text-center py-4 text-gray-500">No orders found.</p>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Orders;
