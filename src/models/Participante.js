const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Participante = sequelize.define('participante', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Participante;