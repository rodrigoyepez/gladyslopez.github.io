// ─────────────────────────────────────────────────
//  EDIT THIS FILE to update the CV page
//  Set CV_PDF_URL to a hosted PDF link to embed it
// ─────────────────────────────────────────────────

const CV_DOWNLOAD_URL = "/Gladys Lopez-Acevedo_CV 02-23-2026.docx";

const CV_PAGES = [
  "/images/cv.png",
  // add more pages here e.g. "/images/cv-p2.png"
];

export default function CV() {
  return (
    <>
      <style>{`
        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp  { from { opacity: 0; transform: translateY(24px);  } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn    { from { opacity: 0; transform: translateY(12px);  } to { opacity: 1; transform: translateY(0); } }
        .cv-btn:hover { background: #7B2500 !important; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(126,110,82,0.3); }
      `}</style>

      {/* ── HERO ── */}
      <div className="hero-banner" style={{ animation: "slideDown 0.5s ease" }}>
        <h1 className="hero-title" style={{ fontSize: "1.8rem" }}>CV</h1>
        <div className="hero-rule" />
      </div>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1.5rem", animation: "fadeInUp 0.6s ease 0.2s both" }}>

        {/* Download button */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
          <a href={CV_DOWNLOAD_URL} download style={{ textDecoration: "none" }}>
            <button className="cv-btn" style={{
              background: "#7e6e52", color: "#fff", border: "none",
              padding: "9px 22px", borderRadius: 4, fontSize: 12,
              letterSpacing: "0.08em", textTransform: "uppercase",
              cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
              transition: "all 0.2s",
            }}>
              ↓ Download CV
            </button>
          </a>
        </div>

        {/* CV image preview */}
        <div style={{
          border: "1px solid var(--border)",
          borderRadius: 8,
          overflow: "hidden",
          background: "var(--white)",
          animation: "fadeIn 0.7s ease 0.35s both",
        }}>
          {CV_PAGES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`CV page ${i + 1}`}
              style={{
                width: "100%",
                display: "block",
                borderBottom: i < CV_PAGES.length - 1 ? "1px solid var(--border)" : "none",
              }}
            />
          ))}
        </div>

      </div>
    </>
  );
}
