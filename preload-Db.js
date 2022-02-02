const TheatersDb = {
  name: "Teatro Sala Opera",
  CUIT: "20-10000000-0",
  email: "teatro@salaopera.com",
  password: "123456",
  province: "Buenos Aires",
  adress: "Calle 58, 1203, La Plata",
  image:
    "https://www.impulsobaires.com.ar/uploads/noticias/5/20200923123954_coliseo_po.jpg",
  phoneNumber: "4121453",
  seatsQTY: 800,
  score: "4",
};
const ShowsDb = {
  name: "Hamlet",
  genre: "Drama",
  length: "120'",
  image:
    "https://americanplayers.org/assets/images-layout/_1500x500_crop_center-center/Hamlet-Display.jpg",
  summary: "fsdhjfhsdjfksd aldmassd vakdflvdfhjk",
  ticketsQty: 8,
  rated: "PG-13",
  date: "12-8-22",
  time: "21:00",
  score: "4",
};

const ReviewsDb = {
  review: "dnsjkvcbdsahjkvbdsjkvbdsjvas",
  theaterScore: 4,
  showScore: 3,
};

module.exports = { TheatersDb, ShowsDb, ReviewsDb };
