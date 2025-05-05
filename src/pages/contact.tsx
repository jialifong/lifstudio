export default function ContactPage() {
  return (
    <main style={{ maxWidth: "600px", margin: "4rem auto", padding: "2rem" }}>
      <h1>Contact Us</h1>
      <p>We’ll help you make sense of what matters, and move forward with focus.</p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <div>
          <label>
            Name
            <input type="text" name="name" required style={{ width: "100%", padding: "0.5rem" }} />
          </label>
        </div>

        <div>
          <label>
            Email
            <input type="email" name="email" required style={{ width: "100%", padding: "0.5rem" }} />
          </label>
        </div>

        <div>
          <label>
            Message
            <textarea name="message" required rows={5} style={{ width: "100%", padding: "0.5rem" }} />
          </label>
        </div>

        <button type="submit" style={{ backgroundColor: "#000", color: "#fff", padding: "0.75rem 1.5rem", border: "none", cursor: "pointer" }}>
          Send
        </button>
      </form>
    </main>
  );
}
