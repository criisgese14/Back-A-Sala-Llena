const { Viewers, Shows, Tickets, Reviews } = require("../db");

const postViewersRegistration = async (
  name,
  email,
  userName,
  password,
  image,
  province
) => {
  try {
    let newViewer = await Viewers.create({
      name,
      email,
      userName,
      password,
      image,
      province,
    });
    return newViewer;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { postViewersRegistration };
