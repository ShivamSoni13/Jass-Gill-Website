import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function CookieBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 120, opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        style={{
          position: "fixed",
          bottom: 88, // above StickyCTA
          left: 16,
          right: 16,
          maxWidth: 640,
          margin: "0 auto",
          zIndex: 200,
          background: "var(--slate-900)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 20,
          padding: "20px 24px",
          boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
        role="dialog"
        aria-label="Cookie consent"
      >
        <div>
          <p style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 16,
            color: "white",
            marginBottom: 6,
          }}>
            🍪 We use cookies
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: 13,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.65,
          }}>
            We use essential cookies to make our site work. With your consent, we also use analytics and marketing cookies to improve your experience and serve relevant ads. Read our{" "}
            <a href="/cookies" style={{ color: "#2dd4bf" }}>Cookie Policy</a> for more.
          </p>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            onClick={() => setVisible(false)}
            style={{
              flex: 1,
              minWidth: 120,
              background: "linear-gradient(135deg, #14b8a6, #0d9488)",
              color: "white",
              padding: "11px 20px",
              borderRadius: "var(--radius-pill)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 14,
              border: "none",
              cursor: "pointer",
            }}
          >
            Accept All
          </button>
          <button
            onClick={() => setVisible(false)}
            style={{
              flex: 1,
              minWidth: 120,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.7)",
              padding: "11px 20px",
              borderRadius: "var(--radius-pill)",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Essential Only
          </button>
          <button
            onClick={() => setVisible(false)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.35)",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              cursor: "pointer",
              padding: "11px 8px",
              textDecoration: "underline",
            }}
          >
            Manage Preferences
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CookieBanner