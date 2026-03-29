import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const milestones = [
  { year: "2010", title: "Foundation Established", desc: "Archana Foundation registered as a charitable trust with a mission to serve underserved communities." },
  { year: "2012", title: "First Eye Camp", desc: "Launched inaugural community eye screening camp, serving over 500 individuals in rural Maharashtra." },
  { year: "2014", title: "Education Program Launch", desc: "Initiated educational support for underprivileged students and contributed to free hostel facilities." },
  { year: "2016", title: "ENT & Dental Expansion", desc: "Expanded outreach to include ENT and dental care, creating a comprehensive multi-specialty model." },
  { year: "2018", title: "1,000th Camp Milestone", desc: "Crossed 1,000 medical screening camps conducted across multiple states in India." },
  { year: "2020", title: "Technology Integration", desc: "Adopted portable diagnostic equipment to bring hospital-level care directly to remote communities." },
  { year: "2022", title: "10,000 Lives Milestone", desc: "Surpassed 10,000 individuals screened annually with 3,000+ spectacles distributed each year." },
  { year: "2025", title: "Scaling for Impact", desc: "Deepening CSR partnerships and expanding into new geographies with scalable, measurable programs." },
];

const TimelineSection = () => (
  <section id="timeline" className="py-28 bg-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <SectionHeading
        label="Our Journey"
        title="15 Years of Transforming Lives"
        subtitle="A timeline of milestones that reflect our commitment to healthcare, education, and community empowerment."
      />

      <div className="relative mt-8">
        {/* Vertical line */}
        <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

        <div className="space-y-12 lg:space-y-16">
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="relative grid lg:grid-cols-2 gap-6 lg:gap-16"
              >
                {/* Dot */}
                <div className="absolute left-4 lg:left-1/2 top-1 w-2.5 h-2.5 rounded-full bg-accent-warm -translate-x-1 lg:-translate-x-[5px] ring-4 ring-background z-10" />

                {/* Content */}
                <div className={`pl-12 lg:pl-0 ${isLeft ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}>
                  <span className="font-display text-2xl text-accent-warm">{m.year}</span>
                  <h3 className="font-medium text-foreground text-[15px] mt-1 mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>

                {/* Empty cell for alternating layout on desktop */}
                {isLeft && <div className="hidden lg:block" />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
