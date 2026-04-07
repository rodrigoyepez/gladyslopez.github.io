// ─────────────────────────────────────────────────
//  Publications.jsx
//  CV data is the source of truth.
//  OpenAlex runs in the background to fill in
//  missing links for papers that have none.
// ─────────────────────────────────────────────────

import { useState, useEffect } from "react";
import Accordion from "../components/Accordion";

// ── PEER REVIEWED BOOKS ──────────────────────────────────────────────────────
const BOOKS = [
  { title: "Digital Transformation and its Role in Expanding Women's Economic Opportunities in Iraq, Jordan, and Lebanon", url: "https://documents.worldbank.org/pt/publication/documents-reports/documentdetail/099063025004040856", meta: "Lopez-Acevedo, Gladys et al. The World Bank, 2025." },
  { title: "Hooked on Subsidies: Fiscal Costs and the Challenge of Reform", url: null, meta: "The World Bank, 2025." },
  { title: "Informality and Inclusive Growth in MENA", url: "https://elibrary.worldbank.org/doi/abs/10.1596/978-1-4648-1988-9", meta: "Lopez-Acevedo, Gladys et al. MENA Development Report. Washington, DC: The World Bank, 2023. ISBN 9781464819889." },
  { title: "The Palestinian Economy and Trade Restrictions: Implications for Integration Policy", url: null, meta: "Finn, Arden et al. The World Bank, 2023." },
  { title: "Exports to Improve Labor Markets in MENA", url: "https://openknowledge.worldbank.org/entities/publication/276d1c9c-7c6d-4cb8-a252-0b615d7bf7ae", meta: "Lopez-Acevedo, Gladys et al. MENA Development Report. Washington, DC: The World Bank, 2023. ISBN 9781464819728." },
  { title: "From Jobs To Careers: Apparel Exports And Career Paths For Women In Developing Countries", url: "https://openknowledge.worldbank.org/entities/publication/1511e016-32cc-5b1c-adbc-646082fa40c1", meta: "Lopez-Acevedo, Gladys et al. South Asia Development Forum. Washington, DC: The World Bank, 2022. ISBN 978-1-4648-1803-5." },
  { title: "Distributional Impacts of COVID-19 in MENA", url: "https://www.worldbank.org/en/region/mena/publication/distributional-impacts-of-covid-19-in-the-middle-east-and-north-africa-region", meta: "Hoogeveen, Johannes G. and Gladys Lopez-Acevedo. MENA Development Report. Washington, DC: The World Bank, 2021. ISBN 978-1-4648-1776-2." },
  { title: "Distributional Impacts of Trade: Empirical Innovations, Analytical Tools, and Policy Responses", url: "https://openknowledge.worldbank.org/entities/publication/7ea8a259-ebe1-5160-b8c9-f5deee327e3f", meta: "Engel, Jakob, Deeksha Kokas, Gladys Lopez-Acevedo, and Maryla Maliszewska. Washington, DC: The World Bank, 2021. ISBN 978-1-4648-1704-5." },
  { title: "Morocco's Jobs Landscape: Identifying Constraints to an Inclusive Labor Market", url: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/939061643868052130/moroccos-jobs-landscape-identifying-constraints-to-an-inclusive-labor-market", meta: "Lopez-Acevedo, Gladys, Gordon Betcherman, Ayache Khellaf, and Vasco Molini. Washington, DC: The World Bank, 2021. ISBN 978-1-4648-1678-9." },
  { title: "Exports to Jobs: Boosting the Gains from Trade in South Asia", url: "https://openknowledge.worldbank.org/entities/publication/84f82354-9806-5dd9-a4d4-747e3efcbdf5", meta: "Artuc, Erhan, Gladys Lopez-Acevedo, Raymond Robertson, and Daniel Samaan. Washington, DC: The World Bank, 2019. ISBN: 978-1-4648-1248-4." },
  { title: "Entangled: Localized Effects of Exports on Earnings and Employment in South Asia", url: null, meta: "Artuc, Erhan, Gladys Lopez-Acevedo, Raymond Robertson, and Daniel Samaan. Washington, DC: The World Bank, 2018. ISBN: 978-92-2-131576-6." },
  { title: "South Asia's Turn? Policies to Boost Competitiveness and Create the Next Export Powerhouse", url: "https://www.worldbank.org/en/region/sar/publication/south-asias-turn-policies-to-boost-competitiveness-and-create-the-next-export-powerhouse", meta: "Lopez-Acevedo, Gladys, Denis Medvedev, and Vincent Palmade. Washington, DC: The World Bank, 2017. ISBN: 9781464809408." },
  { title: "Stitches to Riches?: Apparel Employment, Trade, and Economic Development in South Asia", url: "https://openknowledge.worldbank.org/entities/publication/05ab7228-e4fc-587a-86de-28f0aea12545", meta: "Lopez-Acevedo, Gladys, and Raymond Robertson, eds. Washington DC: The World Bank, 2016. ISBN: 9781464808135." },
  { title: "Making the Most of Cheap Oil", url: "https://openknowledge.worldbank.org/server/api/core/bitstreams/0192840d-d4ba-5af7-ae25-712bf5fad36f/content", meta: "Lopez-Acevedo, Gladys. South Asia Economic Focus. Washington DC: The World Bank, 2015. ISBN 9781464809927." },
  { title: "Violence against Women and Girls: Lessons from South Asia", url: "https://openknowledge.worldbank.org/entities/publication/540cb72a-21cb-54ee-b5b2-d9e9324aa9d3", meta: "Solotaroff, Jennifer L, Pande, Rohini Prabha. South Asia Development Forum. Washington, DC: World Bank Group, (contributor), 2014. ISBN: 9781464801716." },
  { title: "Addressing Inequality in South Asia", url: "https://openknowledge.worldbank.org/entities/publication/76fc1f47-e815-5222-9af2-81958057dcb0", meta: "Rama, Martin, Tara Béteille, and Yue Li. Washington, DC: The World Bank, 2014 (contributor). ISBN 9781464800221." },
  { title: "Working through the Crisis: Jobs and Policies in Developing Countries during the Great Recession", url: "https://openknowledge.worldbank.org/items/fab53f0c-6dfd-58ae-913c-987257209b39", meta: "Banerji, Arup et al. (eds). Washington, DC: The World Bank, 2013 (contributor). ISBN: 9780821389676." },
  { title: "Sewing Success? Employment, Poverty, and Wages at the End of the Multi-Fibre Arrangements", url: "https://documents1.worldbank.org/curated/en/488191468330919867/pdf/Sewing-success-employment-wages-and-poverty-following-the-end-of-the-multi-fibre-arrangement.pdf", meta: "Lopez-Acevedo, Gladys, and Raymond Robertson, eds. Washington, DC: The World Bank, 2012. ISBN: 9780821387788." },
  { title: "Building Better Policies: The Nuts and Bolts of Monitoring and Evaluation Systems", url: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/680771468183894133/building-better-policies-the-nuts-and-bolts-of-monitoring-and-evaluation-systems", meta: "Lopez-Acevedo, Gladys, Keith McKay, and Philipp Krause. Washington, DC: The World Bank, 2012. ISBN 978082387771." },
  { title: "Impact Evaluation of Small and Medium Enterprise Programs", url: "https://openknowledge.worldbank.org/items/fab53f0c-6dfd-58ae-913c-987257209b39", meta: "Lopez-Acevedo, Gladys C, and Hong W. Tan, eds. Washington, DC: The World Bank, 2011. ISBN: 9780821387757." },
  { title: "Challenges in Monitoring and Evaluation: An Opportunity to Institutionalize M&E Systems", url: "https://documents.banquemondiale.org/fr/publication/documents-reports/documentdetail/980451468016816661", meta: "Lopez-Acevedo, Gladys C., Katia L. Rivera, Lycia Lima, and Helena Hwang. Washington, DC: The World Bank, 2010." },
  { title: "Latin America - Determinants of Regional Welfare Disparities within Latin American Countries", url: "https://openknowledge.worldbank.org/entities/publication/42ff64e2-bc77-5aee-999b-25927eb9edfa", meta: "Skoufias, Emmanuel, and Gladys Lopez-Acevedo. The World Bank, 2009." },
  { title: "Nutrición Y Pobreza: Política Pública Basada En Evidencia", url: "https://documents1.worldbank.org/curated/en/688351468049752976/pdf/563220WP0SPANI1reza1BM1SEDESOL1INSP.pdf", meta: "Gonzalez de Cossio, Teresa, Juan Rivera Dommarco, Gladys C. Lopez-Acevedo, and Gloria M. Rubio Soto. Washington, D.C.: The World Bank, 2009." },
];

// ── PEER REVIEWED JOURNAL ARTICLES ──────────────────────────────────────────
const JOURNALS = [
  { title: "Exports and Labor Demand: Evidence from Egyptian firm-level data", url: "https://www.iza.org/publications/dp/15627/exports-and-labor-demand-evidence-from-egyptian-firm-level-data", meta: "Berg, Claudia, Raymond Robertson, and Gladys Lopez-Acevedo. Middle East Development Journal, Taylor and Francis, 2025." },
  { title: "Exports to jobs: Morocco's trade patterns and local labor market", url: "https://www.tandfonline.com/doi/full/10.1080/17938120.2025.2488647", meta: "Roche Jaime and Gladys Lopez-Acevedo. Middle East Development Journal, Taylor and Francis, 2024." },
  { title: "Mending the Gap: Apparel Export Prices and the Gender Wage Gap in Bangladesh", url: null, meta: "Robertson, Raymond, Deeksha Kokas, Diego Cardozo, and Gladys Lopez-Acevedo. Review of World Economics, 2024." },
  { title: "The Relationship between Female Labor Force Participation and Violent Conflicts in South Asia", url: "https://www.tandfonline.com/doi/abs/10.1080/09584935.2023.2227112", meta: "Robertson, Raymond, Gladys Lopez Acevedo, Matias Morales. Contemporary South Asia Journal, Taylor and Francis, June 2023." },
  { title: "Conflict and Poverty in Afghanistan's Transition", url: "https://www.tandfonline.com/doi/abs/10.1080/00220388.2021.1945040", meta: "Floreani, Vincent, Gladys López-Acevedo, and Martin Rama. Journal of Development Studies, Volume 57, 2021–Issue 10." },
  { title: "Conflict and the Composition of Economic Activity in Afghanistan", url: "https://sciendo.com/article/10.2478/izajodm-2021-0010", meta: "Galdo, Virgilio, Gladys Lopez-Acevedo, and Martin Rama. IZA Journal of Development and Migration, 2021, 12:10." },
  { title: "Changes in Female Employment in Mexico: Demographics, Economics, and Policies", url: "https://estudioseconomicos.colmex.mx/index.php/economicos/article/view/411", meta: "Lopez-Acevedo, Gladys, Samuel Freije, Mexico Alberto Vergara Bahena, and Diego Cardozo. Journal Estudios Economicos, El Colegio de Mexico, Vol. 36, No. 1, 2021." },
  { title: "Globalization and the gender earnings gap: Evidence from Sri Lanka and Cambodia", url: "https://www.tandfonline.com/doi/full/10.1080/00220388.2019.1573986", meta: "Robertson, Raymond, Gladys Lopez-Acevedo, and Yevgeniya Savchenko. The Journal of Development Studies 56, No. 2, 2020: 295–313." },
  { title: "Evaluating Different Types of Enterprise Support Programs Using Panel Firm Data: Evidence from the Mexican Manufacturing Sector", url: "https://economia.lse.ac.uk/articles/10.31389/eco.96", meta: "Lopez-Acevedo, Gladys, and Monica Tinajero-Bravo. Economia: Journal of the Latin American and Caribbean Economic Association, Fall 2013, 14(1):1–32." },
  { title: "The Promise and Peril of Post-MFA Apparel Production", url: "https://ideas.repec.org/a/wbk/prmecp/ep84.html", meta: "Lopez-Acevedo, Gladys, and Raymond Robertson. Economic Promise 84: 1–4, 2012." },
  { title: "Impact Evaluation of SME Programs in Mexico", url: null, meta: "Lopez-Acevedo, Gladys. Economia Journal, 2012." },
  { title: "Mexico: Evolution of Education and Inequality in the Last Two Decades", url: "https://link.springer.com/chapter/10.1007/978-90-481-2652-1_18", meta: "Lopez-Acevedo, Gladys. In International Handbook on the Inequality of Education, Jacobs and Holsinger, eds. UCLA, 2009." },
  { title: "A Decade of the Evolution of Earnings Inequality and Rates of Return to Education in Mexico", url: null, meta: "Lopez-Acevedo, Gladys. In Handbook of Education. Elsevier, 2010." },
  { title: "Determinants of Secondary School Enrollment in Mexico", url: "https://www.jstor.org/stable/20856812", meta: "Lopez-Acevedo, Gladys. Trimestre Económico LXXI: 215–245, March 2004." },
  { title: "Equilibrium Behavior in an all Pay-auction Model with Complete Information", url: "https://www.jstor.org/stable/40311483", meta: "Lopez-Acevedo, Gladys. Estudios Económicos El Colegio de México 19: 93–124, June 2004." },
  { title: "Mexico: Evolution of Earnings Inequality and Rates of Returns to Education (1988–2002)", url: "https://www.jstor.org/stable/40311490", meta: "Lopez-Acevedo, Gladys. Estudios Económicos 19(2): 211–284, December 2004." },
  { title: "A Case Study of Mexico Conditional Cash Transfer", url: null, meta: "Lopez-Acevedo, Gladys. Globalization and Social Safety Nets in Asia-Pacific Region, Park and Lee, eds. 2003." },
  { title: "A Reassessment of Technical Education in México", url: "https://eric.ed.gov/?id=EJ675786", meta: "Lopez-Acevedo, Gladys. Journal of Career and Technical Education 19(2): 59–69, Spring 2003." },
  { title: "Evolution of Earnings Inequality and Rates of Return to Education in Mexico (1988–2002)", url: "https://www.jstor.org/stable/40311490", meta: "Journal of Educational Planning and Administration 16(4): 483–521, October 2003." },
  { title: "Learning Outcomes and School Cost-Effectiveness in Mexico: The PARE Program", url: null, meta: "Lopez-Acevedo, Gladys. Journal of Educational Planning and Administration 16(1): 31–53, January 2002." },
  { title: "Professional Development and Teachers' Incentives in Mexico", url: "https://ideas.repec.org/a/elt/journl/v69y2002i275p389-434.html", meta: "Lopez-Acevedo, Gladys. Trimestre Económico LXIX: 389–434, September 2002." },
  { title: "Determinantes de la matrícula en la escuela secundaria en México", url: "https://econpapers.repec.org/article/eltjournl/v_3a71_3ay_3a2004_3ai_3a281_3ap_3a215-245.htm", meta: "López Acevedo, Gladys. El Trimestre Económico, vol. 0(281), pages 215–245, enero-mar 2004." },
  { title: "Incentivos y desarrollo profesional de los profesores en las escuelas mexicanas", url: "https://econpapers.repec.org/article/eltjournl/v_3a69_3ay_3a2002_3ai_3a275_3ap_3a389-434.htm", meta: "Lopez-Acevedo, Gladys. El Trimestre Económico LXIX (3)(275):389–434, 2002." },
  { title: "Poverty in Latin America: Trends (1986–1998) and Determinants", url: "https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0717-68212001011400002", meta: "Wodon, Quentin, Rodrigo Castro-Fernandez, Kihoon Lee, Gladys Lopez-Acevedo et al. Cuadernos de Economia 38(114): 127–155, August 2001." },
  { title: "Technology Adoption and Skills Demand: Panel Evidence from Mexican Manufacturing", url: null, meta: "Lopez-Acevedo, Gladys. Journal of Manpower, 2001." },
  { title: "Diseño de Nuevas Instituciones de Subastas", url: null, meta: "Lopez-Acevedo, Gladys. El Trimestre Económico LXVII: 114–120, March 2000." },
  { title: "Tendencias del financiamiento de empresas en México", url: "https://www.jstor.org/stable/20856979", meta: "Lopez-Acevedo, Gladys. El Trimestre Economico LXVI (1): 112–141, March 1999." },
  { title: "Análisis Económico y Fiscal: Programa de Desarrollo Educativo Hacia el 2015", url: null, meta: "Lopez-Acevedo, Gladys. Perfiles Educativos, UNAM, 1998." },
  { title: "Equilibrium Behavior in Posted-Offer Markets", url: null, meta: "López-Acevedo, Gladys. La Revista de Estudios Economicos del Colegio de México 12(2): 96–133, December 1997." },
  { title: "Elaboración de nuevas instituciones de subasta", url: null, meta: "Lopez-Acevedo, Gladys. El Trimestre Economico LXIV (2) 273–284, June 1997." },
  { title: "Equilibrio Secuencial y sus Refinamientos", url: null, meta: "Lopez-Acevedo, Gladys. ITAM Working Paper. Gaceta de Economia 45–50, 1996." },
  { title: "Quantal Response Equilibria for Posted-offer Markets", url: null, meta: "Lopez-Acevedo, Gladys. In M. Isaac, ed., Research in Experimental Economics. Greenwich, Connecticut: JAI Press, 1996." },
  { title: "Determinants of Child Labor in Ecuador", url: null, meta: "Lopez-Acevedo, Gladys. CEPAL-BID-FCE Child Labor in Latin America, 1995." },
  { title: "The Evolution and Structure of the Rates of Returns to Education in Mexico (1987–1997)", url: null, meta: "Lopez-Acevedo, Gladys, and Angel Salinas. Revista de Estudios Economicos del Colegio de Mexico, 1999." },
];

// ── FORTHCOMING / UNDER REVIEW ───────────────────────────────────────────────
const FORTHCOMING = [
  { title: "Analyzing Female Employment Trends in South Asia", url: null, meta: "Lopez-Acevedo Gladys, Morales Matias, Najeeb Fatima. Forthcoming, Journal of Economics and Race." },
  { title: "Gender-Segmented Labor Markets", url: null, meta: "Lopez-Acevedo, Goes Carlos, Robertson Raymond. Forthcoming, Journal of Development Studies." },
  { title: "Indonesia Trade Liberalization and Informality", url: null, meta: "Goes, Carlos and Gladys Lopez-Acevedo. Under review, World Bank Economic Review." },
];

// ── OpenAlex link enrichment ──────────────────────────────────────────────────
async function fetchOpenAlexLinks() {
  try {
    const searchRes = await fetch(
      `https://api.openalex.org/authors?search=Gladys+Lopez-Acevedo&per_page=10`,
      { headers: { "User-Agent": "mailto:gacevedo@worldbank.org" } }
    );
    const searchData = await searchRes.json();
    const authors = (searchData.results || []).filter(a =>
      (a.last_known_institutions || []).some(i =>
        i.display_name?.toLowerCase().includes("world bank")
      )
    );
    if (!authors.length) return {};

    const filterStr = authors
      .map(a => `author.id:${a.id.replace("https://openalex.org/", "")}`)
      .join("|");

    const worksRes = await fetch(
      `https://api.openalex.org/works?filter=${encodeURIComponent(filterStr)}&per_page=200&select=id,title,open_access,doi,best_oa_location`,
      { headers: { "User-Agent": "mailto:gacevedo@worldbank.org" } }
    );
    const worksData = await worksRes.json();

    // Build a title → url map for fast lookup
    const map = {};
    for (const w of (worksData.results || [])) {
      const url =
        w.best_oa_location?.pdf_url ||
        w.open_access?.oa_url ||
        (w.doi ? `https://doi.org/${w.doi.replace("https://doi.org/", "")}` : null);
      if (url && w.title) {
        map[w.title.toLowerCase().trim()] = url;
      }
    }
    return map;
  } catch {
    return {};
  }
}

function enrichItems(items, linkMap) {
  return items.map(item => {
    if (item.url) return item;
    const found = linkMap[item.title.toLowerCase().trim()];
    return found ? { ...item, url: found } : item;
  });
}

// ── Components ────────────────────────────────────────────────────────────────
function PubList({ items }) {
  return (
    <ul style={{ listStyle: "none" }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: "1.1rem" }}>
          {item.url ? (
            <a className="pub-title" href={item.url} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          ) : (
            <span className="pub-title" style={{ cursor: "default" }}>{item.title}</span>
          )}
          <div className="pub-meta">{item.meta}</div>
        </li>
      ))}
    </ul>
  );
}

function PubSection({ title, items }) {
  return (
    <div className="pub-subsection">
      <h3>{title}</h3>
      <PubList items={items} />
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Publications() {
  const [books, setBooks] = useState(BOOKS);
  const [journals, setJournals] = useState(JOURNALS);

  useEffect(() => {
    fetchOpenAlexLinks().then(linkMap => {
      if (Object.keys(linkMap).length === 0) return;
      setBooks(enrichItems(BOOKS, linkMap));
      setJournals(enrichItems(JOURNALS, linkMap));
    });
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideDown { from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)} }
        @keyframes fadeInUp  { from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div className="pub-hero" style={{ animation: "slideDown 0.5s ease" }}>
        <h1>Publications</h1>
      </div>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1.5rem 0", animation: "fadeInUp 0.6s ease 0.2s both" }}>
      <div className="accordion" style={{ marginBottom: 0 }}>
        <Accordion label="Peer reviewed books">
          <PubSection title="Books" items={books} />
        </Accordion>
        <Accordion label="Peer reviewed journal articles">
          <PubSection title="Journal Articles" items={journals} />
        </Accordion>
        <Accordion label="Forthcoming and under review">
          <PubSection title="Forthcoming / Under Review" items={FORTHCOMING} />
        </Accordion>
      </div>
    </div>
    </>
  );
}
