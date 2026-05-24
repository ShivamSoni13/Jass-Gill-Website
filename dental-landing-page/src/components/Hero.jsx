import { motion } from "framer-motion"

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}>
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1800&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
        {/* Gradient Overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, rgba(15,23,42,0.82) 0%, rgba(13,148,136,0.55) 55%, rgba(15,23,42,0.35) 100%)",
        }} />
        {/* Bottom fade to white */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: "linear-gradient(to bottom, transparent, white)",
        }} />
      </div>

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: 1200,
        margin: "0 auto",
        padding: "120px 24px 80px",
        width: "100%",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          style={{ maxWidth: 680 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(20,184,166,0.18)",
              border: "1px solid rgba(45,212,191,0.4)",
              borderRadius: "var(--radius-pill)",
              padding: "6px 16px",
              marginBottom: 24,
            }}
          >
            <div style={{
              width: 8,
              height: 8,
              background: "#2dd4bf",
              borderRadius: "50%",
              animation: "pulse 2s infinite",
            }} />
            <span style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: 14,
              color: "#99f6e4",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}>
              CQC Registered · GDC Certified Clinicians
            </span>
          </motion.div>

          {/* Heading */}
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(44px, 7vw, 80px)",
            lineHeight: 1.05,
            color: "white",
            marginBottom: 24,
            letterSpacing: "-1.5px",
          }}>
            Your Healthiest,
            <span style={{
              display: "block",
              background: "linear-gradient(90deg, #2dd4bf, #5eead4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Most Confident
            </span>
            Smile Yet.
          </h1>

          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 520,
          }}>
            Invisible aligners, pain-free procedures, and flexible 0% APR finance — trusted by thousands of patients across the UK.
          </p>

          {/* Trust indicators */}
          <div style={{
            display: "flex",
            gap: 24,
            marginBottom: 40,
            flexWrap: "wrap",
          }}>
            {[
              { num: "4,800+", label: "Smiles Transformed" },
              { num: "4.9★", label: "Average Rating" },
              { num: "0%", label: "Finance Available" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "left" }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 28,
                  color: "#2dd4bf",
                  letterSpacing: "-0.5px",
                }}>
                  {stat.num}
                </div>
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.6)",
                  marginTop: 2,
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <motion.a
              href="#form"
              whileHover={{ y: -3, boxShadow: "0 12px 36px rgba(20,184,166,0.5)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #14b8a6, #0d9488)",
                color: "white",
                padding: "16px 36px",
                borderRadius: "var(--radius-pill)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 17,
                textDecoration: "none",
                boxShadow: "0 6px 24px rgba(20,184,166,0.4)",
                transition: "all 0.2s",
              }}
            >
              Book Free Consultation →
            </motion.a>

            <motion.a
              href="https://wa.me/447000000000"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "white",
                padding: "16px 30px",
                borderRadius: "var(--radius-pill)",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: 16,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </motion.a>
          </div>

          {/* CQC note */}
          <p style={{
            marginTop: 28,
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.5,
          }}>
            Regulated by the Care Quality Commission (CQC) · All clinicians registered with the General Dental Council (GDC)
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>
    </section>
  )
}

export default Hero