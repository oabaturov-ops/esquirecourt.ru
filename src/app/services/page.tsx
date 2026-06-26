import Link from "next/link";
import { getAllServices } from "@/data/services";

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <header style={{ padding: "60px 24px 40px", maxWidth: "1100px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#d4a030", textDecoration: "none", fontSize: "14px" }}>
          {"\u2190 \u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}
        </Link>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, margin: "16px 0 0" }}>{"\u0423\u0441\u043b\u0443\u0433\u0438"}</h1>
      </header>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px", display: "flex", gap: "40px" }}>
        <aside style={{ flexShrink: 0, width: "220px", position: "sticky", top: "100px", alignSelf: "flex-start" }}>
          <h3 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "2px", color: "#888", marginBottom: "16px" }}>{"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"}</h3>
          <nav>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={"/services/" + s.slug}
                style={{ display: "block", padding: "10px 14px", marginBottom: "4px", color: "#ccc", textDecoration: "none", fontSize: "14px", borderRadius: "4px", borderLeft: "3px solid transparent", transition: "all 0.2s" }}
              >
                {s.title}
              </Link>
            ))}
          </nav>
        </aside>

        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={"/services/" + service.slug}
              style={{ textDecoration: "none", backgroundColor: "#141414", border: "1px solid #222", borderRadius: "8px", padding: "28px 24px", display: "block", transition: "border-color 0.3s" }}
            >
              <h3 style={{ fontSize: "19px", fontWeight: 600, color: "#d4a030", margin: "0 0 12px 0" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#999", lineHeight: 1.7, margin: 0 }}>
                {service.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}