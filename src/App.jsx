import React, { useState } from 'react';

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
        <img src="/logo.png" alt="Prince Cabs" className="w-24 mb-4" />
        <h2 className="text-2xl font-bold text-green-700 mb-2">Your Ride is Confirmed!</h2>
        <p className="text-gray-700">Thank you for booking with Prince Cabs.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Prince Cabs" className="w-20" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Book Your Ride with <span className="text-yellow-600">Prince</span>
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Pickup Location"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="text"
            placeholder="Dropoff Location"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          >
            <option value="">Select Car Type</option>
            <option value="standard">Standard</option>
            <option value="luxury">Luxury</option>
            <option value="van">Van</option>
          </select>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <textarea
            placeholder="Notes (optional)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows="3"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
