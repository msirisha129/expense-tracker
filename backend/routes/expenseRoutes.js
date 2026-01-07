const express = require("express");
const {
  createExpense,
  getAllExpenses,
  deleteExpense,
} = require("../controllers/expenseController");

const router = express.Router();

router.get("/", getAllExpenses);
router.post("/", createExpense);
router.delete("/:id", deleteExpense);

module.exports = router;
