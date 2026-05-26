import { motion } from "framer-motion"

function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden" }}>

      {/* ── Background ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1800&auto=format&fit=crop"
          alt="" aria-hidden="true"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(110deg,rgba(10,20,35,0.88) 0%,rgba(15,166,190,0.45) 55%,rgba(10,20,35,0.30) 100%)",
        }} />
        {/* fade to white at bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to bottom,transparent,white)" }} />
      </div>

      {/* ── Content wrapper ── */}
      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: 1200, margin: "0 auto", width: "100%",
        padding: "clamp(100px,12vw,130px) 20px 80px",
      }}>

        {/* ── Two-column grid ── */}
        <div className="hero-grid">

          {/* LEFT — copy + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(15,166,190,0.18)",
              border: "1px solid rgba(61,195,214,0.36)",
              borderRadius: "var(--r-pill)",
              padding: "5px 14px", marginBottom: 20,
            }}>
              <div style={{ width: 7, height: 7, background: "#3dc3d6", borderRadius: "50%", animation: "blink 2s infinite" }} />
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, color: "#96e3ef", letterSpacing: "0.07em", textTransform: "uppercase" }}>
                CQC Registered · GDC Certified
              </span>
            </div>

            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(34px,5vw,64px)",
              lineHeight: 1.06, color: "white",
              marginBottom: 18, letterSpacing: "-1.2px",
            }}>
              Your Healthiest,
              <span style={{ display: "block", background: "linear-gradient(90deg,#3dc3d6,#96e3ef)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Most Confident
              </span>
              Smile Yet.
            </h1>

            <p style={{
              fontFamily: "var(--font-body)", fontWeight: 300,
              fontSize: "clamp(14px,1.6vw,17px)",
              color: "rgba(255,255,255,0.78)", lineHeight: 1.72,
              marginBottom: 24, maxWidth: 440,
            }}>
              Invisible aligners, pain-free procedures &amp; flexible 0% APR finance — trusted by thousands of patients across the UK.
            </p>

            {/* Offer pill */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(208,17,87,0.18)",
              border: "1px solid rgba(208,17,87,0.38)",
              borderRadius: "var(--r-pill)",
              padding: "7px 16px", marginBottom: 24,
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#f91d6e">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12, color: "#f91d6e" }}>
                Up to £2,000 savings — Free Smile Scan worth £250
              </span>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "clamp(14px,3vw,28px)", marginBottom: 28, flexWrap: "wrap" }}>
              {[["4,800+","Smiles Transformed"],["4.9★","Google Rating"],["0%","Finance Available"]].map(([n,l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(18px,2.5vw,26px)", color: "#3dc3d6", letterSpacing: "-0.5px" }}>{n}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 1 }}>{l}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <motion.a href="#form"
                whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "var(--cta)", color: "white", padding: "13px 26px", borderRadius: "var(--r-pill)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, textDecoration: "none", transition: "all 0.2s", whiteSpace: "nowrap" }}>
                Book Now →
              </motion.a>
              <motion.a href="https://wa.me/447000000000" target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--wa)", color: "white", padding: "13px 22px", borderRadius: "var(--r-pill)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, textDecoration: "none", transition: "all 0.2s", whiteSpace: "nowrap" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </motion.a>
            </div>

            <p style={{ marginTop: 16, fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.32)", lineHeight: 1.5 }}>
              Regulated by CQC · All clinicians registered with GDC
            </p>
          </motion.div>

          {/* RIGHT — Calendly */}
          <motion.div
            className="hero-calendly"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
          >
            <div style={{
              background: "rgba(255,255,255,0.97)",
              borderRadius: "var(--r-xl)",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.25)",
            }}>
              {/* Calendly header */}
              <div style={{ background: "var(--brand)", padding: "16px 22px" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "white", marginBottom: 2 }}>
                  📅 Book Your Free Consultation
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.80)" }}>
                  Pick a time that suits you — zero obligation
                </p>
              </div>
              {/* Replace YOUR_CALENDLY_USERNAME with your actual Calendly link */}
              <iframe
                src="https://calendly.com/booksmiledentalcare/openday-aligners"
                width="100%"
                height="440"
                frameBorder="0"
                title="Book a consultation"
                style={{ display: "block" }}
              />
            </div>
          </motion.div>

        </div>

        {/* ── Mobile-only Calendly (below copy) ── */}
        <motion.div
          className="hero-calendly-mobile"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div style={{
            background: "rgba(255,255,255,0.97)",
            borderRadius: "var(--r-xl)",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.25)",
            marginTop: 32,
          }}>
            <div style={{ background: "var(--brand)", padding: "14px 18px" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "white", marginBottom: 2 }}>
                📅 Book Your Free Consultation
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.80)" }}>
                Pick a time that suits you — zero obligation
              </p>
            </div>
            <iframe
              src="https://calendly.com/YOUR_CALENDLY_USERNAME/free-consultation?embed_type=Inline&hide_gdpr_banner=1"
              width="100%"
              height="420"
              frameBorder="0"
              title="Book a consultation"
              style={{ display: "block" }}
            />
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.35)} }

        /* Desktop: 2 columns side by side */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        /* Desktop: show inline Calendly, hide mobile one */
        .hero-calendly        { display: block; }
        .hero-calendly-mobile { display: none; }

        /* Tablet: single column — Calendly goes below */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          /* Hide the right-col Calendly on mobile/tablet */
          .hero-calendly        { display: none !important; }
          /* Show the dedicated mobile Calendly block instead */
          .hero-calendly-mobile { display: block !important; }
        }
      `}</style>
    </section>
  )
}

export default Hero