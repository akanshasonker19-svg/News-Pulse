const { QueryTypes } = require("sequelize");
const sequelize = require("../config/database");

const getArticles = async (req, res) => {
  try {
    const articles = await sequelize.query(
      `
      SELECT
        id,
        title,
        regexp_replace(summary, '<[^>]*>', '', 'g') AS summary,
        link,
        source,
        published,
        cluster_id
      FROM articles
      ORDER BY published DESC;
      `,
      {
        type: QueryTypes.SELECT,
      }
    );

    res.json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);

    res.status(500).json({
      error: "Failed to fetch articles",
    });
  }
};

module.exports = {
  getArticles,
};