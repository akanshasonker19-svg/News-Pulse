"use client";

import { useEffect, useState } from "react";
import { getArticles } from "@/services/api";

export default function Home() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredArticles = articles.filter((article: any) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          marginBottom: "30px",
        }}
      >
        📰 News Pulse
      </h1>

      <input
        type="text"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "30px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        filteredArticles.map((article: any) => (
          <div
            key={article.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{article.title}</h2>

            <p>{article.summary}</p>

            <p>
              <strong>{article.source}</strong> •{" "}
              {new Date(article.published).toLocaleString()}
            </p>

            <a
              href={`/cluster/${article.cluster_id}`}
              style={{
                color: "#2563eb",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Cluster {article.cluster_id}
            </a>

            <br />
            <br />

            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#16a34a",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Read Full Article →
            </a>
          </div>
        ))
      )}
    </main>
  );
}