import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function FAQ() {
  const [open, setOpen] = useState(0)

  const faqs = [
    { q: "Who is the ideal candidate for Clear Aligners?", a: "Clear aligners are suitable for most people with mild to moderate teeth misalignment or spacing issues. During your free consultation, Dr. Jas Gill will assess your suitability and recommend the best treatment plan for you." },
    { q: "How do Clear Aligners work?", a: "Clear aligners use a series of custom-made, removable plastic trays to gradually move your teeth into the desired position. Each set of aligners is worn for 1–2 weeks before moving to the next set in the series." },
    { q: "Is there an age limit for Clear Aligners?", a: "Clear aligners are suitable for teenagers and adults. They are particularly popular with adults who want a discreet way to straighten their teeth without the look of traditional metal braces." },
    { q: "Are Clear Aligners better than other types of orthodontics or braces?", a: "Clear aligners offer many advantages over traditional braces — they are virtually invisible, removable, and more comfortable. However, the best treatment depends on your individual case, which we'll assess at your free consultation." },
    { q: "Is the £25 deposit refundable?", a: "Yes, the £25 deposit to secure your Open Day appointment is fully refundable if you decide not to proceed with treatment after your consultation." },
    { q: "How long does treatment take?", a: "Treatment time varies depending on complexity. Most clear aligner treatments take between 6 and 18 months. Your personalised treatment plan will include a clear timeline from day one." },
  ]

  return (
    <section id="faq" style={{ padding: "80px 20px", background: "white" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: 40 }}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "var(--brand)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>Got Questions?</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(26px,4vw,44px)", color: "var(--slate-900)", letterSpacing: "-0.6px" }}>
            Frequently Asked Questions (FAQs)
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }} className="faq-layout">

          {/* Left: accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {faqs.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}
                style={{ border: `1px solid ${open===i ? "var(--brand)" : "var(--slate-200)"}`, borderRadius: "var(--r-md)", overflow: "hidden", transition: "border-color 0.18s" }}>
                <button onClick={() => setOpen(open===i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 18px", background: open===i ? "var(--brand-50)" : "white", border: "none", cursor: "pointer", textAlign: "left", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: open===i ? "var(--brand-dark)" : "var(--slate-900)", lineHeight: 1.4 }}>{f.q}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={open===i ? "var(--brand)" : "var(--slate-400)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ flexShrink: 0, transform: open===i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <AnimatePresence>
                  {open===i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} style={{ overflow: "hidden" }}>
                      <div style={{ padding: "0 18px 16px", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--slate-600)", lineHeight: 1.75 }}>{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <a href="#booking" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 8, background: "var(--brand)", color: "white", padding: "13px 24px", borderRadius: "var(--r-pill)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, textDecoration: "none", alignSelf: "flex-start" }}>
              Book Online →
            </a>
          </div>

          {/* Right: CTA image */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div style={{ background: "var(--brand)", borderRadius: "var(--r-xl)", padding: "32px 28px", marginBottom: 20 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "white", marginBottom: 10 }}>3 steps to a new straighter smile</h3>
              {[
                { step: "STEP 1", label: "Book your consultation" },
                { step: "STEP 2", label: "Start your treatment" },
                { step: "STEP 3", label: "Smile with confidence" },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 28, height: 28, background: "rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 12, color: "white" }}>{i+1}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11, color: "rgba(255,255,255,0.65)", letterSpacing: "0.07em" }}>{s.step}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, color: "white" }}>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderRadius: "var(--r-xl)", overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop"
                alt="Smile" style={{ width: "100%", height: 200, objectFit: "cover" }} />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .faq-layout { grid-template-columns: 1fr 1fr; }
        @media(max-width:768px){ .faq-layout{ grid-template-columns:1fr!important; } }
      `}</style>
    </section>
  )
}

export default FAQ