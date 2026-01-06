import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ API ROUTE
app.use("/api/expenses", expenseRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Expense Tracker Backend Running 🚀");
});

// ✅ MongoDB Atlas (NOT localhost)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// ✅ Render-safe port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
