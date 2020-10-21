const service = require("../../services/posts.service"); 

const pegarTodosPost  = async (req, res) => {
    const todos = await service.buscarTodos()
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


module.exports = {
    pegarPostPorId,
    pegarTodosPost,
    criarPost
}