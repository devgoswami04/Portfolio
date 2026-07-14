import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { navSections, profile } from "@/lib/portfolio-data";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 50);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-inner">
        <button className="navbar-brand" onClick={() => go("intro")}>{profile.name}</button>
        <div className="navbar-links">
          {navSections.map((s) => (
            <button key={s.id} className="nav-link" onClick={() => go(s.id)}>
              {s.label}
            </button>
          ))}
          <div className="navbar-social">
            <a className="nav-link" href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
            <a className="nav-link" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a className="nav-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <button className="navbar-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {navSections.map((s) => (
          <button key={s.id} className="nav-link" onClick={() => go(s.id)}>
            {s.label}
          </button>
        ))}
        <div className="navbar-social">
          <a className="nav-link" href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
          <a className="nav-link" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a className="nav-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
        </div>
      </div>
    </nav>
  );
}
