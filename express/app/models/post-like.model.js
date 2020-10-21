const { DataTypes } = require("sequelize");
const connection = require("../config/database")

const PostLikeModel = connection.define('postLike', {
    post_id: {
        type: DataTypes.INTEGER
    },
    usuario_id: {
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false,
    underscored: true,
    modelName: 'postLike'
});

module.exports = PostLikeModel;