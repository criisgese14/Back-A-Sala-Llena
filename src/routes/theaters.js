const { Router } = require("express");
const router = Router();
const { Theaters } = require("../db");

const {
  postTheatersRegistration,
  getAllTheaters,
  getTheater
} = require("../Controllers/theatersControllers");

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

<<<<<<< HEAD
router.get("/:id", async (req, res) => {
  const {id} = req.params
  console.log(id)
  try {
    const detailTheater = await getTheater(id);
    res.send(detailTheater)
  } catch (error) {
    console.log(error)
  }
})

router.put("/:id", async (req, res) => {
  const datos = req.body
  const {id} = req.params
  try {
    await Theaters.update(datos, {
      where: {
        id: id
      }
    })
    res.send("Teatro actualizado con éxito")
  } catch (error) {
    console.log(error)
  }
})

router.delete("/:id", async (req, res) => {
  const {id} = req.params;
  try {
    await Theaters.destroy({
      where: {
        id: id
      }
    })
    res.send("Teatro eliminado con éxito")
  } catch (error) {
    console.log(error)
  }
})
=======
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
>>>>>>> e40ede5be898c2b9e01f6cadf54f9902805f3d6d

module.exports = router;
