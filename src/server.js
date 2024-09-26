const express = require("express");
const router = require("./router/router.js");
const sequelize = require("./config/config.js");

const app = express();
app.use(express.json());
app.use("/api", router);
/* app.get("/healthcheck", (req, res) => {
  return res.status(200).json({
    msg: "Estamos vivos!",
    alive: true,
  });
}); */

sequelize
  .authenticate()
  .then(async () => {
    console.log("Conexão estabelicida com sucesso");
    await sequelize.sync();
  })
  .then(() => {
    app.listen(8080, () => {
      console.log("#####################");
      console.log("Rodando na porta 8080");
      console.log("#####################");
    });
  })
  .catch((error) => {
    console.error("Erro ao se conectar com o banco:", error);
  });

