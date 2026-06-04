import { motion } from "framer-motion"
import offer from "../assets/Images/Jas Gill 1.webp";

function Offer() {
  return (
    <section id="offer" style={{ padding: "80px 20px", background: "var(--slate-50)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Open Day CTA band */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ background: "var(--slate-900)", borderRadius: "var(--r-xl)", padding: "20px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, background: "#22c55e", borderRadius: "50%", animation: "blink 2s infinite" }} />
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,0.7)", letterSpacing: "0.04em" }}>Message Us or book online — Limited Availability</span>
            </div>
            {/* <a href="tel:+441234567890" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--brand-light)", textDecoration: "none" }}>📞 01234 567890</a> */}
          </div>
          <a href="https://calendly.com/booksmiledentalcare/openday-aligners" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--brand)", color: "white", padding: "12px 24px", borderRadius: "var(--r-pill)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, textDecoration: "none", whiteSpace: "nowrap" }}>
            📅 Book Online
          </a>
        </motion.div>

        {/* Ultimate package */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="pkg-grid">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "var(--brand)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>Open Day Exclusive</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(26px,3.5vw,40px)", color: "var(--slate-900)", letterSpacing: "-0.6px", marginBottom: 16 }}>
              The ultimate Clear Aligner treatment package
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--brand)", fontWeight: 700, marginBottom: 16 }}>
              Savings of £2,000* on the Open Day
            </p>

            {[
              { label: "£500 off Clear Aligner treatment" },
              { label: "Free consultation" },
              { label: "Free smile scan", val: "£300" },
              { label: "Free retainers", val: "£850" },
              { label: "Free teeth whitening", val: "£350" },
              { label: "Free 12 months aftercare" },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--slate-100)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <rect width="24" height="24" rx="5" fill="var(--brand)"/>
                    <path d="M6 12l4 4 8-8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 14, color: "var(--slate-800)" }}>{row.label}</span>
                </div>
                {row.val && <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "var(--slate-400)", textDecoration: "line-through" }}>{row.val}</span>}
              </div>
            ))}

             <a
            href="https://calendly.com/booksmiledentalcare/clear-aligners-open-day-sat-4th-july-with-dr-aisha"
            onClick={() => {
              window?.fbq?.('track', 'Lead');
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--brand)",
              color: "white",
              padding: "12px 24px",
              borderRadius: "var(--r-pill)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              whiteSpace: "nowrap"
            }}
            >
            📅 Book Online
          </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div style={{ borderRadius: "var(--r-xl)", overflow: "hidden" }}>
              <img src={offer} alt="Happy patient" style={{ width: "100%", height: 480, objectFit: "cover" }} />
            </div>
          </motion.div>
        </div>

        <p style={{ marginTop: 20, fontFamily: "var(--font-body)", fontSize: 11, color: "var(--slate-400)" }}>
          *Subject to clinical suitability. Terms apply. Not valid with any other offer. £25 refundable deposit required to secure your place.
        </p>
      </div>

      <style>{`
        .pkg-grid { grid-template-columns: 1fr 1fr; }
        @media(max-width:768px){ .pkg-grid{ grid-template-columns:1fr!important; } }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0.4} }
      `}</style>
    </section>
  )
}

export default Offer