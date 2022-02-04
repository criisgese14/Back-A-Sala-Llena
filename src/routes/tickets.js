const { Router } = require("express");
const { Tickets } = require("../db")
const {
  getAllTickets,
  postTickets,
} = require("../Controllers/ticketsControllers");
const router = Router();

router.get("/", async (req, res, next) => {
  const allTickets = await getAllTickets();
  res.send(allTickets);
});

router.post("/", async (req, res, next) => {
  const { price, seatNumber, nameShow, nameViewer } = req.body;
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

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await Tickets.destroy({
      where: {
        id: id
      }
    })
    res.send('entrada eliminada')  
  } catch (error) {
    console.log
  }
})


module.exports = router;
