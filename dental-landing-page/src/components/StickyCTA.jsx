import { motion } from "framer-motion"

function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        padding: "14px 24px 18px",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid var(--slate-200)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        flexWrap: "wrap",
      }}
    >
      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: 14,
        color: "var(--slate-500)",
        margin: 0,
      }}>
        🎉 <strong style={{ color: "var(--slate-700)" }}>Limited slots available</strong> — Free smile scan worth £75
      </p>

      <motion.a
        href="#form"
        whileHover={{ scale: 1.04, boxShadow: "0 10px 28px rgba(20,184,166,0.4)" }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: "inline-block",
          background: "linear-gradient(135deg, #14b8a6, #0d9488)",
          color: "white",
          padding: "12px 28px",
          borderRadius: "var(--radius-pill)",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 15,
          textDecoration: "none",
          boxShadow: "0 4px 20px rgba(20,184,166,0.35)",
          transition: "all 0.2s",
          whiteSpace: "nowrap",
        }}
      >
        Book Free Consultation →
      </motion.a>
    </motion.div>
  )
}

export default StickyCTA