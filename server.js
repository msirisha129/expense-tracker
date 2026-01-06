const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/expenseTracker")
  .then(() => console.log("DB Connected"));

const TransactionSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  type: String,
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

app.get("/", (req, res) => {
  res.send("Expense Tracker Backend Running");
});

app.post("/transaction", async (req, res) => {
  await Transaction.create(req.body);
  const data = await Transaction.find();
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
