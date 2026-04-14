import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Users, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Tentang Kami</span>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
              Mengenal <span className="text-gradient">SITARA</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              SITARA (Sistem Informasi Tata Jalan Raya) adalah platform digital yang memungkinkan masyarakat untuk melaporkan kondisi jalan rusak secara real-time kepada pemerintah daerah. Dengan memanfaatkan teknologi geospasial dan sistem pelaporan terstruktur, SITARA menjembatani komunikasi antara warga dan dinas terkait untuk percepatan perbaikan infrastruktur jalan.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
            {[
              { icon: Target, title: "Misi Kami", desc: "Menyediakan kanal pelaporan jalan rusak yang cepat, transparan, dan dapat dipantau oleh seluruh pemangku kepentingan." },
              { icon: Eye, title: "Visi Kami", desc: "Mewujudkan infrastruktur jalan yang aman dan nyaman melalui kolaborasi antara masyarakat dan pemerintah berbasis teknologi." },
              { icon: Users, title: "Untuk Masyarakat", desc: "Memberikan kemudahan bagi warga untuk melaporkan jalan rusak tanpa proses birokrasi yang rumit, cukup melalui platform digital." },
              { icon: ShieldCheck, title: "Untuk Pemerintah", desc: "Menyediakan data real-time yang akurat dan terstruktur untuk prioritas perbaikan jalan berdasarkan tingkat kerusakan dan lokasi." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-card p-8"
              >
                <item.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 font-heading text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
