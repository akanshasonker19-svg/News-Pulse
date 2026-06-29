const API = "http://localhost:5000";

export async function getArticles() {
  const res = await fetch(`${API}/articles`);
  return await res.json();
}

export async function getClusters() {
  const res = await fetch(`${API}/clusters`);
  return await res.json();
}