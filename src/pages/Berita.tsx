import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const newsItems = [
  {
    date: "10 April 2025",
    title: "Jalan Nasional di Pantura Rusak Parah Akibat Banjir",
    excerpt: "Sejumlah ruas jalan nasional di jalur pantai utara Jawa mengalami kerusakan parah setelah banjir bandang melanda wilayah tersebut. Dinas PUPR telah menerjunkan tim untuk survei kerusakan.",
  },
  {
    date: "5 April 2025",
    title: "Pemkot Surabaya Perbaiki 200 Titik Jalan Berlubang",
    excerpt: "Pemerintah Kota Surabaya mengalokasikan anggaran untuk memperbaiki 200 titik jalan berlubang yang dilaporkan warga melalui platform digital pelaporan jalan.",
  },
  {
    date: "28 Maret 2025",
    title: "Teknologi GIS Bantu Identifikasi Jalan Rusak Lebih Cepat",
    excerpt: "Penggunaan teknologi Geographic Information System (GIS) terbukti mampu mempercepat proses identifikasi dan pemetaan jalan rusak di berbagai kota besar.",
  },
  {
    date: "20 Maret 2025",
    title: "Masyarakat Semakin Aktif Laporkan Jalan Rusak via Digital",
    excerpt: "Tren pelaporan jalan rusak melalui platform digital meningkat 300% dalam setahun terakhir, menunjukkan kesadaran masyarakat akan pentingnya partisipasi aktif.",
  },
  {
    date: "15 Maret 2025",
    title: "Program Nasional Perbaikan Jalan Daerah Diluncurkan",
    excerpt: "Kementerian PUPR meluncurkan program nasional untuk percepatan perbaikan jalan daerah dengan memanfaatkan data pelaporan dari masyarakat.",
  },
  {
    date: "8 Maret 2025",
    title: "Kecelakaan Akibat Jalan Rusak Turun 40% di Kota Percontohan",
    excerpt: "Kota-kota yang menerapkan sistem pelaporan jalan digital mencatat penurunan angka kecelakaan akibat jalan rusak hingga 40% dalam satu tahun.",
  },
];

const Berita = () => {
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
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Berita</span>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
              Berita <span className="text-gradient">Terkini</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Informasi terbaru seputar kondisi jalan dan infrastruktur di Indonesia.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((news, i) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card overflow-hidden"
              >
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {news.date}
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground leading-snug">{news.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{news.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Berita;
