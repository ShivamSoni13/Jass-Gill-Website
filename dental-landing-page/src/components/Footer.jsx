function Footer() {
  const year = new Date().getFullYear()
  const fLink = { display: "block", fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.38)", textDecoration: "none", marginBottom: 10, transition: "color 0.18s" }
  const fHead = { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 16 }

  return (
    <footer style={{ background: "var(--slate-900)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 20px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 34, height: 34, background: "linear-gradient(135deg,var(--brand),var(--brand-dark))", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.5 2 7 4.5 7 7c0 1.5.5 3 1 4.5C9 14 9 16 8 18c-.5 1.5 0 4 4 4s4.5-2.5 4-4c-1-2-1-4 0-6.5.5-1.5 1-3 1-4.5 0-2.5-1.5-5-5-5z" fill="white"/></svg>
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "white" }}>BrightSmile</span>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 220, marginBottom: 16 }}>
              GDC-registered dental clinic delivering exceptional smile transformations across the UK.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["CQC","GDC","BDA"].map(b => (
                <div key={b} style={{ background: "rgba(15,166,190,0.12)", border: "1px solid rgba(15,166,190,0.22)", color: "var(--brand-light)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11, padding: "3px 9px", borderRadius: "var(--r-sm)" }}>{b}</div>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <div>
            <p style={fHead}>Treatments</p>
            {["Invisible Aligners","Composite Bonding","Teeth Whitening","Dental Veneers","Emergency Dental"].map(t => (
              <a key={t} href="#" style={fLink} onMouseEnter={e=>e.target.style.color="var(--brand-light)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.38)"}>{t}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <p style={fHead}>Company</p>
            {["About Us","Our Clinicians","Careers","Contact Us"].map(t => (
              <a key={t} href="#" style={fLink} onMouseEnter={e=>e.target.style.color="var(--brand-light)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.38)"}>{t}</a>
            ))}
          </div>

          {/* CTA */}
          <div>
            <p style={fHead}>Book Your Free Scan</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, marginBottom: 16 }}>No obligation, worth £250. Limited appointments available.</p>
            <a href="#form" style={{ display: "inline-block", background: "var(--cta)", color: "white", padding: "11px 22px", borderRadius: "var(--r-pill)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, textDecoration: "none", marginBottom: 18 }}>Book Now →</a>
            <div>
              <a href="tel:+441234567890" style={{ ...fLink, marginBottom: 6 }} onMouseEnter={e=>e.target.style.color="var(--brand-light)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.38)"}>📞 01234 567 890</a>
              <a href="mailto:hello@brightsmile.co.uk" style={fLink} onMouseEnter={e=>e.target.style.color="var(--brand-light)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.38)"}>✉ hello@brightsmile.co.uk</a>
            </div>
          </div>
        </div>

        {/* Compliance */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.25)", lineHeight: 1.7, marginBottom: 18, maxWidth: 900 }}>
            BrightSmile Dental Ltd is registered in England & Wales (Company No. 12345678). Registered address: 100 Smile Street, London, EC1A 1BB. All clinicians registered with the General Dental Council (GDC). Practice regulated by the Care Quality Commission (CQC). Finance subject to status, provided by Dental Finance Ltd, authorised and regulated by the FCA. Results shown are illustrative; individual outcomes may vary.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© {year} BrightSmile Dental Ltd. All rights reserved.</p>
            <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
              {["Privacy Policy","Terms of Service","Cookie Policy","Complaints","Accessibility"].map(l => (
                <a key={l} href="#" style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.28)", textDecoration: "none", transition: "color 0.18s" }}
                  onMouseEnter={e=>e.target.style.color="var(--brand-light)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.28)"}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Space for StickyCTA */}
      <div style={{ height: 72 }} />
    </footer>
  )
}

export default Footer