const nodemailer = require("nodemailer");
const { Router } = require("express");
const { Viewers, Favorites } = require("../db");
const router = Router();

router.post("/", async (req, res, next) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "elena.wuckert95@ethereal.email",
      pass: "R2MdTagJTnnFFazbGQ",
    },
  });
  //if viewer subscribed && viewer tiene favorite -- cuando hay post de Shows de Theater   --> newsletter / else-> newsletter - teatros de tu provincia
  // dispatch desde el front una action que sea el post newsletter
  // en el front put viewer actualizaria el isSusbcribed a true

  let allViewers = await Viewers.findAll({
    where: {
      isSubscribed: true,
    },
    include: {
      model: Favorites,
    },
  });
  console.log(allViewers);
  allViewers.map((el) => {
    let mailOption = {
      from: "A Sala Llena",
      to: `${el.email}`,
      subject: "Test",
      text: `Hola ${el.name} no te pierdas este show en el teatro`,
    };
    console.log(el.name);
    transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        res.status(500).send(error.message);
      } else {
        res.status(200).json(req.body); //shows <---> province
      }
    });
  });
});

module.exports = router;
