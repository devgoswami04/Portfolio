import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: string;
}

export default function FadeInSection({ children, delay }: Props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      });
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = { transitionDelay: delay ?? "0ms" };
  return (
    <div ref={domRef} className={`fade-in-section ${isVisible ? "is-visible" : ""}`} style={style}>
      {children}
    </div>
  );
}
