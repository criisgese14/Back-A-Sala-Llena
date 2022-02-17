const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { Viewers, Theaters } = require("../db");
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID)

const users = [];

function upsert(array, item) {
  const i = array.findIndex(el => el.item === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

router.post('/google', async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { email } = ticket.getPayload();
  //console.log(ticket.getPayload());
  //upsert(users, { name, email, picture })
  const user = await Viewers.findOne({
    where:{
      email,
    }
  })
  if (!user) {
    const theater = await Theaters.findOne({
      where: {
        email
      }
    })
    theater ? res.status(201).send({ id: theater.id, token }) : res.status(401).send({ error: "usuario o contraseña incorrectas"})
  }
  res.status(201).send({ id: user.id, token })

})

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
      const token = jwt.sign(userForToken, "123");
      console.log(token);
      console.log(theater.password);
      console.log(theater.email);
      res.send({
        id: theater.id,
        password: theater.password,
        email: theater.email,
        isTheater: theater.isTheater,
        token,
      });

      res.status(200).json({ isLogged });
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
      const token = jwt.sign(userForToken, "123");
      console.log(token);
      res.send({
        id: viewer.id,
        password: viewer.password,
        email: viewer.email,
        isViewer: viewer.isViewer,
        token,
      });
      res.status(200).json(`Viewer logged: ${isLogged}`);
    }
  } else {
    res.status(401).send({ error: "usuario o contraseña incorrectas" });
  }
});

module.exports = router;
