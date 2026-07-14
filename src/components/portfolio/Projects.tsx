import { FolderOpen, Github, ExternalLink } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { profile, projects } from "@/lib/portfolio-data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-title">/ projects</span>
        <a
          href={profile.github}
          className="explore-link"
          target="_blank"
          rel="noopener noreferrer"
          style={{ order: 2, marginLeft: 20, color: "var(--green-bright)", whiteSpace: "nowrap" }}
        >
          View all →
        </a>
      </div>
      <ul className="projects-grid">
        {projects.map((p, i) => (
          <FadeInSection key={p.title} delay={`${(i + 1) * 100}ms`}>
            <li className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpen size={34} />
                </div>
                <span className="external-links">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                      <Github size={20} />
                    </a>
                  )}
                  {"demo" in p && (p as { demo?: string }).demo && (
                    <a href={(p as { demo?: string }).demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </span>
              </div>
              <div className="card-title">{p.title}</div>
              <div className="card-desc">{p.desc}</div>
              <ul className="card-achievements">
                {p.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <div className="card-tech">{p.techStack}</div>
            </li>
          </FadeInSection>
        ))}
      </ul>
    </section>
  );
}
