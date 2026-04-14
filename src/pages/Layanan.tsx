import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Bell, BarChart3, Camera, FileText, MessageSquare } from "lucide-react";

const services = [
  { icon: MapPin, title: "Pelaporan Geospasial", desc: "Laporkan jalan rusak dengan koordinat GPS yang akurat. Sistem kami menampilkan peta interaktif untuk memvisualisasikan lokasi kerusakan." },
  { icon: Bell, title: "Notifikasi Real-time", desc: "Dapatkan pembaruan status laporan Anda secara langsung melalui push notification, email, atau SMS." },
  { icon: BarChart3, title: "Dashboard Analitik", desc: "Pantau statistik pelaporan, tren kerusakan jalan, dan kinerja penanganan oleh dinas terkait secara transparan." },
  { icon: Camera, title: "Dokumentasi Visual", desc: "Unggah foto dan video kondisi jalan rusak sebagai bukti pendukung laporan untuk mempercepat verifikasi." },
  { icon: FileText, title: "Manajemen Laporan", desc: "Kelola seluruh laporan mulai dari pembuatan, verifikasi, penugasan, hingga penyelesaian dalam satu platform terintegrasi." },
  { icon: MessageSquare, title: "Feedback & Rating", desc: "Berikan penilaian terhadap hasil perbaikan jalan untuk menjaga kualitas dan akuntabilitas pelayanan publik." },
];

const Layanan = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Layanan</span>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
              Layanan <span className="text-gradient">SITARA</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Solusi lengkap untuk pelaporan dan pengelolaan infrastruktur jalan raya.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8"
              >
                <s.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Layanan;
