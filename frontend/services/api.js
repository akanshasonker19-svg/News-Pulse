const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function getArticles() {
  const res = await fetch(`${API}/articles`);
  return await res.json();
}

export async function getClusters() {
  const res = await fetch(`${API}/clusters`);
  return await res.json();
}

export async function getClusterDetails(id) {
  const res = await fetch(`${API}/clusters/${id}`);
  return await res.json();
}