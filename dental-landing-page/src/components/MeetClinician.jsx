import { motion } from "framer-motion"
import jasImage from "../assets/Images/jas-Image.webp";


function MeetClinician() {
  return (
    <section id="clinician" style={{ padding: "80px 20px", background: "var(--slate-900)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "var(--brand-light)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Your Smile Expert
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(26px,4vw,44px)", color: "white", letterSpacing: "-0.6px" }}>
            Meet our clinician
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="clinician-card"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "var(--r-2xl)",
            overflow: "hidden",
          }}
        >

          {/* Top teal band — name + credentials (like reference) */}
          <div style={{
            background: "var(--brand)",
            padding: "18px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "white", marginBottom: 3 }}>
                Dr. Jas Gill
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 13, color: "rgba(255,255,255,0.82)" }}>
                Dentist — BDS London (LMCHDS) (MJDF RCS)
              </p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {["GDC Registered","Invisalign Certified"].map(b => (
                <span key={b} style={{
                  background: "rgba(255,255,255,0.18)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "white",
                  fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11,
                  padding: "4px 12px", borderRadius: "var(--r-pill)",
                }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="clinician-body" style={{ display: "grid", gridTemplateColumns: "280px 1fr", alignItems: "start" }}>

            {/* Photo */}
            <div style={{ position: "relative" }}>
              <img
                src={jasImage}
                alt="Dr. Jas Gill"
                style={{
                  width: "100%",
                  height: 380,
                  objectFit: "contain",
                  objectPosition: "center",
                  display: "block"
                }}
              />
              {/* Overlay gradient */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, rgba(15,23,42,0.5), transparent)" }} />
            </div>

            {/* Info */}
            <div style={{ padding: "32px 36px" }}>

              <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, color: "rgba(255,255,255,0.72)", lineHeight: 1.8, marginBottom: 28 }}>
                Dr. Jas Gill is a highly experienced dentist with a special interest in clear aligner orthodontics and cosmetic dentistry. Having treated hundreds of patients across the UK, Dr. Gill is dedicated to delivering life-changing smile transformations in a comfortable, patient-first environment.
              </p>

              {/* Credentials list */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }} className="cred-grid">
                {[
                  { icon: "🎓", label: "BDS London" },
                  { icon: "🏆", label: "MJDF RCS" },
                  { icon: "✅", label: "Invisalign Certified" },
                  { icon: "⭐", label: "4.9★ Patient Rating" },
                  { icon: "👥", label: "500+ Patients Treated" },
                  { icon: "🦷", label: "Clear Aligner Specialist" },
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 34, height: 34, background: "rgba(15,166,190,0.14)", border: "1px solid rgba(15,166,190,0.28)", borderRadius: "var(--r-sm)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 13, color: "rgba(255,255,255,0.78)" }}>{c.label}</span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div style={{ background: "rgba(15,166,190,0.1)", border: "1px solid rgba(15,166,190,0.22)", borderRadius: "var(--r-md)", padding: "16px 18px", marginBottom: 28 }}>
                <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontWeight: 300, fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
                  "My goal is simple — to give every patient a smile they're truly proud of, using the latest techniques in a relaxed and welcoming environment."
                </p>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "var(--brand-light)", marginTop: 10 }}>
                  — Dr. Jas Gill
                </p>
              </div>

              {/* CTA */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="https://calendly.com/booksmiledentalcare/openday-aligners" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "var(--brand)", color: "white",
                  padding: "12px 24px", borderRadius: "var(--r-pill)",
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
                  textDecoration: "none", transition: "background 0.18s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--brand-dark)"}
                  onMouseLeave={e => e.currentTarget.style.background = "var(--brand)"}
                >
                  📅 Book with Dr. Gill
                </a>
                <a href="https://wa.me/447305153359" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#25D366", color: "white",
                  padding: "12px 22px", borderRadius: "var(--r-pill)",
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
                  textDecoration: "none", transition: "background 0.18s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "#1aad54"}
                  onMouseLeave={e => e.currentTarget.style.background = "#25D366"}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>

            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        .clinician-body { grid-template-columns: 280px 1fr; }
        .cred-grid      { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .clinician-body { grid-template-columns: 1fr !important; }
          .clinician-body img { height: 260px !important; width: 100% !important; }
          .cred-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default MeetClinician
