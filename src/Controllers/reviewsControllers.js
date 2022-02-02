const { Reviews, Viewers, Shows, Theaters } = require("../db");

const postReviews = async (
  review,
  theaterScore,
  showScore,
  nameViewer,
  nameTheater,
  nameShow
) => {
  try {
    let newReview = await Reviews.create({
      review,
      theaterScore,
      showScore,
    });
    const show = await Shows.findOne({
      where: {
        name: nameShow,
      },
    });
    // console.log(show)
    const theater = await Theaters.findOne({
      where: {
        name: nameTheater,
      },
    });
    const viewer = await Viewers.findOne({
      where: {
        name: nameViewer,
      },
    });

    await show.addReviews(newReview);

    await theater.addReviews(newReview);

    await viewer.addReviews(newReview);

    return newReview;
  } catch (err) {
    console.error(err);
  }
};

const getAllReviews = async () => await Reviews.findAll({});

module.exports = { postReviews, getAllReviews };
