import { motion } from "framer-motion"

const Stars = ({ n }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill={i < n ? "#0fa6be" : "#e2e8f0"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
)

function Reviews() {
  const reviews = [
    { name: "Sarah M.", location: "London",     rating: 5, text: "Absolutely transformed my confidence. The treatment was painless and the team were so professional throughout. Could not recommend more highly.", treatment: "Invisalign" },
    { name: "James T.", location: "Manchester", rating: 5, text: "The 0% finance option made it so accessible. My smile looks incredible and the whole process was explained clearly at every step.", treatment: "Composite Bonding" },
    { name: "Priya K.", location: "Birmingham", rating: 5, text: "Genuinely life-changing. I was nervous at first but the team put me at ease immediately. Six months later and I can't stop smiling.", treatment: "Aligners" },
  ]

  return (
    <section id="reviews" style={{ padding: "90px 20px", background: "var(--slate-900)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--r-pill)", padding: "7px 18px", marginBottom: 20 }}>
            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285f4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34a853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fbbc05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#ea4335"/></svg>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "rgba(255,255,255,0.88)" }}>4.9/5 on Google Reviews</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4.5vw,52px)", color: "white", letterSpacing: "-0.8px" }}>Patient Stories</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "var(--r-lg)", padding: "28px 24px" }}>
              <Stars n={r.rating} />
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, color: "rgba(255,255,255,0.76)", lineHeight: 1.72, margin: "14px 0 20px" }}>{r.text}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "white" }}>{r.name}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.38)", marginTop: 2 }}>{r.location}</div>
                </div>
                <span style={{ background: "rgba(15,166,190,0.14)", border: "1px solid rgba(15,166,190,0.28)", color: "var(--brand-light)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, padding: "3px 10px", borderRadius: "var(--r-pill)", whiteSpace: "nowrap" }}>{r.treatment}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p style={{ marginTop: 28, textAlign: "center", fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.28)" }}>Reviews are verified patient testimonials. Individual results may vary.</p>
      </div>
    </section>
  )
}

export default Reviews