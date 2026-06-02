import { useState } from "react"
import { motion } from "framer-motion"

const BOXLY_ENDPOINT = "https://formsubmit.co/019e7eb3-bf76-4b03-9f00-7cd3b5fa6b64@webform.boxly.ai"

function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "", consent: false })

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(p => ({ ...p, [name]: type === "checkbox" ? checked : value }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  if (!form.consent) return

  setLoading(true)
  setError(false)

  try {
    const response = await fetch(
      "https://formsubmit.co/019e7eb3-bf76-4b03-9f00-7cd3b5fa6b64@webform.boxly.ai",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "First Name": form.name,
          "Email Address": form.email,
          "Phone Number": form.phone,

          _subject: "InHouse Jas Gill Campaign Lead",
          _captcha: "false",
          _template: "table"
        }),
      }
    )

    if (!response.ok) {
      throw new Error("Submission failed")
    }

    setSubmitted(true)

    setForm({
      name: "",
      phone: "",
      email: "",
      consent: false,
    })
  } catch (err) {
    console.error(err)
    setError(true)
  } finally {
    setLoading(false)
  }
}

  const inp = {
    width: "100%", border: "1.5px solid var(--slate-200)", borderRadius: "var(--r-md)",
    padding: "12px 16px", fontFamily: "var(--font-body)", fontSize: 15,
    color: "var(--slate-800)", outline: "none", background: "var(--white)",
    transition: "border-color 0.15s", display: "block",
  }

  return (
    <section id="booking" style={{ padding: "80px 20px", background: "white" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ background: "white", borderRadius: "var(--r-2xl)", padding: "clamp(28px,5vw,48px)", border: "1.5px solid var(--slate-200)" }}
        >

          {submitted ? (
            /* ── Success state ── */
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: "center", padding: "20px 0" }}
            >
              <div style={{ width: 60, height: 60, background: "var(--brand-50)", border: "1.5px solid var(--brand-100)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, color: "var(--slate-900)", marginBottom: 10 }}>
                You're booked in!
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--slate-500)", lineHeight: 1.65 }}>
                Thank you, <strong>{form.name}</strong>! A smile specialist will call you within 24 hours to confirm your appointment.
              </p>
            </motion.div>

          ) : (
            /* ── Form ── */
            <>
              <div style={{ textAlign: "center", marginBottom: 28 }}>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "var(--brand)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>
                  Zero Obligation
                </p>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(22px,3vw,34px)", color: "var(--slate-900)", letterSpacing: "-0.5px" }}>
                  Book Your Free Consultation
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--slate-400)", marginTop: 8 }}>
                  A smile specialist will be in touch within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "var(--slate-700)", marginBottom: 5 }}>
                    Full Name *
                  </label>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Jane Smith" required style={inp}
                    onFocus={e => e.target.style.borderColor = "var(--brand)"}
                    onBlur={e  => e.target.style.borderColor = "var(--slate-200)"} />
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "var(--slate-700)", marginBottom: 5 }}>
                    Phone Number *
                  </label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+44 7700 000000" required style={inp}
                    onFocus={e => e.target.style.borderColor = "var(--brand)"}
                    onBlur={e  => e.target.style.borderColor = "var(--slate-200)"} />
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "var(--slate-700)", marginBottom: 5 }}>
                    Email Address
                  </label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="jane@example.com" style={inp}
                    onFocus={e => e.target.style.borderColor = "var(--brand)"}
                    onBlur={e  => e.target.style.borderColor = "var(--slate-200)"} />
                </div>

                {/* GDPR consent */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 14px", background: "var(--slate-50)", borderRadius: "var(--r-md)", border: "1px solid var(--slate-200)" }}>
                  <input type="checkbox" id="consent" name="consent" checked={form.consent} onChange={handleChange} required
                    style={{ marginTop: 2, width: 15, height: 15, accentColor: "var(--brand)", flexShrink: 0, cursor: "pointer" }} />
                  <label htmlFor="consent" style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--slate-600)", lineHeight: 1.6, cursor: "pointer" }}>
                    I consent to Smile Dental Care collecting and processing my personal data to contact me about dental services. Data held securely, never sold.{" "}
                    <a href="/privacy" style={{ color: "var(--brand)" }}>Privacy Policy</a>.
                  </label>
                </div>

                {/* Error message */}
                {error && (
                  <div style={{ background: "#fff1f2", border: "1px solid #fecdd3", borderRadius: "var(--r-md)", padding: "10px 14px" }}>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#e11d48", margin: 0 }}>
                      Something went wrong. Please call us on <a href="tel:+441234567890" style={{ color: "#e11d48", fontWeight: 700 }}>01234 567890</a> or WhatsApp us directly.
                    </p>
                  </div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={!form.consent || loading}
                  style={{
                    marginTop: 4,
                    background: form.consent && !loading ? "var(--brand)" : "var(--slate-200)",
                    color: form.consent && !loading ? "white" : "var(--slate-400)",
                    padding: "14px 32px",
                    borderRadius: "var(--r-pill)",
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16,
                    border: "none",
                    cursor: form.consent && !loading ? "pointer" : "not-allowed",
                    transition: "all 0.18s", width: "100%",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  }}
                >
                  {loading ? (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                        style={{ animation: "spin 0.8s linear infinite" }}>
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                      </svg>
                      Submitting…
                    </>
                  ) : (
                    "Book Free Consultation →"
                  )}
                </motion.button>

                <p style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: 11, color: "var(--slate-400)" }}>
                  By submitting you agree to our <a href="/terms" style={{ color: "var(--brand)" }}>Terms</a> &amp; <a href="/privacy" style={{ color: "var(--brand)" }}>Privacy Policy</a>. GDPR (UK) compliant.
                </p>

              </form>
            </>
          )}

        </motion.div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}

export default BookingForm