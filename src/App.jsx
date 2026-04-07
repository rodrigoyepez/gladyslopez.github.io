import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import Other from "./pages/Other";
import CV from "./pages/CV";
import Footer from "./components/Footer";
import "./App.css";

const PAGES = ["home", "publications", "other", "cv"];

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const handler = (e) => setPage(e.detail);
    window.addEventListener('navigate', handler);
    return () => window.removeEventListener('navigate', handler);
  }, []);

  return (
    <div className="site">
      <nav className="navbar">
        <div className="nav-brand" onClick={() => setPage("home")}>
          Gladys Lopez-Acevedo
        </div>
        <div className="nav-links">
          {PAGES.map((p, i) => (
            <>
              <button
                key={p}
                className={`nav-link ${page === p ? "active" : ""}`}
                onClick={() => setPage(p)}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
              {i < PAGES.length - 1 && (
                <span key={p + "-sep"} className="nav-sep">·</span>
              )}
            </>
          ))}
        </div>
      </nav>

      {page === "home" && <Home />}
      {page === "publications" && <Publications />}
      {page === "other" && <Other />}
      {page === "cv" && <CV />}

      <Footer />
    </div>
  );
}
