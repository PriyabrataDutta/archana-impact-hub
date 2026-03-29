import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, subtitle, light, align = "left" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5 }}
    className={`mb-16 ${align === "center" ? "text-center" : ""}`}
  >
    {label && (
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        <div className="w-8 h-[1px] bg-accent-warm" />
        <p className="text-accent-warm text-[11px] font-semibold tracking-[0.25em] uppercase">
          {label}
        </p>
      </div>
    )}
    <h2 className={`font-display text-3xl md:text-[2.75rem] leading-tight tracking-tight mb-4 ${light ? "text-hero-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`max-w-2xl text-base leading-relaxed ${align === "center" ? "mx-auto" : ""} ${light ? "text-hero-foreground/60" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
