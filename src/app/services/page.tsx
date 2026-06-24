import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "100px 24px 100px" }}>
        <Link href="/" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
          {"\u2190 \u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}
        </Link>
        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#fff", marginBottom: "40px" }}>
          {"\u0423\u0441\u043b\u0443\u0433\u0438"}
        </h1>
        <div style={{ display: "flex", gap: "40px" }}>
          <div style={{ width: "280px", flexShrink: 0 }}>
            <nav style={{ position: "sticky", top: "80px", display: "flex", flexDirection: "column", gap: "6px" }}>
              {services.map(function(s) {
                return (
                  <Link key={s.slug} href={"/services/" + s.slug} style={{
                    color: "#a3a3a3", textDecoration: "none", fontSize: "15px",
                    padding: "14px 16px", borderRadius: "8px",
                    backgroundColor: "#111", border: "1px solid #1a1a1a",
                    display: "block",
                  }}>
                    {s.title}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: "18px", color: "#a3a3a3", lineHeight: 1.8, marginBottom: "32px" }}>
              {"\u0418\u043d\u0436\u0435\u043d\u0435\u0440\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438 \u0434\u043b\u044f \u043c\u043d\u043e\u0433\u043e\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u043d\u044b\u0445 \u0434\u043e\u043c\u043e\u0432. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0443 \u0441\u043b\u0435\u0432\u0430 \u0434\u043b\u044f \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u0441 \u0441\u043e\u0441\u0442\u0430\u0432\u043e\u043c \u0440\u0430\u0431\u043e\u0442."}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
              {services.map(function(s) {
                return (
                  <Link key={s.slug} href={"/services/" + s.slug} style={{ textDecoration: "none" }}>
                    <div style={{ padding: "24px", borderRadius: "12px", border: "1px solid #222", backgroundColor: "#111" }}>
                      <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 600, marginBottom: "10px" }}>{s.title}</h3>
                      <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.6, marginBottom: "14px" }}>{s.shortDescription}</p>
                      <p style={{ color: "#c9a84c", fontSize: "14px" }}>{"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u2192"}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
