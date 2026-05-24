import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: "How long does treatment take?",
      a: "Treatment duration depends on the complexity of your case. Most Invisalign treatments take between 6 and 18 months. During your free consultation, your clinician will provide a personalised treatment plan with a clear timeline.",
    },
    {
      q: "Is 0% finance really available?",
      a: "Yes. We offer 0% APR finance on treatments over £500, subject to status. Our finance partner will carry out a soft credit check which does not affect your credit score. Full terms are provided before you sign.",
    },
    {
      q: "Are your clinicians GDC registered?",
      a: "Absolutely. Every clinician treating patients at BrightSmile is registered with the General Dental Council (GDC). You can verify their registration number on the GDC website. Our practice is also regulated by the Care Quality Commission (CQC).",
    },
    {
      q: "Is the Free Smile Scan genuinely free?",
      a: "Yes, the initial digital smile scan and consultation are completely free with no obligation. If you decide to proceed with treatment, your clinician will provide a full written quote.",
    },
    {
      q: "How do you handle my personal data?",
      a: "We take data privacy seriously. Your personal data is processed under GDPR (UK) on the lawful basis of consent. We never sell your data to third parties. You can withdraw consent and request deletion of your data at any time by contacting our Data Protection Officer at dpo@brightsmile.co.uk.",
    },
    {
      q: "Do you offer a complaints procedure?",
      a: "Yes. We are committed to resolving any concerns quickly. You can submit a complaint in writing to complaints@brightsmile.co.uk. If you remain unsatisfied, you have the right to escalate to the Dental Complaints Service or the Care Quality Commission.",
    },
  ]

  return (
    <section
      id="faq"
      style={{
        padding: "100px 24px",
        background: "var(--slate-900)",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(34px, 5vw, 56px)",
            color: "white",
            letterSpacing: "-1px",
          }}>
            Common Questions
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 17,
            color: "rgba(255,255,255,0.5)",
            marginTop: 12,
          }}>
            Can't find your answer? Call us on{" "}
            <a href="tel:+441234567890" style={{ color: "#2dd4bf", textDecoration: "none" }}>
              01234 567 890
            </a>
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: openIndex === index
                  ? "1px solid rgba(20,184,166,0.4)"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 18,
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "22px 28px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 16,
                }}
                aria-expanded={openIndex === index}
              >
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 17,
                  color: openIndex === index ? "#2dd4bf" : "white",
                  transition: "color 0.2s",
                  lineHeight: 1.4,
                }}>
                  {faq.q}
                </span>
                <div style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: openIndex === index ? "rgba(20,184,166,0.2)" : "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={openIndex === index ? "#2dd4bf" : "rgba(255,255,255,0.6)"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s",
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{
                      padding: "0 28px 24px",
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      fontSize: 15,
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.75,
                    }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ