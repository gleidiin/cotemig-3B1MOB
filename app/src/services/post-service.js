import http from './http';

const POST_URI = '/posts/'; 
const LIKE_URI = '/like/';
const COMENTARIO_URI = '/comentarios/';

export async function pegaTodosPost() {
    const req = await http.get(POST_URI, { clearCacheEntry: true });
    console.log(req.request.fromCache, req.data)
    return req.data ? req.data : [];
} 

export async function pegaPostPorId(id) {
    const req = await http.get(POST_URI + id, { clearCacheEntry: true });
    return req.data;
} 

export async function likePostPorId(id) {
    await http.post(POST_URI + id +  LIKE_URI);
}

export async function fazerComentarioPorPostId(id, comentario) {
    const req = await http.post(POST_URI + id + COMENTARIO_URI, { comentario });
    return req.data ? req.data : {};
}