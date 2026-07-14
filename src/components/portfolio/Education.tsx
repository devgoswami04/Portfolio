import FadeInSection from "./FadeInSection";
import { education } from "@/lib/portfolio-data";

export default function Education() {
  return (
    <section id="education">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ education</span>
        </div>
        <div className="edu-grid">
          {education.map((e, i) => (
            <FadeInSection key={e.school} delay={`${(i + 1) * 100}ms`}>
              <div className="edu-card">
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
                <div className="edu-meta">
                  {e.location ? `${e.location} · ` : ""}
                  {e.duration}
                </div>
                {e.cgpa && <div className="edu-cgpa">{e.cgpa}</div>}
              </div>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
