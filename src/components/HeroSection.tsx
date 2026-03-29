import { motion } from "framer-motion";
import heroCamp from "@/assets/hero-camp.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCamp}
          alt="Medical screening camp by Archana Foundation"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-surface-hero/85" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent-warm font-semibold tracking-widest uppercase text-sm mb-4"
        >
          Healthcare · Education · Empowerment
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-hero-foreground leading-tight mb-6 text-balance"
        >
          Transforming Vision.
          <br />
          <span className="text-accent-warm">Transforming Lives.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-hero-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Archana Foundation invites corporate partners and donors to join a high-impact,
          scalable social initiative delivering accessible healthcare, quality education,
          and community upliftment across India.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#partner"
            className="bg-accent-warm text-accent-foreground px-8 py-3 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Partner With Us
          </a>
          <a
            href="#about"
            className="border border-hero-foreground/30 text-hero-foreground px-8 py-3 rounded-md font-semibold text-lg hover:bg-hero-foreground/10 transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
