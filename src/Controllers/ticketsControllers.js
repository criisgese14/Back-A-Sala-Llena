const { Viewers, Shows, Tickets, Reviews } = require("../db");

const postTickets = async (price, seatNumber, nameShow, nameViewer) => {
  
  try {
    let newTicket = await Tickets.create({
      price,
      seatNumber,
    });
    if(nameShow){
    let show = await Shows.findOne({
      where: {
        name: nameShow,
      },
    });
    show.addTickets(newTicket);
    console.log(show)
  }
    if(nameViewer) {  
    let viewer = await Viewers.findOne({
      where: {
        name: nameViewer,
      },
    });
    viewer.addTickets(newTicket);
  }
    return newTicket;
  } catch (err) {
    console.error(err);
  }
};

const getAllTickets = async () => await Tickets.findAll({
  include: [{
    model: Shows
  },{
    model: Viewers
  }]
});

module.exports = { postTickets, getAllTickets };
