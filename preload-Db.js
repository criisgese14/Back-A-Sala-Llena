const {
  Theaters,
  Shows,
  Reviews,
  Viewers,
  Tickets,
  Favorites,
  FavoritesViewers,
} = require("./src/db.js");

const loadViewers = () => {
  const ViewersDb = [
    {
      name: "Pepe",
      email: "pepe@pepe.com",
      password: "pepepe",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Buenos Aires",
      isSubscribed: true,
    },
    {
      name: "Tita",
      email: "tita@tita.com",
      password: "titatita",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Cordoba",
      isSubscribed: false,
    },
    {
      name: "Tito",
      email: "tito@tito.com",
      password: "titotito",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "CABA",
      isSubscribed: false,
    },
    {
      name: "Pedro",
      email: "pedro@pedro.com",
      password: "pedropedro",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Santa Fe",
      isSubscribed: false,
    },
    {
      name: "Mati",
      email: "mati@mati.com",
      password: "matimati",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Catamarca",
      isSubscribed: false,
    },
    {
      name: "Marta",
      email: "marta@marta.com",
      password: "martamarta",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Chaco",
      isSubscribed: false,
    },
    {
      name: "Pepita",
      email: "pepita@pepita.com",
      password: "pepitapepita",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Chubut",
      isSubscribed: false,
    },
    {
      name: "Juana",
      email: "juana@juana.com",
      password: "juanajuana",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Corrientes",
      isSubscribed: false,
    },
    {
      name: "Leo",
      email: "leo@leo.com",
      password: "leoleo",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Entre Rios",
      isSubscribed: false,
    },
    {
      name: "Maria",
      email: "maria@maria.com",
      password: "mariamaria",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Formosa",
      isSubscribed: false,
    },
    {
      name: "Manu",
      email: "manu@manu.com",
      password: "manumanu",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Jujuy",
      isSubscribed: false,
    },
    {
      name: "Fede",
      email: "fede@fede.com",
      password: "fedefede",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "La Pampa",
      isSubscribed: false,
    },
    {
      name: "Franco",
      email: "franco@franco.com",
      password: "francofranco",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "La Rioja",
      isSubscribed: false,
    },
    {
      name: "Martu",
      email: "martu@martu.com",
      password: "martumartu",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Mendoza",
      isSubscribed: false,
    },
    {
      name: "Eze",
      email: "eze@eze.com",
      password: "ezeeze",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Misiones",
      isSubscribed: false,
    },
    {
      name: "Teo",
      email: "teo@teo.com",
      password: "teoteo",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Neuquen",
      isSubscribed: false,
    },
    {
      name: "Maxi",
      email: "maxi@maxi.com",
      password: "maximaxi",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Rio Negro",
      isSubscribed: false,
    },
    {
      name: "Fer",
      email: "fer@fer.com",
      password: "ferfer",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Salta",
      isSubscribed: false,
    },
    {
      name: "Cami",
      email: "cami@cami.com",
      password: "camicami",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "San Juan",
      isSubscribed: false,
    },
    {
      name: "Lau",
      email: "lau@lau.com",
      password: "laulau",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "San Luis",
      isSubscribed: false,
    },
    {
      name: "Valen",
      email: "valen@valen.com",
      password: "valenvalen",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Santa Cruz",
      isSubscribed: false,
    },
    {
      name: "Tomi",
      email: "tomi@tomi.com",
      password: "tomitomi",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Santiago del Estero",
      isSubscribed: false,
    },
    {
      name: "Lara",
      email: "lara@lara.com",
      password: "laralara",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Tierra del Fuego",
      isSubscribed: false,
    },
    {
      name: "Juan",
      email: "juan@juan.com",
      password: "juanjuan",
      image:
        "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
      province: "Tucuman",
      isSubscribed: false,
    },
  ];
  try {
    ViewersDb.forEach(async (el) => {
      await Viewers.findOrCreate({
        where: {
          name: el.name,
          email: el.email,
          password: el.password,
          image: el.image,
          province: el.province,
          isSubscribed: el.isSubscribed,
        },
      });
    });
  } catch (error) {
    console.error(error);
  }
};
const loadFavorites = () => {
  const favoritesDb = [
    {
      nameTheater: "Casa Teatro el Altillo del Sur",
    },
    {
      nameTheater: "Teatro Abasto Social Club",
    },
    {
      nameTheater: "Caja Magica, Centro de Artes Escenicas",
    },
    {
      nameTheater: "Teatro Buenas Artes Social Club",
    },
  ];
  try {
    favoritesDb.forEach(async (el) => {
      await Favorites.findOrCreate({
        where: {
          nameTheater: el.nameTheater,
        },
      });
    });
  } catch (error) {
    console.error(error);
  }
};
const loadFavoriteViewers = () => {
  const FavoritesViewersDb = [
    {
      viewerId: 1,
      FavoriteId: 1,
    },
    {
      viewerId: 2,
      FavoriteId: 3,
    },
    {
      viewerId: 3,
      FavoriteId: 2,
    },
    {
      viewerId: 1,
      FavoriteId: 4,
    },
  ];
  try {
    FavoritesViewersDb.forEach(async (el) => {
      await FavoritesViewers.findOrCreate({
        where: {
          viewerId: el.viewerId,
          FavoriteId: el.FavoriteId,
        },
      });
    });
  } catch (error) {
    console.error(error);
  }
};

const loadTheaters = () => {
  const TheatersDb = [
    {
      name: "Casa Teatro el Altillo del Sur",
      CUIT: "20-10000000-0",
      email: "elaltillodelsur@laplata.com",
      password: "123456",
      province: "Buenos Aires",
      adress: "Calle 1, 1964, La Plata",
      image:
        "https://3.bp.blogspot.com/_C8xKfakStZA/R_TgreWrDiI/AAAAAAAAABA/Vk9M3jTkNWY/s400/P1010810.JPG",
      phoneNumber: "5492219123180",
      seatsQTY: 80,
      score: "3",
    },
    {
      name: "Teatro Abasto Social Club",
      CUIT: "20-106439040-0",
      email: "abastosocialclib@teatro.com",
      password: "123456",
      province: "CABA",
      adress: "Yatay 666 Ciudad de Buenos Aires",
      image:
        "https://s3-sa-east-1.amazonaws.com/zibilia/lugares/cover/950x/381.jpg?1404833002",
      phoneNumber: "5493514331670",
      seatsQTY: 80,
      score: "5",
    },
    {
      name: "Caja Magica, Centro de Artes Escenicas",
      CUIT: "12-1334400-1",
      email: "caja-magica@teatro.com",
      password: "123456",
      province: "Rio Negro",
      adress: "Roca, 381. Rio Negro",
      image:
        "https://2.bp.blogspot.com/_Zxf8XATiwe8/TGri7qID_VI/AAAAAAAAAXk/1lodxTcqjbc/s1600/caja+frente.jpg",
      phoneNumber: "+54929995119",
      seatsQTY: 80,
      score: "1",
    },
    {
      name: "Teatro Buenas Artes Social Club",
      CUIT: "11-3305401-1",
      email: "buenasartes@socialclub.com",
      password: "123456",
      province: "CABA",
      adress: "Guatemala 4484. Ciudad Autonoma de Buenos Aires",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/IPxcyEyzmrVD0FtV0s1p7Q/l.jpg",
      phoneNumber: "+541143815498",
      seatsQTY: 80,
      score: "2",
    },
    {
      name: "Cine Teatro Catamarca",
      CUIT: "35-43829432-5",
      email: "jmjmartin36@gmail.com",
      password: "123456",
      province: "Catamarca",
      adress: "San Martín 515 (San Fernando del Valle de Catamarca, Capital (Catamarca))",
      image:
        "http://occidentes.com.ar/imgs/lugares/cine-teatro-catamarca.jpg",
      phoneNumber: "3834439129",
      seatsQTY: 80,
      score: "3",
    },
        // {
    //   name: "Teatro Urbano Girardi",
    //   CUIT: "28-34576314-4",
    //   email: "urbanoGirardi@gmail.com",
    //   password: "123456",
    //   province: "Catamarca",
    //   adress: "Av. Enrique Ocampo 58 (San Fernando del Valle de Catamarca, Capital (Catamarca))",
    //   image:
    //     "https://scontent.flpg1-1.fna.fbcdn.net/v/t1.18169-9/13494918_2063028313923206_7893968729301596041_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=zx3o_E9ktb4AX_linBf&_nc_ht=scontent.flpg1-1.fna&oh=00_AT8g_lJuE5fwODtyVn4tr9tDrZcyAzJbM4hai_JHCjZ5rQ&oe=622AE8CE",
    //   phoneNumber: "3834437420",
    //   seatsQTY: 500,
    //   score: "3",
    // },
    {
      name: "Centro Cultural Alternativo CECUAL",
      CUIT: "20-40328439-4",
      email: "prensacecual@gmail.com",
      password: "123456",
      province: "Chaco",
      adress: "Santa Maria de Oro 471 - CP 3500 (Resistencia, San Fernando (Chaco))",
      image:
        "http://agenciafoco.com.ar/media/cache/resolve/quality/uploads/noticias/5f875e3f5fdcb725903996.jpg",
      phoneNumber: "3624452165",
      seatsQTY: 80,
      score: "4",
    },
    // {
    //   name: "Sala 88",
    //   CUIT: "21-25307531-6",
    //   email: "sala88@arnet.com.ar",
    //   password: "123456",
    //   province: "Chaco",
    //   adress: "French 845 - CP 3500 (Resistencia, San Fernando (Chaco))",
    //   image:
    //     "https://www.diarionorte.com/content/bucket/7/253497w335h600.jpg",
    //   phoneNumber: "3624445570",
    //   seatsQTY: 300,
    //   score: "2",
    // },
        {
      name: "Teatro de la Rosada",
      CUIT: "24-20432981-3",
      email: "elteatrodelarosada@hotmail.com",
      password: "123456",
      province: "Chubut",
      adress: "Paulina Escardo 187 - CP 9120 (Puerto Madryn, Biedma (Chubut))",
      image:
        "https://m.facebook.com/263974936973711/photos/a.503167669721102/2450420338329149/?type=3&source=44",
      phoneNumber: "02804472073",
      seatsQTY: 80,
      score: "4",
    },
        // {
    //   name: "Teatro Astra",
    //   CUIT: "22-28343290-9",
    //   email: "hola@labibliotecadeastra.com",
    //   password: "123456",
    //   province: "Chubut",
    //   adress: "Simeon Savino 1120 - CP 9000 (Comodoro Rivadavia, Escalante (Chubut))",
    //   image:
    //     "https://adnsur-assets.tadevel-cdn.com/5c7d3d30d21b0e48c95d8812/image.jpg",
    //   phoneNumber: "2974865057",
    //   seatsQTY: 300,
    //   score: "5",
    // },
        {
      name: "Teatro de la Ciudad",
      CUIT: "24-35932589-6",
      email: "teatro_delaciudad@hotmail.com",
      password: "123456",
      province: "Corrientes",
      adress: "Pasaje Villanueva 1470 - Piso PB - CP 3400 (Corrientes, Capital (Corrientes))",
      image:
        "https://infodelnea.com.ar/wp/wp-content/uploads/2021/09/teatrode-la-ciudad.jpg",
      phoneNumber: "3794452187",
      seatsQTY: 80,
      score: "3",
    },
        // {
    //   name: "Teatro Juan de Vera",
    //   CUIT: "27-37432059-3",
    //   email: "teatrovera@gmail.com",
    //   password: "123456",
    //   province: "Corrientes",
    //   adress: "San Juan 637 - Piso PB - CP 3400 (Corrientes, Capital (Corrientes))",
    //   image:
    //     "https://pxc.cdn.ellitoral.com.ar/litoral/082020/1598474428618.jpg",
    //   phoneNumber: "379427743",
    //   seatsQTY: 700,
    //   score: "4",
    // },
        {
      name: "Teatro San Martín",
      CUIT: "25-38419290-9",
      email: "libertador.consultas@gmail.com",
      password: "123456",
      province: "Cordoba",
      adress: "Av. Velez Sarsfield 365 - CP 5000 (Cordoba, Capital (Córdoba))",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Finfosierras.com%2Fcordoba-128-aniversario-del-teatro-del-libertador-san-martin%2F&psig=AOvVaw27xeUn4uBvH0Z17lO4fScu&ust=1644610152873000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiv8rL49fUCFQAAAAAdAAAAABAD",
      phoneNumber: "3514332312",
      seatsQTY: 80,
      score: "5",
    },    
        // {
    //   name: "Teatro Griego",
    //   CUIT: "25-27890134-8",
    //   email: "areateatromunicipal@gmail.com",
    //   password: "123456",
    //   province: "Cordoba",
    //   adress: "Av. Deodoro Roca y Gobernador Julio A Roca (Parque Sarmiento) - CP 5000 (Cordoba, Capital (Córdoba))",
    //   image:
    //     "http://hipermedula.org/wp-content/uploads/2019/03/Festival_Griego_Mujeres_2019.jpg",
    //   phoneNumber: "3515376191",
    //   seatsQTY: 2000,
    //   score: "4",
    // },
        {
      name: "Teatro Italia Gualeguay",
      CUIT: "27-39209432-5",
      email: "teatroitaliagualeguay@gmail.com",
      password: "123456",
      province: "Entre Rios",
      adress: "Islas Malvinas 131 - CP 2840 (Gualeguay, Gualeguay (Entre Ríos))",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMaj5c6EUHxaYBrkzVPGh2rPhHoSvS5L6hOLOEo=s1600-w400",
      phoneNumber: "42669426698",
      seatsQTY: 80,
      score: "3",
    },
        // {
    //   name: "Teatro 3 de Febrero",
    //   CUIT: "32-30278431-4",
    //   email: "teatromunicipalparana@hotmail.com",
    //   password: "123456",
    //   province: "Entre Rios",
    //   adress: "25 de Junio 54 - CP 3100 (Parana, Parana (Entre Ríos))",
    //   image:
    //     "https://upload.wikimedia.org/wikipedia/commons/b/be/Teatro_3_de_Febrero_-_Parana_Entre_Rios_Argentina_-_Foto_07.jpg",
    //   phoneNumber: "3434235701",
    //   seatsQTY: 800,
    //   score: "2",
    // },
        {
      name: "La Mandinga Espacio Cultural",
      CUIT: "25-36721894-2",
      email: "murgalamandinga@hotmail.com",
      password: "123456",
      province: "Formosa",
      adress: "Dean Funes 35 - CP 3600 (Formosa, Formosa (Formosa))",
      image:
        "https://www.lamañanaonline.com.ar/media/fotos/menu_20210820135630.jpg",
      phoneNumber: "0370 44245087",
      seatsQTY: 80,
      score: "4",
    },
        // {
    //   name: "Teatro de la Ciudad",
    //   CUIT: "37-38421905-8",
    //   email: "teatrodelaciudad@hotmail.com",
    //   password: "123456",
    //   province: "Formosa",
    //   adress: "Av. 9 de Julio y España - CP 3600 (Formosa, Formosa (Formosa))",
    //   image:
    //     "https://1.bp.blogspot.com/-RiatqJ52460/XRPi-pATYqI/AAAAAAABeuY/3c5wkbrNUuY4i4ApTidTN8q4AHYjYdnqwCLcBGAs/w1200-h630-p-k-no-nu/4_Formosa_Bellas_Artes_y_Teatro_de_la_Ciudad.jpg",
    //   phoneNumber: "3717496056",
    //   seatsQTY: 350,
    //   score: "2",
    // },
        {
      name: "Teatro Sociedad Española",
      CUIT: "24-35489120-5",
      email: "socespjujuy@hotmail.com",
      password: "123456",
      province: "Jujuy",
      adress: "Gral. Belgrano 110 - CP 4600 (San Salvador de Jujuy, Dr. Manuel Belgrano (Jujuy))",
      image:
        "https://us.cdn.eltribuno.com/082015/1487088849481.jpg?cw=600&ch=365",
      phoneNumber: "3884235128",
      seatsQTY: 80,
      score: "5",
    },
        // {
    //   name: "Teatro Mitre",
    //   CUIT: "20-29542892-5",
    //   email: "prensamitrejujuy@gmail.com",
    //   password: "123456",
    //   province: "Jujuy",
    //   adress: "Gral. Alvear 1009 - CP 4600 (San Salvador de Jujuy, Dr. Manuel Belgrano (Jujuy))",
    //   image:
    //     "https://jujuyonlinenoticias.com.ar/wp-content/uploads/2020/10/Teatro-Mitre-960x637.jpg",
    //   phoneNumber: "3884144919",
    //   seatsQTY: 500,
    //   score: "5",
    // },
        {
      name: "Teatro A.T.T.P. (Asoc. Trab. Tro Pampeano)",
      CUIT: "15-28432904-2",
      email: "teatroattp@gmail.com",
      password: "123456",
      province: "La Pampa",
      adress: "Bolivia 1286 - CP 6300 (Santa Rosa, Capital (La Pampa))",
      image:
        "http://photos.wikimapia.org/p/00/06/61/12/80_big.jpg",
      phoneNumber: "2954419306",
      seatsQTY: 80,
      score: "1",
    },
        // {
    //   name: "Teatro Español",
    //   CUIT: "21-20431894-7",
    //   email: "murgalamandinga@hotmail.com",
    //   password: "123456",
    //   province: "La Pampa",
    //   adress: "Hilario Lagos 44 - CP 6300 (Santa Rosa, Capital (La Pampa))",
    //   image:
    //     "https://www.santarosa.gob.ar/storage/2018/01/09.01.2017-teatro.jpg",
    //   phoneNumber: "2954455325",
    //   seatsQTY: 120,
    //   score: "3",
    // },
        {
      name: "Teatro Víctor María Caceres",
      CUIT: "16-24893290-1", 
      email: "teatrovictormariacaceres@gmail.com",
      password: "123456", 
      province: "La Rioja",
      adress: "Av. Ortiz de Ocampo 1700 - CP 5300 ",
      image:
        "https://www.elindependiente.com.ar/elindependiente/1.0/img/714728086.jpg",
      phoneNumber: "3804468530",
      seatsQTY: 80,
      score: "4",
    },
        // {
    //   name: "Espacio 73",
    //   CUIT: "18-28439217-4",
    //   email: "espacio_73@gmail.com",
    //   password: "123456",
    //   province: "La Rioja",
    //   adress: "Catamarca 73 - CP 5300",
    //   image: 
    //     "https://cdn-sp.radionacional.com.ar/wp-content/uploads/2017/05/Espacio-73.jpg",
    //   phoneNumber: "3804468432",
    //   seatsQTY: 250,
    //   score: "2"
    // },
        {
      name: "Teatro Independencia",
      CUIT: "20-23589320-2",
      email: "teatroindependencia@mendoza.gov.ar",
      password: "123456",
      province: "Mendoza",
      adress: "Chile 1754 - CP 5500 (Mendoza, Capital (Mendoza)",
      image: 
        "https://www.mendozadenoche.com.ar/wp-content/uploads/2016/07/Independencia1.jpg",
      phoneNumber: "2614380644",
      seatsQTY: 	80,
      score: "4"
    },
        // {
    //   name: "Teatro Leonardo Favio",
    //   CUIT: "25-35892431-6"
    //   email: "teatrochacras@gmail.com",
    //   password: "123456",
    //   province: "Mendoza",
    //   adress: "Viamonte 5453 - CP 5505 (Lujan de Cuyo, Lujan de Cuyo (Mendoza)",
    //   image: 
    //     "http://www.correveidile.com.ar/uploads/el-teatro-leonardo-favio.jpeg",
    //   phoneNumber: "2615546591",
    //   seatsQTY: 250,
    //   score: "5",
    // },
        {
      name: "Anfitearo Manuel Antonio Ramírez",
      CUIT: "24-27432890-3",
      email: "christianurbieta@hotmail.com",
      password: "123456", 
      province: "Misiones",
      adress: "Av. Costanera 1778 - CP 3300",
      image: "https://mapio.net/images-p/22798835.jpg",
      phoneNumber: "3764449056",
      seatsQTY: 80,
      score: "4",
    },
        // {
    //   name: "Sala Tempo",
    //   CUIT: "20-23789431-5",
    //   email: "asociacionrecuperar@gmail.com",
    //   password: "123456",
    //   province: "Misiones",
    //   adress: "3 de Febrero 1916 - CP 3300",
    //   image: "https://elterritorio1.cdn.net.ar/252/elterritorio1/images/16/90/169003_accb2dd36de866ffd43c9b4d017306b1d7facbd2b01e0596ed7115dbdc49df43/md.webp",
    //   phoneNumber: "3764438821",
    //   seatsQTY:200,
    //   score: "2"
    //},
        {
      name: "Teatro El Viento",
      CUIT: "27-31290432-4",
      email: "equipodelteatro@gmail.com",
      password: "123456",
      province: "Neuquen",
      adress: "Juan B. Justo 648 - CP 8300 (Neuquen, Confluencia (Neuquén))",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uRem0LyVYgLRM50twHyy8Ikde-xa_B2lWmr9hv5cI6-KJjFngatg9c4Nkmo8eg_2zU8&usqp=CAU",
      phoneNumber: "2994485628",
      seatsQTY: 80,
      score: "3"
    },
        // {
    //   name: "Teatro San José",
    //   CUIT: "22-28423929-5",
    //   email: "culturasmandes@neuquen.gov.ar",
    //   password: "123456",
    //   province: "Neuquen",
    //   adress: "Capitan Drury 759 - CP 8370 (San Martin de los Andes, Lacar (Neuquén))",
    //   image: "https://media.diario7lagos.com.ar/p/526ad880bbfb446dd6c2597eb7267e28/adjuntos/321/imagenes/000/031/0000031789/1200x675/smart/teatro-san-jose-smajpg.jpg",
    //   phoneNumber: "2972424803",
    //   seatsQTY:100,
    //   score: "4"
    //},
     {
      name: "Teatro de la Barda",
      CUIT: "22-31488219-1",
      email: "teatrodelabarda@hotmail.com",
      password: "123456",
      province: "Rio Negro",
      adress: "Sarmiento 473 - CP 8138",
      image: "https://scontent.flpg1-1.fna.fbcdn.net/v/t1.18169-9/21430_172773132906852_1947363324_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=qPqeW8ydghwAX-2uUXc&_nc_oc=AQl_asXEY5Lnl1JtYF4SgMDuLWFpRDCoZHXgimPqHulU3V7zEXqNOtnjDBDewYrqq2o&_nc_ht=scontent.flpg1-1.fna&oh=00_AT_AXht5s4TqU0KCaFYQwzUjkgnpUNAEu-lBzaOZ3wcZDA&oe=622C20DE",
      phoneNumber: "029812827212",
      seatsQTY: 80,
      score: "3",
    },
    // {
    //   name: "Teatro El Tubo",
    //   CUIT: "21-28432905-5"
    //   email: "teatroeltubo@gmail.com",
    //   password: "123456",
    //   province: "Río Negro",
    //   adress: "Belgrano 747 - CP 8500",
    //   image: "",
    //   phoneNumber: "0298899648",
    //   seatsQTY:100,
    //   score: "4",
    //},
       {
      name: "Teatro Provincial de Salta",
      CUIT: "27-32489124-8",
      email: "teatroprovincial@culturasalta.gov.ar",
      password: "123456",
      province: "Salta",
      adress: "Zuviria 70 - CP 4400 (Salta, Capital (Salta))",
      image: "https://prensa.salta.gob.ar/public/images/noticias/teatro_provincial_286399479.jpg",
      phoneNumber: "3874224515",
      seatsQTY: 80,
      score: "3"
    },
    //    {
    //   name: "Teatro de la Fundación Salta",
    //   CUIT: "22-27432904-7",
    //   email: "correofundacionsalta@gmail.com",
    //   password: "123456",
    //   province: "Salta",
    //   adress: "Gral. Güemes 434 - CP 4400 (Salta, Capital (Salta))",
    //   image: "https://www.fundacion-salta.com.ar/images/uploads/teatro-fundacion-salta-03.jpg",
    //   phoneNumber: "3874314296",
    //   seatsQTY: 340,
    //   score: "2"
    // },
      {
      name: "Cine Teatro Municipal",
      CUIT: "19-31478219-8", 
      email: "andreaterranova@gmail.com",
      password:"123456",
      province: "San Juan",
      adress: "Bartolome Mitre 1 - CP 5402",
      image: "https://elsoldesanjuan.com.ar/wp-content/uploads/2019/05/teatro-municipal-san-juan.jpg",
      phoneNumber: "2644213295",
      seatsQTY: 80,
      score: "4"
    }, 
    // {
    //   name: "Instituto Goethe",
    //   CUIT: "27-28432904-7",
    //   email: "info@gzsanjuan.com.ar",
    //   password:"123456",
    //   province: "San Juan",
    //   adress: "Santa Fe 114 - CP 5400 ",
    //   image: "",
    //   phoneNumber: "2644213409",
    //   seatsQTY:100,
    //   score: "2",
    // },
    {
      name: "Teatro Jorge A. Laffue",
      CUIT: "20-38431903-5",
      email: "teatrojorgealaffue@gmail.com",
      password:"123456",
      province: "San Luis",
      adress: "9 de Julio 1431 - CP 5700 (San Luis, La Capital (San Luis))",
      image: "http://www.gruposlots.com.ar/upload/servicios/shows/amerian/3.jpg",
      phoneNumber: "2664442222",
      seatsQTY: 80,
      score: "3",
    }, 
    // {
    //   name: "Teatro Independiente Mercedes T.I.M.",
    //   CUIT: "21-32894210-0",
    //   email: "grupotim@gmail.com",
    //   password:"123456",
    //   province: "San Luis",
    //   adress: "San Martín 466 - CP 5730 (Villa Mercedes, General Pedernera (San Luis))",
    //   image: "http://agenciasanluis.com/wp-content/uploads/2021/12/TIM-740X500-630x426.jpg",
    //   phoneNumber: "2664564194",
    //   seatsQTY:180,
    //   score: "2",
    // },
      {
      name: "Teatro Lazaro Urdin",
      CUIT: "24-28432904-7",
      email: "josesilva@argentina.com",
      password:"123456",
      province: "Santa Cruz",
      adress: "Savedra y Rivadavia - Piso 1° - CP 9015 ",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Cine_Teatro_L%C3%A1zaro_Urd%C3%ADn_desde_las_butacas.jpg/600px-Cine_Teatro_L%C3%A1zaro_Urd%C3%ADn_desde_las_butacas.jpg",
      phoneNumber: "2974990048",
      seatsQTY: 80,
      score: "4" 
    }, 
    // {
    //   name: "Cacho Camino",
    //   CUIT: "20-21784390-9",
    //   email: "jbpardo@hotmail.com",
    //   password:"123456",
    //   province: "Santa Cruz",
    //   adress: "Ducaretz y Jorge Newbery - CP 9011",
    //   image: "",
    //   phoneNumber: "2974851770",
    //   seatsQTY: "300",
    //   score: "2"
    // },
    {
      name: "Teatro Español Reconquista",
      CUIT: "23-28431903-5",
      email: "teatroespanol.reconquista26@gmail.com",
      password:"123456",
      province: "Santa Fe",
      adress: "Habegger 545 - CP 3560 (Reconquista, General Obligado (Santa Fe))",
      image: "https://argentinafirm.com/photo/28240.jpg",
      phoneNumber: "3482421286",
      seatsQTY: 80,
      score: "1"
    },
    // {
    //   name: "Teatro Municipal Dante Aligieri",
    //   CUIT: "20-21784390-9",
    //   email: "teatrodante@casilda.gov.ar",
    //   password:"123456",
    //   province: "Santa Fe",
    //   adress: "España 1910 - Piso PB - CP 2170 (Casilda, Caseros (Santa Fe))",
    //   image: "",
    //   phoneNumber: "	3464429082",
    //   seatsQTY: "380",
    //   score: "4"
    // },
      {
      name: "Teatro 25 de Mayo",
      CUIT: "24-32782942",
      email: "contacto@teatro25.com.ar",
      password:"123456",
      province: "Santiago del Estero",
      adress: "Avellaneda 387 - CP 4200",
      image: "http://www.santiagotur.com/wp-content/uploads/2018/05/3435666666.jpg",
      phoneNumber: "3854224515",
      seatsQTY: 80,
      score: "3"
    }, 
    // { 
    //   name: "DIVAS Diversidad Valiente Santiagueña",
    //   CUIT: "25-34783902-9",
    //   email: "divasantiagodelestero@gmail.com",
    //   password:"123456",
    //   province: "Santiago del Estero",
    //   adress: "Yapeyu 1226 - CP 4200",
    //   image: ""
    //   phoneNumber: "3854227396",
    //   seatsQTY:70,
    //   score: "2"
    // },
    { 
      name: "Casa de la Cultura Sala Angela Loij",
      CUIT: "23-30429531-6",
      email: "cultura@riogrande.gov.ar",
      password:"123456",
      province: "Tierra del Fuego",
      adress: "Sebastián Elcano 50 - CP 9420 (Rio Grande, Rio Grande (Tierra del Fuego)",
      image: "https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/ZYPHYRSPM5ELLDM7LY4EBMM4KY.png",
      phoneNumber: "2964436208",
      seatsQTY: 80,
      score: "5"
    },
    // { 
    //   name: "Tierra de Teatro",
    //   CUIT: "26-25843902-5",
    //   email: "tierradeteatro@yahoo.com.ar",
    //   password:"123456",
    //   province: "Tierra del Fuego",
    //   adress: "Dr. Albert Schweitzer 1335 - Piso PB - CP 9420 (Rio Grande, Rio Grande (Tierra del Fuego)",
    //   image: "https://www.tiempofueguino.com/wp-content/uploads/2020/02/Tierra-de-Teatro.png",
    //   phoneNumber: "2964504435",
    //   seatsQTY:80,
    //   score: "3"
    // },
    { 
      name: "Teatro San Martín",
      CUIT: "23-24783892-8",
      email: "teatrosanmartin.tuc@gmail.com",
      password:"123456",
      province: "Tucuman",
      adress: "Av. Sarmiento 601 - CP 4000 (San Miguel de Tucuman, Capital (Tucumán)",
      image: "https://enteculturaltucuman.gob.ar/gestor/wp-content/uploads/2016/12/313015267WHJEkD_ph.jpg",
      phoneNumber: "0381 4522579",
      seatsQTY: 80,
      score: "5"
    },
    // { 
    //   name: "Teatro en la Luna",
    //   CUIT: "28-20437821-2",
    //   email: "carajoteatro@yahoo.com.ar",
    //   password:"123456",
    //   province: "Tucuman",
    //   adress: "Av. Gobernador del Campo y Av. Saenz Peña - CP 4000 (San Miguel de Tucuman, Capital (Tucumán)",
    //   image: "http://testcom.tallerhitmedia.com.ar/wp-content/uploads/2019/09/teatro-de-la-luna.jpg",
    //   phoneNumber: "3814010351",
    //   seatsQTY:150,
    //   score: "4"
    // },         
  

    
    
  

  ];
  try {
    TheatersDb.forEach(async (el) => {
      await Theaters.findOrCreate({
        where: {
          name: el.name,
          CUIT: el.CUIT,
          email: el.email,
          password: el.password,
          province: el.province,
          adress: el.adress,
          image: el.image,
          phoneNumber: el.phoneNumber,
          seatsQTY: el.seatsQTY,
          score: el.score,
        },
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const loadShows = () => {
  const ShowsDb = [
    {
      id: 1,
      name: "Las penas saben nadar",
      genre: "Drama",
      length: "80 min",
      image:
        "https://www.revistagodot.com/wp-content/uploads/2021/10/Las_penas_saben_nadar_Godot_cartel.jpg",
      summary:
        "Las penas saben nadar es una obra que te ofrece un retrato agridulce de la vida y del mundo de la interpretación.Dentro del marco de un Festival de Monólogos, Greta, como le llaman algunos compañeros de trabajo, sale a escena sin previo aviso. Una vez allí, y con el pretexto siempre truncado de interpretar La voz humana, comienza a confesar, entre tragos, pedazos de la historia de su vida: la experiencia con diversos directores, actrices y actores; el recuerdo del entorno familiar y escolar; la añoranza por el distanciamiento de una hija a la que no ve hace años; las frustraciones amorosas; los deseos incumplidos; los sueños por realizar. Todo se devela sobre un círculo de profunda soledad, en medio de una vorágine de sentimientos, pero pleno ante la entereza de una mujer que ha dedicado gran parte de su existencia al muchas veces ingrato arte de la interpretación.",
      ticketsQty: 2,
      seatsAvailable: ["2-8", "2-9"],
      rated: "Todas las edades",
      date: "2022-08-12",
      time: "21:00",
      score: "4",
      theaterId: 1,
      FavoriteId: 2,
      originPrice: 1500
    },
    {
      id: 2,
      name: "Dos Mujeres",
      genre: "Comedia",
      length: "45 min",
      image:
        "https://www.teatroateatro.com/wp-content/uploads/2019/02/Dos-mujeres.jpg",
      summary:
        "Transcurre una noche en el dto que comparten alejandra (Soledad Gonzalez) y clara (laura raiteri) en la cual esperan la llegada de German, un desconocido a quien han citado mediante un aviso de una revista. la tensa espera hace aflorar sentimientos y personalidades que subyacen en estas dos mujeres sumiodas en una tremenda rutina aplastadora. se juega una relacion indefinida entre las dos mujeres que...escalando los limites del nerviosismo y sus miserias internas mostraran su verdadera cara.",
      ticketsQty: 3,
      seatsAvailable: ["1-7", "2-8", "4-3"],
      rated: "Apta para mayores de 13 años",
      date: "2022-04-10",
      time: "22:00",
      score: "3",
      theaterId: 2,
      FavoriteId: 1,
      originPrice: 1300
    },
    {
      id: 3,
      name: "Amame",
      genre: "Monologo",
      length: "120'",
      image: "https://storage.lacapitalmdp.com/2018/12/AMAME-2.jpg",
      summary:
        "Una mujer deambula dentro de un mundo insomne. Nada parece cierto, las cosas se distancian. Todo parece una copia de una copia, de otra copia.",
      ticketsQty: 2,
      seatsAvailable: ["1-5", "1-8", "4-5"],
      rated: "Apta para mayores de 16 años",
      date: "2022-8-12",
      time: "21:00",
      score: "5",
      theaterId: 2,
      FavoriteId: 3,
      originPrice: 1200
    },
    {
      id: 4,
      name: "Viajeros de toda Sinrazón",
      genre: "Tragedia",
      length: "90 min'",
      image:
        "https://storage.lacapitalmdp.com/2019/08/Viajeros-de-toda-sinrazon-1024x683.jpg",
      summary:
        "Será en Cuatro Elementos, en una puesta que busca que el público experimente la distancia de la acción. La obra traduce la atmósfera de la poesía de Santoro, un poeta desaparecido en 1977.",
      ticketsQty: 2,
      seatsAvailable: ["1-3", "1-5", "2-3"],
      rated: "Apta para mayores de 16 años",
      date: "2022-8-12",
      time: "21:00",
      score: "1",
      theaterId: 3,
      FavoriteId: 4,
      originPrice: 1400
    },
    {
      id: 5,
      name: "Ensayo sobre el miedo",
      genre: "Tragicomedia",
      length: "120'",
      image:
        "https://vivo.perfil.com/storage/uploads/shows/poster/175ba592d28e713b6fc33883c44967a0.jpg",
      summary:
        "Distopía grotesca sobre el fin del mundo. el mundo fue destruido por una epidemia de miedos. En un precario refugio, un grupo de sobrevivientes resiste y se debate en cavilaciones sobre qué hacer.",
      ticketsQty: 4,
      seatsAvailable: ["1-5", "2-3", "2-7", "3-6"],
      rated: "Apta para mayores de 16 años",
      date: "2022-04-22",
      time: "22:00",
      score: "3",
      theaterId: 3,
      FavoriteId: 2,
      originPrice: 1000
    },
    {
      id: 6,
      name: "La Pilarcita",
      genre: "Comedia",
      length: "65 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/000133801.jpg",
      summary:
        "Selva, y su enigmática pareja, Horacio, llegan desde la gran ciudad a este remoto pueblo correntino en busca de un milagro. Se hospedan en un precario hotel regenteado por Celina, la hija de los dueños y Celeste, su amiga adolescente, que borda día y noche en el patio del hotel para terminar su traje de comparsera. Celina estudia para ingresar a la facultad e irse del pueblo, Hernán, su hermano ya se fue pero vuelve para participar del concurso de Compuesto Correntino en la fiesta de La Pilarcita. Cuando Selva comprende que, según la tradición, antes de pedir un milagro hay que ofrendar una muñeca creada especialmente para la ocasión, contrata a Celeste para que la ayude a confeccionarla. Mientras el pueblo entero se prepara para homenajear a la santita popular, Selva y Celeste trabarán una extraña amistad que cambiará sus destinos, ¿milagrosamente? Están los que creen que el milagro es algo que llega inesperada y arbitrariamente y están aquellos que lo construyen día a día, casi de manera artesanal...",
      ticketsQty: 3,
      seatsAvailable: ["1-8", "2-6", "2-7"],
      rated: "Apta para mayores de 18 años",
      date: "2022-02-15",
      time: "20:00",
      //score: "",
      theaterId: 4,
      //FavoriteId: ,
      originPrice: 1500
    },
    {
      id: 7,
      name: "Un encuentro casual",
      genre: "Drama",
      length: "60 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/68/000238868.jpg",
      summary:
        "Isabel y Brian se conocieron a mediados de los ´90 en Madrid. Ella vivía en España y él, en Italia. Ella, una incipiente periodista y guionista de televisión que trabajaba en un bar como moza. Él un estudiante de cine con ilusión de poder algún día filmar. Ella argentina. El hijo de un papá desaparecido y exiliado desde pequeño en Italia. Hoy, el está casado y hoy vive en Río de Janeiro. Brian filma y estrena una película en Argentina 26 años después. Isabel, que ha retornado hace mucho tiempo, asiste a la función. Se encuentran. Esto podría ser una casualidad pero lo cierto es que él ha dirigido un film sobre la historia de un amor muy similar al que compartieron en Madrid: tan solo un día y una noche y después de 25 años de intentar el olvido. Isabel propone hacerle una entrevista para una conocida revista y él tiene que subirse a un taxi rumbo a Ezeiza.La entrevista pasará por la frivolidad y desencadenará en una profunda charla sobre sus vidas y búsquedas de la felicidad.El reencuentro supuestamente casual de Brian e Isabel derivará de la urgencia del reportaje al descubrimiento de por qué desde hace tantos años ninguno puede ser feliz.Así, una noche de pasión juvenil supuestamente intrascendente se convirtió por alguna razón en un acontecimiento que les marcó la vida.",
      ticketsQty: 4,
      seatsAvailable: ["1-6", "1-8", "2-3", "2-6"],
      rated: "Apta para mayores de 18 años",
      date: "2022-02-14",
      time: "21:00",
      //score: "",
      theaterId: 5,
      //FavoriteId: ,
      originPrice: 1300
    },
    {
      id: 8,
      name: "Gregorio Imaginario",
      genre: "Danza",
      length: "50 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/28/000237228.jpg",
      summary:
        "A Amanda lo que más le gusta es hamacarse y bailar. A veces se lamenta por ser la única niña de la casa, y porque los adultos están tan ocupados ¿Qué puede hacer para no aburrirse? Así es como Amanda le da vida a Gregorio, su amigo imaginario; quien según parece bajó de la luna y sabe moverse mejor por el aire que por la tierra. Amanda y Gregorio juegan, bailan, se transforman; ya no están solos, son el uno para el otro. Pero hay algo que preocupa a Gregorio. ¿Qué pasará con él cuando Amanda crezca?",
      ticketsQty: 2,
      seatsAvailable: ["1-8", "1-9"],
      rated: "Todas las edades",
      date: "2022-02-13",
      time: "19:30",
      //score: "",
      theaterId: 6,
      //FavoriteId: ,
      originPrice: 1500
    },
    {
      id: 9,
      name: "Fracaso yotuve",
      genre: "Monologo",
      length: "40 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/88/000235888.jpg",
      summary:
        "Buenos Aires, COVID 2020. Dos actores maduros en cuarentena, dialogando a la distancia, se enfrentan al desafío de continuar haciendo teatro en plena pandemia con las salas de teatro cerradas. La serie Fracaso YoTuve, en tono de comedia, narra los enredos tecnológicos y las controversias artístico-morales que tienen los personajes en la búsqueda de su objetivo: triunfar haciendo teatro por YouTube.",
      ticketsQty: 3,
      seatsAvailable: ["2-3", "2-6", "3-7"],
      rated: "Apta para mayores de 16 años",
      date: "2022-02-14",
      time: "21:00",
      //score: "",
      theaterId: 7,
      //FavoriteId: ,
      originPrice: 1200
    },
    {
      id: 10,
      name: "El living de karina: Esto es amor o muerte",
      genre: "Musical",
      length: "50 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/92/000243192.jpg",
      summary:
        "“El Living de Karina: esto es amor o muerte” es un ciclo de entrevistas donde cada historia se vuelve un espectáculo de sensaciones, música y movimiento. Con el objetivo de exponer desde el humor y el sarcasmo, distintas realidades que suelen tratarse con frialdad, la artista y directora Sol Llorente, mezcla y hace convivir diversas ramas del arte en un espectáculo con un formato novedoso. Esta obra de teatro musical fue creada en colaboración con cantautoras y actrices de Argentina, Chile, Uruguay y Cuba. La música, las letras y la danza fueron compuestas originalmente para este proyecto por artistas que hace años trabajan en el underground de la cultura Hip Hop de diferentes países. “El Living de Karina: esto es amor o muerte” invita a los espectadores a vivir una experiencia diferente con gran impacto visual que nos remontará a pequeñas situaciones, aceptadas como cotidianas, que nos dejarán pensando. ¿Te animás a entrar en el juego?",
      ticketsQty: 2,
      seatsAvailable: ["3-4", "3-5"],
      rated: "Apta para mayores de 16 años",
      date: "2022-02-21",
      time: "21:00",
      //score: "",
      theaterId: 8,
      //FavoriteId: ,
      originPrice: 1100
    },
    {
      id: 11,
      name: "Soy (Una gaviota)",
      genre: "Musical",
      length: "80 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/33/000223233.jpg",
      summary:
        "Por motivo del cumpleaños de su tío, Nino y sus amigxs, preparan un show de transformismo con música de rock. Esperan escandalizar a su madre, la reconocida actriz Gloria Arcana. Sin embargo, el cambio de vestimenta provoca algo más que el escándalo: una transición de género. Nino deviene en Niné y además de la atención de su madre, consigue atraer la mirada de Hernán Bartolomeo, reconocido intelectual del campo teatral. De a poco los vínculos estallan, a medida que todo en la vida de Niné se va de-construyendo.",
      ticketsQty: 4,
      seatsAvailable: ["2-2", "2-5", "3-4", "4-2"],
      rated: "Apta para mayores de 18 años",
      date: "2022-02-13",
      time: "20:00",
      //score: "",
      theaterId: 9,
      //FavoriteId: ,
      originPrice: 1400
    },
    {
      id: 12,
      name: "Pachamarita, el solsticio de una payasa",
      genre: "Danza",
      length: "75 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/13/000241213.jpg",
      summary:
        "Pacha-Marita, el solsticio de una payasa es el unipersonal cómico-ritual en travesía de Leticia Leiva. Este trabajo fue producto de la residencia artística Raymipacha - teatralidades festivas llevada a cabo en junio y julio del 2018 coordinada por el grupo cultural Yama de Ecuador con el apoyo de Iberescena. Leticia fue seleccionada para la experiencia: vivir la celebración del Intiraymi en el Valle de Imbabura y generar una propuesta escénica a partir de ello. A raíz de su formación en clown, apuntó su investigación y eje de trabajo en el rol cómico dentro de la fiesta: la máscara del Aya huma y su respectivo mito, y la inquietud de cómo abordar desde la femeneidad esta tarea. Una vez finalizada la residencia, Leticia continuó su viaje por Ecuador y resto de Sudamérica, retroalimentando su creación con distintas experTencias y puntos de vista.",
      ticketsQty: 5,
      seatsAvailable: ["1-4", "2-4", "2-5", "3-5", "3-7"],
      rated: "Apta para mayores de 18 años",
      date: "2022-02-14",
      time: "18:00",
      //score: "",
      theaterId: 10,
      //FavoriteId: ,
      originPrice: 1300
    },
    {
      id: 13,
      name: "Furia - Stand Up",
      genre: "Comedia",
      length: "90 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/27/000242927.jpg",
      summary:
        "Luego de presentarse por toda Argentina, Latinoamérica y España, y luego de hacer 50 shows diferentes por streaming durante la cuarentena: vuelve FURIA a los escenarios con una nueva propuesta: stand up, improvisación, humor negro, y un montón de delirio con el objetivo de que todos nos saquemos la FURIA riendo.",
      ticketsQty: 4,
      seatsAvailable: ["1-3", "1-7", "2-1", "2-3"],
      rated: "Apta para mayores de 18 años",
      date: "2022-02-14",
      time: "22:00",
      //score: "",
      theaterId: 11,
      //FavoriteId: ,
      originPrice: 1200
    },
    {
      id: 14,
      name: "Viatrix! Un payaso en la luna",
      genre: "Ópera",
      length: "90 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/09/000243109.jpg",
      summary:
        "VIATRIX, una palabra en latín que significa viajante; es un divertido viaje espacial, una vuelta por la galaxia tripulada por un payaso excéntrico. El espectáculo cuenta los deseos del protagonista de escaparse de lo conocido para aferrarse al sueño de empezar de nuevo... en la Luna. Como las cosas se pusieron feas acá en la Tierra el payaso Faina quiere irse a la Luna y se va en bicicleta. Se lleva la guitarra, el mate, destrezas y carcajadas. Al llegar, una comunidad de extraterrestres con habilidades especiales lo fascinaran con sus singulares destrezas.",
      ticketsQty: 5,
      seatsAvailable: ["1-3", "1-6", "2-3", "2-7", "3-1"],
      rated: "Todas las edades",
      date: "2022-02-15",
      time: "21:30",
      //score: "",
      theaterId: 12,
      //FavoriteId: ,
      originPrice: 1000
    },
    {
      id: 15,
      name: "Tamorto (Romance de Arlequín y la muerte)",
      genre: "Tragicomedia",
      length: "60 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/000166873.jpg",
      summary:
        "“Arlequín está enfermo. Una adivinadora del porvenir le predijo que el día que dedicara más tiempo al sueño que a la botella, moriría a las doce de la noche en punto. Son las ocho y aún duerme.A Pierrot, el mejor amigo de Arlequín, se le ocurre un plan: retrasa el reloj, aunque sea no más que dos horas. Pierrot recurre al Dottora mientras Arlequín se divierte. Colombina, que es la mujer de Pierrot, tiene una cita furtiva con Arlequín. Pierrot, lleno de celos decide vengarse adelantando el reloj. La muerte llega a las 12:00 de la noche... Las Cartas están echadas.”",
      ticketsQty: 3,
      seatsAvailable: ["1-4", "2-3", "3-6"],
      rated: "Apta para mayores de 16 años",
      date: "2022-02-18",
      time: "22:00",
      //score: "",
      theaterId: 13,
      //FavoriteId: ,
      originPrice: 1200
    },
    {
      id: 16,
      name: "Sin embargo, yo no",
      genre: "Ópera",
      length: "70 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/47/000234447.jpg",
      summary:
        "“Sin embargo, yo no” es un espectáculo unipersonal, cuyo trabajo surge del cruce entre el material de diferentes biografías de mujeres que hicieron historia, las pinturas de la serie “Mujeres” de la artista plástica Vanesa Martinelli, el juego escénico propuesto por Elina Martinelli en el escenario y Diego Vallarino en la dirección.",
      ticketsQty: 3,
      seatsAvailable: ["2-3", "3-5", "3-6"],
      rated: "Apta para mayores de 18 años",
      date: "2022-02-19",
      time: "20:30",
      //score: "",
      theaterId: 14,
      //FavoriteId: ,
      originPrice: 1500
    },
    {
      id: 17,
      name: "La voluntad, teatro a distancia",
      genre: "Tragedia",
      length: "70 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/59/000181359.jpg",
      summary:
        "La voluntad, teatro a distancia es una ficción en tiempos de la Campaña del Desierto que ironiza sobre los valores de la cultura. Los protagonistas son militares de un fortín perdido, junto a una actriz extranjera que recala por allí en gira con su elenco, en vísperas de los festejos del 25 de Mayo. Una comedia acerca de los malentendidos que surgen de la distancia entre las ideas y las personas, entre las consignas y los hechos.",
      ticketsQty: 2,
      seatsAvailable: ["2-1", "3-7"],
      rated: "Apta para mayores de 13 años",
      date: "2022-02-19",
      time: "19:00",
      //score: "",
      theaterId: 15,
      //FavoriteId: ,
      originPrice: 1400
    },
    {
      id: 18,
      name: "Una",
      genre: "Drama",
      length: "70 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/24/000238724.jpg",
      summary:
        "UNA es una voz que cuenta. El vaivén de un pensamiento. Un punto de vista, sólo uno de los tantos posibles de la que podría ser una historia cualquiera, la historia de cualquiera.",
      ticketsQty: 4,
      seatsAvailable: ["1-5", "1-7"],
      rated: "Apta para mayores de 16 años",
      date: "2022-02-16",
      time: "20:30",
      //score: "",
      theaterId: 16,
      //FavoriteId: ,
      originPrice: 1500
    },
    {
      id: 19,
      name: "Un domingo",
      genre: "Comedia",
      length: "60 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/10/000209910.jpg",
      summary:
        "Es un domingo en familia, ahí donde se tratan las viejas cuestiones o donde se afrontan situaciones nuevas.El espacio se ve atemporal. Una nobleza particular que cubre estos miserables héroes .Esta familia se propaga en un dudoso lujo. Una mentalidad medieval, impulsos de sueños americanos, romances torcidos, van de delirios imperiales a comportamientos de animales primitivos. Una tensión reina en este mundo donde todo parece posible.",
      ticketsQty: 4,
      seatsAvailable: ["2-4", "2-7", "2-9", "3-5"],
      rated: "Apta para mayores de 18 años",
      date: "2022-02-21",
      time: "21:00",
      //score: "",
      theaterId: 17,
      //FavoriteId: ,
      originPrice: 1100
    },
    {
      id: 20,
      name: "La noche devora a sus hijos",
      genre: "Monologo",
      length: "50 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/85/000224785.jpg",
      summary:
        "Una voz narradora de hechos que sucedieron en una ciudad, no esta definida la identidad de esa ciudad, su tiempo es también algo incierto aunque los acontecimientos reconocibles pueden pertenecer a nuestra época. El personaje narrador rememora historias que su madre le contaba y que fue memorizando. El final del relato como una serpiente muerde la cabeza del texto, cierra en espiral ese sin fin de situaciones dolorosas y afligidas que esta protagonista y toda una población debieron sufrir.",
      ticketsQty: 3,
      seatsAvailable: ["2-1", "2-5", "3-2"],
      rated: "Apta para mayores de 18 años",
      date: "2022-02-17",
      time: "12:00",
      //score: "",
      theaterId: 18,
      //FavoriteId: ,
      originPrice: 1200
    },
    {
      id: 21,
      name: "Las encadenadas",
      genre: "Drama",
      length: "60 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/21/000185921.jpg",
      summary:
        "Tarde noche de verano en el cementerio municipal del pueblo de Carhué, en el límite con Epecuén, provincia de Buenos Aires. Ante el acecho de una tormenta incipiente y cansadas de la rutina, dos mujeres encargadas del crematorio intentan terminar lo antes posible su jornada laboral. De repente el llamado de su jefe genera que aquellas heridas, ruinas y cenizas del pasado se remuevan y vuelvan a salir a luz.",
      ticketsQty: 3,
      seatsAvailable: ["1-5", "1-7", "2-3"],
      rated: "Apta para mayores de 16 años",
      date: "2022-02-16",
      time: "21:00",
      //score: "",
      theaterId: 19,
      //FavoriteId: ,
      originPrice: 1400
    },
    {
      id: 22,
      name: "Terrenal",
      genre: "Tragedia",
      length: "90 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/33/000235133.jpg",
      summary:
        "En un viejo loteo fracasado Caín, Abel, y su versión conurbana del mito. Caín productor morronero. Abel vagabundo, vendedor de carnada viva en una banquina del asfalto que va al Tigris. Hermanos a los bifes compartiendo ese terreno, su edén berreta, partido al medio, al que nunca podrán volver morada común. La dialéctica imperecedera entre el sedentario y el nómade. Y Tatita, siempre ausente, que regresa al fin ese domingo melancólico.",
      ticketsQty: 4,
      seatsAvailable: ["1-6", "1-9", "2-3", "2-6"],
      rated: "Apta para mayores de 13 años",
      date: "2022-02-17",
      time: "20:00",
      //score: "",
      theaterId: 20,
      //FavoriteId: ,
      originPrice: 1500
    },
    {
      id: 23,
      name: "Sobreviviré",
      genre: "Musical",
      length: "55 minutos",
      image:
        "https://img.alternativateatral.com/scripts/es/fotos/obras/resumen/25/000244025.jpg",
      summary:
        "Susana se acaba de quedar sin trabajo, va a cuanta entrevista de trabajo consigue. Hasta que llega a una agencia de colocación de empleo en donde conoce a un funcionario de la misma llamado Alberto. Cuando entra a la entrevista, Alberto la recibirá con recelo y prejuicio, Susana tendrá que hacer valer sus ideas para hacerle ver que ella lucha cada día por ser mejor persona y que su aspecto no determina de forma negativa lo que es por dentro. Alberto le tocará aprender una lección a través del testimonio de Susana, y al conocer la verdad de ella, él mismo se confrontará con la suya, dejando salir sus demonios para así reconciliarse con él mismo.",
      ticketsQty: 3,
      seatsAvailable: ["2-5", "2-7", "3-6"],
      rated: "Todas las edades",
      date: "2022-02-15",
      time: "22:00",
      //score: "",
      theaterId: 21,
      //FavoriteId: ,
      originPrice: 1200
    },
  ];
  try {
    ShowsDb.forEach(async (el) => {
      await Shows.findOrCreate({
        where: {
          name: el.name,
          genre: el.genre,
          length: el.length,
          image: el.image,
          summary: el.summary,
          ticketsQty: el.ticketsQty,
          seatsAvailable: el.seatsAvailable,
          rated: el.rated,
          date: el.date,
          time: el.time,
          //score: el.score,
          theaterId: el.theaterId,
          //FavoriteId: el.FavoriteId,
          originPrice: el.originPrice
        },
        include: {
          model: Theaters,
        },
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const loadTickets = () => {
  const TicketsDb = [
    {
      id: 1,
      price: 1050,
      seatNumber: "2-8",
      showId: 1,
      viewerId: 1,
      // nameShow: "Las penas saben nadar",
      // nameViewer: "Tita",
    },
    {
      id: 2,
      price: 1200,
      seatNumber: "2-9",
      showId: 1,
      viewerId: 2,
      // nameShow: "Dos Mujeres",
      // nameViewer: "Pepe",
    },
    {
      id: 3,
      price: 910,
      seatNumber: "1-7",
      showId: 2,
      viewerId: 3,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 4,
      price: 1040,
      seatNumber: "2-8",
      showId: 2,
      viewerId: 2,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 5,
      price: 1170,
      seatNumber: "4-3",
      showId: 2,
      viewerId: 3,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 6,
      price: 900,
      seatNumber: "1-5",
      showId: 3,
      viewerId: 2,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 7,
      price: 1020,
      seatNumber: "1-8",
      showId: 3,
      viewerId: 4,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 8,
      price: 1020,
      seatNumber: "4-5",
      showId: 3,
      viewerId: 3,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 9,
      price: 1120,
      seatNumber: "1-5",
      showId: 4,
      viewerId: 4,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 10,
      price: 1190,
      seatNumber: "2-3",
      showId: 4,
      viewerId: 5,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 11,
      price: 1190,
      seatNumber: "1-3",
      showId: 4,
      viewerId: 3,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 12,
      price: 750,
      seatNumber: "1-5",
      showId: 5,
      viewerId: 5,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 13,
      price: 800,
      seatNumber: "2-3",
      showId: 5,
      viewerId: 6,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 14,
      price: 800,
      seatNumber: "2-7",
      showId: 5,
      viewerId: 4,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 15,
      price: 900,
      seatNumber: "3-6",
      showId: 5,
      viewerId: 7,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 16,
      price: 1050,
      seatNumber: "1-8",
      showId: 6,
      viewerId: 6,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 17,
      price: 1200,
      seatNumber: "2-6",
      showId: 6,
      viewerId: 7,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 18,
      price: 1200,
      seatNumber: "2-7",
      showId: 6,
      viewerId: 8,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 19,
      price: 910,
      seatNumber: "1-6",
      showId: 7,
      viewerId: 7,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 20,
      price: 975,
      seatNumber: "1-8",
      showId: 7,
      viewerId: 8,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 21,
      price: 1170,
      seatNumber: "2-3",
      showId: 7,
      viewerId: 9,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 22,
      price: 1170,
      seatNumber: "2-6",
      showId: 7,
      viewerId: 10,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 23,
      price: 1200,
      seatNumber: "1-8",
      showId: 8,
      viewerId: 8,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 24,
      price: 1200,
      seatNumber: "1-9",
      showId: 8,
      viewerId: 9,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 25,
      price: 900,
      seatNumber: "2-3",
      showId: 9,
      viewerId: 9,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 26,
      price: 960,
      seatNumber: "2-6",
      showId: 9,
      viewerId: 10,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 27,
      price: 1020,
      seatNumber: "3-7",
      showId: 9,
      viewerId: 11,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 28,
      price: 825,
      seatNumber: "3-4",
      showId: 10,
      viewerId: 10,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 29,
      price: 825,
      seatNumber: "3-5",
      showId: 10,
      viewerId: 11,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 30,
      price: 980,
      seatNumber: "2-2",
      showId: 11,
      viewerId: 11,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 31,
      price: 980,
      seatNumber: "2-5",
      showId: 11,
      viewerId: 12,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 32,
      price: 1120,
      seatNumber: "3-4",
      showId: 11,
      viewerId: 13,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 33,
      price: 1260,
      seatNumber: "4-2",
      showId: 11,
      viewerId: 14,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 34,
      price: 910,
      seatNumber: "1-4",
      showId: 12,
      viewerId: 12,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 35,
      price: 910,
      seatNumber: "2-4",
      showId: 12,
      viewerId: 13,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 36,
      price: 1040,
      seatNumber: "2-5",
      showId: 12,
      viewerId: 14,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 37,
      price: 1105,
      seatNumber: "3-5",
      showId: 12,
      viewerId: 15,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 38,
      price: 1105,
      seatNumber: "3-7",
      showId: 12,
      viewerId: 16,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 39,
      price: 840,
      seatNumber: "1-3",
      showId: 13,
      viewerId: 13,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 40,
      price: 960,
      seatNumber: "2-1",
      showId: 13,
      viewerId: 14,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 41,
      price: 960,
      seatNumber: "2-3",
      showId: 13,
      viewerId: 14,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 42,
      price: 1020,
      seatNumber: "1-7",
      showId: 13,
      viewerId: 15,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 43,
      price: 750,
      seatNumber: "1-3",
      showId: 14,
      viewerId: 14,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 44,
      price: 750,
      seatNumber: "1-6",
      showId: 14,
      viewerId: 15,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 45,
      price: 850,
      seatNumber: "2-3",
      showId: 14,
      viewerId: 16,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 46,
      price: 850,
      seatNumber: "2-7",
      showId: 14,
      viewerId: 17,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 47,
      price: 900,
      seatNumber: "3-1",
      showId: 14,
      viewerId: 18,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 48,
      price: 960,
      seatNumber: "1-4",
      showId: 15,
      viewerId: 15,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 49,
      price: 960,
      seatNumber: "2-3",
      showId: 15,
      viewerId: 16,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 50,
      price: 1080,
      seatNumber: "3-6",
      showId: 15,
      viewerId: 17,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 51,
      price: 1050,
      seatNumber: "2-3",
      showId: 16,
      viewerId: 16,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 52,
      price: 1200,
      seatNumber: "3-5",
      showId: 16,
      viewerId: 17,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 53,
      price: 1200,
      seatNumber: "3-6",
      showId: 16,
      viewerId: 17,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 54,
      price: 1120,
      seatNumber: "2-1",
      showId: 17,
      viewerId: 17,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 55,
      price: 1260,
      seatNumber: "3-7",
      showId: 17,
      viewerId: 18,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 56,
      price: 1200,
      seatNumber: "1-5",
      showId: 18,
      viewerId: 18,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 57,
      price: 1200,
      seatNumber: "1-7",
      showId: 18,
      viewerId: 19,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 58,
      price: 770,
      seatNumber: "2-4",
      showId: 19,
      viewerId: 19,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 59,
      price: 880,
      seatNumber: "2-7",
      showId: 19,
      viewerId: 20,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 60,
      price: 880,
      seatNumber: "2-9",
      showId: 19,
      viewerId: 21,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 61,
      price: 935,
      seatNumber: "3-5",
      showId: 19,
      viewerId: 22,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 62,
      price: 840,
      seatNumber: "2-1",
      showId: 20,
      viewerId: 20,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 63,
      price: 900,
      seatNumber: "2-5",
      showId: 20,
      viewerId: 21,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 64,
      price: 1020,
      seatNumber: "3-2",
      showId: 20,
      viewerId: 22,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 65,
      price: 1050,
      seatNumber: "1-5",
      showId: 21,
      viewerId: 21,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 66,
      price: 1050,
      seatNumber: "1-7",
      showId: 21,
      viewerId: 22,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 67,
      price: 1190,
      seatNumber: "2-3",
      showId: 21,
      viewerId: 23,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 68,
      price: 1200,
      seatNumber: "1-6",
      showId: 22,
      viewerId: 22,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 69,
      price: 1200,
      seatNumber: "1-9",
      showId: 22,
      viewerId: 23,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 70,
      price: 1275,
      seatNumber: "2-3",
      showId: 22,
      viewerId: 24,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 71,
      price: 1275,
      seatNumber: "2-6",
      showId: 22,
      viewerId: 24,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 72,
      price: 900,
      seatNumber: "2-5",
      showId: 23,
      viewerId: 23,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 73,
      price: 960,
      seatNumber: "2-7",
      showId: 23,
      viewerId: 23,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },
    {
      id: 74,
      price: 1080,
      seatNumber: "3-6",
      showId: 23,
      viewerId: 24,
      // nameShow: "Amame",
      // nameViewer: "Tito",
    },

  ];
  try {
    TicketsDb.forEach(async (el) => {
      await Tickets.findOrCreate({
        where: {
          price: el.price,
          seatNumber: el.seatNumber,
          showId: el.showId,
          viewerId: el.viewerId,
          //   nameShow: el.nameShow,
          //   nameViewer: el.nameViewer,
        },
        include: [
          {
            model: Shows,
          },
          {
            model: Viewers,
          },
        ],
      });
    });
  } catch (error) {
    console.error(error);
  }
};

const loadReviews = () => {
  const ReviewsDb = [
    {
      id: 1,
      review: "Espectacular!!!",
      theaterScore: "5",
      showScore: "4",
      nameTheater: "Casa Teatro el Altillo del Sur",
      // nameViewer: 1,
      // nameShow: 3,
      viewerId: 1,
      theaterId: 1,
      showId: 1,
    },
    {
      id: 2,
      review: "Un poco flojo!",
      theaterScore: "2",
      showScore: "1",
      // nameTheater: "Teatro Buenas Artes Social Club",
      // nameViewer: "Pepe",
      // nameShow: "Viajeros de toda Sinrazón",
      viewerId: 2,
      theaterId: 2,
      showId: 2,
    },
    {
      id: 3,
      review: "10 puntos!",
      theaterScore: "4",
      showScore: "2",
      // nameTheater: "Teatro Abasto Social Club",
      // nameViewer: "Tito",
      // nameShow: "Amame",
      viewerId: 3,
      theaterId: 3,
      showId: 3,
    },
  ];
  try {
    ReviewsDb.forEach(async (el) => {
      await Reviews.findOrCreate({
        where: {
          review: el.review,
          theaterScore: el.theaterScore,
          showScore: el.showScore,
          viewerId: el.viewerId,
          theaterId: el.theaterId,
          showId: el.showId,
          //nameTheater: el.nameTheater,
          // nameViewer: el.nameViewer,
          // nameShow: el.nameShow,
        },
        include: [
          {
            model: Shows,
          },
          {
            model: Viewers,
          },
          {
            model: Theaters,
          },
        ],
      });
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  loadTheaters,
  loadViewers,
  loadShows,
  loadReviews,
  loadTickets,
  loadFavoriteViewers,
  loadFavorites,
};
