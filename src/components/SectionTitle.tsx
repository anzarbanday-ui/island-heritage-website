import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  wide?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
  theme = "light",
  wide = false
}: SectionTitleProps) {
  const wrapClass = [
    styles.wrap,
    align === "center" ? styles["wrap--center"] : "",
    wide ? styles["wrap--wide"] : ""
  ].filter(Boolean).join(" ");

  const headingClass = [
    styles.heading,
    theme === "dark" ? styles["heading--light"] : ""
  ].filter(Boolean).join(" ");

  const textClass = [
    styles.text,
    align === "center" ? styles["text--center"] : "",
    theme === "dark" ? styles["text--light"] : ""
  ].filter(Boolean).join(" ");

  return (
    <div className={wrapClass}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={headingClass}>{title}</h2>
      {text && <p className={textClass}>{text}</p>}
    </div>
  );
}
