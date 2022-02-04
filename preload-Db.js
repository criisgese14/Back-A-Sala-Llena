const TheatersDb = [
  {
    id: 1,
    name: "Casa Teatro el Altillo del Sur",
    CUIT: "20-10000000-0",
    email: "elaltillodelsur@laplata.com",
    password: "123456",
    province: "Buenos Aires",
    adress: "Calle 1, 1964, La Plata",
    image:
      "https://3.bp.blogspot.com/_C8xKfakStZA/R_TgreWrDiI/AAAAAAAAABA/Vk9M3jTkNWY/s400/P1010810.JPG",
    phoneNumber: "5492219123180",
    seatsQTY: 50,
    score: "3",
  },
  {
    id: 2,
    name: "Teatro Abasto Social Club",
    CUIT: "20-106439040-0",
    email: "abastosocialclib@teatro.com",
    password: "123456",
    province: "CABA",
    adress: "Yatay 666 Ciudad de Buenos Aires",
    image:
      "https://s3-sa-east-1.amazonaws.com/zibilia/lugares/cover/950x/381.jpg?1404833002",
    phoneNumber: "5493514331670",
    seatsQTY: 60,
    score: "5",
  },
  {
    id: 3,
    name: "Caja Magica, Centro de Artes Escenicas",
    CUIT: "12-1334400-1",
    email: "caja-magica@teatro.com",
    password: "123456",
    province: "Rio Negro",
    adress: "Roca, 381. Rio Negro",
    image:
      "https://2.bp.blogspot.com/_Zxf8XATiwe8/TGri7qID_VI/AAAAAAAAAXk/1lodxTcqjbc/s1600/caja+frente.jpg",
    phoneNumber: "+54929995119",
    seatsQTY: 60,
    score: "1",
  },
  {
    id: 4,
    name: "Teatro Buenas Artes Social Club",
    CUIT: "11-3305401-1",
    email: "buenasartes@socialclub.com",
    password: "123456",
    province: "CABA",
    adress: "Guatemala 4484. Ciudad Autonoma de Buenos Aires",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/IPxcyEyzmrVD0FtV0s1p7Q/l.jpg",
    phoneNumber: "+541143815498",
    seatsQTY: 50,
    score: "2",
  },
];
const ShowsDb = [
  {
    name: "Las penas saben nadar",
    genre: "Drama",
    length: "80 min",
    image:
      "https://www.revistagodot.com/wp-content/uploads/2021/10/Las_penas_saben_nadar_Godot_cartel.jpg",
    summary:
      "Las penas saben nadar es una obra que te ofrece un retrato agridulce de la vida y del mundo de la interpretación.Dentro del marco de un Festival de Monólogos, Greta, como le llaman algunos compañeros de trabajo, sale a escena sin previo aviso. Una vez allí, y con el pretexto siempre truncado de interpretar La voz humana, comienza a confesar, entre tragos, pedazos de la historia de su vida: la experiencia con diversos directores, actrices y actores; el recuerdo del entorno familiar y escolar; la añoranza por el distanciamiento de una hija a la que no ve hace años; las frustraciones amorosas; los deseos incumplidos; los sueños por realizar. Todo se devela sobre un círculo de profunda soledad, en medio de una vorágine de sentimientos, pero pleno ante la entereza de una mujer que ha dedicado gran parte de su existencia al muchas veces ingrato arte de la interpretación.",
    ticketsQty: 8,
    rated: "Todas las edades",
    date: "12-08-22",
    time: "21:00",
    score: "4",
    theaterId: 1,
  },
  {
    name: "Dos Mujeres",
    genre: "Comedia",
    length: "45 min",
    image:
      "https://www.teatroateatro.com/wp-content/uploads/2019/02/Dos-mujeres.jpg",
    summary:
      "Transcurre una noche en el dto que comparten alejandra (Soledad Gonzalez) y clara (laura raiteri) en la cual esperan la llegada de German, un desconocido a quien han citado mediante un aviso de una revista. la tensa espera hace aflorar sentimientos y personalidades que subyacen en estas dos mujeres sumiodas en una tremenda rutina aplastadora. se juega una relacion indefinida entre las dos mujeres que...escalando los limites del nerviosismo y sus miserias internas mostraran su verdadera cara.",
    ticketsQty: 8,
    rated: "Apta para mayores de 13 años",
    date: "10-04-22",
    time: "22:00",
    score: "3",
    theaterId: 3,
  },
  {
    name: "Amame",
    genre: "Monologo",
    length: "120'",
    image: "https://storage.lacapitalmdp.com/2018/12/AMAME-2.jpg",
    summary:
      "Una mujer deambula dentro de un mundo insomne. Nada parece cierto, las cosas se distancian. Todo parece una copia de una copia, de otra copia.",
    ticketsQty: 10,
    rated: "Apta para mayores de 16 años",
    date: "12-8-22",
    time: "21:00",
    score: "5",
    theaterId: 2,
  },
  {
    name: "Viajeros de toda Sinrazón",
    genre: "Drama",
    length: "90 min'",
    image:
      "https://storage.lacapitalmdp.com/2019/08/Viajeros-de-toda-sinrazon-1024x683.jpg",
    summary:
      "Será en Cuatro Elementos, en una puesta que busca que el público experimente la distancia de la acción. La obra traduce la atmósfera de la poesía de Santoro, un poeta desaparecido en 1977.",
    ticketsQty: 8,
    rated: "Apta para mayores de 16 años",
    date: "12-8-22",
    time: "21:00",
    score: "1",
    theaterId: 4,
  },
  {
    name: "Ensayo sobre el miedo",
    genre: "Drama",
    length: "120'",
    image:
      "https://vivo.perfil.com/storage/uploads/shows/poster/175ba592d28e713b6fc33883c44967a0.jpg",
    summary:
      "Distopía grotesca sobre el fin del mundo. el mundo fue destruido por una epidemia de miedos. En un precario refugio, un grupo de sobrevivientes resiste y se debate en cavilaciones sobre qué hacer.",
    ticketsQty: 10,
    rated: "Apta para mayores de 16 años",
    date: "22-04-22",
    time: "22:00",
    score: "3",
    theaterId: 3,
  },
];

const ReviewsDb = [
  {
    review: "dnsjkvcbdsahjkvbdsjkvbdsjvas",
    theaterScore: "4",
    showScore: "3",
  },
  { review: "dsadjasncjdks", theaterScore: "2", showScore: "1" },
  { review: "dnsjkvcbdsahjkvbdss", theaterScore: "4", showScore: "2" },
];

module.exports = { TheatersDb, ShowsDb, ReviewsDb };
