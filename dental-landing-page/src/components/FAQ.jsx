import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function FAQ() {
  const [open, setOpen] = useState(null)

  const faqs = [
    { q: "How long does treatment take?", a: "Treatment duration depends on your case. Most Invisalign treatments take 6–18 months. During your free consultation your clinician will provide a personalised plan with a clear timeline." },
    { q: "Is 0% finance really available?", a: "Yes. We offer 0% APR finance on treatments over £500, subject to status. Our finance partner carries out a soft credit check which does not affect your credit score. Full terms are provided before you sign." },
    { q: "Is the Free Smile Scan genuinely free?", a: "Yes — completely free with no obligation. If you decide to proceed with treatment your clinician will provide a full written quote." },
    { q: "How do you handle my personal data?", a: "Your data is processed under GDPR (UK) on the lawful basis of consent. We never sell your data to third parties. You can withdraw consent and request deletion at any time by emailing dpo@brightsmile.co.uk." },
    { q: "What happens after treatment?", a: "All patients receive a custom retainer plan to maintain results. Major treatments are backed by our 5-year quality guarantee." },
    { q: "Do you offer a complaints procedure?", a: "Yes. Submit a complaint to complaints@brightsmile.co.uk. If unresolved you may escalate to the Dental Complaints Service or the Care Quality Commission." },
  ]

  return (
    <section id="faq" style={{ padding: "90px 20px", background: "var(--slate-900)" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ textAlign: "center", marginBottom: 52 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4.5vw,52px)", color: "white", letterSpacing: "-0.8px", marginBottom: 10 }}>Common Questions</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.45)" }}>
            Still have questions? Call us on <a href="tel:+441234567890" style={{ color: "var(--brand-light)", textDecoration: "none" }}>01234 567 890</a>
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {faqs.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.38, delay: i * 0.06 }}
              style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${open===i ? "rgba(15,166,190,0.38)" : "rgba(255,255,255,0.08)"}`, borderRadius: "var(--r-lg)", overflow: "hidden", transition: "border-color 0.2s" }}>
              <button onClick={() => setOpen(open===i ? null : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 14 }}
                aria-expanded={open===i}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: open===i ? "var(--brand-light)" : "white", transition: "color 0.2s", lineHeight: 1.4 }}>{f.q}</span>
                <div style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: open===i ? "rgba(15,166,190,0.18)" : "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={open===i ? "var(--brand-light)" : "rgba(255,255,255,0.5)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open===i ? "rotate(180deg)" : "none", transition: "transform 0.22s" }}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </button>
              <AnimatePresence>
                {open===i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24 }} style={{ overflow: "hidden" }}>
                    <div style={{ padding: "0 24px 20px", fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 14, color: "rgba(255,255,255,0.62)", lineHeight: 1.75 }}>{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ