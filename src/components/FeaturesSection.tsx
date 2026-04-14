import { motion } from "framer-motion";
import { Camera, MapPin, Bell, BarChart3, Search, Shield } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Pelaporan Cepat",
    description: "Upload foto & lokasi GPS otomatis. AI mendeteksi tingkat kerusakan jalan secara instan.",
  },
  {
    icon: MapPin,
    title: "Peta Geospasial",
    description: "Integrasi Google Maps dengan geocoding, reverse geocoding, dan snap-to-road untuk akurasi lokasi.",
  },
  {
    icon: Bell,
    title: "Notifikasi Real-time",
    description: "Push notification, email, dan SMS untuk setiap perubahan status laporan Anda.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Analytics",
    description: "Statistik kerusakan jalan per wilayah, tren bulanan, dan SLA tracking untuk pemerintah daerah.",
  },
  {
    icon: Search,
    title: "Pencarian Cerdas",
    description: "Full-text search dengan Elasticsearch, filter geospasial, dan auto-suggest lokasi.",
  },
  {
    icon: Shield,
    title: "Keamanan Berlapis",
    description: "Cloudflare WAF, JWT authentication, rate limiting, dan audit log untuk perlindungan data.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="fitur" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Fitur Unggulan</span>
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Platform Lengkap untuk<br />
            <span className="text-gradient">Infrastruktur Jalan</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group p-8 transition-all hover:border-primary/30"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
