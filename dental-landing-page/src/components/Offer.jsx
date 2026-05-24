import { motion } from "framer-motion"

function Offer() {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: "var(--slate-50)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #2dd4bf 100%)",
            borderRadius: 36,
            padding: "clamp(48px, 6vw, 80px) clamp(32px, 6vw, 80px)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(13,148,136,0.3)",
          }}
        >
          {/* Background circles */}
          <div style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 320,
            height: 320,
            background: "rgba(255,255,255,0.08)",
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            bottom: -100,
            left: 40,
            width: 240,
            height: 240,
            background: "rgba(255,255,255,0.06)",
            borderRadius: "50%",
          }} />

          <div style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 40,
          }}>
            <div>
              {/* Tag */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "var(--radius-pill)",
                padding: "5px 14px",
                marginBottom: 20,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.95)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}>
                  Limited Time Offer
                </span>
              </div>

              <h2 style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(38px, 6vw, 68px)",
                color: "white",
                letterSpacing: "-1.5px",
                lineHeight: 1.05,
                marginBottom: 16,
              }}>
                FREE Smile Scan<br />
                <span style={{ opacity: 0.85, fontSize: "0.65em" }}>Worth £75</span>
              </h2>

              <p style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: 18,
                color: "rgba(255,255,255,0.88)",
                maxWidth: 460,
                lineHeight: 1.65,
              }}>
                Book your consultation before slots fill up. Includes a full digital scan, treatment plan, and finance assessment — no obligation.
              </p>

              {/* Disclaimer */}
              <p style={{
                marginTop: 16,
                fontFamily: "var(--font-body)",
                fontSize: 12,
                color: "rgba(255,255,255,0.55)",
              }}>
                *Subject to clinical suitability. Terms apply. Not valid with any other offer.
              </p>
            </div>

            <motion.a
              href="#form"
              whileHover={{ scale: 1.04, boxShadow: "0 16px 40px rgba(0,0,0,0.25)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-block",
                background: "white",
                color: "var(--teal-700)",
                padding: "18px 44px",
                borderRadius: "var(--radius-pill)",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 18,
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
              }}
            >
              Claim Free Scan →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Offer