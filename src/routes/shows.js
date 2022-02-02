const { Router } = require("express");
const router = Router();
const { postShows, getAllShows } = require("../Controllers/showsControllers");

router.post("/", async (req, res, next) => {
  const {
    CUIT,
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
  } = req.body;
  try {
    const addShow = await postShows(
      CUIT,
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
    );
    postShows ? res.status(200).json(addShow) : res.status(404).send("Error");
  } catch (err) {
    next(err);
  }

  router.get("/", async (req, res) => {
    try {
      const getShows = await getAllShows();
      res.send(getShows);
    } catch (err) {
      console.log(err);
    }
  });
});

module.exports = router;
