import { motion } from "framer-motion"

function Benefits() {
  const items = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.5 2 7 4.5 7 7c0 1.5.5 3 1 4.5C9 14 9 16 8 18c-.5 1.5 0 4 4 4s4.5-2.5 4-4c-1-2-1-4 0-6.5.5-1.5 1-3 1-4.5 0-2.5-1.5-5-5-5z"/>
        </svg>
      ),
      title: "Invisible Aligners",
      desc: "Discreet, removable aligners that fit your lifestyle. No metal, no discomfort.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 13s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      title: "Pain-Free Treatment",
      desc: "State-of-the-art procedures designed for maximum comfort from day one.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
      title: "0% Finance & EMI",
      desc: "Flexible payment plans with 0% APR options available. Smile now, pay over time.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: "Fast Results",
      desc: "See visible improvements within weeks. Most treatments complete in 6–12 months.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: "GDC Registered",
      desc: "Every clinician is General Dental Council certified, ensuring the highest standards of care.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: "CQC Regulated",
      desc: "Our practice is registered and regularly inspected by the Care Quality Commission.",
    },
  ]

  return (
    <section
      id="benefits"
      style={{
        padding: "100px 24px",
        background: "var(--slate-50)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background pattern */}
      <div style={{
        position: "absolute",
        top: -100,
        right: -100,
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
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
            Why Patients Choose Us
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(34px, 5vw, 56px)",
            color: "var(--slate-900)",
            letterSpacing: "-1px",
            lineHeight: 1.1,
          }}>
            A Smile Clinic Built
            <span style={{
              background: "linear-gradient(90deg, #14b8a6, #0d9488)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline",
            }}> Around You</span>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(14,116,144,0.12)" }}
              style={{
                background: "var(--white)",
                border: "1px solid var(--slate-200)",
                borderRadius: "var(--radius-card)",
                padding: "36px 32px",
                cursor: "default",
                transition: "all 0.3s ease",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div style={{
                width: 56,
                height: 56,
                background: "var(--teal-50)",
                border: "1px solid var(--teal-100)",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--teal-600)",
                marginBottom: 20,
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 20,
                color: "var(--slate-900)",
                marginBottom: 10,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: 15,
                color: "var(--slate-600)",
                lineHeight: 1.65,
              }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits