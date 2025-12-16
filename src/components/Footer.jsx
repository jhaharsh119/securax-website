import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={footer}>
      <div style={container}>

        {/* BRAND */}
        <div>
          <h3 style={logo}>SecuraX</h3>
          <p style={text}>
            Cybersecurity • Ethical Hacking • Secure Development
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 style={heading}>Quick Links</h4>
          <Link to="/" style={link}>Home</Link>
          <Link to="/about" style={link}>About</Link>
          <Link to="/services" style={link}>Services</Link>
          <Link to="/contact" style={link}>Contact</Link>
        </div>

        {/* CONTACT */}
        <div>
          <h4 style={heading}>Contact</h4>
          <p style={text}>📧 securaxinfosec@gmail.com</p>
          <p style={text}>📍 India</p>
        </div>

      </div>

      <div style={bottom}>
        © {new Date().getFullYear()} SecuraX Infosec Solutions. All rights reserved.
      </div>
    </footer>
  );
}

/* ================= STYLES ================= */

const footer = {
  background: "#020617",
  color: "white",
  padding: "60px 80px 30px",
  borderTop: "1px solid #1e293b",
};

const container = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "40px",
  marginBottom: "40px",
};

const logo = {
  fontSize: "24px",
  marginBottom: "10px",
};

const heading = {
  fontSize: "18px",
  marginBottom: "12px",
};

const text = {
  fontSize: "14px",
  opacity: 0.75,
  marginBottom: "6px",
};

const link = {
  display: "block",
  color: "white",
  opacity: 0.8,
  textDecoration: "none",
  marginBottom: "6px",
  transition: "color 0.3s ease",
};

const bottom = {
  textAlign: "center",
  fontSize: "13px",
  opacity: 0.6,
};
