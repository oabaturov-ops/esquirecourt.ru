const fs = require('fs');
const path = require('path');

function w(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('OK: ' + file);
}

// 1. SERVICES DATA
w('src/data/services.ts', `export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  works: string[];
}

export const services: Service[] = [
  {
    slug: "zamena-stoyakov",
    title: "\u0417\u0430\u043c\u0435\u043d\u0430 \u0441\u0442\u043e\u044f\u043a\u043e\u0432 \u0432\u043e\u0434\u043e\u0441\u043d\u0430\u0431\u0436\u0435\u043d\u0438\u044f",
    shortDescription: "\u041f\u043e\u043b\u043d\u0430\u044f \u0437\u0430\u043c\u0435\u043d\u0430 \u0441\u0442\u043e\u044f\u043a\u043e\u0432 \u0433\u043e\u0440\u044f\u0447\u0435\u0433\u043e \u0438 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u0433\u043e \u0432\u043e\u0434\u043e\u0441\u043d\u0430\u0431\u0436\u0435\u043d\u0438\u044f \u0432 \u043c\u043d\u043e\u0433\u043e\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u043d\u044b\u0445 \u0434\u043e\u043c\u0430\u0445 \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c.",
    works: [
      "\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u044f\u043a\u043e\u0432 \u0432\u043e\u0434\u043e\u0441\u043d\u0430\u0431\u0436\u0435\u043d\u0438\u044f \u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0435\u0439",
      "\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u0441\u0442\u0430\u0440\u044b\u0445 \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u043e\u044f\u043a\u043e\u0432",
      "\u041c\u043e\u043d\u0442\u0430\u0436 \u043d\u043e\u0432\u044b\u0445 \u043f\u043e\u043b\u0438\u043f\u0440\u043e\u043f\u0438\u043b\u0435\u043d\u043e\u0432\u044b\u0445 \u0438\u043b\u0438 \u043c\u0435\u0442\u0430\u043b\u043b\u043e\u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0445 \u0441\u0442\u043e\u044f\u043a\u043e\u0432",
      "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u043f\u043e\u0440\u043d\u043e\u0439 \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b \u0438 \u0432\u043e\u0437\u0434\u0443\u0448\u043d\u044b\u0445 \u043a\u0440\u0430\u043d\u043e\u0432",
      "\u0413\u0438\u0434\u0440\u0430\u0432\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0438\u0441\u043f\u044b\u0442\u0430\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043f\u043e\u0434 \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c",
      "\u041f\u0443\u0441\u043a\u043e\u043d\u0430\u043b\u0430\u0434\u043e\u0447\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u0438 \u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u043a\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",
      "\u0421\u0434\u0430\u0447\u0430 \u0432 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u044e \u0441 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435\u043c \u0430\u043a\u0442\u043e\u0432 \u0441\u043a\u0440\u044b\u0442\u044b\u0445 \u0440\u0430\u0431\u043e\u0442"
    ]
  },
  {
    slug: "mezhpanelnye-shvy",
    title: "\u041c\u0435\u0436\u043f\u0430\u043d\u0435\u043b\u044c\u043d\u044b\u0435 \u0448\u0432\u044b",
    shortDescription: "\u0413\u0435\u0440\u043c\u0435\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u0435\u0436\u043f\u0430\u043d\u0435\u043b\u044c\u043d\u044b\u0445 \u0448\u0432\u043e\u0432 \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u043e\u0442 \u0432\u043b\u0430\u0433\u0438 \u0438 \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438.",
    works: [
      "\u0420\u0430\u0441\u0447\u0438\u0441\u0442\u043a\u0430 \u0441\u0442\u0430\u0440\u043e\u0433\u043e \u0448\u0432\u0430 \u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043d\u043d\u043e\u0433\u043e \u0433\u0435\u0440\u043c\u0435\u0442\u0438\u043a\u0430",
      "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0441\u043f\u0435\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u0438\u044d\u0442\u0438\u043b\u0435\u043d\u0430 (\u0432\u0438\u043b\u0430\u0442\u0435\u0440\u043c)",
      "\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0448\u0432\u0430 \u043f\u043e\u043b\u0438\u0443\u0440\u0435\u0442\u0430\u043d\u043e\u0432\u044b\u043c \u0433\u0435\u0440\u043c\u0435\u0442\u0438\u043a\u043e\u043c",
      "\u041d\u0430\u043d\u0435\u0441\u0435\u043d\u0438\u0435 \u0437\u0430\u0449\u0438\u0442\u043d\u043e\u0433\u043e \u0444\u0430\u0441\u0430\u0434\u043d\u043e\u0433\u043e \u0433\u0435\u0440\u043c\u0435\u0442\u0438\u043a\u0430",
      "\u041e\u043a\u0440\u0430\u0441\u043a\u0430 \u0448\u0432\u0430 \u0432 \u0446\u0432\u0435\u0442 \u0444\u0430\u0441\u0430\u0434\u0430",
      "\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 \u0444\u043e\u0442\u043e\u0444\u0438\u043a\u0441\u0430\u0446\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442"
    ]
  },
  {
    slug: "remont-fasada",
    title: "\u0420\u0435\u043c\u043e\u043d\u0442 \u0444\u0430\u0441\u0430\u0434\u0430",
    shortDescription: "\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u044b\u0439 \u0440\u0435\u043c\u043e\u043d\u0442 \u0444\u0430\u0441\u0430\u0434\u0430 \u043c\u043d\u043e\u0433\u043e\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430: \u0443\u0442\u0435\u043f\u043b\u0435\u043d\u0438\u0435, \u043e\u0442\u0434\u0435\u043b\u043a\u0430, \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432.",
    works: [
      "\u041e\u0441\u043c\u043e\u0442\u0440 \u0444\u0430\u0441\u0430\u0434\u0430 \u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0435\u0444\u0435\u043a\u0442\u043d\u043e\u0439 \u0432\u0435\u0434\u043e\u043c\u043e\u0441\u0442\u0438",
      "\u041e\u0447\u0438\u0441\u0442\u043a\u0430 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438 \u043e\u0442 \u0441\u0442\u0430\u0440\u043e\u0439 \u043a\u0440\u0430\u0441\u043a\u0438 \u0438 \u0437\u0430\u0433\u0440\u044f\u0437\u043d\u0435\u043d\u0438\u0439",
      "\u0420\u0435\u043c\u043e\u043d\u0442 \u0442\u0440\u0435\u0449\u0438\u043d \u0438 \u0441\u043a\u043e\u043b\u043e\u0432 \u0431\u0435\u0442\u043e\u043d\u043d\u044b\u0445 \u043f\u0430\u043d\u0435\u043b\u0435\u0439",
      "\u0423\u0442\u0435\u043f\u043b\u0435\u043d\u0438\u0435 \u0444\u0430\u0441\u0430\u0434\u0430 \u043c\u0438\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u0432\u0430\u0442\u043e\u0439 (\u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438)",
      "\u041d\u0430\u043d\u0435\u0441\u0435\u043d\u0438\u0435 \u0433\u0440\u0443\u043d\u0442\u043e\u0432\u043e\u0447\u043d\u043e\u0433\u043e \u0441\u043b\u043e\u044f",
      "\u0424\u0438\u043d\u0438\u0448\u043d\u0430\u044f \u043e\u0442\u0434\u0435\u043b\u043a\u0430 \u0444\u0430\u0441\u0430\u0434\u043d\u043e\u0439 \u043a\u0440\u0430\u0441\u043a\u043e\u0439 \u0438\u043b\u0438 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u0448\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u043a\u043e\u0439",
      "\u041f\u0440\u0438\u0451\u043c\u043a\u0430 \u0440\u0430\u0431\u043e\u0442 \u0441 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0430\u043a\u0442\u043e\u0432 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442"
    ]
  },
  {
    slug: "soderzhanie-zhkh",
    title: "\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0416\u041a\u0425",
    shortDescription: "\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u043c\u043d\u043e\u0433\u043e\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c.",
    works: [
      "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u0449\u0435\u0434\u043e\u043c\u043e\u0432\u043e\u0433\u043e \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",
      "\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0443\u0431\u043e\u0440\u043a\u0438 \u043f\u043e\u0434\u044a\u0435\u0437\u0434\u043e\u0432 \u0438 \u043f\u0440\u0438\u0434\u043e\u043c\u043e\u0432\u043e\u0439 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438",
      "\u041f\u043b\u0430\u043d\u043e\u0432\u043e-\u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u043c\u043e\u043d\u0442 \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c",
      "\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u043e\u043c\u0430 \u043a \u043e\u0442\u043e\u043f\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c\u0443 \u0441\u0435\u0437\u043e\u043d\u0443",
      "\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u043d\u0430\u0434\u0437\u043e\u0440\u043d\u044b\u043c\u0438 \u043e\u0440\u0433\u0430\u043d\u0430\u043c\u0438 \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u043c\u0438 \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u044f\u043c\u0438",
      "\u0412\u0435\u0434\u0435\u043d\u0438\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438 \u043e\u0442\u0447\u0451\u0442\u043d\u043e\u0441\u0442\u0438",
      "\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u0430\u043c\u0438 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0439 \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0431\u0449\u0438\u0445 \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u0439"
    ]
  }
];

export function getServiceBySlug(slug) {
  return services.find(function(s) { return s.slug === slug; });
}
`);

// 2. SERVICES PAGE WITH SIDEBAR
w('src/app/services/page.tsx', `import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "100px 24px 100px" }}>
        <Link href="/" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
          {"\\u2190 \\u041d\\u0430 \\u0433\\u043b\\u0430\\u0432\\u043d\\u0443\\u044e"}
        </Link>
        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#fff", marginBottom: "40px" }}>
          {"\\u0423\\u0441\\u043b\\u0443\\u0433\\u0438"}
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
              {"\\u0418\\u043d\\u0436\\u0435\\u043d\\u0435\\u0440\\u043d\\u044b\\u0435 \\u0443\\u0441\\u043b\\u0443\\u0433\\u0438 \\u0434\\u043b\\u044f \\u043c\\u043d\\u043e\\u0433\\u043e\\u043a\\u0432\\u0430\\u0440\\u0442\\u0438\\u0440\\u043d\\u044b\\u0445 \\u0434\\u043e\\u043c\\u043e\\u0432. \\u0412\\u044b\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u0443\\u0441\\u043b\\u0443\\u0433\\u0443 \\u0441\\u043b\\u0435\\u0432\\u0430 \\u0434\\u043b\\u044f \\u043e\\u0437\\u043d\\u0430\\u043a\\u043e\\u043c\\u043b\\u0435\\u043d\\u0438\\u044f \\u0441 \\u0441\\u043e\\u0441\\u0442\\u0430\\u0432\\u043e\\u043c \\u0440\\u0430\\u0431\\u043e\\u0442."}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
              {services.map(function(s) {
                return (
                  <Link key={s.slug} href={"/services/" + s.slug} style={{ textDecoration: "none" }}>
                    <div style={{ padding: "24px", borderRadius: "12px", border: "1px solid #222", backgroundColor: "#111" }}>
                      <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 600, marginBottom: "10px" }}>{s.title}</h3>
                      <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.6, marginBottom: "14px" }}>{s.shortDescription}</p>
                      <p style={{ color: "#c9a84c", fontSize: "14px" }}>{"\\u041f\\u043e\\u0434\\u0440\\u043e\\u0431\\u043d\\u0435\\u0435 \\u2192"}</p>
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
`);

// 3. SERVICE SLUG PAGE
w('src/app/services/[slug]/page.tsx', `import Link from "next/link";
import { services, getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map(function(s) { return { slug: s.slug }; });
}

export default async function ServicePage({ params }) {
  const resolved = await params;
  const service = getServiceBySlug(resolved.slug);
  if (!service) notFound();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "100px 24px 100px" }}>
        <Link href="/services" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
          {"\\u2190 \\u0412\\u0441\\u0435 \\u0443\\u0441\\u043b\\u0443\\u0433\\u0438"}
        </Link>
        <h1 style={{ fontSize: "36px", fontWeight: 700, color: "#fff", marginBottom: "20px" }}>
          {service.title}
        </h1>
        <p style={{ fontSize: "18px", color: "#a3a3a3", lineHeight: 1.7, marginBottom: "40px" }}>
          {service.shortDescription}
        </p>
        <div style={{ backgroundColor: "#111", borderRadius: "12px", border: "1px solid #1a1a1a", padding: "32px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#c9a84c", marginBottom: "24px" }}>
            {"\\u041e\\u0440\\u0438\\u0435\\u043d\\u0442\\u0438\\u0440\\u043e\\u0432\\u043e\\u0447\\u043d\\u044b\\u0439 \\u0441\\u043e\\u0441\\u0442\\u0430\\u0432 \\u0440\\u0430\\u0431\\u043e\\u0442"}
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
          <h3 style={{ fontSize: "18px", color: "#fff", marginBottom: "12px" }}>{"\\u041d\\u0443\\u0436\\u043d\\u0430 \\u043a\\u043e\\u043d\\u0441\\u0443\\u043b\\u044c\\u0442\\u0430\\u0446\\u0438\\u044f?"}</h3>
          <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>
            {"\\u0421\\u0432\\u044f\\u0436\\u0438\\u0442\\u0435\\u0441\\u044c \\u0441 \\u043d\\u0430\\u043c\\u0438 \\u0434\\u043b\\u044f \\u043e\\u0431\\u0441\\u0443\\u0436\\u0434\\u0435\\u043d\\u0438\\u044f \\u0432\\u0430\\u0448\\u0435\\u0433\\u043e \\u043f\\u0440\\u043e\\u0435\\u043a\\u0442\\u0430."}
          </p>
          <a href="mailto:oba12@yandex.ru" style={{
            display: "inline-block", padding: "12px 28px",
            backgroundColor: "#c9a84c", color: "#0a0a0a",
            textDecoration: "none", borderRadius: "8px",
            fontWeight: 700, fontSize: "15px"
          }}>
            {"\\u041d\\u0430\\u043f\\u0438\\u0441\\u0430\\u0442\\u044c"}
          </a>
        </div>
      </div>
    </div>
  );
}
`);

// 4. UPDATE NAV - change Услуги link
var nav = fs.readFileSync('src/components/Nav.tsx', 'utf8');
nav = nav.replace('{ href: "/#services"', '{ href: "/services"');
w('src/components/Nav.tsx', nav);

// 5. UPDATE BOOKS with categories
w('src/data/books.ts', `export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  pdfUrl?: string;
  externalUrl?: string;
}

export const books: Book[] = [
  {
    id: "sntp-vodosnabzhenie",
    title: "\\u0421\\u041f 30.13330.2020 \\u2014 \\u0412\\u043d\\u0443\\u0442\\u0440\\u0435\\u043d\\u043d\\u0438\\u0439 \\u0432\\u043e\\u0434\\u043e\\u043f\\u0440\\u043e\\u0432\\u043e\\u0434 \\u0438 \\u043a\\u0430\\u043d\\u0430\\u043b\\u0438\\u0437\\u0430\\u0446\\u0438\\u044f",
    author: "\\u041c\\u0438\\u043d\\u0441\\u0442\\u0440\\u043e\\u0439 \\u0420\\u043e\\u0441\\u0441\\u0438\\u0438",
    description: "\\u0421\\u0432\\u043e\\u0434 \\u043f\\u0440\\u0430\\u0432\\u0438\\u043b \\u043f\\u043e \\u043f\\u0440\\u043e\\u0435\\u043a\\u0442\\u0438\\u0440\\u043e\\u0432\\u0430\\u043d\\u0438\\u044e \\u0432\\u043d\\u0443\\u0442\\u0440\\u0435\\u043d\\u043d\\u0438\\u0445 \\u0441\\u0438\\u0441\\u0442\\u0435\\u043c \\u0432\\u043e\\u0434\\u043e\\u0441\\u043d\\u0430\\u0431\\u0436\\u0435\\u043d\\u0438\\u044f \\u0438 \\u043a\\u0430\\u043d\\u0430\\u043b\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0437\\u0434\\u0430\\u043d\\u0438\\u0439.",
    category: "\\u0421\\u041d\\u0438\\u041f"
  },
  {
    id: "sntp-otoplenie",
    title: "\\u0421\\u041f 60.13330.2020 \\u2014 \\u041e\\u0442\\u043e\\u043f\\u043b\\u0435\\u043d\\u0438\\u0435, \\u0432\\u0435\\u043d\\u0442\\u0438\\u043b\\u044f\\u0446\\u0438\\u044f \\u0438 \\u043a\\u043e\\u043d\\u0434\\u0438\\u0446\\u0438\\u043e\\u043d\\u0438\\u0440\\u043e\\u0432\\u0430\\u043d\\u0438\\u0435",
    author: "\\u041c\\u0438\\u043d\\u0441\\u0442\\u0440\\u043e\\u0439 \\u0420\\u043e\\u0441\\u0441\\u0438\\u0438",
    description: "\\u0421\\u0432\\u043e\\u0434 \\u043f\\u0440\\u0430\\u0432\\u0438\\u043b \\u043f\\u043e \\u043f\\u0440\\u043e\\u0435\\u043a\\u0442\\u0438\\u0440\\u043e\\u0432\\u0430\\u043d\\u0438\\u044e \\u0441\\u0438\\u0441\\u0442\\u0435\\u043c \\u043e\\u0442\\u043e\\u043f\\u043b\\u0435\\u043d\\u0438\\u044f, \\u0432\\u0435\\u043d\\u0442\\u0438\\u043b\\u044f\\u0446\\u0438\\u0438 \\u0438 \\u043a\\u043e\\u043d\\u0434\\u0438\\u0446\\u0438\\u043e\\u043d\\u0438\\u0440\\u043e\\u0432\\u0430\\u043d\\u0438\\u044f.",
    category: "\\u0421\\u041d\\u0438\\u041f"
  },
  {
    id: "sntp-san-tekh",
    title: "\\u0421\\u041f 73.13330.2016 \\u2014 \\u0412\\u043d\\u0443\\u0442\\u0440\\u0435\\u043d\\u043d\\u0438\\u0435 \\u0441\\u0430\\u043d\\u0438\\u0442\\u0430\\u0440\\u043d\\u043e-\\u0442\\u0435\\u0445\\u043d\\u0438\\u0447\\u0435\\u0441\\u043a\\u0438\\u0435 \\u0441\\u0438\\u0441\\u0442\\u0435\\u043c\\u044b",
    author: "\\u041c\\u0438\\u043d\\u0441\\u0442\\u0440\\u043e\\u0439 \\u0420\\u043e\\u0441\\u0441\\u0438\\u0438",
    description: "\\u0421\\u0432\\u043e\\u0434 \\u043f\\u0440\\u0430\\u0432\\u0438\\u043b \\u043f\\u043e \\u043c\\u043e\\u043d\\u0442\\u0430\\u0436\\u0443 \\u0432\\u043d\\u0443\\u0442\\u0440\\u0435\\u043d\\u043d\\u0438\\u0445 \\u0441\\u0430\\u043d\\u0438\\u0442\\u0430\\u0440\\u043d\\u043e-\\u0442\\u0435\\u0445\\u043d\\u0438\\u0447\\u0435\\u0441\\u043a\\u0438\\u0445 \\u0441\\u0438\\u0441\\u0442\\u0435\\u043c \\u0437\\u0434\\u0430\\u043d\\u0438\\u0439.",
    category: "\\u0421\\u041d\\u0438\\u041f"
  },
  {
    id: "gost-germetiki",
    title: "\\u0413\\u041e\\u0421\\u0422 25621-83 \\u2014 \\u041c\\u0430\\u0442\\u0435\\u0440\\u0438\\u0430\\u043b\\u044b \\u043f\\u043e\\u043b\\u0438\\u043c\\u0435\\u0440\\u043d\\u044b\\u0435 \\u0433\\u0435\\u0440\\u043c\\u0435\\u0442\\u0438\\u0437\\u0438\\u0440\\u0443\\u044e\\u0449\\u0438\\u0435",
    author: "\\u0413\\u043e\\u0441\\u0441\\u0442\\u0430\\u043d\\u0434\\u0430\\u0440\\u0442 \\u0420\\u043e\\u0441\\u0441\\u0438\\u0438",
    description: "\\u0413\\u043e\\u0441\\u0443\\u0434\\u0430\\u0440\\u0441\\u0442\\u0432\\u0435\\u043d\\u043d\\u044b\\u0439 \\u0441\\u0442\\u0430\\u043d\\u0434\\u0430\\u0440\\u0442 \\u043d\\u0430 \\u0441\\u0442\\u0440\\u043e\\u0438\\u0442\\u0435\\u043b\\u044c\\u043d\\u044b\\u0435 \\u043f\\u043e\\u043b\\u0438\\u043c\\u0435\\u0440\\u043d\\u044b\\u0435 \\u0433\\u0435\\u0440\\u043c\\u0435\\u0442\\u0438\\u0437\\u0438\\u0440\\u0443\\u044e\\u0449\\u0438\\u0435 \\u043c\\u0430\\u0442\\u0435\\u0440\\u0438\\u0430\\u043b\\u044b.",
    category: "\\u0413\\u041e\\u0421\\u0422"
  },
  {
    id: "gost-utyepitel",
    title: "\\u0413\\u041e\\u0421\\u0422 32415-2013 \\u2014 \\u041c\\u0430\\u0442\\u0435\\u0440\\u0438\\u0430\\u043b\\u044b \\u0442\\u0435\\u043f\\u043b\\u043e\\u0438\\u0437\\u043e\\u043b\\u044f\\u0446\\u0438\\u043e\\u043d\\u043d\\u044b\\u0435 \\u0434\\u043b\\u044f \\u0437\\u0434\\u0430\\u043d\\u0438\\u0439",
    author: "\\u0413\\u043e\\u0441\\u0441\\u0442\\u0430\\u043d\\u0434\\u0430\\u0440\\u0442 \\u0420\\u043e\\u0441\\u0441\\u0438\\u0438",
    description: "\\u0413\\u043e\\u0441\\u0443\\u0434\\u0430\\u0440\\u0441\\u0442\\u0432\\u0435\\u043d\\u043d\\u044b\\u0439 \\u0441\\u0442\\u0430\\u043d\\u0434\\u0430\\u0440\\u0442 \\u043d\\u0430 \\u0442\\u0435\\u043f\\u043b\\u043e\\u0438\\u0437\\u043e\\u043b\\u044f\\u0446\\u0438\\u043e\\u043d\\u043d\\u044b\\u0435 \\u043c\\u0430\\u0442\\u0435\\u0440\\u0438\\u0430\\u043b\\u044b, \\u043f\\u0440\\u0438\\u043c\\u0435\\u043d\\u044f\\u0435\\u043c\\u044b\\u0435 \\u043f\\u0440\\u0438 \\u0443\\u0442\\u0435\\u043f\\u043b\\u0435\\u043d\\u0438\\u0438 \\u0444\\u0430\\u0441\\u0430\\u0434\\u043e\\u0432.",
    category: "\\u0413\\u041e\\u0421\\u0422"
  }
];

export function getBookById(id) {
  return books.find(function(b) { return b.id === id; });
}

export function getBookCategories() {
  var cats = [];
  books.forEach(function(b) {
    if (cats.indexOf(b.category) === -1) cats.push(b.category);
  });
  return cats;
}
`);

// 6. LIBRARY PAGE WITH SIDEBAR
w('src/app/library/page.tsx', `import Link from "next/link";
import { books, getBookCategories } from "@/data/books";

export default function LibraryPage({ searchParams }) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "100px 24px 100px" }}>
        <Link href="/" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
          {"\\u2190 \\u041d\\u0430 \\u0433\\u043b\\u0430\\u0432\\u043d\\u0443\\u044e"}
        </Link>
        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#fff", marginBottom: "40px" }}>
          {"\\u041d\\u043e\\u0440\\u043c\\u0430\\u0442\\u0438\\u0432\\u043d\\u0430\\u044f \\u043b\\u0438\\u0442\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430"}
        </h1>
        <div style={{ display: "flex", gap: "40px" }}>
          <div style={{ width: "200px", flexShrink: 0 }}>
            <nav style={{ position: "sticky", top: "80px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <Link href="/library" style={{
                color: "#fff", textDecoration: "none", fontSize: "15px",
                padding: "8px 12px", borderRadius: "6px",
                backgroundColor: "#1c1c2e", borderLeft: "3px solid #c9a84c",
                display: "block", marginBottom: "8px"
              }}>
                {"\\u0412\\u0441\\u0435 \\u0434\\u043e\\u043a\\u0443\\u043c\\u0435\\u043d\\u0442\\u044b"}
              </Link>
              {getBookCategories().map(function(cat) {
                return (
                  <Link key={cat} href={"/library?category=" + encodeURIComponent(cat)} style={{
                    color: "#737373", textDecoration: "none", fontSize: "15px",
                    padding: "8px 12px", borderRadius: "6px",
                    backgroundColor: "transparent", borderLeft: "3px solid transparent",
                    display: "block"
                  }}>
                    {cat}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {books.map(function(book) {
                return (
                  <Link key={book.id} href={"/library/" + book.id} style={{ textDecoration: "none" }}>
                    <div style={{ padding: "24px", borderRadius: "12px", border: "1px solid #222", backgroundColor: "#111" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                        <h3 style={{ color: "#fff", fontSize: "17px", fontWeight: 600, flex: 1 }}>{book.title}</h3>
                        <span style={{
                          color: "#c9a84c", backgroundColor: "rgba(201,168,76,0.1)",
                          padding: "3px 12px", borderRadius: "999px", fontSize: "12px",
                          flexShrink: 0, marginLeft: "12px"
                        }}>
                          {book.category}
                        </span>
                      </div>
                      <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.6, marginBottom: "10px" }}>{book.description}</p>
                      <p style={{ color: "#555", fontSize: "13px" }}>{book.author}</p>
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
`);

// 7. LIBRARY BOOK PAGE WITH DOWNLOAD
w('src/app/library/[id]/page.tsx', `import Link from "next/link";
import { books, getBookById } from "@/data/books";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return books.map(function(b) { return { id: b.id }; });
}

export default async function BookPage({ params }) {
  const resolved = await params;
  const book = getBookById(resolved.id);
  if (!book) notFound();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "100px 24px 100px" }}>
        <Link href="/library" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
          {"\\u2190 \\u041d\\u043e\\u0440\\u043c\\u0430\\u0442\\u0438\\u0432\\u043d\\u0430\\u044f \\u043b\\u0438\\u0442\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430"}
        </Link>
        <span style={{
          color: "#c9a84c", backgroundColor: "rgba(201,168,76,0.1)",
          padding: "4px 14px", borderRadius: "999px", fontSize: "13px",
          display: "inline-block", marginBottom: "16px"
        }}>
          {book.category}
        </span>
        <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#fff", marginBottom: "12px", lineHeight: 1.3 }}>
          {book.title}
        </h1>
        <p style={{ color: "#888", fontSize: "15px", marginBottom: "24px" }}>{book.author}</p>
        <p style={{ color: "#a3a3a3", fontSize: "17px", lineHeight: 1.8, marginBottom: "32px" }}>
          {book.description}
        </p>
        {book.pdfUrl && (
          <a href={book.pdfUrl} download style={{
            display: "inline-block", padding: "14px 32px",
            backgroundColor: "#c9a84c", color: "#0a0a0a",
            textDecoration: "none", borderRadius: "8px",
            fontWeight: 700, fontSize: "15px"
          }}>
            {"\\u0421\\u043a\\u0430\\u0447\\u0430\\u0442\\u044c PDF"}
          </a>
        )}
        {book.externalUrl && (
          <a href={book.externalUrl} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block", padding: "14px 32px",
            backgroundColor: "#222", color: "#fff",
            textDecoration: "none", borderRadius: "8px",
            fontWeight: 700, fontSize: "15px", marginLeft: "12px"
          }}>
            {"\\u041e\\u0442\\u043a\\u0440\\u044b\\u0442\\u044c \\u0438\\u0441\\u0442\\u043e\\u0447\\u043d\\u0438\\u043a \\u2192"}
          </a>
        )}
      </div>
    </div>
  );
}
`);

console.log('\\nAll files created!');