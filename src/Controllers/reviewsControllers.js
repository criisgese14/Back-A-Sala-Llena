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

const getAllReviews = async () =>
  await Reviews.findAll({
    include: {
      model: Shows,
      Theaters,
    },
  });
module.exports = { postReviews, getAllReviews };
