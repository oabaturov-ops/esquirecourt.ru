"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#home", label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" },
    { href: "/#services", label: "\u0423\u0441\u043B\u0443\u0433\u0438" },
    { href: "/#about", label: "\u041E \u043D\u0430\u0441" },
    { href: "/library", label: "\u041D\u043E\u0440\u043C\u0430\u0442\u0438\u0432" },
    { href: "/#contact", label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      backgroundColor: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid #1a1a1a", padding: "0 24px",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "64px",
      }}>
        <Link href="/#home" style={{ fontSize: "20px", fontWeight: 700, color: "#c9a84c", textDecoration: "none" }}>
          <span style={{ color: "#fff" }}>Esquire</span>Court
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              color: "#a3a3a3", textDecoration: "none", fontSize: "15px",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = "#c9a84c"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = "#a3a3a3"; }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: "none", background: "none", border: "none", color: "#e5e5e5", fontSize: "24px", cursor: "pointer" }}
        >
          {open ? "\u2715" : "\u2630"}
        </button>
      </div>
    </nav>
  );
}