const { Viewers, Shows, Tickets, Reviews } = require("../db");

const postViewersRegistration = async (
  name,
  email,
  password,
  image,
  province
) => {
  try {
    console.log(Viewers)
    let newViewer = await Viewers.create({
      name,
      email,
      password,
      image,
      province,
    });
    console.log(Viewers)
    return newViewer;
  } catch (err) {
    console.error(err);
  }
};

const getAllViewers = async () =>
  await Viewers.findAll({
    include: [{
      model: Tickets,
    }]
  });

const getViewersById = async (id) => {
  try {
    let viewerID = await Viewers.findByPk(id, {
      include: {
        model: Tickets,
      },
    });
    return viewerID;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { postViewersRegistration, getAllViewers, getViewersById };
