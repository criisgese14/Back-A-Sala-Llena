const server = require("./src/app.js");
const { conn, Theaters, Shows, Reviews } = require("./src/db.js");
const { TheatersDb, ShowsDb, ReviewsDb } = require("./preload-Db");

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  try {
    // console.log(TheatersDb);
    const modelTheater = TheatersDb.map((el) => ({
      name: el.name,
      CUIT: el.CUIT,
      email: el.email,
      password: el.password,
      province: el.province,
      adress: el.adress,
      image: el.image,
      phoneNumber: el.phoneNumber,
      seatsQTY: el.seatsQTY,
      score: el.score,
    }));
    await Theaters.bulkCreate(modelTheater);
  } catch (err) {
    console.error(err);
  }

  try {
    // console.log(ShowsDb);
    const modelShows = ShowsDb.map((el) => ({
      name: el.name,
      genre: el.genre,
      length: el.length,
      image: el.image,
      summary: el.summary,
      ticketsQty: el.ticketsQty,
      rated: el.rated,
      date: el.date,
      time: el.time,
      score: el.score,
    }));
    await Shows.bulkCreate(modelShows);
  } catch (err) {
    console.error(err);
  }

  try {
    const modelReviews = ReviewsDb.map((el) => ({
      review: el.review,
      theaterScore: el.theaterScore,
      showScore: el.showScore,
    }));
    await Reviews.bulkCreate(modelReviews);
  } catch (err) {
    console.error(err);
  }

  server.listen(3001, () => {
    console.log("%s listening at 3001 - Data base loaded."); // eslint-disable-line no-console
  });
});

// -------------Ejemplo de bulkCreate-------------------------------

// conn.sync({ force: true }).then(async () => {
//   const countriesApi = await axios.get("https://restcountries.com/v3.1/all");
//   const modelCountry = countriesApi.data.map((e) => ({
//     id: e.cca3,
//     name: e.name.common,
//     img_flag: e.flags.svg,
//     region: e.region,
//     capital: e.capital,
//     subregion: e.subregion,
//     area: e.area,
//     population: e.population,
//     coordinates: e.latlng,
//   }));
//   await Country.bulkCreate(modelCountry);
//   // apiToDb();

//   server.listen(3001, () => {
//     console.log("%s listening at 3001"); // eslint-disable-line no-console
//   });
// });
