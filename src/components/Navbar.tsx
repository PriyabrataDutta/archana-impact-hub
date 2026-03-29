import { useState } from "react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-display text-xl font-bold text-primary">
          Archana Foundation
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#partner"
            className="bg-accent-warm text-accent-foreground px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Donate
          </a>
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col px-4 py-4 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#partner"
                className="bg-accent-warm text-accent-foreground px-5 py-2 rounded-md text-sm font-semibold text-center"
                onClick={() => setOpen(false)}
              >
                Donate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
