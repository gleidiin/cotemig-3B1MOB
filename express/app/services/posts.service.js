const { PostModel, PostLikeModel, PostComentarioModel } = require("../models");
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
    const post = await PostModel.findByPk(id, { include: [ PostLikeModel, PostComentarioModel ]});
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