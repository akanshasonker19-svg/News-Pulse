"use client";

import { useEffect, useState } from "react";

export default function ClusterPage({ params }: any) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/clusters/${params.id}`)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, [params.id]);

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1>Cluster {params.id}</h1>

      {articles.map((article: any) => (
        <div
          key={article.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>{article.title}</h2>

          <p>{article.summary}</p>

          <p>
            <strong>{article.source}</strong>
          </p>

          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Full Article →
          </a>
        </div>
      ))}
    </main>
  );
}