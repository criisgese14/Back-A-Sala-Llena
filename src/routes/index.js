const { Router } = require("express");

const reviews = require("./reviews");
const shows = require("./shows");
const theaters = require("./theaters");
const tickets = require("./tickets");
const viewers = require("./viewers");

const router = Router();

// Configurar los routers

router.use("/reviews", reviews);
router.use("/shows", shows);
router.use("/theaters", theaters);
router.use("/tickets", tickets);
router.use("/viewers", viewers);

module.exports = router;
