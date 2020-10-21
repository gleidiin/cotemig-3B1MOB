const { PostModel, PostLikeModel, PostComentarioModel } = require("../models");
const errorHandler = require("../helpers/error-handler");


const buscarTodos = async () => {
    const todosPosts = await PostModel.findAll({ include: [ PostLikeModel, PostComentarioModel ]});
    return todosPosts
}

const buscarPorId = async (id) => { 
    const post = await PostModel.findByPk(id);
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
    try {
        const postLike = await PostLikeModel.create({ post_id: idPost, usuario_id: idUsuario })
        return postLike;
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