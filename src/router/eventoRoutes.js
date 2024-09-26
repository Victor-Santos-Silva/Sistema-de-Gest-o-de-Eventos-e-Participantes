const { Router } = require("express");
const EventoController = require("../controller/EventoController");
const { validateParticipante} = require("../middlewares/validateParticipante")
const router = Router();

router.post("/", (req, res) => {
    EventoController.create(req, res);
});

router.delete("/:id", validateParticipante, (req, res) => {
    EventoController.delete(req, res);
});

router.put("/:id", validateParticipante, (req, res) => {
    EventoController.update(req, res);
});

router.get("/:id", validateParticipante, (req, res) => {
    EventoController.getOne(req, res);
});

router.get("/", (req, res) => {
    EventoController.getAll(req, res);
});

module.exports = router;