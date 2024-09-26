const { Router } = require("express");
const participanteRoutes = require("./participanteRoutes.js");

const router = Router();

router.use('/participante', participanteRoutes);

module.exports = router;
