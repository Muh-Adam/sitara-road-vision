import { Link } from "react-router-dom";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Mengapa Kami", href: "/mengapa-kami" },
  { label: "Berita", href: "/berita" },
  { label: "Laporkan", href: "/lapor" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="font-heading text-xs font-bold text-primary-foreground">S</span>
            </div>
            <span className="font-heading text-lg font-bold text-foreground">SITARA</span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border/30 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 SITARA — Sistem Informasi Tata Jalan Raya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
