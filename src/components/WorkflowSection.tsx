import { motion } from "framer-motion";
import { Smartphone, MapPin, Clock, CheckCircle2, Star } from "lucide-react";

const steps = [
  { icon: Smartphone, title: "Buka SITARA", desc: "Tap 'Laporkan Sekarang' di halaman utama" },
  { icon: MapPin, title: "Ambil Foto & Lokasi", desc: "GPS otomatis mendeteksi titik kerusakan jalan" },
  { icon: Clock, title: "Verifikasi & Assign", desc: "Tim verifikasi meneruskan ke dinas terkait" },
  { icon: CheckCircle2, title: "Perbaikan Selesai", desc: "Dinas upload foto sebelum-sesudah perbaikan" },
  { icon: Star, title: "Berikan Feedback", desc: "Nilai kualitas perbaikan untuk transparansi" },
];

const WorkflowSection = () => {
  return (
    <section id="alur-kerja" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Alur Kerja</span>
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Dari Laporan ke<br />
            <span className="text-gradient">Perbaikan Nyata</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative mb-12 flex items-start gap-6 md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`ml-16 flex-1 md:ml-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                </div>

                {/* Icon */}
                <div className="absolute left-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background md:relative md:left-auto">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
