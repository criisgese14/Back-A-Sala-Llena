const { Router } = require("express");
const router = Router();
const { postShows } = require("../Controllers/showsControllers");

router.post("/", async (req, res, next) => {
  const {
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
});

module.exports = router;
