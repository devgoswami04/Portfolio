import { TypeAnimation } from "react-type-animation";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import FadeInSection from "./FadeInSection";
import AsciiPortrait from "./AsciiPortrait";
import { profile } from "@/lib/portfolio-data";

function go(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Intro() {
  return (
    <section id="intro">
      <AsciiPortrait />
      <div className="intro-block">
        <FadeInSection>
          <div className="intro-greet">hi, my name is</div>
        </FadeInSection>
        <div className="intro-title">
          <span className="intro-name">
            <TypeAnimation sequence={["Dev Goswami"]} wrapper="span" cursor={false} repeat={0} />
          </span>
          <span className="intro-cursor">|</span>
        </div>
        <FadeInSection delay="150ms">
          <div className="intro-subtitle">I build things for the web.</div>
        </FadeInSection>
        <FadeInSection delay="300ms">
          <p className="intro-desc">
            I'm a Computer Science student at VIT Vellore and a full-stack developer focused on
            building production-ready web applications. I love solving hard problems, exploring
            AI/ML, and shipping backends that scale.
          </p>
        </FadeInSection>
        <FadeInSection delay="450ms">
          <div className="intro-actions">
            <button className="intro-contact" onClick={() => go("contact")}>
              <Mail size={18} /> Get in touch
            </button>
            <a className="intro-contact secondary" href={profile.resumeUrl} download>
              <Download size={18} /> Resume
            </a>
          </div>
          <div className="intro-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
