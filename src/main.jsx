import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function BookingForm() {
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [carType, setCarType] = useState('standard')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { pickup, dropoff, carType, phone, notes }
    alert('Booking submitted!\n' + JSON.stringify(data, null, 2))
  }

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Book Your Ride with Prince</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pickup Location"
          value={pickup}
          onChange={e => setPickup(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="text"
          placeholder="Dropoff Location"
          value={dropoff}
          onChange={e => setDropoff(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <select
          value={carType}
          onChange={e => setCarType(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        >
          <option value="standard">Standard</option>
          <option value="luxury">Luxury</option>
        </select>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <textarea
          placeholder="Notes (optional)"
          value={notes}
          onChange={e => setNotes(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', background: '#222', color: '#fff', border: 'none' }}
        >
          Book Now
        </button>
      </form>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingForm />
  </React.StrictMode>
)
