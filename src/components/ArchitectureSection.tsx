import { motion } from "framer-motion";

const modules = [
  { name: "Auth", desc: "JWT + RBAC" },
  { name: "Report", desc: "CRUD Laporan" },
  { name: "GeoSpatial", desc: "Google Maps" },
  { name: "Media", desc: "Upload & CDN" },
  { name: "Notification", desc: "Push/Email/SMS" },
  { name: "Analytics", desc: "Statistik & SLA" },
  { name: "Search", desc: "Elasticsearch" },
  { name: "Admin", desc: "Dashboard Dinas" },
  { name: "Feedback", desc: "Rating & Review" },
];

const ArchitectureSection = () => {
  return (
    <section id="arsitektur" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Arsitektur</span>
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Monolith dengan<br />
            <span className="text-gradient">Clean Architecture</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Satu binary Golang tunggal yang terstruktur modular. Handler → Usecase → Repository pattern untuk setiap modul.
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          {/* Layers */}
          <div className="space-y-4">
            {/* Edge layer */}
            <div className="glass-card p-4 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Cloudflare Edge</span>
              <p className="mt-1 text-xs text-muted-foreground">CDN • WAF • DDoS Protection • R2 Storage</p>
            </div>

            {/* Load Balancer */}
            <div className="glass-card p-4 text-center border-primary/20">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">NGINX Load Balancer</span>
              <p className="mt-1 text-xs text-muted-foreground">L7 Load Balancing • Rate Limiting • SSL Termination</p>
            </div>

            {/* Main app */}
            <div className="glass-card overflow-hidden border-primary/20">
              <div className="border-b border-border/50 bg-primary/5 px-6 py-3 text-center">
                <span className="font-heading text-sm font-bold text-primary">Golang Monolith — 9 Internal Modules</span>
              </div>
              <div className="grid grid-cols-3 gap-3 p-6 sm:grid-cols-3 lg:grid-cols-9">
                {modules.map((m) => (
                  <div key={m.name} className="rounded-lg bg-secondary/50 p-3 text-center">
                    <div className="font-heading text-xs font-semibold text-foreground">{m.name}</div>
                    <div className="mt-1 text-[10px] text-muted-foreground">{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data layer */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {[
                { name: "PostgreSQL", desc: "+ PostGIS" },
                { name: "Redis 7", desc: "Cache & Session" },
                { name: "MongoDB", desc: "Documents" },
                { name: "Elasticsearch", desc: "Search" },
                { name: "TimescaleDB", desc: "Time-series" },
              ].map((db) => (
                <div key={db.name} className="glass-card p-4 text-center">
                  <div className="font-heading text-xs font-semibold text-foreground">{db.name}</div>
                  <div className="mt-1 text-[10px] text-muted-foreground">{db.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
