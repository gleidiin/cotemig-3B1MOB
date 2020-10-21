const express = require("express");
const { criarPost, pegarPostPorId, pegarTodosPost } = require('./posts.controller');

const PATH = '/';
const PARAM_ID = ':id' 

const router  = express.Router()
    .get(PATH, pegarTodosPost)
    .get(PATH + PARAM_ID, pegarPostPorId)
    .post(PATH, criarPost);

module.exports = router;