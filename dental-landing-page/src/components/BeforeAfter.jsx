import { motion } from "framer-motion"

function BeforeAfter() {
  const cases = [
    {
      before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop",
      label: "Invisalign Treatment",
      duration: "8 months",
    },
    {
      before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
      label: "Teeth Whitening",
      duration: "3 sessions",
    },
  ]

  return (
    <section
      id="transformations"
      style={{
        padding: "100px 24px",
        background: "var(--white)",
      }}
    >
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
            Real Patient Results
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(34px, 5vw, 56px)",
            color: "var(--slate-900)",
            letterSpacing: "-1px",
          }}>
            Smile Transformations
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 17,
            color: "var(--slate-500)",
            marginTop: 12,
            maxWidth: 500,
            margin: "12px auto 0",
          }}>
            Every smile is unique. These are real results from our patients — individual outcomes may vary.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "var(--slate-50)",
                borderRadius: 32,
                padding: "32px",
                border: "1px solid var(--slate-200)",
              }}
            >
              {/* Case header */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 24,
                flexWrap: "wrap",
                gap: 12,
              }}>
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "var(--slate-900)",
                  }}>
                    {c.label}
                  </h3>
                </div>
                <div style={{
                  background: "var(--teal-100)",
                  color: "var(--teal-700)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 14,
                  padding: "6px 16px",
                  borderRadius: "var(--radius-pill)",
                }}>
                  {c.duration}
                </div>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}>
                {/* Before */}
                <div style={{ position: "relative" }}>
                  <img
                    src={c.before}
                    alt={`Before ${c.label}`}
                    style={{
                      width: "100%",
                      height: 340,
                      objectFit: "cover",
                      borderRadius: 20,
                      display: "block",
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    background: "rgba(15,23,42,0.7)",
                    backdropFilter: "blur(8px)",
                    color: "white",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "5px 12px",
                    borderRadius: "var(--radius-pill)",
                  }}>
                    Before
                  </div>
                </div>

                {/* After */}
                <div style={{ position: "relative" }}>
                  <img
                    src={c.after}
                    alt={`After ${c.label}`}
                    style={{
                      width: "100%",
                      height: 340,
                      objectFit: "cover",
                      borderRadius: 20,
                      display: "block",
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    background: "linear-gradient(135deg, #14b8a6, #0d9488)",
                    color: "white",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "5px 12px",
                    borderRadius: "var(--radius-pill)",
                    boxShadow: "0 4px 12px rgba(20,184,166,0.4)",
                  }}>
                    After
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p style={{
          marginTop: 32,
          textAlign: "center",
          fontFamily: "var(--font-body)",
          fontSize: 13,
          color: "var(--slate-400)",
          lineHeight: 1.6,
        }}>
          Results shown are for illustrative purposes. Individual patient outcomes may vary. All treatments are carried out by GDC-registered clinicians.
        </p>
      </div>
    </section>
  )
}

export default BeforeAfter