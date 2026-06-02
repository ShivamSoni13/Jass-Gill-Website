import { motion } from "framer-motion"

const savings = [
  { label: "£500 off Clear Aligner treatment" },
  { label: "Free smile scan", sub: "worth £250" },
  { label: "Free retainers", sub: "worth £788" },
  { label: "Free teeth whitening", sub: "worth £299" },
  { label: "Free 12 months aftercare" },
]

function Hero() {
  return (
    <section style={{ background: "white", paddingTop: 62 }}>

      {/* ── Top hero band ── */}
      <div
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(240, 247, 250, 0.82),
        rgba(240, 247, 250, 0.82)
      ),
      url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1080&auto=format&fit=crop")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderBottom: "1px solid var(--brand-100)",
    padding: "clamp(40px,6vw,72px) 20px 0"
  }}
>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          <div className="hero-top-grid">

            {/* Left copy */}
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} style={{ paddingBottom: "clamp(32px,5vw,60px)" }}>

              {/* Logo badge row */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <img src="/logo.png" alt="Smile Dental Care" style={{ height: 32, objectFit: "contain" }}
                  onError={e => e.target.style.display = "none"} />
              </div>

              <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 14, color: "var(--brand)", marginBottom: 10, letterSpacing: "0.02em" }}>
                Join us for our
              </p>

              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4.5vw,52px)", color: "var(--slate-900)", lineHeight: 1.1, letterSpacing: "-0.8px", marginBottom: 16 }}>
                Clear Aligner<br />Open Day In Slough
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--slate-500)", marginBottom: 20, lineHeight: 1.6, maxWidth: 380 }}>
                Book your free consultation from your local Clear Aligner provider.
              </p>

              {/* Progress / trust bar */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 0 }}>
                <div style={{ flex: 1, height: 6, background: "var(--brand-100)", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ width: "72%", height: "100%", background: "var(--brand)", borderRadius: 99 }} />
                </div>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, color: "var(--brand)", whiteSpace: "nowrap" }}>
                  72% slots filled
                </span>
              </div>
            </motion.div>

            {/* Right: Calendly */}
            <motion.div
              className="hero-cal"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              style={{ alignSelf: "end" }}
            >
              <div style={{ background: "white", borderRadius: "var(--r-xl) var(--r-xl) 0 0", overflow: "hidden", border: "1px solid var(--slate-200)", borderBottom: "none" }}>
                <div style={{ background: "var(--brand)", padding: "14px 20px" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "white", marginBottom: 2 }}>
                    📅 Book Your FREE* Consultation
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.82)" }}>
                    Select a date &amp; time below — zero obligation
                  </p>
                </div>
                {/* Replace with your Calendly link */}
                <iframe
                  src="https://calendly.com/booksmiledentalcare/openday-aligners"
                  width="100%" height="460" frameBorder="0"
                  title="Book a consultation"
                  style={{ display: "block" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Savings bar ── */}
      <div style={{ background: "var(--brand)", padding: "0 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(18px,3vw,28px)", color: "white", textAlign: "center", padding: "22px 0 16px", letterSpacing: "-0.4px" }}>
            Book Your FREE* Consultation below<br />
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "clamp(13px,2vw,17px)", opacity: 0.88 }}>Up to £1,837 in savings just for one day!</span>
          </p>

          {/* Savings chips */}
          <div className="savings-grid" style={{ paddingBottom: 24 }}>
            {savings.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                style={{ background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: "var(--r-md)", padding: "12px 14px", display: "flex", alignItems: "flex-start", gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                  <rect width="24" height="24" rx="4" fill="rgba(255,255,255,0.25)"/>
                  <path d="M6 12l4 4 8-8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "white", display: "block", lineHeight: 1.35 }}>{s.label}</span>
                  {s.sub && <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 12, color: "rgba(255,255,255,0.78)" }}>{s.sub}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: end;
        }
        .savings-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
        }
        @media (max-width: 900px) {
          .hero-top-grid { grid-template-columns: 1fr; gap: 28px; }
          .hero-cal { order: -1; }
          .savings-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .savings-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

export default Hero