const { Router } = require("express");
const router = Router();
const { postShows, getAllShows } = require("../Controllers/showsControllers");
const { Shows } = require("../db");

router.post("/", async (req, res, next) => {
  const {
    theaterId,
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
      theaterId,
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

router.get("/", async (req, res, next) => {
  try {
    const getShows = await getAllShows();
    getShows ? res.status(200).json(getShows) : res.status(404).send("Error");
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  try {
    await Shows.update(changes, {
      where: {
        id: id,
      },
    });
    res.send("Show updated succesfuly!");
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Shows.destroy({
      where: {
        id: id,
      },
    });
    res.send("Show deleted succesfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
