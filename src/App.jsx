import React from "react";
import "./App.css"; // لو عندك ستايل خارجي
import logo from "./assets/logo.png"; // استيراد الشعار

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        {/* الشعار */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Prince Cabs" className="h-20" />
        </div>

        {/* العنوان */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Book Your Ride with Prince
        </h2>

        {/* الفورم */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Pickup Location"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Dropoff Location"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Standard</option>
            <option>Premium</option>
            <option>Luxury</option>
          </select>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Notes (optional)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
