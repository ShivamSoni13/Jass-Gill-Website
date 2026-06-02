import { motion } from "framer-motion";
import before1 from "../assets/Before and After/Before 1.jpg";
import after1 from "../assets/Before and After/After 1.jpg";
import before2 from "../assets/Before and After/Before 2.jpg";
import after2 from "../assets/Before and After/After 2.jpg";
import before3 from "../assets/Before and After/Before 3.jpg";
import after3 from "../assets/Before and After/After 3.jpg";

function ResultImage({ before, after, label }) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--r-lg)",
        aspectRatio: "4/3",
        background: "#eee",
      }}
    >
      <div style={{ height: "50%", overflow: "hidden" }}>
        <img
          src={before}
          alt={`Before ${label}`}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          draggable="false"
        />
      </div>

      <div style={{ height: "50%", overflow: "hidden" }}>
        <img
          src={after}
          alt={`After ${label}`}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          draggable="false"
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          height: 2,
          background: "white",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
}

function BeforeAfter() {
  const cases = [
    {
      before: before1,
      after: after1,
    },
    {
      before: before2,
      after: after2,
    },
    {
      before: before3,
      after: after3,
    },
  ];

  return (
    <section id="transformations" style={{ padding: "80px 20px", background: "var(--slate-50)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "var(--brand)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>
            Real Patient Results
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(26px,4vw,44px)", color: "var(--slate-900)", letterSpacing: "-0.6px", marginBottom: 8 }}>
            and achieve your own remarkable results like these...
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--slate-400)" }}>
            Before & after smile transformations
          </p>
        </motion.div>

        <div className="ba-grid">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <ResultImage before={c.before} after={c.after} label={c.label} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10, padding: "0 2px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--slate-800)" }}>{c.label}</span>
                <span style={{ background: "var(--brand-50)", color: "var(--brand)", border: "1px solid var(--brand-100)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, padding: "3px 10px", borderRadius: "var(--r-pill)" }}>
                  {c.duration}
                </span>
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
  );
}

export default BeforeAfter;