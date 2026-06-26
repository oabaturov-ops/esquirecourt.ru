import Link from "next/link";
import { getAllBooks, getBookById } from "@/data/books";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllBooks().map((book) => ({ id: book.id }));
}

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = getBookById(id);
  if (!book) notFound();

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <header style={{ padding: "60px 24px 40px", maxWidth: "900px", margin: "0 auto" }}>
        <Link href="/library" style={{ color: "#d4a030", textDecoration: "none", fontSize: "14px" }}>
          {"\u2190 \u041d\u0430\u0437\u0430\u0434 \u0432 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443"}
        </Link>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, margin: "16px 0 8px" }}>{book.title}</h1>
        <span style={{ display: "inline-block", padding: "4px 12px", backgroundColor: "#1a1a1a", borderRadius: "4px", fontSize: "13px", color: "#d4a030", border: "1px solid #333" }}>
          {book.category}
        </span>
      </header>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 80px" }}>
        <p style={{ color: "#a3a3a3", fontSize: "17px", lineHeight: 1.8, marginBottom: "32px" }}>
          {book.shortDescription}
        </p>
        <div style={{ backgroundColor: "#111", border: "1px solid #222", borderRadius: "8px", padding: "40px 32px", marginBottom: "40px", whiteSpace: "pre-wrap", lineHeight: 1.8, fontSize: "15px", color: "#ccc" }}>
          {book.fullText}
        </div>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {book.pdfUrl && (
            <a href={book.pdfUrl} download style={{ padding: "12px 28px", backgroundColor: "#d4a030", color: "#0a0a0a", fontWeight: 600, fontSize: "15px", textDecoration: "none", borderRadius: "4px" }}>
              {"\u0421\u043a\u0430\u0447\u0430\u0442\u044c PDF"}
            </a>
          )}
          {book.sourceUrl && (
            <a href={book.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ padding: "12px 28px", backgroundColor: "transparent", color: "#d4a030", fontWeight: 600, fontSize: "15px", textDecoration: "none", borderRadius: "4px", border: "1px solid #d4a030" }}>
              {"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a"}
            </a>
          )}
        </div>
      </main>
    </div>
  );
}