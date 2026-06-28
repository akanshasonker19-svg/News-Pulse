const { QueryTypes } = require("sequelize");
const sequelize = require("../config/database");

const getClusterArticles = async (req, res) => {
  try {
    const { id } = req.params;

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
      WHERE cluster_id = :id
      ORDER BY published DESC;
      `,
      {
        replacements: { id },
        type: QueryTypes.SELECT,
      }
    );

    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to fetch cluster articles",
    });
  }
};

module.exports = {
  getClusterArticles,
};