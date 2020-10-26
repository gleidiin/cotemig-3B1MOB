const { UsuarioModel } = require("../models/");
const errorHandler = require("../helpers/error-handler");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "MINHA-CHAVE-SECRETA";

const criarUsuario = async (usuario) => {
    try {
        const usuarioCriado = await UsuarioModel.create(usuario);
        return { token: jwt.sign(usuarioCriado.toJSON(), SECRET_KEY) };
    } catch(err) {
        throw errorHandler("Não possível criar usuário", 400, err.errors);
    }
}

const login = async (email, senha) => {
    const usuario = await UsuarioModel.findOne({ where: {email, senha}});

    if(usuario) {
        return { token: jwt.sign(usuario.toJSON(), SECRET_KEY) }; 
    } 
    throw errorHandler("E-mail ou senha invalidos", 401);
}

const me = async (token) =>  {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        throw errorHandler("Token invalido", 401);
    }
} 

module.exports = {
    criarUsuario,
    login,
    me
}