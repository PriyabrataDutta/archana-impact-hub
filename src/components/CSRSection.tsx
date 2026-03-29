import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FileCheck, BarChart3, Users, Award, Eye, ShieldCheck } from "lucide-react";

const csrItems = [
  "Preventive healthcare",
  "Promotion of education",
  "Rural development",
  "Reducing inequalities",
  "Community welfare",
];

const trustItems = [
  { icon: FileCheck, text: "Utilization certificates" },
  { icon: BarChart3, text: "Periodic impact reports" },
  { icon: Users, text: "Anonymized beneficiary data" },
  { icon: Award, text: "CSR branding & visibility" },
  { icon: Eye, text: "Joint monitoring & review" },
  { icon: ShieldCheck, text: "Section 80G tax benefits" },
];

const CSRSection = () => (
  <section id="csr" className="py-24 bg-surface-alt">
    <div className="container mx-auto px-4">
      <SectionHeading
        label="For Corporates"
        title="CSR Alignment & Transparency"
        subtitle="Our initiatives align with Schedule VII of the Companies Act, 2013."
      />
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-background rounded-lg p-8 border border-border"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">Schedule VII Coverage</h3>
          <ul className="space-y-3">
            {csrItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-warm flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-background rounded-lg p-8 border border-border"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">Transparency & Accountability</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustItems.map((t) => (
              <div key={t.text} className="flex items-center gap-3">
                <t.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{t.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CSRSection;
