"use client";

import { useEffect, useRef, type ReactNode, type HTMLAttributes } from "react";

type AnimatedSectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  delay?: number;
};

export function AnimatedSection({ children, className = "", delay = 0, style, ...props }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...props}
    >
      {children}
    </section>
  );
}
