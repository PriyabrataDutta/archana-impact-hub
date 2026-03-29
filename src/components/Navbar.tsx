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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 lg:px-12">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent-warm flex items-center justify-center">
            <span className="font-display text-sm font-bold text-accent-foreground">A</span>
          </div>
          <span className={`font-display text-lg tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-hero-foreground"}`}>
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
            className="bg-accent-warm text-accent-foreground px-6 py-2.5 text-[13px] font-semibold tracking-wide uppercase hover:brightness-110 transition-all"
          >
            Partner With Us
          </a>
        </div>
        <button
          className={`lg:hidden transition-colors ${scrolled ? "text-foreground" : "text-hero-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-1 tracking-wide uppercase"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#partner"
                className="bg-accent-warm text-accent-foreground px-6 py-2.5 text-sm font-semibold text-center tracking-wide uppercase mt-2"
                onClick={() => setOpen(false)}
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
