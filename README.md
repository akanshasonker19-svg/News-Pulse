Developed by Akansha Sonker


# 📰 News Pulse

News Pulse is a full-stack news aggregation and clustering platform that automatically collects news articles, stores them in a PostgreSQL database (Supabase), groups similar news into clusters, and presents them through a modern web interface.

## 🚀 Features

* Automatically scrapes news articles from multiple sources
* Stores articles in a Supabase PostgreSQL database
* Removes HTML tags from article summaries
* Assigns articles into similarity-based clusters
* REST API built with Express.js
* Responsive frontend built with Next.js
* Search articles by title
* View article source and publication date
* Open the original news article
* Browse articles grouped by cluster

---

## 🛠 Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* CSS

### Backend

* Node.js
* Express.js
* Sequelize

### Database

* PostgreSQL (Supabase)

### Scraper

* Python
* SQLAlchemy
* BeautifulSoup
* Requests

---

## 📂 Project Structure

```
news-pulse/
│
├── frontend/
│   ├── app/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.js
│   └── package.json
│
├── scraper/
│   ├── app/
│   ├── assign_clusters.py
│   ├── database.py
│   └── extract.py
│
└── README.md
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/news-pulse.git

cd news-pulse
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:3000
```

---

## Scraper Setup

Create a Python virtual environment.

```bash
python -m venv .venv
```

Activate it.

### macOS/Linux

```bash
source .venv/bin/activate
```

### Windows

```bash
.venv\Scripts\activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Run scraper.

```bash
python scraper/app/database.py
```

Assign article clusters.

```bash
python scraper/app/assign_clusters.py
```

---

## API Endpoints

### Get all articles

```
GET /articles
```

---

### Get articles by cluster

```
GET /clusters/:id
```

Example

```
GET /clusters/13
```

---

## Environment Variables

### Backend

Create `.env`

```
DATABASE_URL=your_supabase_connection_string
PORT=5000
```

### Scraper

```
DATABASE_URL=your_supabase_connection_string
```

---

## Current Features

* News scraping
* PostgreSQL database
* Article clustering
* REST API
* Search functionality
* Clean summaries
* Cluster browsing
* Responsive UI

---

## Future Improvements

* User authentication
* Bookmark favorite articles
* Dark mode
* Category filters
* AI-powered news summarization
* Real-time updates
* Sentiment analysis
* Trending topics dashboard
* Pagination
* Infinite scrolling

---

## Author

**Akansha Sonker**

B.Tech Information Technology (2026)

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile

---

## License

This project is licensed under the MIT License.
