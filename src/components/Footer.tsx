import logoIcon from "@/assets/logo-icon.png";
import logoIconWhite from "@/assets/logo-icon-white.png";

const Footer = () => (
  <footer className="py-12 bg-foreground">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-8 border-b border-background/10">
        <div className="flex items-center gap-3">
          <img src={logoIconWhite} alt="Archana Foundation" className="h-[100px] w-auto object-contain invert" />
          <span className="font-display text-lg text-background tracking-tight">Archana Foundation</span>
        </div>
        <div className="flex flex-wrap gap-8">
          {["About", "Focus Areas", "Impact", "CSR", "Partner"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-background/40 text-xs tracking-widest uppercase hover:text-background/70 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-background/30 text-xs">
        <p>© {new Date().getFullYear()} Archana Foundation. All rights reserved.</p>
        <p className="tracking-wide">Eligible under Section 80G for tax benefits</p>
      </div>
    </div>
  </footer>
);

export default Footer;
