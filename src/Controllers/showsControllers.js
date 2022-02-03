const { Shows, Tickets, Reviews, Theaters } = require("../db");

const postShows = async (
  id,
  name,
  genre,
  length,
  image,
  summary,
  ticketsQty,
  rated,
  date,
  time,
  score
) => {
  try {
    let newShow = await Shows.create({
      name,
      genre,
      length,
      image,
      summary,
      ticketsQty,
      rated,
      date,
      time,
      score,
    });

    const theater = await Theaters.findOne({
      where: {
        id: id,
      },
    });
    await theater.addShows(newShow);

    return newShow;
  } catch (err) {
    console.error(err);
  }
};

const getAllShows = async () =>
  await Shows.findAll({
    include: {
      model: Theaters,
    },
  });

module.exports = { postShows, getAllShows };
