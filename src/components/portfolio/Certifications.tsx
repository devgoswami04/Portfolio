import { Award } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { certifications } from "@/lib/portfolio-data";

export default function Certifications() {
  return (
    <section id="certifications">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ certifications</span>
        </div>
        {certifications.map((c) => (
          <div key={c.title} className="cert-card">
            <div className="cert-icon">
              <Award size={28} />
            </div>
            <div style={{ flex: 1 }}>
              <div className="cert-title">{c.title}</div>
              <div className="cert-issuer">{c.issuer}</div>
              {c.issued ? <div className="cert-issuer">{c.issued}</div> : null}
              <div className="cert-desc">{c.desc}</div>
              <div className="cert-tech">
                {c.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </FadeInSection>
    </section>
  );
}
