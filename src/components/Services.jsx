export default function Services() {
  return (
    <section
      style={{
        background: "#020617",
        color: "white",
        padding: "80px 60px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "50px",
        }}
      >
        Our Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        {/* Card 1 */}
        <div style={cardStyle}>
          <h3>Penetration Testing</h3>
          <p>
            Identify vulnerabilities in your systems before attackers do.
            Comprehensive security testing for web & networks.
          </p>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <h3>Ethical Hacking</h3>
          <p>
            Simulated real-world cyber attacks to strengthen your digital
            defenses and security posture.
          </p>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <h3>Web Security</h3>
          <p>
            Secure web applications against SQL injection, XSS, CSRF and
            modern attack vectors.
          </p>
        </div>

        {/* Card 4 */}
        <div style={cardStyle}>
          <h3>Secure Development</h3>
          <p>
            Full-stack development with security-first architecture and
            best practices.
          </p>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  background: "#020617",
  border: "1px solid #1e293b",
  borderRadius: "14px",
  padding: "30px",
  transition: "0.3s",
};
