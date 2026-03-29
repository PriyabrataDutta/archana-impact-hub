import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "10,000+", label: "Individuals Screened", highlight: true },
  { value: "3,000+", label: "Spectacles Provided" },
  { value: "1,500+", label: "Cataracts Detected" },
  { value: "1,000+", label: "Glaucoma Suspects" },
  { value: "5,000+", label: "Dental Screenings" },
  { value: "500+", label: "Students Supported" },
];

const ImpactSection = () => (
  <section id="impact" className="py-28 bg-surface-hero text-hero-foreground">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <SectionHeading
        label="Annual Goals"
        title="Measurable, Life-Changing Outcomes"
        subtitle="With CSR and donor support, our programs deliver scalable impact across healthcare and education."
        light
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-hero-foreground/10 mt-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-surface-hero p-8 md:p-10"
          >
            <div className={`font-display text-3xl md:text-4xl mb-2 ${stat.highlight ? "text-accent-warm" : "text-hero-foreground"}`}>
              {stat.value}
            </div>
            <p className="text-hero-foreground/50 text-xs tracking-[0.2em] uppercase">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
