const Review = require('../models/Review');


exports.createReview = async (req, res) => {
  const { rating, comment } = req.body;
  const bookId = req.params.id;
  const userId = req.user.id;

  try {
    const existing = await Review.findOne({ book: bookId, user: userId });
    if (existing) {
      return res.status(400).json({ message: 'You already reviewed this book.' });
    }

    const review = new Review({
      book: bookId,
      user: userId,
      rating,
      comment,
    });
    await review.save();

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateReview = async (req, res) => {
  const reviewId = req.params.id;
  const userId = req.user.id;
  const { rating, comment } = req.body;

  try {
    const review = await Review.findById(reviewId);
    if (!review) return res.status(404).json({ message: 'Review not found' });
    if (review.user.toString() !== userId) return res.status(403).json({ message: 'Not authorized' });

    review.rating = rating ?? review.rating;
    review.comment = comment ?? review.comment;
    await review.save();

    res.json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteReview = async (req, res) => {
  const reviewId = req.params.id;
  const userId = req.user.id;

  try {
    const review = await Review.findById(reviewId);
    if (!review) return res.status(404).json({ message: 'Review not found' });
    if (review.user.toString() !== userId) return res.status(403).json({ message: 'Not authorized' });

    await review.deleteOne();
    res.json({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
