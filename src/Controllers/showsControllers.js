const { Shows } = require("../db");

const postShows = async (
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
    return newShow;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { postShows };
