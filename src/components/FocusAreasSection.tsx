import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Eye, Ear, Smile, GraduationCap } from "lucide-react";

const areas = [
  {
    icon: Eye,
    title: "Community Eye Care",
    description: "Addressing preventable blindness through early detection, treatment, and awareness.",
  },
  {
    icon: Ear,
    title: "ENT Care",
    description: "Screening and management of ear, nose, and throat conditions, especially in rural populations.",
  },
  {
    icon: Smile,
    title: "Dental Care",
    description: "Promoting oral health through camps, preventive education, and basic dental treatments.",
  },
  {
    icon: GraduationCap,
    title: "Education & Upliftment",
    description: "Supporting underprivileged students, contributing to free hostel facilities, and enabling access to learning resources.",
  },
];

const FocusAreasSection = () => (
  <section id="focus" className="py-24 bg-surface-alt">
    <div className="container mx-auto px-4">
      <SectionHeading
        label="What We Do"
        title="Our Focus Areas"
        subtitle="We deliver integrated healthcare and educational support to underserved communities across India."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {areas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-warm/20 transition-colors">
              <area.icon className="w-6 h-6 text-primary group-hover:text-accent-warm transition-colors" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{area.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FocusAreasSection;
