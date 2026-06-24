import Link from "next/link";
import { books, getBookById } from "@/data/books";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return books.map(function(b) { return { id: b.id }; });
}

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const resolved = await params;
  const book = getBookById(resolved.id);
  if (!book) notFound();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "100px 24px 100px" }}>
        <Link href="/library" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
          {"\u2190 \u041d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}
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
            {"\u0421\u043a\u0430\u0447\u0430\u0442\u044c PDF"}
          </a>
        )}
        {book.externalUrl && (
          <a href={book.externalUrl} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block", padding: "14px 32px",
            backgroundColor: "#222", color: "#fff",
            textDecoration: "none", borderRadius: "8px",
            fontWeight: 700, fontSize: "15px", marginLeft: "12px"
          }}>
            {"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u2192"}
          </a>
        )}
      </div>
    </div>
  );
}

