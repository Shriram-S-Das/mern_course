import express from "express";
import {
  searchBooks,
  getAllBooks,
  getBookId,
  createBook
} from "../controllers/book.controllers.js";

const router = express.Router();

// Search books by title, author, or genre
router.get("/search", searchBooks);

// Get all books
router.get("/getAllBooks", getAllBooks);

// Get book by ID
router.get("/:id", getBookId);

// Create a new book
router.post("/createBook", createBook);

export default router;