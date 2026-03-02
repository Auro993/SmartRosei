require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/db");

const PORT = process.env.PORT || 5000;

// ========================
// Database Sync + Server Start
// ========================
sequelize.sync()
  .then(() => {
    console.log("✅ Database synced successfully");

    app.listen(PORT, () => {
      console.log(`🚀 SmartRasoi Backend running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database sync error:", err);
  });