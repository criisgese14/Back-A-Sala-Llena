const { loadFavorites } = require("../../preload-Db");
const { Theaters, Shows, Reviews, Favorites } = require("../db");

const postTheatersRegistration = async ( //a la hora de crear un teatro se agrega a favoritos
  name,
  CUIT,
  email,
  password,
  province,
  adress,
  image,
  phoneNumber,
  seatsQTY,
  score
) => {
  try {
    let newFavorite = await Favorites.findOrCreate({
      where: {
        nameTheater: name,
      },
  })
    let newTheater = await Theaters.create({
      name,
      CUIT,
      email,
      password,
      province,
      adress,
      image,
      phoneNumber,
      seatsQTY,
      score,
    });
    console.log("este es el teatro creado ", newTheater)
    console.log("teatro agreado a favoritos ", newFavorite)
    return newFavorite;
  } catch (err) {
    console.error(err);
  }
};

const getAllTheaters = async () => await Theaters.findAll({
  
});

const getTheater = async (id) => {
  const theater = await Theaters.findOne({
    where: {
      id: id
    },
    include: {
      model: Shows
    }
  })
  return theater
}

module.exports = { postTheatersRegistration, getAllTheaters, getTheater };
