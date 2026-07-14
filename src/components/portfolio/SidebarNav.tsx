import { navSections } from "@/lib/portfolio-data";

function go(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function SidebarNav() {
  return (
    <div className="sidebar-nav">
      <div className="sidebar-links">
        {navSections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => {
              e.preventDefault();
              go(s.id);
            }}
          >
            <span className="nav-slash">/</span>
            {s.label.toLowerCase()}
          </a>
        ))}
      </div>
    </div>
  );
}
