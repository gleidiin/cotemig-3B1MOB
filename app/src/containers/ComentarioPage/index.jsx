import React, {useState, useEffect} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { pegaPostPorId } from '../../services/post-service';
import PostContainer from '../../components/post-container'

const ComentariosPage = () => {
    const match = useRouteMatch();
    const [post, setPost]  = useState({ postLikes: [], postComentarios: []});

    useEffect(() => {
        pegaPostPorId(match.params.id)
            .then(data => setPost(data));
    }, []);

    return (<div>
        <PostContainer {...post} />
            { !!post.postComentarios.length ? '': <h5 className="pt-3 pb-2 text-center">Não encontramos nenhum comentário, seja o primeiro a comentar. :) </h5>}
        <ul>
            { post.postComentarios.map(comentario => <li></li>)}
        </ul>

        <Link className="btn btn-primary" to="/home">Voltar</Link>
    </div>)
}


export default ComentariosPage;