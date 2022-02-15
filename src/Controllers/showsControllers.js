const { Shows, Tickets, Reviews, Theaters, Favorites } = require("../db");
const { Op } = require("sequelize");

const postShows = async (
  theaterName, //pasas el nombre del teatro
  name,
  genre,
  length,
  image,
  summary,
  ticketsQty,
  seatsAvalaible,
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
      seatsAvalaible,
      rated,
      date,
      time,
      score,
      originPrice
    });
    console.log(theaterName)
    const theater = await Theaters.findOne({
      where: {
        name: theaterName,
      },
    });
    console.log(theater)
    await theater.addShows(newShow);
    // const favorite = await Favorites.findOne({
    //   where: {
    //     nameTheater: theaterName
    //   }
    // })
    // await favorite.addShows(newShow)

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
