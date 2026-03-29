import { motion } from "framer-motion";
import heroCamp from "@/assets/hero-camp.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-end overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroCamp}
        alt="Medical screening camp by Archana Foundation"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-hero via-surface-hero/80 to-surface-hero/40" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 pt-40 w-full">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-12 h-[1px] bg-accent-warm" />
          <p className="text-accent-warm text-[13px] font-semibold tracking-[0.2em] uppercase">
            Healthcare · Education · Empowerment
          </p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-6xl lg:text-[5.5rem] text-hero-foreground leading-[1.05] mb-8 tracking-tight"
        >
          Transforming Vision.
          <br />
          <span className="text-accent-warm italic">Transforming Lives.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-hero-foreground/70 text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-light"
        >
          Delivering accessible healthcare, quality education, and holistic community
          upliftment to underserved populations across India.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#partner"
            className="bg-accent-warm text-accent-foreground px-8 py-3.5 font-semibold text-[15px] tracking-wide hover:brightness-110 transition-all"
          >
            Partner With Us
          </a>
          <a
            href="#about"
            className="border border-hero-foreground/20 text-hero-foreground px-8 py-3.5 font-medium text-[15px] tracking-wide hover:bg-hero-foreground/5 transition-colors"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-hero-foreground/10 border border-hero-foreground/10"
      >
        {[
          { value: "15+", label: "Years of Service" },
          { value: "10,000+", label: "Lives Touched Annually" },
          { value: "3,000+", label: "Spectacles Provided" },
          { value: "100+", label: "Rural Camps" },
        ].map((stat) => (
          <div key={stat.label} className="bg-surface-hero/60 backdrop-blur-sm px-6 py-5 text-center">
            <div className="font-display text-2xl md:text-3xl text-accent-warm mb-1">{stat.value}</div>
            <p className="text-hero-foreground/50 text-xs tracking-widest uppercase">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>

    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-hero-foreground/40 hover:text-hero-foreground/70 transition-colors"
    >
      <ArrowDown className="w-5 h-5 animate-bounce" />
    </motion.a>
  </section>
);

export default HeroSection;
