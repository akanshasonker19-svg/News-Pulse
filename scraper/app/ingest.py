
from database import SessionLocal
from models import Article

from extract import extract_article
import feedparser
from config import RSS_FEEDS

def fetch_articles():
    articles = []

    for source, url in RSS_FEEDS.items():
        print(f"Fetching from {source}...")

        feed = feedparser.parse(url)

        for item in feed.entries:
           articles.append({
             "title": item.get("title", ""),
    "summary": item.get("summary", ""),
    "body": extract_article(item.get("link", "")),
    "link": item.get("link", ""),
    "published": item.get("published", ""),
    "source": source
})

    return articles


if __name__ == "__main__":
    articles = fetch_articles()

session = SessionLocal()

for article in articles:

    exists = session.query(Article).filter_by(link=article["link"]).first()

    if exists:
        continue

    new_article = Article(
        title=article["title"],
        summary=article["summary"],
        body=article["body"],
        source=article["source"],
        link=article["link"],
        published=article["published"]
    )

    session.add(new_article)

session.commit()

print(f"✅ Saved {len(articles)} articles")
print(f"\nTotal Articles: {len(articles)}\n")
for article in articles[:2]:
    print("=" * 80)
    print(article["title"])
    print()
    print(article["body"][:500])

    