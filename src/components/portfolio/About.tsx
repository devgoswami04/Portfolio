import FadeInSection from "./FadeInSection";

const highlights = [
  "Full Stack Web Development",
  "AI/ML Enthusiast",
  "Backend Engineering",
  "Problem Solving & DSA",
  "REST API Design",
  "Database Architecture",
];

export default function About() {
  return (
    <section id="about">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-description">
          <p>
            I'm a Computer Science undergraduate at Vellore Institute of Technology, passionate
            about building end-to-end software that people actually use. I work across the stack from
            designing REST APIs and database schemas to crafting responsive React interfaces.
          </p>
          <p>
            My interests sit at the intersection of full-stack development, backend engineering, and
            AI/ML. I enjoy turning ambiguous problems into production-ready systems.
          </p>
          <p>Here are a few areas I'm actively working on:</p>
          <ul className="about-highlights">
            {highlights.map((h, i) => (
              <FadeInSection key={h} delay={`${(i + 1) * 80}ms`}>
                <li>{h}</li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </FadeInSection>
    </section>
  );
}
