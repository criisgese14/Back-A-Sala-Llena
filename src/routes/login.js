// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
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
      // const userForToken = {
      //   id: theater.id,
      //   email: theater.email,
      // };

      let isLogged = true;
      console.log(`Logeado ${isLogged}`);
      // const token = jwt.sign(userForToken, "123");
      // console.log(token);
      console.log(theater.password);
      console.log(theater.email);
      // res.send({
      //   id: theater.id,
      //   password: theater.password,
      //   email: theater.email,
      //   isTheater: theater.isTheater,
      //   token,
      // });

      res.status(200).json(`Theater logged: ${isLogged}`);
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
      // const userForToken = {
      //   id: viewer.id,
      //   email: viewer.email,
      // };

      let isLogged = true;
      console.log(`Viewer logged ${isLogged}`);

      // const token = jwt.sign(userForToken, "123");
      // console.log(token);
      // res.send({
      //   id: viewer.id,
      //   password: viewer.password,
      //   email: viewer.email,
      //   isViewer: viewer.isViewer,
      //   token,
      // });
      res.status(200).json(`Viewer logged: ${isLogged}`);
    }
  } else {
    res.status(401).send({ error: "usuario o contraseña incorrectas" });
  }
});

module.exports = router;
