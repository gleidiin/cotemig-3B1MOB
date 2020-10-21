const { DataTypes } = require("sequelize");
const connection = require("../config/database")

const UsuarioModel = connection.define('usuario', {
    nome: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false,
    underscored: true,
    modelName: 'usuario'
});

module.exports = UsuarioModel;