const { PostModel, PostLikeModel, PostComentarioModel, UsuarioModel } = require("../models");
const errorHandler = require("../helpers/error-handler");


const buscarTodos = async (idUsuario) => {
    let todosPosts = await PostModel.findAll({ include: [ PostLikeModel, PostComentarioModel ]});
    todosPosts = todosPosts.map(post => {
        const postAlterado = post.toJSON();
        const liked = postAlterado.postLikes.findIndex(like => like.usuario_id == idUsuario)
        postAlterado.isLiked = liked != -1;
        return postAlterado;
    });

    return todosPosts
}

const buscarPorId = async (id) => { 
    let post = await PostModel.findByPk(id, { include: [ PostLikeModel ]});

    const postComentarios = await PostComentarioModel.findAll({
        where: { post_id: id },
        include: [ UsuarioModel ]
    });
    
    post = post.toJSON();
    post['postComentarios'] = postComentarios;
    return post;
}

const criarPost = async (post) => {
    try {
        const postCriado = await PostModel.create(post);
        return postCriado; 
    } catch (error) {
        throw errorHandler("Erro ao validar os campos", 400, error.errors)
    }
}

const criarGostei = async (idPost, idUsuario) => {
    const query = { post_id: idPost, usuario_id: idUsuario };
    try {
        const postLike = await PostLikeModel.findOne({where: query});
        if (postLike) {
            await postLike.destroy();
        } else {
            await PostLikeModel.create(query);
        }
    } catch (error) {
        throw errorHandler("Erro ao validar os campos", 400, error.errors)
    }
}

const criarComentario = async (idPost, idUsuario, comentario) => {
    try {
        const comentarioCriado = await PostComentarioModel.create({
            post_id: idPost, 
            usuario_id: idUsuario, 
            comentario: comentario,
            comentario_data: Date.now()
        });
        return comentarioCriado;
    } catch(error) {
        throw errorHandler("Erro ao validar os campos", 400, error.errors)
    }
}

module.exports = {
    buscarPorId,
    buscarTodos,
    criarPost,
    criarComentario,
    criarGostei
}