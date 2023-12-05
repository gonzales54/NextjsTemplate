import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("/api/articles", () => {
    return HttpResponse.json({
      articles: [
        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        }
      ],
    });
  })
];
