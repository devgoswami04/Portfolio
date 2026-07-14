import { profile } from "@/lib/portfolio-data";

export default function Credits() {
  return (
    <footer id="credits">
      <div className="ending-credits">
        Designed & built by{" "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          {profile.name}
        </a>{" "}
        · © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
