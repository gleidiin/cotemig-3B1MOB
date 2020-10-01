const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors");
const app      = express();
const { PostModel, UsuarioModel, PostLikeModel } = require("./database");



// utilizado para pre-fetch
app.use(cors());

// utilizado para converter body da requisição;
app.use(bodyParser.json());

app.use("/**", async (req, res, next) => {
    req.usuario = await UsuarioModel.findByPk(1);
    next();
})

app.get("/posts", async (req, res) => {
    const post = await PostModel.findAll({ include: [ PostLikeModel ]});
    res.send(post);
});

app.get("/posts/:id", async (req, res) => {
    const { id } = req.params; 
    const post = await PostModel.findByPk(id);
    res.send(post);
});


app.post("/posts", async (req, res) => {
    const post       = req.body;
    const postCriado = await PostModel.create(post);
    res.status(201).send(postCriado);
});


app.post("/posts/:id/like", async (req, res) => {
    const { id } = req.params;
    const idUsuario = req.usuario.id;
    const postLike = await PostLikeModel.create({ post_id: id, usuario_id: idUsuario })
    res.status(201).send(postLike);
});

app.listen(8080, () => {
    console.log("utilizando porta 8080");
});