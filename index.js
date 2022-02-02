const server = require("./src/app.js");
const { conn, Theaters, Shows, Reviews } = require("./src/db.js");
const { TheatersDb, ShowsDb, ReviewsDb } = require("./preload-Db");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    try {
      Shows.create({
        name: ShowsDb.name,
        genre: ShowsDb.genre,
        length: ShowsDb.length,
        image: ShowsDb.image,
        summary: ShowsDb.summary,
        ticketsQty: ShowsDb.ticketsQty,
        rated: ShowsDb.rated,
        date: ShowsDb.date,
        time: ShowsDb.time,
        score: ShowsDb.score,
      });
      Theaters.create({
        name: TheatersDb.name,
        CUIT: TheatersDb.CUIT,
        email: TheatersDb.email,
        password: TheatersDb.password,
        province: TheatersDb.province,
        adress: TheatersDb.adress,
        image: TheatersDb.image,
        phoneNumber: TheatersDb.phoneNumber,
        seatsQTY: TheatersDb.seatsQTY,
        score: TheatersDb.score,
      });

      Reviews.create({
        review: ReviewsDb.review,
        theaterScore: ReviewsDb.theaterScore,
        showScore: ReviewsDb.showScore,
      });
    } catch (err) {
      console.error(err);
    }
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
