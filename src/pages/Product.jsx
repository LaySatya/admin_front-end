import { useState } from "react";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";

const employees = [
  {
    id: 1,
    name: "Test pizza",
    category: "pizza",
    price: 10,
    created_at: "2011/04/25",
  },
  {
    id: 1,
    name: "Test pizza",
    category: "pizza",
    price: 10,
    created_at: "2011/04/25",
  },
  {
    id: 1,
    name: "Test pizza",
    category: "pizza",
    price: 10,
    created_at: "2011/04/25",
  },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
        <div className="w-full flex justify-between">
            <h2 className="text-xl font-bold">📦 Products page</h2>
            <button className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-300">
                New
            </button>
        </div>
        <div className="p-4 w-full  mx-auto">
        {/* Search Bar */}
        <div className="relative mb-4">
            <input
            type="text"
            placeholder="Search...."
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
                <tr className="bg-gray-100 text-left">
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Price</th>
                <th className="p-3">Created at</th>
                <th className="p-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                {filteredEmployees.map((emp, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="p-3">{emp.id}</td>
                    <td className="p-3">{emp.name}</td>
                    <td className="p-3">{emp.category}</td>
                    <td className="p-3">{emp.price}</td>
                    <td className="p-3">{emp.created_at}</td>
                    <td className="p-3 flex gap-2">
                    <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">
                        <FaTrash />
                    </button>
                    <button className="bg-yellow-400 text-white p-2 rounded-lg hover:bg-yellow-500">
                        <FaEdit />
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    </>
  );
}
