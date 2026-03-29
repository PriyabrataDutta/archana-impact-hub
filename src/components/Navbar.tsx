import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Focus Areas", href: "#focus" },
  { label: "Impact", href: "#impact" },
  { label: "CSR", href: "#csr" },
  { label: "Partner", href: "#partner" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-5 lg:px-12">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-accent-warm flex items-center justify-center">
            <span className="font-display text-sm font-bold text-accent-foreground">A</span>
          </div>
          <span className={`font-display text-base md:text-lg tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-hero-foreground"}`}>
            Archana Foundation
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-hero-foreground/70 hover:text-hero-foreground"}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#partner"
            className="bg-accent-warm text-accent-foreground px-6 py-2.5 text-[13px] font-semibold tracking-wide uppercase hover:brightness-110 transition-all rounded-lg"
          >
            Partner With Us
          </a>
        </div>
        <button
          className={`lg:hidden transition-colors z-50 ${scrolled || open ? "text-foreground" : "text-hero-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-0 bg-background z-40 flex flex-col"
          >
            <div className="flex flex-col justify-center items-center flex-1 gap-6 px-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="font-display text-2xl text-foreground hover:text-accent-warm transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#partner"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-accent-warm text-accent-foreground px-10 py-3.5 text-base font-semibold tracking-wide uppercase mt-4 rounded-lg"
                onClick={() => setOpen(false)}
              >
                Partner With Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
