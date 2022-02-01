const { Router } = require("express");
const router = Router();
const {
  postTheaterRegistration,
} = require("../Controllers/theatersController");

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
    const addTheater = await postTheaterRegistration(
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
    postTheaterRegistration
      ? res.status(200).json(addTheater)
      : res.status(400).send("Error");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
