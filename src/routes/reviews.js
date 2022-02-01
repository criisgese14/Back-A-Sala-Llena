const { Router } = require("express");
const router = Router();
const { postReviews } = require("../Controllers/reviewsControllers");

router.post("/", async (req, res, next) => {
  const { review, theaterScore, showScore } = req.body;
  try {
    const addReview = await postReviews(review, theaterScore, showScore);

    addReview ? res.status(200).json(addReview) : res.status(404).send("Error");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
