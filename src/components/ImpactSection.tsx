import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Eye, Glasses, Search, Shield, Ear, Smile, GraduationCap, TreePine } from "lucide-react";

const stats = [
  { icon: Eye, value: "10,000+", label: "Individuals Screened" },
  { icon: Glasses, value: "3,000+", label: "Spectacles Provided" },
  { icon: Search, value: "1,500+", label: "Cataracts Detected Early" },
  { icon: Shield, value: "1,000+", label: "Glaucoma Suspects Identified" },
  { icon: Ear, value: "1000s", label: "ENT Cases Treated" },
  { icon: Smile, value: "5,000+", label: "Dental Screenings" },
  { icon: GraduationCap, value: "500+", label: "Students Supported" },
  { icon: TreePine, value: "100+", label: "Rural Camps Conducted" },
];

const ImpactSection = () => (
  <section id="impact" className="py-24 bg-surface-hero text-hero-foreground">
    <div className="container mx-auto px-4">
      <SectionHeading
        label="Annual Goals"
        title="Expected Annual Impact"
        subtitle="With CSR and donor support, our programs aim to deliver measurable, life-changing outcomes."
        light
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="text-center p-6 rounded-lg bg-hero-foreground/5 border border-hero-foreground/10"
          >
            <stat.icon className="w-7 h-7 text-accent-warm mx-auto mb-3" />
            <div className="font-display text-2xl md:text-3xl font-bold text-accent-warm mb-1">
              {stat.value}
            </div>
            <p className="text-sm text-hero-foreground/70">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
