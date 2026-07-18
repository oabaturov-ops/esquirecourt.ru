import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Эксперт Инжиниринг — Инженерные услуги",
  description: "Инженерные услуги: замена стояков, ремонт межпанельных швов, техническое обслуживание зданий.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#0a0a0a",
          color: "#e5e5e5",
          fontFamily: "'Segoe UI', system-ui, sans-serif",
        }}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}