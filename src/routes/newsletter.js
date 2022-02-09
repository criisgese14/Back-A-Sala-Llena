const nodemailer = require("nodemailer");
const { Router } = require("express");
const { Viewers, Favorites, Shows } = require("../db");
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

  let allFavorites = await Favorites.findAll({
    include: {
      model: Shows,
    },
  });
  console.log(allViewers);
  allViewers.map((viewers) => {
    allFavorites.map((fav) => {
      let mailOption = {
        from: "A Sala Llena",
        to: `${viewers.email}`,
        subject: "Test",
        // text: `Hola ${el.name} no te pierdas este show en el teatro`,
        html: `<h3>Hola ${viewers.name}</h3> <br/> <h5>No te pierdas <b>"${fav.shows[0].name}"</b> en el teatro ${fav.nameTheater}</h5> <br/>
        <h5>Tenes 24hs para adquirir tus entradas en <b>www.asalallena.com</b></h5> 
        </br> <img  src=${fav.shows[0].image}/> `,

        // attachments: [
        //   {
        //     filename: "image.png",
        //     path: "/path/to/file",
        //     cid: "unique@kreata.ee", //same cid value as in the html img src
        //   },
        // ],
      };

      transporter.sendMail(mailOption, (error, info) => {
        if (error) {
          res.status(500).send(error.message);
        } else {
          res.status(200).json(req.body); //shows <---> province
        }
      });
    });
  });
});

module.exports = router;
