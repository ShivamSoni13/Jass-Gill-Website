import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"

function Slider({ before, after, label }) {
  const [pos, setPos] = useState(50)
  const ref = useRef(null)
  const dragging = useRef(false)

  const calc = useCallback((clientX) => {
    const rect = ref.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPos((x / rect.width) * 100)
  }, [])

  return (
    <div ref={ref}
      onMouseDown={e => { dragging.current = true; e.preventDefault() }}
      onMouseMove={e => { if (dragging.current) calc(e.clientX) }}
      onMouseUp={() => { dragging.current = false }}
      onMouseLeave={() => { dragging.current = false }}
      onTouchMove={e => calc(e.touches[0].clientX)}
      style={{ position: "relative", overflow: "hidden", borderRadius: "var(--r-lg)", cursor: "ew-resize", userSelect: "none", touchAction: "none", aspectRatio: "4/3", background: "#eee" }}
    >
      <img src={after} alt={`After ${label}`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} draggable="false" />
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", width: `${pos}%` }}>
        <img src={before} alt={`Before ${label}`} style={{ width: ref.current?.offsetWidth || 600, height: "100%", objectFit: "cover" }} draggable="false" />
      </div>
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 2, background: "white", transform: "translateX(-50%)" }} />
      <div style={{ position: "absolute", top: "50%", left: `${pos}%`, transform: "translate(-50%,-50%)", width: 36, height: 36, background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="15 18 9 12 15 6"/><polyline points="9 6 15 12 9 18" transform="translate(6,0)"/>
        </svg>
      </div>
      <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(15,23,42,0.65)", backdropFilter: "blur(6px)", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11, letterSpacing: "0.07em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "var(--r-pill)" }}>Before</div>
      <div style={{ position: "absolute", top: 12, right: 12, background: "var(--brand)", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11, letterSpacing: "0.07em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "var(--r-pill)" }}>After</div>
    </div>
  )
}

function BeforeAfter() {
  const cases = [
    {
      before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
      after:  "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop",
      label: "Invisalign Treatment", duration: "8 months",
    },
    {
      before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop",
      after:  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
      label: "Teeth Whitening", duration: "3 sessions",
    },
    {
      before: "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=800&auto=format&fit=crop",
      after:  "https://images.unsplash.com/photo-1571748982800-fa51082c2224?q=80&w=800&auto=format&fit=crop",
      label: "Composite Bonding", duration: "1 visit",
    },
  ]

  return (
    <section id="transformations" style={{ padding: "80px 20px", background: "var(--slate-50)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "var(--brand)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>Real Patient Results</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(26px,4vw,44px)", color: "var(--slate-900)", letterSpacing: "-0.6px", marginBottom: 8 }}>
            and achieve your own remarkable results like these…
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--slate-400)" }}>Drag the slider to see the difference</p>
        </motion.div>

        <div className="ba-grid">
          {cases.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}>
              <Slider before={c.before} after={c.after} label={c.label} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10, padding: "0 2px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--slate-800)" }}>{c.label}</span>
                <span style={{ background: "var(--brand-50)", color: "var(--brand)", border: "1px solid var(--brand-100)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, padding: "3px 10px", borderRadius: "var(--r-pill)" }}>{c.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p style={{ marginTop: 24, textAlign: "center", fontFamily: "var(--font-body)", fontSize: 11, color: "var(--slate-400)" }}>
          Results shown for illustrative purposes. Individual outcomes may vary. All treatments by GDC-registered clinicians.
        </p>
      </div>

      <style>{`
        .ba-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        @media(max-width:900px){ .ba-grid{ grid-template-columns: repeat(2,1fr); } }
        @media(max-width:560px){ .ba-grid{ grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}

export default BeforeAfter