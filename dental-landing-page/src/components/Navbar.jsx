import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  const links = [
    { label: "Benefits",        href: "#benefits" },
    { label: "Transformations", href: "#transformations" },
    { label: "Reviews",         href: "#reviews" },
    { label: "FAQ",             href: "#faq" },
  ]

  const textCol = scrolled ? "var(--slate-700)" : "rgba(255,255,255,0.88)"

  return (
    <>
      <motion.nav
        initial={{ y: -72, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--slate-200)" : "none",
          transition: "all 0.28s ease", padding: "0 20px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", height: 66, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, background: "linear-gradient(135deg,var(--brand),var(--brand-dark))", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.5 2 7 4.5 7 7c0 1.5.5 3 1 4.5C9 14 9 16 8 18c-.5 1.5 0 4 4 4s4.5-2.5 4-4c-1-2-1-4 0-6.5.5-1.5 1-3 1-4.5 0-2.5-1.5-5-5-5z" fill="white"/></svg>
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 19, color: scrolled ? "var(--slate-900)" : "white", letterSpacing: "-0.4px", transition: "color 0.28s" }}>BrightSmile</span>
          </a>

          {/* Desktop */}
          <div className="desk-nav" style={{ display: "flex", gap: 2, alignItems: "center" }}>
            {links.map(l => (
              <a key={l.label} href={l.href} style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 14, color: textCol, textDecoration: "none", padding: "8px 14px", borderRadius: "var(--r-pill)", transition: "all 0.18s" }}
                onMouseEnter={e => { e.currentTarget.style.background = scrolled ? "var(--brand-50)" : "rgba(255,255,255,0.12)"; e.currentTarget.style.color = scrolled ? "var(--brand)" : "white" }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = textCol }}
              >{l.label}</a>
            ))}
            <a href="#form" style={{ marginLeft: 8, background: "var(--cta)", color: "white", padding: "10px 22px", borderRadius: "var(--r-pill)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, textDecoration: "none", transition: "all 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--cta-dark)" }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--cta)" }}
            >Free Consultation</a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(o => !o)} className="ham-btn"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }}
            aria-label="Toggle menu">
            <div style={{ width: 22, display: "flex", flexDirection: "column", gap: 5 }}>
              {[0,1,2].map(i => (
                <span key={i} style={{ height: 2, background: scrolled ? "var(--slate-800)" : "white", borderRadius: 2, display: "block", transition: "all 0.25s",
                  transform: i===0&&menuOpen ? "rotate(45deg) translateY(7px)" : i===2&&menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
                  opacity: i===1&&menuOpen ? 0 : 1 }} />
              ))}
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.2 }}
            style={{ position: "fixed", top: 66, left: 0, right: 0, zIndex: 99, background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--slate-100)", padding: "14px 20px 22px" }}>
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 16, color: "var(--slate-700)", textDecoration: "none", padding: "12px 4px", borderBottom: "1px solid var(--slate-100)" }}>{l.label}</a>
            ))}
            <a href="#form" onClick={() => setMenuOpen(false)}
              style={{ display: "block", marginTop: 14, background: "var(--cta)", color: "white", padding: "14px 24px", borderRadius: "var(--r-pill)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, textDecoration: "none", textAlign: "center" }}>
              Book Free Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:768px){ .desk-nav{display:none!important} .ham-btn{display:block!important} }
      `}</style>
    </>
  )
}

export default Navbar