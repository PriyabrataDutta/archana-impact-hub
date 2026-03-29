import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import eyeCare from "@/assets/eye-care.jpg";
import { Check } from "lucide-react";

const highlights = [
  "Free medical screening camps",
  "Preventive health awareness programs",
  "Eye, ENT, and dental care initiatives",
  "Educational support for deserving students",
  "Support for free hostels providing food & education",
  "Collaborative public health & welfare programs",
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-5 lg:px-12">
      {/* Mobile: image first with overlay stat */}
      <div className="lg:hidden mb-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={eyeCare}
            alt="Eye care camp"
            className="w-full object-cover aspect-[16/10]"
            loading="lazy"
            width={800}
            height={600}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent px-5 pb-5 pt-12 rounded-b-xl">
            <div className="font-display text-3xl text-primary-foreground">15+</div>
            <p className="text-primary-foreground/70 text-xs tracking-widest uppercase">Years of Impact</p>
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="hidden lg:block lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={eyeCare}
              alt="Eye care camp"
              className="w-full object-cover aspect-[3/4] rounded-xl"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-6 -right-6 bg-primary px-8 py-6 rounded-xl">
              <div className="font-display text-4xl text-primary-foreground">15+</div>
              <p className="text-primary-foreground/70 text-xs tracking-widest uppercase mt-1">Years of Impact</p>
            </div>
          </motion.div>
        </div>
        <div className="lg:col-span-7">
          <SectionHeading
            label="Our Legacy"
            title="Committed to Equitable Access"
            subtitle="Archana Foundation is a registered charitable trust advancing healthcare, education, and social welfare across India's underserved communities."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
              Over the past 15 years, we have positively impacted thousands of lives,
              building deep trust within communities and creating sustainable service models
              that deliver measurable, lasting change.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 md:gap-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 py-2">
                  <Check className="w-4 h-4 text-accent-warm mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
