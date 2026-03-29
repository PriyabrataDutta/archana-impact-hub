import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, Layers, TrendingUp, Hammer, Sparkles, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Award, title: "15+ Years", desc: "Proven social impact" },
  { icon: Layers, title: "Multi-Sector", desc: "Healthcare + Education" },
  { icon: TrendingUp, title: "Scalable", desc: "Measurable programs" },
  { icon: Hammer, title: "Strong Execution", desc: "On-ground operations" },
  { icon: Sparkles, title: "High Visibility", desc: "CSR engagement" },
  { icon: HeartHandshake, title: "Life-Changing", desc: "Direct outcomes" },
];

const WhyPartnerSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading
        label="Why Us"
        title="Why Partner With Archana Foundation"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center p-5"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <r.icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-display font-semibold text-foreground text-sm mb-1">{r.title}</h4>
            <p className="text-xs text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyPartnerSection;
