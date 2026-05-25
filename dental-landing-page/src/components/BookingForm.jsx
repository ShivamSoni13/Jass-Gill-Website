import { useState } from "react"
import { motion } from "framer-motion"

function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "", phone: "", email: "", consent: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.consent) return
    setSubmitted(true)
  }

  return (
    <section
      id="form"
      style={{
        padding: "100px 24px",
        background: "var(--slate-50)",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "var(--white)",
            borderRadius: 32,
            padding: "clamp(40px, 6vw, 64px)",
            boxShadow: "0 8px 48px rgba(14,116,144,0.1)",
            border: "1px solid var(--slate-200)",
          }}
        >
          {!submitted ? (
            <>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <span style={{
                  display: "inline-block",
                  background: "var(--teal-100)",
                  color: "var(--teal-700)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "6px 16px",
                  borderRadius: "var(--radius-pill)",
                  marginBottom: 16,
                }}>
                  Zero Obligation
                </span>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  color: "var(--slate-900)",
                  letterSpacing: "-0.8px",
                }}>
                  Book Your Free Consultation
                </h2>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--slate-500)",
                  marginTop: 10,
                }}>
                  Takes 60 seconds. One of our smile specialists will be in touch.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--teal-500)"}
                    onBlur={e => e.target.style.borderColor = "var(--slate-200)"}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+44 7700 000000"
                    required
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--teal-500)"}
                    onBlur={e => e.target.style.borderColor = "var(--slate-200)"}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--teal-500)"}
                    onBlur={e => e.target.style.borderColor = "var(--slate-200)"}
                  />
                </div>

                {/* GDPR Consent — UK Compliance */}
                <div style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "16px",
                  background: "var(--slate-50)",
                  borderRadius: 14,
                  border: "1px solid var(--slate-200)",
                }}>
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    required
                    style={{
                      marginTop: 2,
                      width: 18,
                      height: 18,
                      accentColor: "var(--teal-500)",
                      flexShrink: 0,
                      cursor: "pointer",
                    }}
                  />
                  <label
                    htmlFor="consent"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: "var(--slate-600)",
                      lineHeight: 1.6,
                      cursor: "pointer",
                    }}
                  >
                    I consent to Smile Dental Care collecting and processing my personal data to contact me about dental services. Your data is held securely and never sold to third parties. View our{" "}
                    <a href="/privacy" style={{ color: "var(--teal-600)" }}>Privacy Policy</a>.{" "}
                    <strong>You can withdraw consent at any time.</strong>
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2, boxShadow: "0 12px 32px rgba(20,184,166,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  disabled={!form.consent}
                  style={{
                    marginTop: 8,
                    background: form.consent
                      ? "linear-gradient(135deg, #14b8a6, #0d9488)"
                      : "var(--slate-200)",
                    color: form.consent ? "white" : "var(--slate-400)",
                    padding: "18px 32px",
                    borderRadius: "var(--radius-pill)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 17,
                    border: "none",
                    cursor: form.consent ? "pointer" : "not-allowed",
                    transition: "all 0.2s",
                    boxShadow: form.consent ? "0 6px 24px rgba(20,184,166,0.3)" : "none",
                  }}
                >
                  Book Free Consultation →
                </motion.button>

                <p style={{
                  textAlign: "center",
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "var(--slate-400)",
                  lineHeight: 1.5,
                }}>
                  By submitting this form you agree to our{" "}
                  <a href="/terms" style={{ color: "var(--teal-600)" }}>Terms of Service</a>{" "}
                  and acknowledge our{" "}
                  <a href="/privacy" style={{ color: "var(--teal-600)" }}>Privacy Policy</a>.
                  We process your data under GDPR (UK) lawful basis of consent.
                </p>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: "center", padding: "24px 0" }}
            >
              <div style={{
                width: 72,
                height: 72,
                background: "var(--teal-50)",
                border: "2px solid var(--teal-200)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--teal-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 28,
                color: "var(--slate-900)",
                marginBottom: 12,
              }}>
                You're booked in!
              </h3>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "var(--slate-500)",
                lineHeight: 1.65,
              }}>
                Thank you, {form.name}! One of our smile specialists will call you within 24 hours to confirm your appointment.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontWeight: 500,
  fontSize: 14,
  color: "var(--slate-700)",
  marginBottom: 6,
}

const inputStyle = {
  width: "100%",
  border: "1.5px solid var(--slate-200)",
  borderRadius: 14,
  padding: "14px 18px",
  fontFamily: "var(--font-body)",
  fontSize: 16,
  color: "var(--slate-800)",
  outline: "none",
  background: "var(--white)",
  transition: "border-color 0.2s",
  display: "block",
}

export default BookingForm