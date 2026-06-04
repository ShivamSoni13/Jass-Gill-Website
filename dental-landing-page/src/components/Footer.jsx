import smileLogo from "../assets/Images/Smile logo.png"

function Footer() {
  const year = new Date().getFullYear()
  const fLink = { display: "block", fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 9, transition: "color 0.15s" }
  const fHead = { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, color: "rgba(255,255,255,0.6)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 14 }

  return (
    <footer style={{ background: "var(--slate-900)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "56px 20px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 36, marginBottom: 44 }}>

          {/* Brand */}
          <div>
            <img
              src={smileLogo}
              alt="Smile Dental Care"
              style={{
                height: 150, width: "auto",
                objectFit: "contain",
                marginBottom: 14
              }}
            />
            <p style={{ display: "none", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, color: "white", marginBottom: 14 }}>Smile Dental Care</p>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 200, marginBottom: 14 }}>
              Smile Dental Care, 24 High Street, Slough, SL1 1EQ
            </p>
            <div style={{ display: "flex", gap: 6 }}>
              {["CQC","GDC","BDA"].map(b => (
                <div key={b} style={{ background: "rgba(15,166,190,0.12)", border: "1px solid rgba(15,166,190,0.22)", color: "var(--brand-light)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 10, padding: "2px 8px", borderRadius: "var(--r-sm)" }}>{b}</div>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <div>
            <p style={fHead}>Treatments</p>
            {["Clear Aligners","Composite Bonding","Teeth Whitening","Dental Veneers","Emergency Dental"].map(t => (
              <a key={t} href="#" style={fLink} onMouseEnter={e=>e.target.style.color="var(--brand-light)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.4)"}>{t}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <p style={fHead}>Company</p>
            {["About Us","Meet Dr. Jas Gill","Open Days","Contact Us","Careers"].map(t => (
              <a key={t} href="#" style={fLink} onMouseEnter={e=>e.target.style.color="var(--brand-light)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.4)"}>{t}</a>
            ))}
          </div>

          {/* Contact + CTA */}
         <div style={{ minWidth: 300}}>
            <p style={fHead}>Get In Touch</p>
            <a href="tel:+443304415566" style={{ ...fLink, marginBottom: 8 }} onMouseEnter={e=>e.target.style.color="var(--brand-light)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.4)"}>📞 0330 44 15566</a>
            <a href="https://wa.me/447305153359" target="_blank" rel="noopener noreferrer" style={{ ...fLink, marginBottom: 8 }} onMouseEnter={e=>e.target.style.color="#25D366"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.4)"}>💬 WhatsApp Us</a>
            <a href="mailto:customerservice@smiledentalcare.co.uk" style={{ ...fLink, marginBottom: 18, whiteSpace: "nowrap", fontSize: 12 }} onMouseEnter={e=>e.target.style.color="var(--brand-light)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.4)"}>✉ customerservice@smiledentalcare.co.uk</a>
            <a
            href="https://calendly.com/booksmiledentalcare/clear-aligners-open-day-sat-4th-july-with-dr-aisha"
            onClick={() => {
              if (window.fbq) {
                window.fbq('track', 'Lead');
              }
            }}
            style={{
              display: "inline-block",
              background: "var(--brand)",
              color: "white",
              padding: "10px 20px",
              borderRadius: "var(--r-pill)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 13,
              textDecoration: "none"
            }}
            >
            Book Online →
          </a>
          </div>
        </div> 

        {/* Compliance */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 22 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.22)", lineHeight: 1.7, marginBottom: 16, maxWidth: 900 }}>
            Smile Dental Care is registered in England & Wales. Registered address: 24 High Street, Slough, SL1 1EQ. All clinicians registered with the General Dental Council (GDC). Practice regulated by the Care Quality Commission (CQC). Finance subject to status. Results shown are illustrative; individual outcomes may vary. *£25 refundable deposit required to secure your Open Day appointment.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© {year} Smile Dental Care. All rights reserved.</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {["Privacy Policy","Terms","Cookie Policy","Complaints"].map(l => (
                <a key={l} href="#" style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.28)", textDecoration: "none" }}
                  onMouseEnter={e=>e.target.style.color="var(--brand-light)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.28)"}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 70 }} />
    </footer>
  )
}

export default Footer