import React from "react";
import logo from "./assets/logo.png";
import "./App.css"; // في حال أضفت تنسيقات خارجية

function App() {
  return (
    <div style={{ textAlign: "center", padding: "2rem", fontFamily: "Arial" }}>
      <img src={logo} alt="Prince Cabs Logo" style={{ width: "160px", marginBottom: "1rem" }} />
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Book Your Ride with Prince</h1>
      <form style={{ maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
        <input type="text" placeholder="Pickup Location" style={inputStyle} />
        <input type="text" placeholder="Dropoff Location" style={inputStyle} />
        <select style={inputStyle}>
          <option value="">Select Car Type</option>
          <option value="standard">Standard</option>
          <option value="luxury">Luxury</option>
          <option value="van">Van</option>
        </select>
        <input type="tel" placeholder="Phone Number" style={inputStyle} />
        <textarea placeholder="Notes (optional)" style={{ ...inputStyle, height: "80px" }} />
        <button type="submit" style={buttonStyle}>Book Now</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  marginBottom: "1rem",
  border: "1px solid #ccc",
  borderRadius: "6px",
};

const buttonStyle = {
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "1rem",
};

export default App;
