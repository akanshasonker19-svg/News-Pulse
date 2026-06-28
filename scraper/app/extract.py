import trafilatura


def extract_article(url):
    try:
        downloaded = trafilatura.fetch_url(url)

        if downloaded is None:
            return ""

        text = trafilatura.extract(downloaded)

        if text:
            return text

        return ""

    except Exception as e:
        print(f"Error extracting article: {e}")
        return ""