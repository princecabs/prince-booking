import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const dummyBookings = [
  { id: 1, name: "Ahmed", pickup: "Airport", dropoff: "Hotel", car: "Luxury", phone: "0501234567", status: "Pending" },
  { id: 2, name: "Fatima", pickup: "Downtown", dropoff: "Mall", car: "Standard", phone: "0559876543", status: "Confirmed" },
  { id: 3, name: "Omar", pickup: "Station", dropoff: "Business Bay", car: "Luxury", phone: "0521122334", status: "Pending" }
]

function AdminDashboard() {
  const [bookings, setBookings] = useState(dummyBookings)

  const updateStatus = (id, newStatus) => {
    const updated = bookings.map(b => b.id === id ? { ...b, status: newStatus } : b)
    setBookings(updated)
  }

  const deleteBooking = (id) => {
    const filtered = bookings.filter(b => b.id !== id)
    setBookings(filtered)
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Prince Admin Dashboard</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ background: '#eee' }}>
            <th>Name</th><th>Pickup</th><th>Dropoff</th><th>Car</th><th>Phone</th><th>Status</th><th>Actions</th>
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
              <td>
                <button onClick={() => updateStatus(b.id, b.status === "Confirmed" ? "Completed" : "Confirmed")} style={{ marginRight: 5 }}>
                  {b.status === "Confirmed" ? "Complete" : "Confirm"}
                </button>
                <button onClick={() => deleteBooking(b.id)} style={{ color: "red" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminDashboard />
  </React.StrictMode>
)
