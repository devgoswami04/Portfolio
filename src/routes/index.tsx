import { createFileRoute } from "@tanstack/react-router";
import NavBar from "@/components/portfolio/NavBar";
import Intro from "@/components/portfolio/Intro";
import About from "@/components/portfolio/About";
import Education from "@/components/portfolio/Education";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import Credits from "@/components/portfolio/Credits";
import GameToggle from "@/components/portfolio/GameToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dev Goswami — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Dev Goswami — Computer Science student at VIT Vellore, full-stack developer building production-ready web applications with React, Node.js, and MongoDB.",
      },
      { property: "og:title", content: "Dev Goswami — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Computer Science student at VIT Vellore. Full-stack developer focused on React, Node.js, backend engineering, and AI/ML.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="App">
      <NavBar />
      <GameToggle />
      <div id="content">
        <Intro />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Credits />
      </div>
    </div>
  );
}
