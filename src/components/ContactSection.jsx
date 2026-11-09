import { useState } from "react";

const contactLinks = [
  {
    type: "Email",
    label: "chidanandagowdadp@gmail.com",
    href: "mailto:chidanandagowdadp@gmail.com",
    icon: "📧",
  },
  {
    type: "Phone",
    label: "+91 8861240872",
    href: "tel:+918861240872",
    icon: "📱",
  },
  {
    type: "LinkedIn",
    label: "linkedin.com/in/chidanandagowdaDP",
    href: "https://www.linkedin.com/in/chidanandagowda-d-p-268a1b244/",
    icon: "💼",
  },
  {
    type: "GitHub",
    label: "github.com/ChidanandagowdaDP",
    href: "https://github.com/ChidanandagowdaDP",
    icon: "🐙",
  },
];

const CONTACT_EMAIL = "chidanandagowdadp@gmail.com";

const emptyForm = { name: "", email: "", subject: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3500);
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/.+@.+\..+/.test(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    try {
      const subject = encodeURIComponent(
        form.subject.trim() || `Portfolio message from ${form.name}`,
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
      );

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

      setShowSuccess(true);
      setForm(emptyForm);
      setErrors({});
    } catch (err) {
      showToast("error", "Could not open your email app. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's Work Together</h2>
          <p style={{ color: "var(--clr-ink-muted)", marginTop: 12 }}>
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              I'm currently open to new opportunities — whether it's a full-time
              role, a freelance project, or just a conversation about building
              something great.
            </p>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon">{link.icon}</div>
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--clr-ink-muted)",
                        marginBottom: 1,
                      }}
                    >
                      {link.type}
                    </div>
                    {link.label}
                  </div>
                  <span style={{ marginLeft: "auto", opacity: 0.4 }}>→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form">
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
              Send a Message
            </h3>

            <form onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    className="form-input"
                    value={form.name}
                    onChange={update}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <div className="form-error">{errors.name}</div>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    value={form.email}
                    onChange={update}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <div className="form-error">{errors.email}</div>
                  )}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  className="form-input"
                  value={form.subject}
                  onChange={update}
                  placeholder="Subject"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="form-input"
                  value={form.message}
                  onChange={update}
                  placeholder="Write your message..."
                ></textarea>
                {errors.message && (
                  <div className="form-error">{errors.message}</div>
                )}
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%" }}
                disabled={sending}
              >
                {sending ? "Opening..." : "✈ Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {toast && <div className={`toast ${toast.type}`}>{toast.message}</div>}

      {showSuccess && (
        <div className="modal-overlay" onClick={() => setShowSuccess(false)}>
          <div
            className="success-card modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="success-emoji">🎉</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
              Email Draft Opened!
            </h3>
            <p style={{ color: "var(--clr-ink-muted)", marginBottom: 24 }}>
              Your email app should open with the message pre-filled. Just hit send
              and I'll get back to you within 24 hours.
            </p>
            <button
              className="btn-primary"
              onClick={() => setShowSuccess(false)}
            >
              Awesome!
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
