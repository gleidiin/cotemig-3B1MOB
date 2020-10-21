const { DataTypes } = require("sequelize");
const connection = require("../config/database")

const PostComentarioModel = connection.define('postComentarios', {
    post_id: {
        type: DataTypes.INTEGER
    },
    usuario_id: {
        type: DataTypes.INTEGER
    },
    comentario: {
        type: DataTypes.TEXT
    },
    comentario_data: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false,
    underscored: true,
    modelName: 'postComentarios'
});

module.exports = PostComentarioModel;