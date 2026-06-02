import { motion } from "framer-motion"
import wcu from "../assets/Images/WCU.webp";

function Benefits() {
  const items = [
    { icon: "🦷", title: "Invisible Aligners", desc: "Clear aligners are virtually invisible so no one will know you're straightening your teeth." },
    { icon: "😌", title: "Removable & Flexible", desc: "Remove them to eat, drink, and clean your teeth — no food restrictions or discomfort." },
    { icon: "💳", title: "0% Finance Available", desc: "Flexible payment plans. Smile now, pay over time with no hidden fees." },
    { icon: "⚡", title: "Faster Results", desc: "See visible improvements within weeks. Most treatments complete in 6–18 months." },
    { icon: "🔬", title: "Digital iTero Scan", desc: "State-of-the-art digital impressions — no messy moulds, instant 3D results." },
    { icon: "🛡️", title: "5-Year Guarantee", desc: "All major treatments backed by our 5-year quality guarantee for peace of mind." },
  ]

  return (
    <section id="benefits" style={{ padding: "80px 20px", background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "var(--brand)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>Why Choose Us</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(26px,4vw,44px)", color: "var(--slate-900)", letterSpacing: "-0.6px", maxWidth: 560 }}>
            Advantages of Clear Aligners
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--slate-500)", marginTop: 10, maxWidth: 480 }}>
            Clear aligners are a modern, comfortable way to straighten your teeth without the hassle of traditional braces.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }} className="benefits-layout">

          {/* Left: feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {items.slice(0,4).map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                  <rect width="24" height="24" rx="5" fill="var(--brand)"/>
                  <path d="M6 12l4 4 8-8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--slate-900)", marginBottom: 2 }}>{item.title}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--slate-500)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}

            <div style={{ marginTop: 4, padding: "14px 18px", background: "var(--brand)", borderRadius: "var(--r-md)", display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="white"/></svg>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "white" }}>Savings of £2,000* on the Open Day</span>
            </div>
          </div>

          {/* Right: image + extra items */}
          <div>
            <div style={{ borderRadius: "var(--r-xl)", overflow: "hidden", marginBottom: 20 }}>
              <img src={wcu}
                alt="Happy patient" style={{ width: "100%", height: 280, objectFit: "cover" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {items.slice(4).map((item, i) => (
                <div key={i} style={{ background: "var(--brand-50)", border: "1px solid var(--brand-100)", borderRadius: "var(--r-md)", padding: "14px" }}>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{item.icon}</div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--slate-900)", marginBottom: 4 }}>{item.title}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--slate-500)", lineHeight: 1.55 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .benefits-layout { grid-template-columns: 1fr 1fr; }
        @media(max-width:768px){ .benefits-layout{ grid-template-columns: 1fr!important; } }
      `}</style>
    </section>
  )
}

export default Benefits