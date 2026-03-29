import { motion } from "framer-motion";
import { Phone, Mail, Globe, ArrowRight } from "lucide-react";

const PartnerSection = () => (
  <section id="partner" className="py-28 bg-primary">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-accent-warm" />
            <p className="text-accent-warm text-[11px] font-semibold tracking-[0.25em] uppercase">Get Involved</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground leading-tight tracking-tight mb-6">
            Partner With Us
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10 max-w-md">
            Your support can restore sight, improve health, enable education,
            and transform lives. Together, we build healthier, empowered communities.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Restore Sight", "Improve Health", "Enable Education", "Transform Lives"].map((item) => (
              <span key={item} className="border border-primary-foreground/20 text-primary-foreground/80 px-4 py-2 text-xs tracking-widest uppercase">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="lg:col-span-6 bg-primary-foreground/5 border border-primary-foreground/10 p-10"
        >
          <h3 className="font-display text-2xl text-primary-foreground mb-8">Contact Us</h3>
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4">
              <Phone className="w-4 h-4 text-accent-warm" />
              <span className="text-primary-foreground/70 text-[15px]">Contact number coming soon</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-4 h-4 text-accent-warm" />
              <span className="text-primary-foreground/70 text-[15px]">Email coming soon</span>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="w-4 h-4 text-accent-warm" />
              <a href="https://www.archanafoundation.org" target="_blank" rel="noopener noreferrer" className="text-accent-warm text-[15px] hover:underline">
                www.archanafoundation.org
              </a>
            </div>
          </div>
          <a
            href="mailto:info@archanafoundation.org"
            className="flex items-center justify-center gap-2 w-full bg-accent-warm text-accent-foreground px-8 py-4 font-semibold text-[15px] tracking-wide hover:brightness-110 transition-all"
          >
            Reach Out Today <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PartnerSection;
