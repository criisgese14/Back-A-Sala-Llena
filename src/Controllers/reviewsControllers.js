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
    if (nameShow){
    const show = await Shows.findOne({
      where: {
        name: nameShow,
      },
    });
    await show.addReviews(newReview);
  }
    // console.log(show)
    if (nameTheater){
    const theater = await Theaters.findOne({
      where: {
        name: nameTheater,
      },
    });
    await theater.addReviews(newReview);
  }

  if(nameViewer){
    const viewer = await Viewers.findOne({
      where: {
        name: nameViewer,
      },
    });
    await viewer.addReviews(newReview);
  }

    return newReview;

  } catch (err) {
    console.error(err);
  }
};

const getAllReviews = async () => await Reviews.findAll({
  include: [{
    model: Theaters
  },
  {
    model: Shows 
  },
{
  model: Viewers
}]
});

module.exports = { postReviews, getAllReviews };
