import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Eye, Glasses, Search, Shield, Megaphone, Monitor, Stethoscope, Truck, ArrowRight } from "lucide-react";

const services = [
  { icon: Eye, text: "Eye screening & vision care" },
  { icon: Glasses, text: "Spectacle distribution" },
  { icon: Search, text: "Cataract detection & referral" },
  { icon: Shield, text: "Glaucoma & diabetic retinopathy screening" },
  { icon: Megaphone, text: "Preventive health education" },
];

const techItems = [
  "Portable eye diagnostic devices",
  "ENT examination tools",
  "Dental screening kits",
  "Mobile medical units",
  "On-site dispensing systems",
];

const FlagshipSection = () => (
  <section className="py-28 bg-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <SectionHeading
        label="Our Flagship Initiative"
        title="Community Vision for All"
        subtitle="A multi-specialty outreach model delivering comprehensive healthcare directly to communities."
      />
      <div className="grid lg:grid-cols-12 gap-16 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6">Key Services</h3>
          <div className="space-y-0 divide-y divide-border">
            {services.map((s) => (
              <div key={s.text} className="flex items-center gap-4 py-4 group">
                <s.icon className="w-4 h-4 text-muted-foreground group-hover:text-accent-warm transition-colors flex-shrink-0" />
                <span className="text-foreground text-[15px]">{s.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 bg-primary p-10"
        >
          <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-primary-foreground/60 mb-6">
            Technology-Enabled
          </h3>
          <p className="text-primary-foreground/80 leading-relaxed mb-8 text-[15px]">
            We leverage advanced portable medical equipment to ensure hospital-level
            diagnostics in community settings.
          </p>
          <div className="space-y-4">
            {techItems.map((t) => (
              <div key={t} className="flex items-center gap-3">
                <ArrowRight className="w-3 h-3 text-accent-warm flex-shrink-0" />
                <span className="text-primary-foreground/90 text-sm">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FlagshipSection;
