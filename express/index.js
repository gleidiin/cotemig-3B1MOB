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


app.get("/requisicao", (req, res) => {
    res.send([]);
})

app.post("/requisicao", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


app.listen(8080, () => {
    console.log("utilizando porta 8080");
});