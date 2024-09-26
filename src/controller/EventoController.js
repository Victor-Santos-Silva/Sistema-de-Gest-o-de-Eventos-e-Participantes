const Participante = require("../models/Participante");

const ParticipanteController = {
  create: async (req, res) => {
    try {
      const { nome, email } = req.body;

      const participanteCriado = await Participante.create({ nome, email });

      return res.status(200).json({
        msg: "Participante criado com sucesso!",
        user: participanteCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;

      console.log("Atualizando o objeto");
      console.log({ id });
      console.log({ nome, email });

      const participanteUpdate = await Participante.findByPk(id);

      if (participanteUpdate == null) {
        return res.status(404).json({
          msg: "usuario nao encontrado"
        })
      }

      const updated = await participanteUpdate.update({
        nome, email
      });

      if (updated) {
        return res.status(200).json({
          msg: "Participante atualizado com sucesso!",
        });
      }

      return res.status(500).json({
        msg: "Erro ao atualizar usuario"
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  getAll: async (req, res) => {
    try {
      const participante = await Participante.findAll();
      return res.status(200).json({
        msg: "Participantes encontrados!",
        participante,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const participanteEncontrado = await Participante.findByPk(id);

      if (participanteEncontrado == null) {
        return res.status(404).json({
          msg: "Participante nao encontrado!",
        });
      }

      return res.status(200).json({
        msg: "Participante encontrado com sucesso!",
        participante: participanteEncontrado,
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const participanteFinded = await Participante.findByPk(id);

      if (participanteFinded == null) {
        return res.status(404).json({
          msg: "Participante nao encontrado"
        })
      }

      await participanteFinded.destroy();

      return res.status(200).json({
        msg: "Participante deletado com sucesso!",
        user: participanteFinded,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
};

module.exports = ParticipanteController;
