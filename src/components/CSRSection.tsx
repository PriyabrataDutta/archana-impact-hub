import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Check, ShieldCheck } from "lucide-react";

const csrItems = [
  "Preventive healthcare",
  "Promotion of education",
  "Rural development",
  "Reducing inequalities",
  "Community welfare",
];

const trustItems = [
  "Utilization certificates",
  "Periodic impact reports",
  "Anonymized beneficiary data",
  "CSR branding & visibility",
  "Joint monitoring & review",
];

const CSRSection = () => (
  <section id="csr" className="py-28 bg-surface-alt">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            label="For Corporates"
            title="CSR Alignment & Governance"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground leading-relaxed mb-6"
          >
            Our initiatives align with Schedule VII of the Companies Act, 2013.
            Archana Foundation is eligible under Section 80G, enabling tax benefits for all donors.
          </motion.p>
          <div className="flex items-center gap-3 p-4 bg-primary/5 border-l-2 border-accent-warm">
            <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm text-foreground font-medium">Section 80G certified for tax benefits</span>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-5">
                Schedule VII Coverage
              </h3>
              <div className="space-y-3">
                {csrItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-3.5 h-3.5 text-accent-warm flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-5">
                Transparency
              </h3>
              <div className="space-y-3">
                {trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-3.5 h-3.5 text-accent-warm flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CSRSection;
