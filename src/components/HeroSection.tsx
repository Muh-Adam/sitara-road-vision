import { motion } from "framer-motion";
import { MapPin, Shield, BarChart3 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: MapPin, value: "5.000+", label: "Laporan Terproses" },
  { icon: Shield, value: "98%", label: "Tingkat Penyelesaian" },
  { icon: BarChart3, value: "24 Jam", label: "Rata-rata Respons" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container relative mx-auto flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-medium text-primary">Sistem Informasi Tata Jalan Raya</span>
          </div>

          <h1 className="mb-6 font-heading text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            <span className="text-foreground">Jalan Rusak?</span>
            <br />
            <span className="text-gradient">Laporkan. Lacak. Selesai.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            SITARA menghubungkan warga dengan pemerintah daerah untuk penanganan infrastruktur jalan secara transparan, real-time, dan berbasis data geospasial akurat.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#fitur"
              className="glow rounded-xl bg-primary px-8 py-4 font-heading text-sm font-semibold text-primary-foreground transition-all hover:scale-105"
            >
              Mulai Melapor
            </a>
            <a
              href="#arsitektur"
              className="rounded-xl border border-border px-8 py-4 font-heading text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
            >
              Pelajari Arsitektur
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-heading text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
