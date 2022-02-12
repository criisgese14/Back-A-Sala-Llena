const { Shows, Tickets, Reviews, Theaters } = require("../db");
const { Op } = require("sequelize");

const postShows = async (
  theaterId,
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
  originPrice
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
      originPrice
    });

    const theater = await Theaters.findOne({
      where: {
        id: theaterId,
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
    include: [{
      model: Theaters,
    }, {
      model: Tickets,
    }],
  });

const getShowByName = async (name) => {
  try {
    let showName = await Shows.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Theaters,
      },
    });
    return showName;
  } catch (error) {
    console.log(error);
  }
};

const getShowById = async (id) => {
  const show = await Shows.findOne({
    where: {
      id: id,
    },
    include: [
      {
        model: Theaters,
      },
      {
        model: Tickets,
      },
    ],
  });
  return show;
};

module.exports = { postShows, getAllShows, getShowById, getShowByName };
