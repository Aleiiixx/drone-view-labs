const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-4 md:px-8">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-heading text-xl font-bold text-primary-foreground tracking-tight">
              SERVIDRONE
            </span>
            <p className="text-primary-foreground/50 text-sm mt-1">
              Aerial intelligence for agriculture & land surveying.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
            <a href="#technology" className="hover:text-primary-foreground transition-colors">Technology</a>
            <a href="#projects" className="hover:text-primary-foreground transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Servidrone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
