const service = require("../../services/posts.service"); 

const pegarTodosPost  = async (req, res) => {
    const { id } = req.usuario;
    const todos = await service.buscarTodos(id)
    res.send(todos);
}

const criarPost  = (req, res) => {
    const post = req.body;
    
    service.criarPost(post)
        .then((postCriado) => {
            res.status(201).send(postCriado);
        }).catch(err => {
            res.status(err.status).send(err);
        })
}

const pegarPostPorId = async (req, res) => {
    const { id } = req.params
    const post = await service.buscarPorId(id);
    res.send(post);
}


const gostei = async(req, res) => {
    const { id } = req.params;
    const idUsuario = req.usuario.id;
    await service.criarGostei(id, idUsuario);
    res.sendStatus(201);
} 

const comentar = async(req, res) => {
    const idUsuario = req.usuario.id;
    const { id }    = req.params;  
    const { comentario } = req.body;
    const comentarioCriado = await service.criarComentario(id, idUsuario, comentario);
    res.status(201).send(comentarioCriado);
}

module.exports = {
    pegarPostPorId,
    pegarTodosPost,
    criarPost,
    gostei,
    comentar
}