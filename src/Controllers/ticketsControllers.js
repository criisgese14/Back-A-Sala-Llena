const { Viewers, Shows, Tickets, Reviews } = require("../db");

const postTickets = async (price, seatNumber, nameShow, nameViewer) => {
  try {
    let newTicket = await Tickets.create({
      price,
      seatNumber,
    });
    let show = await Shows.findOne({
      where: {
        name: nameShow,
      },
    });
    let viewer = await Viewers.findOne({
      where: {
        name: nameViewer,
      },
    });
    show.addTickets(newTicket);
    viewer.addTickets(newTicket);
    return newTicket;
  } catch (err) {
    console.error(err);
  }
};

const getAllTickets = async () => await Tickets.findAll({
  include: {
    model: Shows
  }
});

module.exports = { postTickets, getAllTickets };
