const { Router } = require("express");
const router = Router();

router.get("/", async (req, res, next) => {
  res.send({ message: "Aguante todo!" });
});

module.exports = router;
