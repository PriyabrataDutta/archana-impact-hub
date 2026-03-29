import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import eyeCare from "@/assets/eye-care.jpg";
import { Heart, BookOpen, Users, Stethoscope } from "lucide-react";

const highlights = [
  { icon: Stethoscope, text: "Free medical screening camps" },
  { icon: Heart, text: "Preventive health awareness" },
  { icon: BookOpen, text: "Educational support for students" },
  { icon: Users, text: "Collaborative public health programs" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading
        label="Our Legacy"
        title="About Archana Foundation"
        subtitle="A 15-year-old registered charitable trust committed to advancing equitable access to healthcare, education, and social welfare."
      />
      <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={eyeCare}
            alt="Eye care camp"
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
          className="space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            With a strong legacy of service, Archana Foundation has consistently created meaningful impact through free medical camps, preventive health programs, eye, ENT, and dental care initiatives, educational support, and free hostel facilities providing food and education.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Over the past <span className="font-semibold text-primary">15 years</span>, we have positively impacted <span className="font-semibold text-primary">thousands of lives</span>, building deep trust within communities and creating sustainable service models.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {highlights.map((h) => (
              <div key={h.text} className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-md bg-primary/10">
                  <h.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground">{h.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
