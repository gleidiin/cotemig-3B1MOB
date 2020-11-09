const express = require("express");
const { criarPost, pegarPostPorId, pegarTodosPost, gostei, comentar } = require('./posts.controller');
const auth = require("../../helpers/middlewares/auth.middleware")

const PATH = '/';
const PARAM_ID = ':id' 

const router  = express.Router()
    .get(PATH, auth, pegarTodosPost)
    .post(PATH + PARAM_ID + '/comentario', auth, comentar)
    .post(PATH + PARAM_ID + '/like', auth, gostei)
    .get(PATH + PARAM_ID, auth, pegarPostPorId)
    .post(PATH, auth, criarPost);

module.exports = router;