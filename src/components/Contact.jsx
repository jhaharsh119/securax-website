export default function Contact() {
  return (
    <section style={section}>
      <h2>Contact Us</h2>

      <form style={form}>
        <input placeholder="Your Name" style={input} />
        <input placeholder="Email Address" style={input} />
        <textarea placeholder="Your Message" rows="4" style={input}></textarea>

        <button style={btn}>Send Message</button>
      </form>
    </section>
  );
}

const section = {
  padding: "80px",
  background: "#020617",
  color: "white",
};

const form = {
  maxWidth: "500px",
  marginTop: "30px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const input = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #1e293b",
  background: "#020617",
  color: "white",
};

const btn = {
  padding: "12px",
  background: "#38bdf8",
  color: "#020617",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
