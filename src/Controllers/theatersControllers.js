const { Theaters, Shows, Reviews } = require("../db");

const postTheatersRegistration = async (
  name,
  CUIT,
  email,
  userName,
  password,
  province,
  adress,
  image,
  phoneNumber,
  seatsQTY,
  score
) => {
  try {
    let newTheater = await Theaters.create({
      name,
      CUIT,
      email,
      userName,
      password,
      province,
      adress,
      image,
      phoneNumber,
      seatsQTY,
      score,
    });
    return newTheater;
  } catch (err) {
    console.error(err);
  }
};

const getAllTheaters = async () =>
  await Theaters.findAll({
    include: {
      model: Shows,
      Reviews,
    },
  });

module.exports = { postTheatersRegistration, getAllTheaters };
