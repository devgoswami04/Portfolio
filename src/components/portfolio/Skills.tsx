import { Code2, Database, Globe, Wrench, BookOpen } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { skills } from "@/lib/portfolio-data";

const icons: Record<string, typeof Code2> = {
  "Programming Languages": Code2,
  "Web Development": Globe,
  Databases: Database,
  Tools: Wrench,
  "CS Fundamentals": BookOpen,
};

export default function Skills() {
  return (
    <section id="skills">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ skills</span>
        </div>
        <div className="skills-grid">
          {skills.map((s, i) => {
            const Icon = icons[s.title] ?? Code2;
            return (
              <FadeInSection key={s.title} delay={`${(i + 1) * 80}ms`}>
                <div className="skill-card">
                  <div className="skill-header">
                    <Icon size={20} />
                    <div className="skill-title">{s.title}</div>
                  </div>
                  <div className="skill-chips">
                    {s.items.map((it) => (
                      <span key={it} className="skill-chip">{it}</span>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </FadeInSection>
    </section>
  );
}
