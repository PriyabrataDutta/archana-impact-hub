import { motion } from "framer-motion";
import educationImg from "@/assets/education.jpg";

const StorySection = () => (
  <section className="py-28 bg-surface-alt overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6"
        >
          <img
            src={educationImg}
            alt="Children learning in classroom"
            className="w-full object-cover aspect-[4/3]"
            loading="lazy"
            width={800}
            height={600}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-accent-warm" />
            <p className="text-accent-warm text-[11px] font-semibold tracking-[0.25em] uppercase">A Life Changed</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6 tracking-tight">
            Healthcare Restores Ability.
            <br />
            <span className="text-accent-warm italic">Education Builds the Future.</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
            <p>
              A child in a rural community struggles to study due to poor vision
              and lack of resources. Through our camp, vision is corrected.
              Through our educational support, learning continues.
            </p>
            <p className="border-l-2 border-accent-warm pl-5 text-foreground italic font-display text-lg">
              "This is the impact your support can create."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default StorySection;
