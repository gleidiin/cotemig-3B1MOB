import React, {useState, useEffect} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Form, FormControl, FormGroup,  Button } from 'react-bootstrap';

import { pegaPostPorId, fazerComentarioPorPostId } from '../../services/post-service';
import PostContainer from '../../components/post-container'

const ComentariosPage = () => {
    const match = useRouteMatch();
    const [post, setPost] = useState({ postLikes: [], postComentarios: []});

    const [comentario, setComentario] = useState("");

    const enviarComentario = async (event) => {
        event.preventDefault();
        await fazerComentarioPorPostId(match.params.id, comentario);
        reloadPage();
    }

    const reloadPage = () => {
        pegaPostPorId(match.params.id)
            .then(data => setPost(data));
    }

    useEffect(reloadPage, []);

    return (<div>
        <PostContainer {...post} />
            { !!post.postComentarios.length ? '': <h5 className="pt-3 pb-2 text-center">Não encontramos nenhum comentário, seja o primeiro a comentar. :) </h5>}
        <ul>
            { post.postComentarios.map(comentario => <li key={comentario.id}>
              {comentario.usuario.nome}: {comentario.comentario}
            </li>)}
        </ul>

        <Form onSubmit={ enviarComentario }>
            <FormGroup>
                <FormControl value={comentario} placeholder={'Digite seu comentário!'}
                    onChange={({target}) => setComentario(target.value) } />
                <Button type="submit">Comentar</Button>
            </FormGroup>
        </Form>

        <Link className="btn btn-primary" to="/home">Voltar</Link>
    </div>)
}


export default ComentariosPage;