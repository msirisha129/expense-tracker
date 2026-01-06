import express from "express";
import {
  createExpense,
  getAllExpenses,
  deleteExpense,
} from "../controllers/expenseController.js";

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

export default router;
