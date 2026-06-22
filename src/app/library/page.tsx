import { books } from "@/data/books";
import Link from "next/link";

export default function LibraryPage() {
  if (books.length === 0) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#737373", fontSize: "18px" }}>
          {"\u041D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0441\u043A\u043E\u0440\u043E \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F"}
        </p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 24px 100px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#fff", marginBottom: "40px" }}>
          {"\u041D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
          {books.map(book => (
            <Link key={book.id} href={`/library/${book.id}`} style={{ textDecoration: "none" }}>
              <div style={{ padding: "24px", borderRadius: "12px", border: "1px solid #262626", backgroundColor: "#111", height: "100%" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>{book.title}</h2>
                <p style={{ fontSize: "14px", color: "#c9a84c", marginBottom: "12px" }}>{book.author}</p>
                <p style={{ fontSize: "15px", color: "#a3a3a3", lineHeight: 1.6 }}>{book.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}