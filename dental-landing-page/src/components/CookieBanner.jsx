import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")

    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setVisible(false)
  }

  const handleEssentialOnly = () => {
    localStorage.setItem("cookieConsent", "essential")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "fixed",
          bottom: 72,
          left: 16,
          right: 16,
          maxWidth: 560,
          margin: "0 auto",
          zIndex: 200,
          background: "var(--slate-900)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "var(--r-xl)",
          padding: "18px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
        role="dialog"
        aria-label="Cookie consent"
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 14,
            color: "white",
            marginBottom: 4,
          }}
        >
          🍪 We use cookies
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: 12,
            color: "rgba(255,255,255,0.52)",
            lineHeight: 1.65,
          }}
        >
          We use essential cookies to make our site work. With your consent we
          also use analytics cookies.{" "}
          <a
            href="/cookies"
            style={{ color: "var(--brand-light)" }}
          >
            Cookie Policy
          </a>
          .
        </p>

        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={handleAccept}
            style={{
              flex: 1,
              minWidth: 100,
              background: "var(--brand)",
              color: "white",
              padding: "9px 16px",
              borderRadius: "var(--r-pill)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 13,
              border: "none",
              cursor: "pointer",
            }}
          >
            Accept All
          </button>

          <button
            onClick={handleEssentialOnly}
            style={{
              flex: 1,
              minWidth: 100,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
              padding: "9px 16px",
              borderRadius: "var(--r-pill)",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Essential Only
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CookieBanner