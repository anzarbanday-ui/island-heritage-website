import { Mountain, Clock, Plane, Star } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import styles from "./WhyStay.module.css";

const stats = [
  {
    icon: Mountain,
    number: "Jhelum",
    label: "Jhelum River and mountain views from the property"
  },
  {
    icon: Star,
    number: "2",
    label: "Carefully designed room categories"
  },
  {
    icon: Clock,
    number: "7AM–11PM",
    label: "Attentive service every day of the week"
  },
  {
    icon: Plane,
    number: "30 min",
    label: "From Srinagar Airport with pre-arranged transfers"
  }
];

export function WhyStay() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow="Why Island Heritage"
          title="A stay shaped by place and quiet craft."
          text="Every detail at Island Heritage is measured — not maximised."
          theme="dark"
        />
        <div className={styles.grid} role="list">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className={styles.stat} role="listitem">
                <div className={styles.iconWrap}>
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div className={styles.divider} aria-hidden="true" />
                <p className={styles.number}>{stat.number}</p>
                <p className={styles.label}>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
