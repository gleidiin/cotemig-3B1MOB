const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize({
    dialect: "sqlite",
    storage: "./database/db.sqlite"
}); 

connection.authenticate().then(() => {
    console.log("conectado com sucesso");
}, () => {
    console.log("falha na conexão")
});


// model 
const PostModel = connection.define("post", {
    foto_url: {
        type: DataTypes.TEXT
    },
    descricao: {
        type: DataTypes.TEXT
    },
    post_data: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false,
    underscored: true,
    modelName: 'post'
});

const UsuarioModel = connection.define('usuario', {
    nome: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false,
    underscored: true,
    modelName: 'usuario'
});

const PostComentarioModel = connection.define('postComentarios', {
    post_id: {
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



module.exports = {
    UsuarioModel,
    PostModel,
    PostComentarioModel,
    PostLikeModel
}
