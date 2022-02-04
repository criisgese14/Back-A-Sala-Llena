const { Router } = require("express");
const router = Router();
const {
  postViewersRegistration,
  getAllViewers,
} = require("../Controllers/viewersControllers");
const Viewers = require("../db");

router.post("/", async (req, res, next) => {
  const { name, email, password, image, province } = req.body;
  try {
    const addViewer = await postViewersRegistration(
      name,
      email,
      password,
      image,
      province
    );
    postViewersRegistration
      ? res.status(200).json(addViewer)
      : res.status(404).send("Error");
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  const allViewers = await getAllViewers();
  res.send(allViewers);
});

router.put("/:id", async (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  try {
    await Viewers.update(changes, {
      where: {
        id: id,
      },
    });
    res.send("Viewer updated succesfully!");
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Viewers.destroy({
      where: {
        id: id,
      },
    });
    res.send("Viewer deleted succesfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
