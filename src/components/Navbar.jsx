import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <h2>SecuraX</h2>

      <div>
        <Link style={link} to="/">Home</Link>
        <Link style={link} to="/about">About</Link>
        <Link style={link} to="/services">Services</Link>
      </div>
    </nav>
  );
}

const navStyle = {
  padding: "20px 60px",
  background: "#020617",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #1e293b",
};

const link = {
  marginRight: "25px",
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
};
