import Link from "next/link";
import { getAllBooks, getBookCategories } from "@/data/books";

export default function LibraryPage() {
  const books = getAllBooks();
  const categories = getBookCategories();

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <header style={{ padding: "60px 24px 40px", maxWidth: "1100px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#d4a030", textDecoration: "none", fontSize: "14px" }}>
          {"\u2190 \u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}
        </Link>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, margin: "16px 0 0" }}>{"\u041d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0431\u0430\u0437\u0430"}</h1>
      </header>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px", display: "flex", gap: "40px" }}>
        <aside style={{ flexShrink: 0, width: "200px", position: "sticky", top: "100px", alignSelf: "flex-start" }}>
          <h3 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "2px", color: "#888", marginBottom: "16px" }}>{"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}</h3>
          {categories.map((cat) => (
            <div key={cat} style={{ marginBottom: "8px" }}>
              <span style={{ display: "inline-block", padding: "6px 14px", backgroundColor: "#141414", borderRadius: "4px", fontSize: "14px", color: "#d4a030", border: "1px solid #333" }}>
                {cat}
              </span>
            </div>
          ))}
        </aside>

        <div style={{ flex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {books.map((book) => (
              <Link
                key={book.id}
                href={"/library/" + book.id}
                style={{ textDecoration: "none", backgroundColor: "#141414", border: "1px solid #222", borderRadius: "8px", padding: "24px", display: "block", transition: "border-color 0.3s" }}
              >
                <span style={{ display: "inline-block", padding: "3px 10px", backgroundColor: "#1a1a1a", borderRadius: "3px", fontSize: "11px", color: "#d4a030", border: "1px solid #333", marginBottom: "12px" }}>
                  {book.category}
                </span>
                <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#fff", margin: "0 0 10px 0" }}>{book.title}</h3>
                <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6, margin: 0 }}>{book.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}