const { Router } = require("express");
const router = Router();
const { Theaters } = require("../db");

const {
  postTheatersRegistration,
  getAllTheaters,
} = require("../Controllers/theatersControllers");
const { Query } = require("pg");

router.post("/", async (req, res, next) => {
  const {
    name,
    CUIT,
    email,
    password,
    province,
    adress,
    image,
    phoneNumber,
    seatsQTY,
    score,
  } = req.body;
  try {
    const addTheater = await postTheatersRegistration(
      name,
      CUIT,
      email,
      password,
      province,
      adress,
      image,
      phoneNumber,
      seatsQTY,
      score
    );
    postTheatersRegistration
      ? res.status(200).json(addTheater)
      : res.status(404).send("Error");
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const getTheaters = await getAllTheaters();

    getTheaters
      ? res.status(200).json(getTheaters)
      : res.status(404).send("Error");
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const changes = req.body;
    console.log(changes);
    const { id } = req.params;

    const updateTheater = await Theaters.update(changes, {
      where: {
        id: id,
      },
    });
    console.log(updateTheater);
    res.send("Datos Actualizados");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
