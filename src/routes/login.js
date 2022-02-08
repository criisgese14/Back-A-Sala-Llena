const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const { Viewers, Theaters } = require("../db");

router.post("/theater", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const theater = await Theaters.findOne({
    where: {
      email,
    },
  });
  if (theater) {
    if (password === theater.password && email === theater.email) {
      const userForToken = {
        id: theater.id,
        email: theater.email,
      };

      const token = jwt.sign(userForToken, process.env.SECRET);
      console.log(token);
      console.log(theater.password);
      console.log(theater.email);
      res.send({
        password: theater.password,
        email: theater.email,
        token,
      });
    }
  } else {
    res.status(401).send({ error: "usuario o contraseña incorrectas" });
  }
});

router.post("/viewer", async (req, res) => {
  const { email, password } = req.body;

  const viewer = await Viewers.findOne({
    where: {
      email,
    },
  });
  if (viewer) {
    if (password === viewer.password && email === viewer.email) {
      const userForToken = {
        id: viewer.id,
        email: viewer.email,
      };

      const token = jwt.sign(userForToken, process.env.SECRET);
      console.log(token);
      res.send({
        password: viewer.password,
        email: viewer.email,
        token,
      });
    }
  } else {
    res.status(401).send({ error: "usuario o contraseña incorrectas" });
  }
});

module.exports = router;
