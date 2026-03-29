const Footer = () => (
  <footer className="py-8 bg-primary-dark text-hero-foreground/60 text-sm">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display font-semibold text-hero-foreground">Archana Foundation</p>
      <p>© {new Date().getFullYear()} Archana Foundation. All rights reserved.</p>
      <p>Eligible under Section 80G for tax benefits</p>
    </div>
  </footer>
);

export default Footer;
