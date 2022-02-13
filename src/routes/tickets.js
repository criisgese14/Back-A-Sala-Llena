const { Router } = require("express");
const { Tickets, Shows, Viewers } = require("../db");
const {
  getAllTickets,
  postTickets,
} = require("../Controllers/ticketsControllers");
const router = Router();

  // SDK de Mercado Pago
  const mercadopago = require("mercadopago");
  // Agrega credenciales
  mercadopago.configure({
    // access_token:"TEST-4897216680136890-020912-428eee3e2c74fb3f30d970976a0166ce-392112530" 
    access_token:"APP_USR-6623451607855904-111502-1f258ab308efb0fb26345a2912a3cfa5-672708410", //poner token
  });

router.get("/", async (req, res, next) => {
  const allTickets = await getAllTickets();
  res.send(allTickets);
});

router.post("/", async (req, res, next) => {
  const { price, seatNumber, nameShow, nameViewer } = req.body;
  console.log(nameShow);
  try {
    const newTicket = await postTickets(
      price,
      seatNumber,
      nameShow,
      nameViewer
    );
    res.send(newTicket);
  } catch (error) {
    console.log(error);
  }
});

router.post("/pay", async (req, res) => {
  const { price, seatNumber, nameShow, idViewer } = req.body;
  //console.log(req.body)
  const ticket = await Tickets.create({
    price: 1000,
    seatNumber: "1-12",
  });

  if (nameShow) {
    let show = await Shows.findOne({
      where: {
        name: nameShow,
      },
    });
    show.addTickets(ticket);
    console.log(show);
  }
  if (idViewer) {
    let viewer = await Viewers.findOne({
      where: {
        id: idViewer,
      },
    });
    viewer.addTickets(ticket);
  }
  //console.log(ticket)
  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
        // title: ticket.seatNumber,
        // unit_price: ticket.price,
        // quantity: 1,
        title: 'Hola',
        unit_price: 1500,
        quantity: 1,
      },
    ],
    back_urls: {
      success: "http://localhost:3000/",
      failure: "http://localhost:3000/feedback",
      pending: "http://localhost:3000/feedback",
    },
    auto_return: "approved",
  };
  const response = await mercadopago.preferences.create(preference);
  console.log(response.body);
  const preferenceId = response.body.sandbox_init_point;
  res.send(preferenceId);
});

router.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

router.put("/:id", async (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  try {
    await Tickets.update(changes, {
      where: {
        id: id,
      },
    });
    res.send("Tickets updated succesfully!");
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Tickets.destroy({
      where: {
        id: id,
      },
    });
    res.send("entrada eliminada");
  } catch (error) {
    console.log;
  }
});

module.exports = router;
