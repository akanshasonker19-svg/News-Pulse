from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import AgglomerativeClustering


def cluster_articles(articles):
    texts = [
        article.body if article.body else article.summary
        for article in articles
    ]

    if len(texts) < 2:
        return [0] * len(texts)

    vectorizer = TfidfVectorizer(stop_words="english")
    vectors = vectorizer.fit_transform(texts)

    model = AgglomerativeClustering(
        n_clusters=None,
        distance_threshold=1.2
    )

    return model.fit_predict(vectors.toarray())