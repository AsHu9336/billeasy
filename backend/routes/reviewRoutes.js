const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const {
  createReview,
  updateReview,
  deleteReview
} = require('../controllers/reviewController');

router.post('/books/:id/reviews', verifyToken, createReview);
router.put('/reviews/:id', verifyToken, updateReview);
router.delete('/reviews/:id', verifyToken, deleteReview);


module.exports = router;
