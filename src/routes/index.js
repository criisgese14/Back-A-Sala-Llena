const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const review = require("./reviews");
const shows = require("./shows");
const theaters = require("./theaters");
const tickets = require("./tickets");
const viewers = require("./viewers");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
