const { Theaters, Shows, Tickets, Reviews } = require("../db");

const postTheaterRegistration = async (
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

module.exports = { postTheaterRegistration };
