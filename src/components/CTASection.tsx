import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section id="kontak" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card glow mx-auto max-w-3xl border-primary/20 p-12 text-center md:p-16"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Siap Memperbaiki<br />
            <span className="text-gradient">Jalan di Kota Anda?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Hubungi tim kami untuk demo platform SITARA dan mulai transformasi digital pengelolaan infrastruktur jalan.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/lapor"
              className="rounded-xl bg-primary px-8 py-4 font-heading text-sm font-semibold text-primary-foreground transition-all hover:scale-105"
            >
              Laporkan Sekarang
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
