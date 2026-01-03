const express = require("express");
const {
  createExpense,
  getAllExpenses,
  deleteExpense,
} = require("../controllers/expenseController");

const router = express.Router();

/**
 * @route   /api/expenses
 * @desc    Expense routes
 */

// GET all expenses
router.get("/", getAllExpenses);

// CREATE new expense
router.post("/", createExpense);

// DELETE expense by id
router.delete("/:id", deleteExpense);

module.exports = router;
