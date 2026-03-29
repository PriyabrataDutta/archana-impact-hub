import { motion } from "framer-motion";

const reasons = [
  { num: "01", title: "15+ Years of Impact", desc: "Proven track record of social impact and community trust." },
  { num: "02", title: "Multi-Sector Approach", desc: "Integrated healthcare and education delivery model." },
  { num: "03", title: "Scalable Programs", desc: "Measurable outcomes that grow with your investment." },
  { num: "04", title: "Strong Execution", desc: "Deep on-ground operations across rural India." },
  { num: "05", title: "High Visibility", desc: "Meaningful CSR engagement and brand association." },
  { num: "06", title: "Direct Outcomes", desc: "Every contribution creates life-changing impact." },
];

const WhyPartnerSection = () => (
  <section className="py-28 bg-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-accent-warm" />
            <p className="text-accent-warm text-[11px] font-semibold tracking-[0.25em] uppercase">Why Us</p>
          </div>
          <h2 className="font-display text-3xl md:text-[2.75rem] leading-tight tracking-tight text-foreground">
            Why Partner With Us
          </h2>
        </motion.div>
        <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex gap-4"
            >
              <span className="font-display text-2xl text-accent-warm/30 leading-none mt-0.5">{r.num}</span>
              <div>
                <h4 className="font-medium text-foreground mb-1 text-[15px]">{r.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyPartnerSection;
