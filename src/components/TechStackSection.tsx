import { motion } from "framer-motion";

const techStack = [
  { category: "Frontend", items: ["Next.js 14", "React", "PWA", "Tailwind CSS"] },
  { category: "Backend", items: ["Golang 1.22", "Chi Router", "Clean Architecture", "gRPC-ready"] },
  { category: "Database", items: ["PostgreSQL + PostGIS", "Redis 7 Cluster", "MongoDB", "TimescaleDB"] },
  { category: "Infrastruktur", items: ["Kubernetes", "NGINX", "Cloudflare", "Helm Charts"] },
  { category: "Monitoring", items: ["Prometheus", "Grafana", "Jaeger", "OpenTelemetry"] },
  { category: "Maps & Search", items: ["Google Maps Platform", "Elasticsearch 8", "Geocoding API", "Places API"] },
];

const TechStackSection = () => {
  return (
    <section id="teknologi" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Tech Stack</span>
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Dibangun dengan<br />
            <span className="text-gradient">Teknologi Terdepan</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-primary">{group.category}</h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
