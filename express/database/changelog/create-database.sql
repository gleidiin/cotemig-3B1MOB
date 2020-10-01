CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    foto_url VARCHAR,
    descricao VARCHAR, 
    post_data TIMESTAMP
);

CREATE TABLE post_comentarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id INTEGER,
    comentario VARCHAR,
    comentario_data TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TABLE post_likes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id INTEGER,
    usuario_id INTEGER,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);