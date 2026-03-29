import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Eye, Glasses, Search, Shield, Ear, Smile, Megaphone, Monitor, Stethoscope, Truck } from "lucide-react";

const services = [
  { icon: Eye, text: "Eye screening & vision care" },
  { icon: Glasses, text: "Spectacle distribution" },
  { icon: Search, text: "Cataract detection & referral" },
  { icon: Shield, text: "Glaucoma & diabetic retinopathy screening" },
  { icon: Ear, text: "ENT evaluation & basic treatment" },
  { icon: Smile, text: "Dental screening & oral health awareness" },
  { icon: Megaphone, text: "Preventive health education" },
];

const techItems = [
  { icon: Monitor, text: "Portable eye diagnostic devices" },
  { icon: Stethoscope, text: "ENT examination tools" },
  { icon: Smile, text: "Dental screening kits" },
  { icon: Truck, text: "Mobile medical units" },
];

const FlagshipSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading
        label="Our Flagship"
        title="Community Vision for All"
        subtitle="A multi-specialty outreach model delivering comprehensive healthcare directly to communities."
      />
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">Key Services</h3>
          <div className="space-y-4">
            {services.map((s) => (
              <div key={s.text} className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/10">
                  <s.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">{s.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">Technology-Enabled Outreach</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We leverage advanced portable medical equipment to ensure hospital-level diagnostics in community settings, enabling early diagnosis, immediate intervention, and better outcomes.
          </p>
          <div className="space-y-4">
            {techItems.map((t) => (
              <div key={t.text} className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-accent-warm/10">
                  <t.icon className="w-4 h-4 text-accent-warm" />
                </div>
                <span className="text-muted-foreground">{t.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FlagshipSection;
