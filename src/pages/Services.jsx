export default function Services() {
  return (
    <section
      style={{
        background: "#020617",
        color: "white",
        padding: "100px 80px",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "44px", marginBottom: "30px" }}>
        Our Cybersecurity Services
      </h1>

      <p style={introText}>
        At SecuraX Infosec Solutions, we provide security-focused services
        designed to identify vulnerabilities, reduce risk, and strengthen
        digital infrastructure against real-world threats.
      </p>

      {/* SERVICE 1 */}
      <ServiceBlock
        title="Penetration Testing"
        desc="We simulate real-world cyber attacks to identify vulnerabilities
        in web applications, networks, and systems before malicious attackers do."
        points={[
          "Web & network penetration testing",
          "OWASP Top 10 vulnerability assessment",
          "Detailed risk-based reporting",
          "Actionable remediation guidance",
        ]}
      />

      {/* SERVICE 2 */}
      <ServiceBlock
        title="Ethical Hacking"
        desc="Our ethical hacking services help organizations understand how
        attackers think and operate, enabling proactive defense strategies."
        points={[
          "Real-world attack simulation",
          "Privilege escalation testing",
          "Security posture evaluation",
          "Responsible disclosure practices",
        ]}
      />

      {/* SERVICE 3 */}
      <ServiceBlock
        title="Web Application Security"
        desc="We secure web applications against modern attack vectors and
        ensure robust protection for user data and business logic."
        points={[
          "Protection against XSS, SQL Injection, CSRF",
          "Authentication & authorization testing",
          "Secure session management review",
          "Application security hardening",
        ]}
      />

      {/* SERVICE 4 */}
      <ServiceBlock
        title="Secure Development"
        desc="Security is integrated from the ground up during development,
        ensuring scalable and resilient applications."
        points={[
          "Secure-by-design architecture",
          "Code review & vulnerability analysis",
          "Security best practices implementation",
          "Scalable and maintainable solutions",
        ]}
      />
    </section>
  );
}

/* ---------------- COMPONENT ---------------- */

function ServiceBlock({ title, desc, points }) {
  return (
    <div style={serviceBox}>
      <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>{title}</h2>
      <p style={{ opacity: 0.85, marginBottom: "15px", lineHeight: "1.7" }}>
        {desc}
      </p>

      <ul style={{ lineHeight: "2", paddingLeft: "20px" }}>
        {points.map((point, index) => (
          <li key={index}>✔ {point}</li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const introText = {
  maxWidth: "900px",
  lineHeight: "1.8",
  fontSize: "18px",
  opacity: 0.9,
  marginBottom: "60px",
};

const serviceBox = {
  border: "1px solid #1e293b",
  borderRadius: "14px",
  padding: "30px",
  marginBottom: "40px",
  background: "#020617",
};
