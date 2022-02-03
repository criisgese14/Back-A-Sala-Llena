const server = require("./src/app.js");
const { conn, Theaters, Shows, Reviews } = require("./src/db.js");
const { TheatersDb, ShowsDb, ReviewsDb } = require("./preload-Db");

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  try {
    TheatersDb.forEach((el) => {
      Theaters.findOrCreate({
        where: {
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
        },
      });
    });
  } catch (err) {
    console.error(err);
  }

  try {
    ShowsDb.forEach((el) => {
      Shows.findOrCreate({
        where: {
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
        },
      });
    });
  } catch (err) {
    console.error(err);
  }

  try {
    ReviewsDb.forEach((el) => {
      Reviews.findOrCreate({
        where: {
          review: el.review,
          theaterScore: el.theaterScore,
          showScore: el.showScore,
        },
      });
    });
  } catch (err) {
    console.error(err);
  }

  server.listen(3001, () => {
    console.log("%s listening at 3001 - Data base loaded."); // eslint-disable-line no-console
  });
});
