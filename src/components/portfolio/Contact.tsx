import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { profile } from "@/lib/portfolio-data";

export default function Contact() {
  return (
    <section id="contact">
      <FadeInSection>
        <div className="contact-tag">/ what's next?</div>
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-desc">
          I'm currently open to internships, collaborations, and interesting problems. Whether
          you have a question, an opportunity, or just want to say hi — my inbox is always open.
        </p>
        <div className="contact-methods">
          <a className="contact-chip" href={`mailto:${profile.email}`}>
            <Mail size={16} /> {profile.email}
          </a>
          <a className="contact-chip" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <Phone size={16} /> {profile.phone}
          </a>
          <a className="contact-chip" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} /> {profile.linkedinHandle}
          </a>
          <a className="contact-chip" href={profile.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} /> {profile.githubHandle}
          </a>
        </div>
        <a className="intro-contact" href={profile.resumeUrl} download>
          <Download size={18} /> Download Resume
        </a>
      </FadeInSection>
    </section>
  );
}
