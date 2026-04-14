import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Lock, Globe, Clock, HeartHandshake, TrendingUp } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Cepat & Responsif", desc: "Laporan diproses secara real-time dan langsung diteruskan ke dinas terkait tanpa proses birokrasi panjang." },
  { icon: Lock, title: "Aman & Terpercaya", desc: "Data pelapor dilindungi dengan enkripsi tingkat tinggi. Tersedia opsi pelaporan anonim untuk kenyamanan warga." },
  { icon: Globe, title: "Akses dari Mana Saja", desc: "Platform berbasis web yang responsif, dapat diakses dari smartphone, tablet, maupun komputer kapan saja." },
  { icon: Clock, title: "Pemantauan Transparan", desc: "Pantau progress penanganan laporan secara real-time dengan timeline yang jelas dari awal hingga selesai." },
  { icon: HeartHandshake, title: "Kolaborasi Masyarakat", desc: "Membangun gotong-royong digital antara warga dan pemerintah untuk infrastruktur jalan yang lebih baik." },
  { icon: TrendingUp, title: "Data-Driven Decision", desc: "Pemerintah dapat mengambil keputusan berbasis data untuk prioritas perbaikan jalan yang paling dibutuhkan." },
];

const MengapaKami = () => {
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
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Mengapa Kami</span>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
              Mengapa Memilih <span className="text-gradient">SITARA?</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Platform terpercaya untuk pelaporan dan penanganan jalan rusak yang efisien.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8"
              >
                <r.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MengapaKami;
