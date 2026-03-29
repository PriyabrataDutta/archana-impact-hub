import { motion } from "framer-motion";
import educationImg from "@/assets/education.jpg";

const StorySection = () => (
  <section className="py-24 bg-surface-alt">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={educationImg}
            alt="Children learning in classroom"
            className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
            loading="lazy"
            width={800}
            height={600}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-warm font-semibold tracking-widest uppercase text-xs mb-3">
            A Life Changed
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Healthcare Restores Ability. Education Builds the Future.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A child in a rural community struggles to study due to poor vision and lack of resources.
            Through our camp, vision is corrected. Through our educational support, learning continues.
          </p>
          <p className="text-lg font-semibold text-primary italic font-display">
            This is the impact your support can create.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default StorySection;
