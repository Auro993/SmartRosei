const express = require("express");
const cors = require("cors");

// DB & Models
require("./models/Recipe"); // Register model

// Routes
const recipeRoutes = require("./routes/recipeRoutes");

// Middleware
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// ========================
// Middlewares
// ========================
app.use(cors());
app.use(express.json());

// ========================
// Health Check Route
// ========================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SmartRasoi Backend Running 🚀",
  });
});

// ========================
// API Routes
// ========================
app.use("/api/recipes", recipeRoutes);

// ========================
// Error Handler
// ========================
app.use(errorHandler);

// Export app ONLY (no sync, no listen)
module.exports = app;