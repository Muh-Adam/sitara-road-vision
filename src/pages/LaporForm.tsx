import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { MapPin } from "lucide-react";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

const mapContainerStyle = { width: "100%", height: "300px", borderRadius: "0.75rem" };
const defaultCenter = { lat: -6.2088, lng: 106.8456 };

const severityOptions = [
  { value: "ringan", label: "Ringan", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  { value: "sedang", label: "Sedang", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  { value: "berat", label: "Berat", color: "bg-red-500/20 text-red-400 border-red-500/30" },
];

const LaporForm = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [severity, setSeverity] = useState("");
  const [markerPos, setMarkerPos] = useState<google.maps.LatLngLiteral | null>(null);
  const [form, setForm] = useState({
    nama: "",
    nomorHp: "",
    koordinat: "",
    email: "",
    pesan: "",
  });
  const { toast } = useToast();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setMarkerPos({ lat, lng });
      setForm((prev) => ({ ...prev, koordinat: `${lat.toFixed(6)}, ${lng.toFixed(6)}` }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!severity) {
      toast({ title: "Pilih tingkat kerusakan", description: "Silakan pilih tingkat kerusakan jalan.", variant: "destructive" });
      return;
    }
    toast({
      title: "Laporan Terkirim!",
      description: "Terima kasih atas laporan Anda. Tim kami akan segera menindaklanjuti.",
    });
    setForm({ nama: "", nomorHp: "", koordinat: "", email: "", pesan: "" });
    setSeverity("");
    setMarkerPos(null);
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
                <p className="mt-1 text-xs text-muted-foreground">Nama, nomor HP, dan email tidak akan ditampilkan</p>
              </div>
              <Switch checked={isAnonymous} onCheckedChange={setIsAnonymous} />
            </div>

            <div className="space-y-6">
              {!isAnonymous && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="nama">Nama Pelapor <span className="text-destructive">*</span></Label>
                    <Input
                      id="nama"
                      name="nama"
                      placeholder="Masukkan nama lengkap"
                      value={form.nama}
                      onChange={handleChange}
                      required
                      className="bg-secondary/30 border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nomorHp">Nomor HP <span className="text-destructive">*</span></Label>
                    <Input
                      id="nomorHp"
                      name="nomorHp"
                      type="tel"
                      placeholder="Contoh: 081234567890"
                      value={form.nomorHp}
                      onChange={handleChange}
                      required
                      className="bg-secondary/30 border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Gmail <span className="text-destructive">*</span></Label>
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
                </>
              )}

              {/* Google Maps picker */}
              <div className="space-y-2">
                <Label>Lokasi Jalan Rusak <span className="text-destructive">*</span></Label>
                {isLoaded && GOOGLE_MAPS_API_KEY ? (
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={markerPos || defaultCenter}
                    zoom={13}
                    onClick={handleMapClick}
                    options={{
                      styles: [
                        { elementType: "geometry", stylers: [{ color: "#1a1a2e" }] },
                        { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a2e" }] },
                        { elementType: "labels.text.fill", stylers: [{ color: "#8a8a9a" }] },
                        { featureType: "road", elementType: "geometry", stylers: [{ color: "#2a2a4a" }] },
                        { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e1626" }] },
                      ],
                      disableDefaultUI: false,
                      zoomControl: true,
                      streetViewControl: false,
                      mapTypeControl: false,
                    }}
                  >
                    {markerPos && <Marker position={markerPos} />}
                  </GoogleMap>
                ) : (
                  <div className="flex h-[200px] items-center justify-center rounded-xl border border-dashed border-border/50 bg-secondary/20">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="mx-auto mb-2 h-8 w-8 text-primary/50" />
                      <p className="text-sm">Peta akan tersedia setelah API key dikonfigurasi</p>
                      <p className="mt-1 text-xs">Masukkan koordinat secara manual di bawah</p>
                    </div>
                  </div>
                )}
                <p className="text-xs text-muted-foreground">
                  {GOOGLE_MAPS_API_KEY ? "Klik pada peta untuk memilih lokasi, atau masukkan koordinat manual" : "Masukkan koordinat latitude dan longitude lokasi jalan rusak"}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="koordinat">Koordinat <span className="text-destructive">*</span></Label>
                <Input
                  id="koordinat"
                  name="koordinat"
                  placeholder="Contoh: -6.2088, 106.8456"
                  value={form.koordinat}
                  onChange={handleChange}
                  required
                  className="bg-secondary/30 border-border/50"
                />
              </div>

              {/* Severity selection */}
              <div className="space-y-3">
                <Label>Tingkat Kerusakan <span className="text-destructive">*</span></Label>
                <div className="grid grid-cols-3 gap-3">
                  {severityOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSeverity(opt.value)}
                      className={`rounded-lg border p-3 text-center text-sm font-semibold transition-all ${
                        severity === opt.value
                          ? opt.color + " ring-2 ring-offset-1 ring-offset-background"
                          : "border-border/50 bg-secondary/30 text-muted-foreground hover:border-border"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pesan">Pesan / Deskripsi Kerusakan <span className="text-destructive">*</span></Label>
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
