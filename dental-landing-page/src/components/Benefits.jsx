import { motion } from "framer-motion"

function Benefits() {
  const items = [
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.5 2 7 4.5 7 7c0 1.5.5 3 1 4.5C9 14 9 16 8 18c-.5 1.5 0 4 4 4s4.5-2.5 4-4c-1-2-1-4 0-6.5.5-1.5 1-3 1-4.5 0-2.5-1.5-5-5-5z"/></svg>,
      title: "Invisible Aligners",
      desc: "Discreet, removable aligners that fit your lifestyle. No metal, no discomfort.",
    },
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
      title: "Pain-Free Treatment",
      desc: "State-of-the-art procedures designed for maximum comfort from day one.",
    },
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
      title: "0% Finance & EMI",
      desc: "Flexible payment plans with 0% APR. Smile now, pay over time with no hidden fees.",
    },
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      title: "Fast Results",
      desc: "See visible improvements within weeks. Most treatments complete in 6–12 months.",
    },
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
      title: "Patient-First Care",
      desc: "Every treatment plan is tailored to you. We listen, advise, and never rush.",
    },
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: "5-Year Guarantee",
      desc: "All major treatments backed by our 5-year quality guarantee for your peace of mind.",
    },
  ]

  return (
    <section id="benefits" style={{ padding: "90px 20px", background: "var(--white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <span style={{
            display: "inline-block",
            background: "var(--brand-50)",
            color: "var(--brand)",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "5px 14px",
            borderRadius: "var(--r-pill)",
            border: "1px solid var(--brand-100)",
            marginBottom: 14,
          }}>
            Why Patients Choose Us
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(30px,4.5vw,52px)",
            color: "var(--slate-900)",
            letterSpacing: "-0.8px",
            lineHeight: 1.1,
          }}>
            A Clinic Built{" "}
            <span style={{
              background: "linear-gradient(90deg,var(--brand),var(--brand-dark))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Around You
            </span>
          </h2>
        </motion.div>

        {/* ── Fixed 3-column grid (2 on tablet, 1 on mobile) ── */}
        <div className="benefits-grid">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              style={{
                background: "var(--white)",
                border: "1.5px solid var(--slate-200)",
                borderRadius: "var(--r-lg)",
                padding: "28px 24px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--brand-200)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--slate-200)"}
            >
              <div style={{
                width: 48,
                height: 48,
                background: "var(--brand-50)",
                border: "1px solid var(--brand-100)",
                borderRadius: "var(--r-md)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--brand)",
                marginBottom: 16,
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 18,
                color: "var(--slate-900)",
                marginBottom: 8,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: 14,
                color: "var(--slate-500)",
                lineHeight: 1.65,
              }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .benefits-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

export default Benefits