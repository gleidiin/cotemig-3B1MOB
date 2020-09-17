const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors");
const errorhandler = require("errorhandler");

const app      = express();

// utilizado para pre-fetch
app.use(cors());
app.use(errorhandler());

// utilizado para converter body da requisição;
app.use(bodyParser.json());

const alunos = [
    { nome: "Aluno 1", imagem: "https://via.placeholder.com/300" },
    { nome: "Aluno 2", imagem: "https://via.placeholder.com/300" },
    { nome: "Aluno 3", imagem: "https://via.placeholder.com/300" },
    { nome: "Aluno 4", imagem: "https://via.placeholder.com/300" }, 
    { nome: "Aluno 5", imagem: "https://via.placeholder.com/300" }
];

app.get("/alunos", (req, res) => {
    res.send(alunos);
});

app.post("/alunos", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(8080, () => {
    console.log("utilizando porta 8080");
});