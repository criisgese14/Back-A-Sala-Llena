const { Router } = require("express");
const router = Router();
const {
  postViewersRegistration,
} = require("../Controllers/viewersControllers");

router.post("/", async (req, res, next) => {
  const { name, email, userName, password, image, province } = req.body;
  try {
    const addViewer = await postViewersRegistration(
      name,
      email,
      userName,
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

module.exports = router;
