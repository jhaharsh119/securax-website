export default function Hero() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "60vh",
        background: "#020617",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "60px",
        boxSizing: "border-box",
      }}
    >
      <div>
        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
          SecuraX Infosec Solutions
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "24px", opacity: 0.85 }}>
          Cybersecurity • Ethical Hacking • Secure Development
        </p>

        <button
          style={{
            padding: "14px 32px",
            background: "#38bdf8",
            color: "#020617",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
