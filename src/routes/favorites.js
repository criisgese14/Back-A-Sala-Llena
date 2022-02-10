const { Favorites, Shows, Viewers, Theaters } = require("../db");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const favorites = await Favorites.findAll({
    include: {
      model: Shows,
    },
  });

  res.send(favorites);
});

router.post("/:idViewer", async (req, res) => {
  const { idViewer } = req.params;

  const { nameTheater } = req.body;

  const addFavorites = await Favorites.create(nameTheater);
  console.log(addFavorites);
  const viewer = await Viewers.findOne({
    where: {
      id: idViewer,
    },
    include: {
      model: Shows,
    },
  });

  await viewer.addFavorites(addFavorites);

  res.send(addFavorites);
});

module.exports = router;
