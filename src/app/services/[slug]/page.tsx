import Link from "next/link";
import { services, getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map(function(s) { return { slug: s.slug }; });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolved = await params;
  const service = getServiceBySlug(resolved.slug);
  if (!service) notFound();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "100px 24px 100px" }}>
        <Link href="/services" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
          {"\u2190 \u0412\u0441\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"}
        </Link>
        <h1 style={{ fontSize: "36px", fontWeight: 700, color: "#fff", marginBottom: "20px" }}>
          {service.title}
        </h1>
        <p style={{ fontSize: "18px", color: "#a3a3a3", lineHeight: 1.7, marginBottom: "40px" }}>
          {service.shortDescription}
        </p>
        <div style={{ backgroundColor: "#111", borderRadius: "12px", border: "1px solid #1a1a1a", padding: "32px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#c9a84c", marginBottom: "24px" }}>
            {"\u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u044b\u0439 \u0441\u043e\u0441\u0442\u0430\u0432 \u0440\u0430\u0431\u043e\u0442"}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {service.works.map(function(work, i) {
              return (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    backgroundColor: "rgba(201,168,76,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, color: "#c9a84c", fontSize: "14px",
                    fontWeight: 700, paddingTop: "2px"
                  }}>
                    {i + 1}
                  </div>
                  <p style={{ fontSize: "16px", color: "#ccc", lineHeight: 1.7, paddingTop: "4px" }}>{work}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ marginTop: "40px", padding: "28px", borderRadius: "12px", border: "1px solid #222", backgroundColor: "#111" }}>
          <h3 style={{ fontSize: "18px", color: "#fff", marginBottom: "12px" }}>{"\u041d\u0443\u0436\u043d\u0430 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f?"}</h3>
          <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>
            {"\u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438 \u0434\u043b\u044f \u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430."}
          </p>
          <a href="mailto:oba12@yandex.ru" style={{
            display: "inline-block", padding: "12px 28px",
            backgroundColor: "#c9a84c", color: "#0a0a0a",
            textDecoration: "none", borderRadius: "8px",
            fontWeight: 700, fontSize: "15px"
          }}>
            {"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c"}
          </a>
        </div>
      </div>
    </div>
  );
}

