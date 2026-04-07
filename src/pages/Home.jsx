// ─────────────────────────────────────────────────
//  EDIT THIS FILE to update the Home page content
// ─────────────────────────────────────────────────

const PHOTO_URL = "/images/Mom_photo.webp";

const STATS = [
  { value: "25+", label: "Years of Experience" },
  { value: "80+", label: "Publications" },
  { value: "15+", label: "Countries Studied" },
  { value: "4",   label: "Flagship Reports" },
];

const RESEARCH_THEMES = [
  { label: "Jobs & Labor Markets", page: "publications" },
  { label: "Gender Economics", page: "publications" },
  { label: "Trade & Exports", page: "publications" },
  { label: "Poverty & Inequality", page: "publications" },
  { label: "MENA", page: "publications" },
  { label: "Latin America", page: "publications" },
];
const BIO_PARAGRAPHS = [
  `I am the Global Lead for the Distributional Impacts of Markets and Institutions at the World Bank. I am a global economist with over twenty-five years at the World Bank, including service as Deputy Chief Economist for South Asia and Lead Economist for the Middle East and North Africa. My work combines rigorous analytical expertise with deep operational experience across all lending instruments (DPF, IPF, PforR) and strong corporate leadership.`,

  `I lead the Global Solutions Group on Jobs, guiding the Bank's analytical and operational agenda on distributional impacts of shocks and policy across regions, and provide senior technical leadership to Poverty and Equity Assessments, Jobs Diagnostics, and Growth and Jobs Reports worldwide. My research and operational work focus on jobs, inequality, gender, and structural transformation, with an emphasis on inclusion, digital and green transitions, and fiscal policy.`,

  `Over my career, I have authored more than twenty books and one hundred peer-reviewed publications, and led over thirty operations and major multi-country initiatives, regional strategies, and institutional reforms. I previously served as a senior official in Mexico's Ministry of Finance and Ministry of Social Development, where I designed and implemented major national social programs and labor market reforms. I have also held academic appointments at Instituto Tecnológico Autónomo de México and Centro de Investigación y Docencia Económicas. I hold a Ph.D. in Economics from the University of Virginia and am fully proficient in English, Spanish, French, and Portuguese.`,
];
const CONTACT = {
  institution: "World Bank HQ (office MC 10-139)",
  address: "1818 H Street, N.W.",
  cityStateZip: "Washington, D.C., 20433",
  email: "gacevedo@worldbank.org",
  scholarUrl: "https://scholar.google.com/citations?user=Cb2thP0AAAAJ&hl=en",
  ssrnUrl: "#",
};

const LATEST_WORK = {
  title: "Digital Transformation and its Role in Expanding Women's Economic Opportunities in Iraq, Jordan, and Lebanon",
  url: "https://openknowledge.worldbank.org/entities/publication/ba173eeb-4996-416d-88f2-297f0e9d819e",
  year: "2025",
  publisher: "The World Bank",
  coverImage: "/images/book.jpg",
};

export default function Home() {
  return (
    <div style={{ animation: "fadeIn 0.6s ease" }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-16px); } to { opacity: 1; transform: translateX(0); } }
        .stat-card:hover { transform: translateY(-3px); }
        .theme-tag:hover { background: #7e6e52 !important; color: #fff !important; cursor: default; }
      `}</style>

      {/* ── NAME + SUBTITLE + STATS ── */}
      <div style={{ background: "#7e6e52", padding: "1.8rem 2rem 1.4rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.2rem",
            color: "#fff",
            marginBottom: "0.3rem",
          }}>
            Gladys Lopez-Acevedo
          </h1>
          <p style={{
            fontSize: 13, color: "rgba(255,255,255,0.75)", letterSpacing: "0.1em",
            textTransform: "uppercase", fontWeight: 500, marginBottom: "1.4rem",
          }}>
            Lead Economist · World Bank · South Asia Chief Economist Office
          </p>
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "1.2rem",
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem",
          }}>
            {STATS.map((s, i) => (
              <div key={i} className="stat-card" style={{ textAlign: "center", transition: "transform 0.2s" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#fff", fontWeight: 600 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN TWO-COLUMN LAYOUT ── */}
      <div
        className="home-layout"
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "2.5rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          gap: "2.5rem",
        }}
      >
        {/* LEFT — photo + contact */}
        <div style={{ animation: "fadeInLeft 0.6s ease 0.1s both" }}>
          <div style={{
            width: "100%",
            aspectRatio: "3/4",
            background: "var(--stone)",
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {PHOTO_URL ? (
              <img
                src={PHOTO_URL}
                alt="Gladys Lopez-Acevedo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <div style={{ textAlign: "center", color: "var(--muted)", padding: "1rem" }}>
                <div style={{ fontSize: 48, marginBottom: 8 }}>🖼️</div>
                <p style={{ fontSize: 12, lineHeight: 1.4 }}>Set PHOTO_URL in<br />src/pages/Home.jsx</p>
              </div>
            )}
          </div>

          <div style={{ marginTop: "1.5rem", fontSize: 12.5, color: "var(--muted)", lineHeight: 2 }}>
            <strong style={{
              color: "var(--ink)", display: "block", marginBottom: 4,
              fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              Contact
            </strong>
            {CONTACT.institution}<br />
            {CONTACT.address}<br />
            {CONTACT.cityStateZip}
            <a className="contact-link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a className="contact-link" href={CONTACT.scholarUrl} target="_blank" rel="noreferrer">Google Scholar</a>
            <a className="contact-link" href={CONTACT.ssrnUrl} target="_blank" rel="noreferrer">SSRN / IDEAS</a>
          </div>
        </div>

        {/* RIGHT — bio + research areas + latest work */}
        <div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.05rem",
            color: "#000",
            marginBottom: "1rem",
          }}>
            Welcome to my webpage!
          </h2>

          {BIO_PARAGRAPHS.map((para, i) => (
            <p key={i} style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "var(--ink)",
              marginBottom: "1.1rem",
            }}>
              {para}
            </p>
          ))}

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(126,110,82,0.2)", margin: "1.5rem 0" }} />

          {/* Research Areas */}
          <div>
            <div style={{
              fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#7B2500", fontWeight: 600, marginBottom: "0.8rem",
            }}>
              Research Areas
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {RESEARCH_THEMES.map((theme, i) => (
                <span
                  key={i}
                  className="theme-tag"
                  onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: theme.page }))}
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 500,
                    border: "1px solid #7e6e52",
                    color: "#7e6e52",
                    background: "transparent",
                    transition: "all 0.2s",
                    cursor: "pointer",
                  }}
                >
                  {theme.label}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(126,110,82,0.2)", margin: "1.5rem 0" }} />

          {/* Latest Work */}
          <div style={{
            background: "rgba(126,110,82,0.06)",
            borderLeft: "3px solid #7e6e52",
            borderRadius: "0 6px 6px 0",
            padding: "0.9rem 1.2rem",
            display: "flex",
            gap: "1rem",
            alignItems: "flex-start",
          }}>
            {LATEST_WORK.coverImage && (
              <img
                src={LATEST_WORK.coverImage}
                alt="cover"
                style={{ width: 60, borderRadius: 3, flexShrink: 0, boxShadow: "2px 2px 6px rgba(0,0,0,0.15)" }}
              />
            )}
            <div>
              <div style={{
                fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#7B2500", fontWeight: 600, marginBottom: 6,
              }}>
                Latest Work · {LATEST_WORK.year}
              </div>
              <a
                href={LATEST_WORK.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: "1rem",
                  color: "var(--earth)",
                  lineHeight: 1.6,
                  textDecoration: "underline",
                  textUnderlineOffset: 2,
                }}
              >
                {LATEST_WORK.title}
              </a>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>
                {LATEST_WORK.publisher}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
