import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const links = [
    { label: "Benefits", href: "#benefits" },
    { label: "Transformations", href: "#transformations" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(255,255,255,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid #e2e8f0" : "none",
          padding: "0 24px",
        }}
      >
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <a href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 36,
                height: 36,
                background: "linear-gradient(135deg, #14b8a6, #0d9488)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.5 2 7 4.5 7 7c0 1.5.5 3 1 4.5C9 14 9 16 8 18c-.5 1.5 0 4 4 4s4.5-2.5 4-4c-1-2-1-4 0-6.5.5-1.5 1-3 1-4.5 0-2.5-1.5-5-5-5z" fill="white"/>
                </svg>
              </div>
              <span style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 20,
                color: "var(--slate-900)",
                letterSpacing: "-0.5px",
              }}>
                Smile Dental Care
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }} className="desktop-nav">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: 15,
                  color: "var(--slate-600)",
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "var(--radius-pill)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  e.target.style.background = "var(--teal-50)"
                  e.target.style.color = "var(--teal-600)"
                }}
                onMouseLeave={e => {
                  e.target.style.background = "transparent"
                  e.target.style.color = "var(--slate-600)"
                }}
              >
                {link.label}
              </a>
            ))}

            {/* CTA */}
            <a
              href="#form"
              style={{
                marginLeft: 8,
                background: "linear-gradient(135deg, #14b8a6, #0d9488)",
                color: "white",
                padding: "10px 24px",
                borderRadius: "var(--radius-pill)",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                boxShadow: "0 4px 20px rgba(20,184,166,0.35)",
                transition: "all 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={e => {
                e.target.style.transform = "translateY(-2px)"
                e.target.style.boxShadow = "0 8px 28px rgba(20,184,166,0.45)"
              }}
              onMouseLeave={e => {
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "0 4px 20px rgba(20,184,166,0.35)"
              }}
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "none",
            }}
            aria-label="Toggle menu"
          >
            <div style={{ width: 24, display: "flex", flexDirection: "column", gap: 5 }}>
              <span style={{ height: 2, background: "var(--slate-800)", borderRadius: 2, display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
              <span style={{ height: 2, background: "var(--slate-800)", borderRadius: 2, display: "block", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ height: 2, background: "var(--slate-800)", borderRadius: 2, display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: 72,
              left: 0,
              right: 0,
              zIndex: 99,
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--slate-200)",
              padding: "20px 24px 28px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: 18,
                    color: "var(--slate-700)",
                    textDecoration: "none",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--slate-100)",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#form"
                onClick={() => setMenuOpen(false)}
                style={{
                  marginTop: 12,
                  background: "linear-gradient(135deg, #14b8a6, #0d9488)",
                  color: "white",
                  padding: "14px 24px",
                  borderRadius: "var(--radius-pill)",
                  fontWeight: 700,
                  fontSize: 16,
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  textAlign: "center",
                }}
              >
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}

export default Navbar