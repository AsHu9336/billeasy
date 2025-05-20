const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const {
  createBook,
  getAllBooks,
  getBookDetails
} = require('../controllers/bookController');

router.post('/books', verifyToken, createBook);
router.get('/books', getAllBooks);
router.get('/books/:id', getBookDetails);

module.exports = router;
