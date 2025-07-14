import React from 'react';
import logo from './logo.png';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f7f7f7', padding: '40px', minHeight: '100vh' }}>
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <img src={logo} alt="Prince Cabs" style={{ maxWidth: '150px', margin: '0 auto 20px', display: 'block' }} />
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Book Your Ride with Prince</h2>
        <form>
          <input type="text" placeholder="Pickup Location" style={inputStyle} />
          <input type="text" placeholder="Dropoff Location" style={inputStyle} />
          <select style={inputStyle}>
            <option value="standard">Standard</option>
            <option value="luxury">Luxury</option>
            <option value="van">Van</option>
          </select>
          <input type="tel" placeholder="Phone Number" style={inputStyle} />
          <textarea placeholder="Notes (optional)" style={{ ...inputStyle, height: '80px' }} />
          <button type="submit" style={buttonStyle}>Book Now</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '15px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer'
};

export default App;
