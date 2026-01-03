const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// api routes
app.use("/api/expenses", expenseRoutes);

// health check
app.get("/", (req, res) => {
  res.send("Expense Tracker Backend is running 🚀");
});

// database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((error) =>
    console.error("❌ MongoDB connection error:", error)
  );

// server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
