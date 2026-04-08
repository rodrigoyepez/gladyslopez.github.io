const CONTACT = {
  email: "gacevedo@worldbank.org",
  whatsapp: "",        // e.g. "12025551234" — add her number if desired
  linkedin: "https://www.linkedin.com/in/gladyslopezacevedoo/",
  scholar: "https://scholar.google.com/citations?user=Cb2thP0AAAAJ&hl=en",
  worldbank: "https://www.worldbank.org/en/about/people/g/gladys-lopez-acevedo",
  repec: "https://authors.repec.org/pro/plo382",
};

const ICON_LINKS = [
  {
    label: "Email",
    url: `mailto:${CONTACT.email}`,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <polyline points="2,4 12,13 22,4"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    url: CONTACT.linkedin,
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Google Scholar",
    url: CONTACT.scholar,
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
      </svg>
    ),
  },
  {
    label: "World Bank",
    url: CONTACT.worldbank,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    label: "RePEC / IDEAS",
    url: CONTACT.repec,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  ...(CONTACT.whatsapp ? [{
    label: "WhatsApp",
    url: `https://wa.me/${CONTACT.whatsapp}`,
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  }] : []),
];

export default function Footer() {
  return (
    <footer style={{
      background: "#2a2420",
      fontFamily: "'DM Sans', sans-serif",
      marginTop: "4rem",
    }}>
      <div style={{ height: 3, background: "#7e6e52" }} />

      <div style={{
        maxWidth: 1000, margin: "0 auto",
        padding: "2.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "2rem",
      }}>

        {/* Left — name + contact text */}
        <div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            color: "#fff", fontSize: "1.15rem", marginBottom: "0.5rem",
          }}>
            Gladys Lopez-Acevedo
          </h3>
          <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.9, margin: 0 }}>
            Global Lead, Distributional Impacts of Markets and Institutions<br />
            The World Bank<br />
            1818 H Street, N.W., Washington, D.C. 20433
          </p>
          <a href={`mailto:${CONTACT.email}`} style={{
            display: "inline-block", marginTop: "0.6rem",
            fontSize: 13, color: "#c8a97e",
            textDecoration: "underline", textUnderlineOffset: 2,
          }}>
            {CONTACT.email}
          </a>
        </div>

        {/* Right — icon buttons */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.6rem" }}>
          <div style={{
            fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#7e6e52", fontWeight: 600, marginBottom: "0.3rem",
          }}>
            Connect
          </div>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            {ICON_LINKS.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target={link.url.startsWith("mailto") ? "_self" : "_blank"}
                rel="noreferrer"
                title={link.label}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: 40, height: 40,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.65)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = "#7e6e52";
                  e.currentTarget.style.borderColor = "#7e6e52";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                }}
              >
                <span style={{ width: 18, height: 18, display: "block" }}>
                  {link.svg}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "0.9rem 2rem",
        maxWidth: 1000, margin: "0 auto",
        display: "flex", justifyContent: "space-between",
        fontSize: 11, color: "rgba(255,255,255,0.3)",
      }}>
        <span>© {new Date().getFullYear()} Gladys Lopez-Acevedo. All rights reserved.</span>
        <span>The World Bank, Washington D.C.</span>
      </div>
    </footer>
  );
}
