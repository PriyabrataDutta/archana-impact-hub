import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const milestones = [
  { year: "2010", title: "Foundation Established", desc: "Registered as a charitable trust to serve underserved communities." },
  { year: "2012", title: "First Eye Camp", desc: "Inaugural eye screening camp, serving 500+ individuals in rural Maharashtra." },
  { year: "2014", title: "Education Program", desc: "Initiated student support and contributed to free hostel facilities." },
  { year: "2016", title: "ENT & Dental Expansion", desc: "Expanded to include ENT and dental care for comprehensive outreach." },
  { year: "2018", title: "1,000th Camp", desc: "Crossed 1,000 medical camps across multiple states in India." },
  { year: "2020", title: "Technology Integration", desc: "Adopted portable diagnostics for hospital-level care in remote areas." },
  { year: "2022", title: "10,000 Lives", desc: "Surpassed 10,000 annual screenings with 3,000+ spectacles distributed." },
  { year: "2025", title: "Scaling for Impact", desc: "Deepening CSR partnerships and expanding into new geographies." },
];

const TimelineSection = () => (
  <section id="timeline" className="py-16 md:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-5 lg:px-12">
      <SectionHeading
        label="Our Journey"
        title="15 Years of Transforming Lives"
        subtitle="A timeline of milestones reflecting our commitment to healthcare, education, and empowerment."
      />

      {/* Mobile: horizontal scroll cards */}
      <div className="md:hidden -mx-5 px-5 overflow-x-auto scrollbar-hide mt-4">
        <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="w-[260px] flex-shrink-0 border border-border p-5 relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-warm to-accent-warm/30" />
              <span className="font-display text-3xl text-accent-warm">{m.year}</span>
              <h3 className="font-medium text-foreground text-[15px] mt-2 mb-2">{m.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: alternating timeline */}
      <div className="relative mt-8 hidden md:block">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-px" />
        <div className="space-y-16">
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="relative grid grid-cols-2 gap-16"
              >
                <div className="absolute left-1/2 top-1 w-2.5 h-2.5 rounded-full bg-accent-warm -translate-x-[5px] ring-4 ring-background z-10" />
                <div className={isLeft ? "text-right pr-16" : "col-start-2 pl-16"}>
                  <span className="font-display text-2xl text-accent-warm">{m.year}</span>
                  <h3 className="font-medium text-foreground text-[15px] mt-1 mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
                {isLeft && <div />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
