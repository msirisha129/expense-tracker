import express from "express";
import {
  createExpense,
  getAllExpenses,
  deleteExpense,
} from "../controllers/expenseController.js";

const router = express.Router();

router.get("/", getAllExpenses);
router.post("/", createExpense);
router.delete("/:id", deleteExpense);

export default router;

