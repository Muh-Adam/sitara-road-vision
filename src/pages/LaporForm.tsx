import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const LaporForm = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    nomorHp: "",
    koordinat: "",
    email: "",
    pesan: "",
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Laporan Terkirim!",
      description: "Terima kasih atas laporan Anda. Tim kami akan segera menindaklanjuti.",
    });
    setForm({ nama: "", nomorHp: "", koordinat: "", email: "", pesan: "" });
    setIsAnonymous(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Lapor</span>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
              Laporkan <span className="text-gradient">Jalan Rusak</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Isi formulir di bawah untuk melaporkan kondisi jalan rusak di sekitar Anda.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card mx-auto max-w-2xl p-8 md:p-12"
          >
            {/* Anonymous toggle */}
            <div className="mb-8 flex items-center justify-between rounded-lg bg-secondary/50 p-4">
              <div>
                <Label className="text-sm font-semibold text-foreground">Lapor sebagai Anonim</Label>
                <p className="mt-1 text-xs text-muted-foreground">Nama dan nomor HP tidak akan ditampilkan</p>
              </div>
              <Switch checked={isAnonymous} onCheckedChange={setIsAnonymous} />
            </div>

            <div className="space-y-6">
              {!isAnonymous && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="nama">Nama Pelapor</Label>
                    <Input
                      id="nama"
                      name="nama"
                      placeholder="Masukkan nama lengkap"
                      value={form.nama}
                      onChange={handleChange}
                      required={!isAnonymous}
                      className="bg-secondary/30 border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nomorHp">Nomor HP</Label>
                    <Input
                      id="nomorHp"
                      name="nomorHp"
                      type="tel"
                      placeholder="Contoh: 081234567890"
                      value={form.nomorHp}
                      onChange={handleChange}
                      required={!isAnonymous}
                      className="bg-secondary/30 border-border/50"
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Gmail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="contoh@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary/30 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="koordinat">Koordinat Jalan Rusak</Label>
                <Input
                  id="koordinat"
                  name="koordinat"
                  placeholder="Contoh: -6.2088, 106.8456"
                  value={form.koordinat}
                  onChange={handleChange}
                  required
                  className="bg-secondary/30 border-border/50"
                />
                <p className="text-xs text-muted-foreground">Masukkan koordinat latitude dan longitude lokasi jalan rusak</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pesan">Pesan / Deskripsi Kerusakan</Label>
                <Textarea
                  id="pesan"
                  name="pesan"
                  placeholder="Jelaskan kondisi kerusakan jalan..."
                  value={form.pesan}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-secondary/30 border-border/50"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-8 py-4 font-heading text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:opacity-90"
              >
                Kirim Laporan
              </button>
            </div>
          </motion.form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LaporForm;
