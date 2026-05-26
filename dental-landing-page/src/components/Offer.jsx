import { motion } from "framer-motion"

function Offer() {
  const savings = [
    { label: "Consultation",        original: "£120", saving: "FREE",   highlight: false },
    { label: "Digital Smile Scan",  original: "£250", saving: "FREE",   highlight: false },
    { label: "Hygiene Session",     original: "£80",  saving: "FREE",   highlight: false },
    { label: "Teeth Whitening",     original: "£350", saving: "£350",   highlight: false },
    { label: "Retainers",           original: "£700", saving: "£700",   highlight: false },
    { label: "Same-Day Discount",   original: "",     saving: "£500 off", highlight: true },
  ]

  return (
    <section style={{ padding: "90px 20px", background: "var(--white)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ display: "inline-block", background: "#fff0f6", color: "var(--cta)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 14px", borderRadius: "var(--r-pill)", border: "1px solid rgba(208,17,87,0.2)", marginBottom: 14 }}>
            Limited Time Offer
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4.5vw,52px)", color: "var(--slate-900)", letterSpacing: "-0.8px", lineHeight: 1.1, marginBottom: 12 }}>
            Up to{" "}
            <span style={{ color: "var(--cta)" }}>£2,000 Savings</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--slate-500)", maxWidth: 500, margin: "0 auto" }}>
            Book your free consultation today and unlock every saving below — no obligation.
          </p>
        </motion.div>

        {/* Savings table */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
          style={{ border: "1.5px solid var(--slate-200)", borderRadius: "var(--r-xl)", overflow: "hidden", maxWidth: 680, margin: "0 auto 40px" }}>

          {/* Header row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", background: "var(--slate-900)", padding: "14px 24px", gap: 16 }}>
            {["Treatment","Worth","You Save"].map(h => (
              <span key={h} style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{h}</span>
            ))}
          </div>

          {savings.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1fr auto auto",
              padding: "16px 24px", gap: 16,
              alignItems: "center",
              background: row.highlight ? "rgba(208,17,87,0.04)" : i % 2 === 0 ? "var(--white)" : "var(--slate-50)",
              borderTop: "1px solid var(--slate-100)",
            }}>
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 15, color: "var(--slate-800)" }}>{row.label}</span>
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 14, color: "var(--slate-400)", textAlign: "right" }}>{row.original}</span>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
                color: row.highlight ? "var(--cta)" : "var(--brand)",
                textAlign: "right", whiteSpace: "nowrap",
                background: row.highlight ? "rgba(208,17,87,0.08)" : "var(--brand-50)",
                border: `1px solid ${row.highlight ? "rgba(208,17,87,0.2)" : "var(--brand-100)"}`,
                padding: "3px 10px", borderRadius: "var(--r-pill)",
              }}>
                {row.saving}
              </span>
            </div>
          ))}

          {/* Total row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", padding: "18px 24px", background: "var(--slate-900)", alignItems: "center", borderTop: "1.5px solid var(--slate-700)" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, color: "white" }}>Total Savings</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--brand-light)" }}>Up to £2,000</span>
          </div>
        </motion.div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <motion.a href="#form" whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "var(--cta)", color: "white", padding: "15px 36px", borderRadius: "var(--r-pill)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, textDecoration: "none", transition: "all 0.2s" }}>
            Claim My Savings →
          </motion.a>
          <p style={{ marginTop: 12, fontFamily: "var(--font-body)", fontSize: 12, color: "var(--slate-400)" }}>
            *Subject to clinical suitability. Terms apply. Not valid with any other offer.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Offer