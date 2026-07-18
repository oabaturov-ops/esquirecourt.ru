import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас —Эксперт Инжиниринг",
  description: "Инженерная компанияЭксперт Инжиниринг: история, миссия и команда профессионалов.",
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ padding: "60px 24px 40px", maxWidth: "900px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#d4a030", textDecoration: "none", fontSize: "14px" }}>
          ← На главную
        </Link>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, margin: "16px 0 0" }}>О компании</h1>
      </header>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Intro */}
        <section style={{ marginBottom: "60px" }}>
          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#ccc", margin: 0 }}>
            <strong style={{ color: "#d4a030" }}>Эксперт Инижиниринг</strong> — инженерная компания, специализирующаяся
            на комплексном обслуживании и ремонте многоквартирных домов. Мы работаем на рынке
            жилищно-коммунального хозяйства более 15 лет и имеем обширный опыт реализации проектов
            любой сложности.
          </p>
        </section>

        {/* Mission */}
        <section style={{ marginBottom: "60px", padding: "32px", backgroundColor: "#141414", borderRadius: "8px", borderLeft: "4px solid #d4a030" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 600, margin: "0 0 16px 0", color: "#d4a030" }}>Наша миссия</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#bbb", margin: 0 }}>
            Обеспечивать комфортные и безопасные условия проживания для жителей многоквартирных
            домов, предлагая современные инженерные решения, качественные материалы и
            профессиональный подход к каждому объекту. Мы стремимся к тому, чтобы каждый
            дом под нашим управлением был надёжным, тёплым и долговечным.
          </p>
        </section>

        {/* Values */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 600, margin: "0 0 32px 0" }}>Наши ценности</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
            {[
              {
                title: "Качество",
                text: "Используем сертифицированные материалы и современные технологии. Каждый этап работ проходит контроль качества.",
              },
              {
                title: "Надёжность",
                text: "Соблюдаем сроки и бюджет. Берём на себя полную ответственность за результат выполненных работ.",
              },
              {
                title: "Прозрачность",
                text: "Предоставляем подробную смету и отчётность. Клиент всегда знает, за что платит и на каком этапе проект.",
              },
            ].map((v) => (
              <div key={v.title} style={{ padding: "24px", backgroundColor: "#141414", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 12px 0", color: "#d4a030" }}>{v.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#999", margin: 0 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Licenses */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 600, margin: "0 0 24px 0" }}>Лицензии и допуски</h2>
          <ul style={{ fontSize: "16px", lineHeight: 2, color: "#bbb", paddingLeft: "20px" }}>
            <li>Членство в СРО строительных организаций</li>
            <li>Допуск к работам на объектах повышенной опасности</li>
            <li>Сертификация ISO 9001 (система менеджмента качества)</li>
            <li>Лицензия на осуществление деятельности по управлению многоквартирными домами</li>
          </ul>
        </section>

        {/* CTA */}
        <section style={{ textAlign: "center", padding: "40px 0" }}>
          <p style={{ fontSize: "18px", color: "#ccc", margin: "0 0 24px 0" }}>
            Хотите узнать больше о наших возможностях?
          </p>
          <Link
            href="/contacts"
            style={{
              display: "inline-block",
              padding: "14px 40px",
              backgroundColor: "#d4a030",
              color: "#0a0a0a",
              fontWeight: 600,
              fontSize: "16px",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            Связаться с нами
          </Link>
        </section>
      </main>
    </div>
  );
}
