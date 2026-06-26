"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function ContactsPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically send to a backend / API
    console.log("Contact form:", { name, phone, message });
    setSent(true);
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ padding: "60px 24px 40px", maxWidth: "900px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#d4a030", textDecoration: "none", fontSize: "14px" }}>
          ← На главную
        </Link>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, margin: "16px 0 0" }}>Контакты</h1>
      </header>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px" }}>
          {/* Left — Info */}
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: 600, margin: "0 0 32px 0", color: "#d4a030" }}>Свяжитесь с нами</h2>

            {[
              { label: "Телефон", value: "+7 (XXX) XXX-XX-XX", icon: "📞" },
              { label: "Email", value: "info@esquirecourt.ru", icon: "📧" },
              { label: "Адрес", value: "Москва, ул. Инженерная, д. 1, офис 100", icon: "📍" },
              { label: "Режим работы", value: "Пн–Пт: 9:00–18:00", icon: "🕒" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: "16px", marginBottom: "24px", alignItems: "flex-start" }}>
                <div style={{ fontSize: "24px", flexShrink: 0, marginTop: "2px" }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: "13px", color: "#888", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "16px", color: "#ddd" }}>{item.value}</div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: "32px", padding: "24px", backgroundColor: "#141414", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 12px 0" }}>Быстрая заявка</h3>
              <p style={{ fontSize: "14px", color: "#999", lineHeight: 1.6, margin: 0 }}>
                Оставьте заявку через форму и наш менеджер перезвонит вам в течение 30 минут
                в рабочее время.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {sent ? (
              <div style={{ padding: "48px 32px", backgroundColor: "#141414", borderRadius: "8px", textAlign: "center", border: "1px solid #d4a030" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                <h3 style={{ fontSize: "20px", fontWeight: 600, margin: "0 0 8px 0", color: "#d4a030" }}>Заявка отправлена</h3>
                <p style={{ fontSize: "14px", color: "#999", margin: "0 0 24px 0" }}>
                  Мы свяжемся с вами в ближайшее время.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{
                    padding: "10px 24px",
                    backgroundColor: "transparent",
                    color: "#d4a030",
                    border: "1px solid #d4a030",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#888", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>
                    Имя
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      backgroundColor: "#141414",
                      border: "1px solid #2a2a2a",
                      borderRadius: "4px",
                      color: "#f5f5f5",
                      fontSize: "16px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#888", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      backgroundColor: "#141414",
                      border: "1px solid #2a2a2a",
                      borderRadius: "4px",
                      color: "#f5f5f5",
                      fontSize: "16px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#888", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>
                    Сообщение
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Опишите вашу задачу..."
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      backgroundColor: "#141414",
                      border: "1px solid #2a2a2a",
                      borderRadius: "4px",
                      color: "#f5f5f5",
                      fontSize: "16px",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: "14px 32px",
                    backgroundColor: "#d4a030",
                    color: "#0a0a0a",
                    fontWeight: 600,
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e6b33e")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#d4a030")}
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
