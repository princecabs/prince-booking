import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Book Your Ride with Prince</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <input type="text" placeholder="Pickup Location" className="w-full mb-4 px-3 py-2 border rounded" />
        <input type="text" placeholder="Dropoff Location" className="w-full mb-4 px-3 py-2 border rounded" />
        <select className="w-full mb-4 px-3 py-2 border rounded">
          <option>Standard</option>
          <option>Luxury</option>
        </select>
        <input type="text" placeholder="Phone Number" className="w-full mb-4 px-3 py-2 border rounded" />
        <textarea placeholder="Notes (optional)" className="w-full mb-4 px-3 py-2 border rounded"></textarea>
        <button type="submit" className="bg-black text-white py-2 px-4 rounded w-full">Book Now</button>
      </form>
    </div>
  );
}

export default App;
