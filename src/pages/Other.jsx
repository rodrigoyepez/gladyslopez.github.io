// ─────────────────────────────────────────────────
//  EDIT THIS FILE to update the Other / WIP page
// ─────────────────────────────────────────────────

import Accordion from "../components/Accordion";

const WORK_IN_PROGRESS = [
  { title: "Analyzing Female Employment Trends in South Asia", url: null, meta: <>Lopez-Acevedo Gladys, Morales Matias, Najeeb Fatima. <strong>Forthcoming</strong>, Journal of Economics and Race.</> },
  { title: "Gender-Segmented Labor Markets", url: null, meta: <>Lopez-Acevedo, Goes Carlos, Robertson Raymond. <strong>Forthcoming</strong>, Journal of Development Studies.</> },
  { title: "Indonesia Trade Liberalization and Informality", url: null, meta: <>Goes, Carlos and Gladys Lopez-Acevedo. <strong>Under review</strong>, World Bank Economic Review.</> },
];

const DPF_PROJECTS = [
  "Morocco Financial & Digital Inclusion DPF I — P168587",
  "Morocco Financial & Digital Inclusion DPF II — P174005",
  "Tunisia Resilience & Recovery Emergency DPF — P173324",
  "Colombia Social Protection DPL — P106708",
  "Mexico Economic Policies Crisis Response DPL — P118070",
  "Mexico Tax Reform Adjustment Loan — P074750",
  "Colombia Programmatic Labor Reform & Social Sector Adjustment Loan — P082865",
  "Mexico Social Development Policy Loan — P089992",
  "Chiapas Fiscal & Institutional Structural Reform — P074751",
];

const IPF_PROJECTS = [
  "Morocco COVID-19 Social Protection Emergency Project — P172809",
  "Bolivia Strengthening Statistical Capacity — P101336",
  "Colombia Social Safety Nets Project — P089443",
  "Colombia Human Capital Protection — P069964",
  "Mexico Technical Education & Training — P034490",
  "Colombia Public Management Information Systems — P106628",
  "Colombia Strengthening Public Information & M&E Systems — P099139",
  "Jamaica Governance & Anti-Corruption — P097092",
  "Central America Results-Based Management in Social Sectors — P109760",
  "Presidential Delivery Unit Support (Mexico, Colombia, Chile, South Africa)",
];

const OTHER_PROJECTS = [
  { type: "Program-for-Results (PforR)", items: ["Morocco Public Sector Performance ENNAJAA — P169330"] },
  { type: "Series Lending / APL", items: ["Mexico Innovation for Competitiveness APL — P126838"] },
  { type: "IDF Grant", items: ["Mexico SEDESOL Evaluation IDF — P085566"] },
  { type: "Government of Mexico — Fee-for-Service", items: ["Ministry of Social Development (SEDESOL) — FFS advisory services", "CONEVAL (National Council for Evaluation of Social Policy) — FFS analytical support", "Ministry of Finance (SHCP) — FFS technical services"] },
  { type: "EFO", items: ["Algeria Subsidy Reform"] },
];

const DISTINCTIONS = [
  "VPU and IEG Awards in EFI, SAR, MENA, LAC, AFE.",
  "Research Fellowships in SNI and IMEF (Mexico); IZA (Germany); National Science Foundation and UVA Fellowships; ERF (MENA); GLD (Sweden); 3IE (USA).",
];

const CERTIFICATIONS = [
  "World Bank Management Development Program (MDP).",
  "World Bank Corporate Leadership Program, Cohort 13, The World Bank / Sheppard Moscow.",
  "World Bank Cutting Edge Development Economics, Harvard University, John F. Kennedy School of Government.",
];

const BLOGS = [
  {
    title: "The Environmental Impacts of Export Booms in Brazil",
    url: "https://blogs.worldbank.org/en/developmenttalk/the-environmental-impacts-of-export-booms-in-brazil",
    meta: "World Bank Blogs, August 19, 2025.",
  },
  {
    title: "Navigating the Green Transition: Decarbonization, Trade, and Labor Markets in MENA",
    url: "https://blogs.worldbank.org/en/arabvoices/navigating-green-transition-decarbonization-trade-and-labor-markets-mena",
    meta: "World Bank Blogs, January 31, 2025.",
  },
  {
    title: "The Shifting Landscape of Global Manufacturing: From Offshoring to Reshoring and Its Welfare Implications",
    url: "https://blogs.worldbank.org/en/developmenttalk/shifting-landscape-global-manufacturing-offshoring-reshoring-and-its-welfare",
    meta: "World Bank Blogs, November 19, 2024.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

function WipList({ items }) {
  return (
    <ul className="wip-list">
      {items.map((item, i) => (
        <li key={i} className="wip-item">
          {item.url ? (
            <a className="wip-title" href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
          ) : (
            <span className="wip-title">{item.title}</span>
          )}
          <div className="wip-meta">{item.meta}</div>
        </li>
      ))}
    </ul>
  );
}

function BlogList({ items }) {
  return (
    <ul className="wip-list">
      {items.map((item, i) => (
        <li key={i} className="wip-item">
          <a className="wip-title" href={item.url} target="_blank" rel="noreferrer">
            {item.title}
          </a>
          <div className="wip-meta">{item.meta}</div>
        </li>
      ))}
    </ul>
  );
}

function BulletList({ items }) {
  return (
    <ul style={{ listStyle: "none", marginTop: "0.5rem" }}>
      {items.map((item, i) => (
        <li key={i} style={{ padding: "0.5rem 0", borderBottom: "1px solid var(--border)", fontSize: 13.5, color: "var(--ink)", lineHeight: 1.5 }}>
          <span style={{ color: "var(--earth)", marginRight: 8 }}>→</span>{item}
        </li>
      ))}
    </ul>
  );
}

function SimpleList({ items }) {
  return (
    <ul style={{ listStyle: "none", marginTop: "0.5rem" }}>
      {items.map((item, i) => (
        <li key={i} style={{ padding: "0.4rem 0", fontSize: 13.5, color: "var(--ink)", lineHeight: 1.5 }}>
          <span style={{ color: "var(--earth)", marginRight: 8 }}>·</span>{item}
        </li>
      ))}
    </ul>
  );
}

export default function Other() {
  return (
    <>
      <style>{`
        @keyframes slideDown  { from { opacity:0; transform:translateY(-20px);} to { opacity:1; transform:translateY(0);} }
        @keyframes fadeInUp   { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0);} }
        @keyframes fadeInLeft { from { opacity:0; transform:translateX(-16px);} to { opacity:1; transform:translateX(0);} }
        .wip-item { transition: background 0.18s, padding-left 0.18s; border-radius: 4px; }
        .wip-item:hover { background: rgba(126,110,82,0.05); padding-left: 8px; }
      `}</style>

      <div className="pub-hero" style={{ animation: "slideDown 0.5s ease" }}>
        <h1>Work in Progress &amp; Other Activities</h1>
      </div>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1.5rem", animation: "fadeInUp 0.6s ease 0.2s both" }}>

        {/* Work in Progress */}
        <div className="pub-subsection" style={{ marginTop: "0.5rem", animation: "fadeInLeft 0.6s ease 0.3s both" }}>
          <h3>Work in Progress</h3>
          <WipList items={WORK_IN_PROGRESS} />
        </div>

        <div className="accordion" style={{ marginTop: "1.5rem", animation: "fadeInUp 0.6s ease 0.4s both" }}>

          <Accordion label="Blogs and commentaries">
            <BlogList items={BLOGS} />
          </Accordion>

          <Accordion label="Selected operational and lending projects">
            <div className="pub-subsection">
              <h3>Development Policy Financing (DPF / SAL)</h3>
              <BulletList items={DPF_PROJECTS} />
            </div>
            <div className="pub-subsection" style={{ marginTop: "1.2rem" }}>
              <h3>Investment Project Financing (IPF)</h3>
              <BulletList items={IPF_PROJECTS} />
            </div>
            {OTHER_PROJECTS.map((group, i) => (
              <div key={i} className="pub-subsection" style={{ marginTop: "1.2rem" }}>
                <h3>{group.type}</h3>
                <BulletList items={group.items} />
              </div>
            ))}
          </Accordion>

          <Accordion label="Distinctions, grants, and fellowships">
            <SimpleList items={DISTINCTIONS} />
          </Accordion>

          <Accordion label="Certifications and training">
            <SimpleList items={CERTIFICATIONS} />
          </Accordion>

        </div>
      </div>
    </>
  );
}
