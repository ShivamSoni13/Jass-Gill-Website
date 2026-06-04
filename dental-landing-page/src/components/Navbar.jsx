import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import smileLogo from "../assets/Images/Smile logo.png"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  const links = [
    { label: "Benefits",    href: "#benefits" },
    { label: "Results",     href: "#transformations" },
    { label: "Reviews",     href: "#reviews" },
    { label: "FAQ",         href: "#faq" },
  ]

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "white",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: "1px solid var(--slate-200)",
        padding: "0 20px",
        transition: "all 0.25s",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src={smileLogo}
              alt="Smile Dental Care"
              style={{ height: 60, width: "auto", objectFit: "contain" }}
            />

            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 17,
                color: "var(--slate-900)"
              }}
            >
              Smile Dental Care
            </span>
          </a>

          {/* Desktop links */}
          <div className="desk-nav" style={{ display: "flex", gap: 2, alignItems: "center" }}>
            {links.map(l => (
              <a key={l.label} href={l.href} style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 14, color: "var(--slate-600)", textDecoration: "none", padding: "7px 13px", borderRadius: "var(--r-pill)", transition: "all 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--brand)"; e.currentTarget.style.background = "var(--brand-50)" }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--slate-600)"; e.currentTarget.style.background = "transparent" }}
              >{l.label}</a>
            ))}
            <a
              href="https://calendly.com/booksmiledentalcare/clear-aligners-open-day-sat-4th-july-with-dr-aisha"
              onClick={() => {
                window?.fbq?.('track', 'Lead');
              }}
              style={{
                marginLeft: 8,
                background: "var(--brand)",
                color: "white",
                padding: "9px 20px",
                borderRadius: "var(--r-pill)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                transition: "background 0.15s",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--brand-dark)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--brand)"}
            >
              Book Online
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(o => !o)} className="ham-btn"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }}
            aria-label="Toggle menu">
            <div style={{ width: 22, display: "flex", flexDirection: "column", gap: 5 }}>
              {[0,1,2].map(i => (
                <span key={i} style={{ height: 2, background: "var(--slate-800)", borderRadius: 2, display: "block", transition: "all 0.22s",
                  transform: i===0&&menuOpen?"rotate(45deg) translateY(7px)":i===2&&menuOpen?"rotate(-45deg) translateY(-7px)":"none",
                  opacity: i===1&&menuOpen?0:1 }} />
              ))}
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.18 }}
            style={{ position: "fixed", top: 62, left: 0, right: 0, zIndex: 99, background: "white", borderBottom: "1px solid var(--slate-100)", padding: "12px 20px 20px" }}>
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 16, color: "var(--slate-700)", textDecoration: "none", padding: "12px 4px", borderBottom: "1px solid var(--slate-100)" }}>{l.label}</a>
            ))}
             <a
                href="https://calendly.com/booksmiledentalcare/clear-aligners-open-day-sat-4th-july-with-dr-aisha"
                onClick={() => {
                  setMenuOpen(false);
                  window?.fbq?.('track', 'Lead');
                }}
                style={{
                  display: "block",
                  marginTop: 12,
                  background: "var(--brand)",
                  color: "white",
                  padding: "13px 24px",
                  borderRadius: "var(--r-pill)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  textAlign: "center"
                }}
              >
                Book Online
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