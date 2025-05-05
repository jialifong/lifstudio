export default function ContactPage() {
  return (
    <main style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h1>Contact Us</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <p>
          <label>
            Name<br />
            <input type="text" name="name" required />
          </label>
        </p>

        <p>
          <label>
            Email<br />
            <input type="email" name="email" required />
          </label>
        </p>

        <p>
          <label>
            Message<br />
            <textarea name="message" required></textarea>
          </label>
        </p>

        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </main>
  );
}
