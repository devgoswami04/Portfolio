import { useState } from "react";
import FadeInSection from "./FadeInSection";
import { experience } from "@/lib/portfolio-data";

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <section id="experience">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ experience</span>
        </div>
        <div className="exp-container">
          <div className="exp-tabs" role="tablist">
            {experience.map((e, i) => (
              <button
                key={e.company}
                className={`exp-tab ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={active === i}
              >
                {e.company}
              </button>
            ))}
          </div>
          <div className="exp-panel">
            <span className="joblist-job-title">{job.role} </span>
            <span className="joblist-job-company">{job.company}</span>
            <div className="joblist-location">{job.location}</div>
            <div className="joblist-duration">{job.duration}</div>
            <ul className="job-description">
              {job.desc.map((d, i) => (
                <FadeInSection key={i} delay={`${(i + 1) * 100}ms`}>
                  <li>{d}</li>
                </FadeInSection>
              ))}
            </ul>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
