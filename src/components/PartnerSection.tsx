import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Eye, Heart, BookOpen, Sparkles, Phone, Mail, Globe } from "lucide-react";

const outcomes = [
  { icon: Eye, text: "Restore sight" },
  { icon: Heart, text: "Improve health" },
  { icon: BookOpen, text: "Enable education" },
  { icon: Sparkles, text: "Transform lives" },
];

const PartnerSection = () => (
  <section id="partner" className="py-24 bg-surface-hero text-hero-foreground">
    <div className="container mx-auto px-4">
      <SectionHeading
        label="Get Involved"
        title="Partner With Us"
        subtitle="Together, we can build healthier, empowered communities."
        light
      />
      <div className="grid md:grid-cols-2 gap-12 mt-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-hero-foreground/80 mb-8 text-lg">
            Your support can make a lasting difference in the lives of thousands.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {outcomes.map((o) => (
              <div key={o.text} className="flex items-center gap-3 p-4 rounded-lg bg-hero-foreground/5 border border-hero-foreground/10">
                <o.icon className="w-5 h-5 text-accent-warm" />
                <span className="text-hero-foreground font-medium">{o.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-hero-foreground/5 border border-hero-foreground/10 rounded-lg p-8"
        >
          <h3 className="font-display text-2xl font-semibold text-hero-foreground mb-6">Contact Us</h3>
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent-warm" />
              <span className="text-hero-foreground/80">Contact number coming soon</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent-warm" />
              <span className="text-hero-foreground/80">Email coming soon</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-accent-warm" />
              <a href="https://www.archanafoundation.org" target="_blank" rel="noopener noreferrer" className="text-accent-warm hover:underline">
                www.archanafoundation.org
              </a>
            </div>
          </div>
          <a
            href="mailto:info@archanafoundation.org"
            className="mt-8 inline-block w-full text-center bg-accent-warm text-accent-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            Reach Out Today
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PartnerSection;
