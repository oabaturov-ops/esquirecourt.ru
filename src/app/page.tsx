"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const offset = window.scrollY * 0.4;
        videoRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", fontFamily: "'Inter', sans-serif" }}>
      {/* HERO SECTION — video background with parallax */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: "-20%",
            left: 0,
            width: "100%",
            height: "120%",
            objectFit: "cover",
            zIndex: 0,
            willChange: "transform",
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#d4a030",
              marginBottom: "24px",
            }}
          >
            Инженерная компания
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: "900px",
              margin: "0 0 24px 0",
              color: "#ffffff",
            }}
          >
            Esquire Court
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 22px)",
              maxWidth: "600px",
              lineHeight: 1.6,
              color: "#cccccc",
              margin: "0 0 48px 0",
            }}
          >
            Инженерные решения для многоквартирных домов. Ремонт фасадов, замена стояков, герметизация швов и полное содержание ЖКХ.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              href="/services"
              style={{
                padding: "14px 36px",
                backgroundColor: "#d4a030",
                color: "#0a0a0a",
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                borderRadius: "4px",
                border: "none",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e6b33e")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#d4a030")}
            >
              Наши услуги
            </Link>
            <Link
              href="/library"
              style={{
                padding: "14px 36px",
                backgroundColor: "transparent",
                color: "#d4a030",
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                borderRadius: "4px",
                border: "2px solid #d4a030",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#d4a030";
                e.currentTarget.style.color = "#0a0a0a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#d4a030";
              }}
            >
              Нормативная база
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            animation: "bounce 2s infinite",
          }}
        >
          <div style={{ width: "24px", height: "40px", borderRadius: "12px", border: "2px solid rgba(255,255,255,0.4)", position: "relative" }}>
            <div
              style={{
                width: "4px",
                height: "8px",
                borderRadius: "2px",
                backgroundColor: "#d4a030",
                position: "absolute",
                top: "6px",
                left: "50%",
                transform: "translateX(-50%)",
                animation: "scrollDot 2s infinite",
              }}
            />
          </div>
        </div>

        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(8px); }
          }
          @keyframes scrollDot {
            0% { opacity: 1; top: 6px; }
            100% { opacity: 0; top: 22px; }
          }
        `}</style>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", color: "#d4a030", marginBottom: "12px" }}>Что мы делаем</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, margin: 0 }}>Наши направления</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {[
            { icon: "🛠️", title: "Замена стояков", desc: "Водоснабжение и отопление — современные материалы и технологии." },
            { icon: "🏗️", title: "Межпанельные швы", desc: "Герметизация стыков — защита от продувания и промерзания." },
            { icon: "🏠", title: "Ремонт фасада", desc: "Реставрация и обновление наружных стен здания." },
            { icon: "🏞️", title: "Содержание ЖКХ", desc: "Полный цикл управления жилым фондом." },
          ].map((item) => (
            <Link
              key={item.title}
              href="/services"
              style={{
                padding: "32px 24px",
                backgroundColor: "#141414",
                border: "1px solid #2a2a2a",
                borderRadius: "8px",
                textDecoration: "none",
                color: "#f5f5f5",
                transition: "border-color 0.3s, transform 0.2s",
                display: "block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#d4a030";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2a2a";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "16px" }}>{item.icon}</div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 8px 0", color: "#d4a030" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, margin: 0, color: "#999" }}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "80px 24px", backgroundColor: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", color: "#d4a030", marginBottom: "12px" }}>Преимущества</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, margin: "0 0 48px 0" }}>Почему выбирают нас</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "32px" }}>
            {[
              { num: "15+", label: "Лет опыта" },
              { num: "200+", label: "Объектов сдано" },
              { num: "50+", label: "Специалистов" },
              { num: "24/7", label: "Оперативный выезд" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 700, color: "#d4a030", lineHeight: 1 }}>{stat.num}</div>
                <div style={{ fontSize: "14px", color: "#888", marginTop: "8px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, margin: "0 0 16px 0" }}>Нужна консультация?</h2>
        <p style={{ fontSize: "16px", color: "#888", maxWidth: "500px", margin: "0 auto 32px auto", lineHeight: 1.6 }}>
          Оставьте заявку и наши специалисты свяжутся с вами для бесплатной оценки объекта.
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

      {/* FOOTER */}
      <footer style={{ padding: "40px 24px", borderTop: "1px solid #1a1a1a", textAlign: "center" }}>
        <div style={{ fontSize: "14px", color: "#555" }}>
          © {new Date().getFullYear()} Esquire Court. Все права защищены.
        </div>
      </footer>
    </div>
  );
}
