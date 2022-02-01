const { Router } = require("express");
const router = Router();
const {
  postTheatersRegistration,
} = require("../Controllers/theatersControllers");

router.post("/", async (req, res, next) => {
  const {
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
  } = req.body;
  try {
    const addTheater = await postTheatersRegistration(
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
  } catch (err) {
    next(err);
  }
});

module.exports = router;
