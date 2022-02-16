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
  //console.log(req.body);
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
  console.log(req.body)
  const { seatNumber, showId, idViewer } = req.body;
  const allTickets = await Tickets.findAll({
    where: {
      showId: showId,
    }
  })
  const tickets = allTickets.filter( t => seatNumber.find(s => s === t.seatNumber))
  console.log(tickets)
  
  if (idViewer) {
    let viewer = await Viewers.findOne({
      where: {
        id: idViewer,
      },
    });
    viewer.addTickets(tickets);
  }
  let preference = {
    items: [],
    back_urls: {
      success: "https://quizzical-colden-ae9e61.netlify.app",
      failure: "https://quizzical-colden-ae9e61.netlify.app/feedback",
      pending: "https://quizzical-colden-ae9e61.netlify.app/feedback",
    },
    auto_return: "approved",
  };
 
  tickets?.forEach(e => {
    preference.items.push({
      title: e.seatNumber,
      unit_price: e.price,
      quantity: 1
    })
  });
  console.log(preference.items)
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
