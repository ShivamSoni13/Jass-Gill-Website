function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: "var(--slate-900)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "64px 24px 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 48,
          marginBottom: 56,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
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
                color: "white",
              }}>
                Smile Dental Care
              </span>
            </div>
            <p style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: 14,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.7,
              maxWidth: 240,
            }}>
              GDC-registered dental clinic delivering exceptional smile transformations across the UK.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
              {[
                { label: "CQC", color: "#14b8a6" },
                { label: "GDC", color: "#0d9488" },
                { label: "BDA", color: "#0f766e" },
              ].map(badge => (
                <div key={badge.label} style={{
                  background: `rgba(${badge.label === "CQC" ? "20,184,166" : badge.label === "GDC" ? "13,148,136" : "15,118,110"},0.15)`,
                  border: `1px solid rgba(${badge.label === "CQC" ? "20,184,166" : "255,255,255"},0.2)`,
                  color: badge.color,
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 12,
                  padding: "4px 10px",
                  borderRadius: 6,
                }}>
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h4 style={footerHeading}>Treatments</h4>
            {["Invisible Aligners", "Composite Bonding", "Teeth Whitening", "Dental Veneers", "Emergency Dental"].map(t => (
              <a key={t} href="#" style={footerLink}>{t}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={footerHeading}>Company</h4>
            {["About Us", "Our Clinicians", "Careers", "Press", "Contact Us"].map(t => (
              <a key={t} href="#" style={footerLink}>{t}</a>
            ))}
          </div>

          {/* CTA */}
          <div>
            <h4 style={footerHeading}>Book Your Free Scan</h4>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.65,
              marginBottom: 20,
            }}>
              No obligation consultation, worth £75. Limited appointments available.
            </p>
            <a
              href="#form"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #14b8a6, #0d9488)",
                color: "white",
                padding: "12px 24px",
                borderRadius: "var(--radius-pill)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(20,184,166,0.3)",
              }}
            >
              Book Now →
            </a>

            <div style={{ marginTop: 24 }}>
              <a href="tel:+441234567890" style={{ ...footerLink, display: "block", marginBottom: 4 }}>
                📞 01234 567 890
              </a>
              <a href="mailto:hello@Smile Dental Care.co.uk" style={footerLink}>
                ✉ hello@Smile Dental Care.co.uk
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 28,
        }}>
          {/* Compliance notice */}
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
            lineHeight: 1.7,
            marginBottom: 20,
            maxWidth: 900,
          }}>
            Smile Dental Care Ltd is registered in England & Wales (Company No. 12345678). Registered address: 100 Smile Street, London, EC1A 1BB.
            All clinicians are registered with the General Dental Council (GDC). Our practice is regulated by the Care Quality Commission (CQC), registration number 1234567890.
            Finance subject to status. Credit provided by Dental Finance Ltd, authorised and regulated by the Financial Conduct Authority.
            Results shown are for illustrative purposes only; individual outcomes may vary.
          </p>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "rgba(255,255,255,0.3)",
            }}>
              © {year} Smile Dental Care Dental Ltd. All rights reserved.
            </p>

            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
                { label: "Complaints", href: "/complaints" },
                { label: "Accessibility", href: "/accessibility" },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.target.style.color = "#2dd4bf"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.35)"}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom padding for StickyCTA */}
      <div style={{ height: 80 }} />
    </footer>
  )
}

const footerHeading = {
  fontFamily: "var(--font-display)",
  fontWeight: 700,
  fontSize: 14,
  color: "rgba(255,255,255,0.7)",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  marginBottom: 16,
}

const footerLink = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: 14,
  color: "rgba(255,255,255,0.4)",
  textDecoration: "none",
  marginBottom: 10,
  transition: "color 0.2s",
}

export default Footer