const express = require("express");

const app = express();
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const morgan = require("morgan");

// Middleware
app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use(morgan("dev"));
app.use(errorHandler);

// Test route
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    message: "Server is running"
  });
});

module.exports = app;