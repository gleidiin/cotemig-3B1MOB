const { DataTypes } = require("sequelize");
const connection = require("../config/database")

const PostModel = connection.define("post", {
    foto_url: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: true,
            isUrl: true
        }
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Campo descrição não pode ser nulo"
            },
            len: [2, 250]
        }
    },
    post_data: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: true
        }
    }
}, {
    timestamps: false,
    underscored: true,
    modelName: 'post'
});


module.exports = PostModel;
