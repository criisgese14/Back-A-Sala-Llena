const { Viewers, Shows, Tickets, Reviews } = require("../db");

const postTickets = async (price, seatNumber, nameShow, idViewer) => {
  //console.log(nameShow)
  //console.log('hola')
  try {
    let newTicket = await Tickets.create({
      price,
      seatNumber,
    });
    if(nameShow){
    const show = await Shows.findOne({
      where: {
        name: nameShow,
      },
    });
    await show.addTickets(newTicket);
    //console.log(show)
  }
    if(idViewer) {  
    let viewer = await Viewers.findOne({
      where: {
        id: idViewer,
      },
    });
    await viewer.addTickets(newTicket);
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
