from database import SessionLocal
from models import Article
from cluster import cluster_articles

session = SessionLocal()

articles = session.query(Article).all()

labels = cluster_articles(articles)

for article, label in zip(articles, labels):
    article.cluster_id = int(label)

session.commit()

print(f"✅ Assigned clusters to {len(articles)} articles")