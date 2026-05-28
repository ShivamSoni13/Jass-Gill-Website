import { motion } from "framer-motion"

const Stars = ({ n }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < n ? "#0fa6be" : "#e2e8f0"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
)

function Reviews() {
  const reviews = [
    { name: "Sarah M.", location: "Slough", rating: 5, text: "The team at Smile Dental Care are absolutely wonderful. My aligners have completely transformed my confidence and the open day deal was incredible.", treatment: "Clear Aligners" },
    { name: "James T.", location: "Windsor", rating: 5, text: "The 0% finance option made treatment so accessible. Dr. Jas Gill explained everything clearly and I couldn't be happier with my results.", treatment: "Invisalign" },
    { name: "Priya K.", location: "Uxbridge", rating: 5, text: "Genuinely life-changing. I was nervous at first but the team put me at ease immediately. Six months later and I can't stop smiling!", treatment: "Clear Aligners" },
  ]

  return (
    <section id="reviews" style={{ padding: "80px 20px", background: "var(--slate-900)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "var(--r-pill)", padding: "7px 16px", marginBottom: 18 }}>
            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285f4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34a853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fbbc05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#ea4335"/></svg>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.88)" }}>4.9/5 on Google Reviews</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(26px,4vw,44px)", color: "white", letterSpacing: "-0.6px" }}>Meet our happy patients</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="reviews-grid">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "var(--r-lg)", padding: "24px 20px" }}>
              <Stars n={r.rating} />
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.72, margin: "12px 0 18px" }}>{r.text}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "white" }}>{r.name}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.38)", marginTop: 1 }}>{r.location}</p>
                </div>
                <span style={{ background: "rgba(15,166,190,0.14)", border: "1px solid rgba(15,166,190,0.28)", color: "var(--brand-light)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, padding: "3px 10px", borderRadius: "var(--r-pill)" }}>{r.treatment}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p style={{ marginTop: 24, textAlign: "center", fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.28)" }}>
          Reviews are verified patient testimonials. Individual results may vary.
        </p>
      </div>

      <style>{`
        .reviews-grid { grid-template-columns: repeat(3,1fr); }
        @media(max-width:900px){ .reviews-grid{ grid-template-columns: repeat(2,1fr)!important; } }
        @media(max-width:560px){ .reviews-grid{ grid-template-columns: 1fr!important; } }
      `}</style>
    </section>
  )
}

export default Reviews