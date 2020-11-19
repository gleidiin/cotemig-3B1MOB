import React, {useState, useEffect} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap'
 
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
        <hr className="pb-1" />
        <div className="pb-4">
            <Image className="d-inline" src="/assets/icon-comment.png"></Image>
            <h4 className="pl-2 d-inline">
                Comentários
            </h4>
        </div>
            { !!post.postComentarios.length ? '': <h5 className="pt-3 pb-2 text-center">Não encontramos nenhum comentário, seja o primeiro a comentar. :) </h5>}
        
        { post.postComentarios.map(comentario => <Row className="pb-2" key={comentario.id}>
            <Col md={2}>
                <Image className="d-block mx-auto" style={ { borderRadius: "150px", marginBottom: "10px", maxHeight: '40px', maxWidth: '40px' }}  src="https://via.placeholder.com/300" />
            </Col>
            <Col md={10}>
                <p>
                    <strong>{comentario.usuario.nome}:</strong> {comentario.comentario}
                </p>
            </Col>
        </Row>)}
        

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