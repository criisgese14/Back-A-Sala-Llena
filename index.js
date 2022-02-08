const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {
  loadTheaters,
  loadShows,
  loadReviews,
  loadViewers,
  loadTickets,
} = require("./preload-Db");

// Syncing all the models at once.
conn.sync({ force: false }).then(async() => {
  loadViewers();
  loadTheaters();
  loadShows();
  loadReviews();
  loadTickets();

  server.listen(3001, () => {
    console.log("%s listening at 3001 - Data base loaded."); // eslint-disable-line no-console
  });
});
