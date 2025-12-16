export default function About() {
  return (
    <section
      style={{
        background: "#020617",
        color: "white",
        padding: "100px 80px",
        minHeight: "100vh",
      }}
    >
      {/* HEADING */}
      <h1 style={{ fontSize: "44px", marginBottom: "25px" }}>
        About SecuraX Infosec Solutions
      </h1>

      {/* INTRO */}
      <p
        style={{
          fontSize: "18px",
          maxWidth: "900px",
          lineHeight: "1.9",
          opacity: 0.9,
          marginBottom: "50px",
        }}
      >
        SecuraX Infosec Solutions is a cybersecurity-focused startup built with
        a security-first mindset. We help organizations identify, understand,
        and mitigate real-world cyber threats through ethical and practical
        security solutions.
      </p>

      {/* MISSION */}
      <h2 style={sectionTitle}>Our Mission</h2>
      <p style={sectionText}>
        Our mission is to make cybersecurity accessible, effective, and
        reliable by combining ethical hacking techniques, secure development
        practices, and real-world attack simulations. We focus on prevention,
        not just detection.
      </p>

      {/* VISION */}
      <h2 style={sectionTitle}>Our Vision</h2>
      <p style={sectionText}>
        We envision a digital ecosystem where businesses operate with
        confidence, knowing their systems are resilient against modern cyber
        threats. SecuraX aims to grow as a trusted security partner for startups,
        enterprises, and institutions.
      </p>

      {/* WHY US */}
      <h2 style={sectionTitle}>Why Choose SecuraX?</h2>
      <ul style={listStyle}>
        <li>✔ Real-world security testing, not theoretical reports</li>
        <li>✔ Ethical hacking with responsible disclosure</li>
        <li>✔ Secure-by-design development approach</li>
        <li>✔ Startup-friendly, scalable security solutions</li>
        <li>✔ Focus on long-term security, not quick fixes</li>
      </ul>

      {/* FOUNDER NOTE */}
      <h2 style={sectionTitle}>Founder’s Note</h2>
      <p style={sectionText}>
        SecuraX was founded with the belief that cybersecurity should be
        practical, transparent, and proactive. Every solution we build follows
        the principle of understanding the attacker’s mindset to better defend
        systems.
      </p>
    </section>
  );
}

/* ---------------- STYLES ---------------- */

const sectionTitle = {
  fontSize: "28px",
  marginBottom: "15px",
  marginTop: "40px",
};

const sectionText = {
  maxWidth: "900px",
  lineHeight: "1.9",
  opacity: 0.9,
};

const listStyle = {
  maxWidth: "900px",
  lineHeight: "2.1",
  fontSize: "17px",
};
