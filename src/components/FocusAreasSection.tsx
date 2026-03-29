import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Eye, Ear, Smile, GraduationCap, type LucideIcon } from "lucide-react";

const areas: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Eye,
    title: "Community Eye Care",
    description: "Addressing preventable blindness through early detection, treatment, and awareness across rural populations.",
  },
  {
    icon: Ear,
    title: "ENT Care",
    description: "Screening and management of ear, nose, and throat conditions where access to specialist care is limited.",
  },
  {
    icon: Smile,
    title: "Dental Care",
    description: "Promoting oral health through community camps, preventive education, and basic dental treatments.",
  },
  {
    icon: GraduationCap,
    title: "Education & Upliftment",
    description: "Supporting underprivileged students, free hostel facilities, and enabling access to learning resources.",
  },
];

const FocusAreasSection = () => (
  <section id="focus" className="py-28 bg-surface-alt">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <SectionHeading
        label="What We Do"
        title="Our Focus Areas"
        subtitle="Integrated healthcare and educational support for India's underserved communities."
      />
      <div className="grid md:grid-cols-2 gap-px bg-border mt-4">
        {areas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-surface-alt p-10 group hover:bg-background transition-colors"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent-warm group-hover:bg-accent-warm/5 transition-colors">
                <area.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent-warm transition-colors" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FocusAreasSection;
