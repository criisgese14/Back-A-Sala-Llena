const { Reviews, Viewers, Shows, Theaters } = require("../db");

const postReviews = async (review, theaterScore, showScore) => {
  try {
    let newReview = await Reviews.create({
      review,
      theaterScore,
      showScore,
    });
    return newReview;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { postReviews };
