import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function CookieBanner() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ duration: 0.38, ease: "easeOut" }}
        style={{ position: "fixed", bottom: 80, left: 16, right: 16, maxWidth: 600, margin: "0 auto", zIndex: 200, background: "var(--slate-900)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--r-xl)", padding: "20px 22px", display: "flex", flexDirection: "column", gap: 14 }}
        role="dialog" aria-label="Cookie consent"
      >
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "white", marginBottom: 5 }}>🍪 We use cookies</p>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 12, color: "rgba(255,255,255,0.52)", lineHeight: 1.65 }}>
            We use essential cookies to make our site work. With your consent, we also use analytics cookies to improve your experience. Read our <a href="/cookies" style={{ color: "var(--brand-light)" }}>Cookie Policy</a>.
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button onClick={() => setVisible(false)} style={{ flex: 1, minWidth: 110, background: "var(--brand)", color: "white", padding: "10px 18px", borderRadius: "var(--r-pill)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, border: "none", cursor: "pointer" }}>Accept All</button>
          <button onClick={() => setVisible(false)} style={{ flex: 1, minWidth: 110, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", padding: "10px 18px", borderRadius: "var(--r-pill)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Essential Only</button>
          <button onClick={() => setVisible(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.32)", fontFamily: "var(--font-body)", fontSize: 12, cursor: "pointer", padding: "10px 6px", textDecoration: "underline" }}>Manage Preferences</button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CookieBanner