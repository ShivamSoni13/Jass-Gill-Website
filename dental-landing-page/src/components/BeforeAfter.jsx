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

  const onMouseDown = (e) => { dragging.current = true; e.preventDefault() }
  const onMouseMove = (e) => { if (dragging.current) calc(e.clientX) }
  const onMouseUp   = () => { dragging.current = false }
  const onTouchMove = (e) => calc(e.touches[0].clientX)

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      onTouchEnd={onMouseUp}
      style={{ position: "relative", overflow: "hidden", borderRadius: "var(--r-xl)", cursor: "ew-resize", userSelect: "none", touchAction: "none", aspectRatio: "4/3" }}
    >
      {/* After (full) */}
      <img src={after} alt={`After ${label}`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} draggable="false" />

      {/* Before (clipped left) */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", width: `${pos}%` }}>
        <img src={before} alt={`Before ${label}`} style={{ width: ref.current?.offsetWidth || 600, height: "100%", objectFit: "cover" }} draggable="false" />
      </div>

      {/* Divider line */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 2, background: "white", transform: "translateX(-50%)", pointerEvents: "none" }} />

      {/* Handle */}
      <div style={{ position: "absolute", top: "50%", left: `${pos}%`, transform: "translate(-50%,-50%)", width: 40, height: 40, background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/><polyline points="9 6 15 12 9 18" transform="translate(6,0)"/></svg>
      </div>

      {/* Labels */}
      <div style={{ position: "absolute", top: 14, left: 14, background: "rgba(15,23,42,0.72)", backdropFilter: "blur(6px)", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 12px", borderRadius: "var(--r-pill)" }}>Before</div>
      <div style={{ position: "absolute", top: 14, right: 14, background: "var(--brand)", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 12px", borderRadius: "var(--r-pill)" }}>After</div>
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
  ]

  return (
    <section id="transformations" style={{ padding: "90px 20px", background: "var(--slate-50)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ display: "inline-block", background: "var(--brand-50)", color: "var(--brand)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 14px", borderRadius: "var(--r-pill)", border: "1px solid var(--brand-100)", marginBottom: 14 }}>
            Real Patient Results
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4.5vw,52px)", color: "var(--slate-900)", letterSpacing: "-0.8px" }}>
            Smile Transformations
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--slate-500)", marginTop: 10 }}>
            Drag the slider to see the difference
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 28 }}>
          {cases.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}>
              <div style={{ background: "var(--white)", border: "1.5px solid var(--slate-200)", borderRadius: "var(--r-xl)", overflow: "hidden" }}>
                <Slider before={c.before} after={c.after} label={c.label} />
                <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--slate-900)" }}>{c.label}</span>
                  <span style={{ background: "var(--brand-50)", color: "var(--brand)", border: "1px solid var(--brand-100)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, padding: "4px 12px", borderRadius: "var(--r-pill)" }}>{c.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p style={{ marginTop: 28, textAlign: "center", fontFamily: "var(--font-body)", fontSize: 12, color: "var(--slate-400)", lineHeight: 1.6 }}>
          Results shown for illustrative purposes. Individual outcomes may vary. All treatments by GDC-registered clinicians.
        </p>
      </div>
    </section>
  )
}

export default BeforeAfter