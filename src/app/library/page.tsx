import Link from "next/link";
import { books, getBookCategories } from "@/data/books";

export default function LibraryPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "100px 24px 100px" }}>
        <Link href="/" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
          {"\u2190 \u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}
        </Link>
        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#fff", marginBottom: "40px" }}>
          {"\u041d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}
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
                {"\u0412\u0441\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b"}
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

