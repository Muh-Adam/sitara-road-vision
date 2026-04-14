const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="font-heading text-xs font-bold text-primary-foreground">S</span>
          </div>
          <span className="font-heading text-lg font-bold text-foreground">SITARA</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2025 SITARA — Sistem Informasi Tata Jalan Raya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
