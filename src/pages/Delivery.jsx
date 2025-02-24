import { useState } from "react";

const deliveries = new Array(6).fill({
  id: "#001",
  status: "Ready",
  image: "https://theawesomedaily.com/wp-content/uploads/2016/09/pictures-of-pizza-23-1.jpg",
});

export default function DeliveryDashboard() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-4 w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
        <h2 className="font-semibold text-lg">Deliveries</h2>
        <span className="text-green-600 font-semibold">100 ready to deliver</span>
      </div>

      {/* Delivery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {deliveries.map((delivery, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={delivery.image}
              alt="Pizza"
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="flex justify-between items-center mt-2">
              <span className="font-semibold">{delivery.id}</span>
              <span className="text-green-500">{delivery.status}</span>
            </div>
            <div className="mt-2 flex gap-2">
              <button className="bg-yellow-400 text-white py-1 px-3 rounded-lg hover:bg-yellow-500">Detail</button>
              <button className="bg-yellow-400 text-white py-1 px-3 rounded-lg hover:bg-yellow-500">Map</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
