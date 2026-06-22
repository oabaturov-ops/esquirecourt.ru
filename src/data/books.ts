export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  pdfUrl?: string;
  externalUrl?: string;
  coverUrl?: string;
}

export const books: Book[] = [
  // Добавляй по шаблону:
  // {
  //   id: "snip-xxx",
  //   title: "СНиП 12-01-2004",
  //   author: "Госстрой России",
  //   description: "Организация строительства",
  //   pdfUrl: "/books/snip-12-01-2004.pdf",
  // },
];