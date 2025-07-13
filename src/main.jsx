import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// مكون صفحة الحجز
function BookingForm() {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Book Your Ride with Prince</h1>
      <form>
        <input type="text" placeholder="Pickup Location" style={inputStyle} />
        <input type="text" placeholder="Dropoff Location" style={inputStyle} />
        <select style={inputStyle}>
          <option>Standard</option>
          <option>Luxury</option>
        </select>
        <input type="tel" placeholder="Phone Number" style={inputStyle} />
        <textarea placeholder="Notes (optional)" style={inputStyle} />
        <button type="submit" style={buttonStyle}>Book Now</button>
      </form>
    </div>
  )
}

// مكون لوحة التحكم
function AdminDashboard() {
  const bookings = [
    { id: 1, name: "Ahmed", pickup: "Airport", dropoff: "Hotel", car: "Luxury", phone: "0501234567", status: "Pending" },
    { id: 2, name: "Fatima", pickup: "Downtown", dropoff: "Mall", car: "Standard", phone: "0559876543", status: "Confirmed" }
  ]

  return (
    <div style={{ padding: '20px' }}>
      <h1>Prince Admin Dashboard</h1>
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#eee' }}>
            <th>Name</th><th>Pickup</th><th>Dropoff</th><th>Car</th><th>Phone</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b.id} style={{ borderBottom: '1px solid #ccc', textAlign: 'center' }}>
              <td>{b.name}</td>
              <td>{b.pickup}</td>
              <td>{b.dropoff}</td>
              <td>{b.car}</td>
              <td>{b.phone}</td>
              <td>{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// تنسيقات
const inputStyle = { width: '100%', padding: '10px', marginBottom: '10px' }
const buttonStyle = { width: '100%', padding: '10px', background: '#222', color: '#fff', border: 'none' }

// نقطة بداية التطبيق
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookingForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
