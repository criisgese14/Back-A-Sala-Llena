const nodemailer = require("nodemailer");
const { Router } = require("express");
const router = Router();

router.post("/", async (req, res, next) => {
  // crear ruta de post shows favoritos para enviar al id que matchee ???
  //shows que matcheen con la provincia

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "elena.wuckert95@ethereal.email",
      pass: "R2MdTagJTnnFFazbGQ",
    },
  });

  const mailOption = {
    from: "A Sala Llena",
    to: "fernandonaon@gmail.com", //Viewer.email
    bcc: "elena.wuckert95@ethereal.email",
    subject: "Test",
    text: "Hola mundo",
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(200).json(req.body); //shows <---> province
    }
  });
});

module.exports = router;
