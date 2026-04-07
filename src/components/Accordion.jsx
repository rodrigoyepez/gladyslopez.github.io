import { useState } from "react";

export default function Accordion({ label, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={() => setOpen(!open)}>
        <span className="accordion-label">{label}</span>
        <span className={`accordion-chevron ${open ? "open" : ""}`}>▼</span>
      </button>
      {open && <div className="accordion-body">{children}</div>}
    </div>
  );
}
