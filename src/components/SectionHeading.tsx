import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading = ({ label, title, subtitle, light }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="text-center mb-14"
  >
    {label && (
      <p className="text-accent-warm font-semibold tracking-widest uppercase text-xs mb-3">
        {label}
      </p>
    )}
    <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${light ? "text-hero-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`max-w-2xl mx-auto text-base ${light ? "text-hero-foreground/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
    <div className="mt-4 w-16 h-1 bg-accent-warm mx-auto rounded-full" />
  </motion.div>
);

export default SectionHeading;
