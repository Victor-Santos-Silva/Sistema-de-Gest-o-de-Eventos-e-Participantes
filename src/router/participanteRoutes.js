const { Router } = require("express");
const ParticipanteController = require("../controller/ParticipanteController");
const { validateParticipanteId } = require("../middlewares/validateParticipante")
const router = Router();

router.post("/", (req, res) => {
    ParticipanteController.create(req, res);
});

router.delete("/:id", validateParticipanteId, (req, res) => {
    ParticipanteController.delete(req, res);
});

router.put("/:id", validateParticipanteId, (req, res) => {
    ParticipanteController.update(req, res);
});

router.get("/:id", validateParticipanteId, (req, res) => {
    ParticipanteController.getOne(req, res);
});

router.get("/", (req, res) => {
    ParticipanteController.getAll(req, res);
});

module.exports = router;