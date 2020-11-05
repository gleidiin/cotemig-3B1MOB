import React from 'react';
import { Link } from 'react-router-dom';
import './home-page.css';

import { likePostPorId } from '../../services/post-service';
import { Image, Button } from 'react-bootstrap';


function PostContainer(props) {
    const doLike = async (id) => { await likePostPorId(id) }  
    return (
        <>  
            <div>
                <Image className="d-block" style={ { borderRadius: "150px", maxHeight: '50px', maxWidth: '50px' }} className="float-left" src="https://via.placeholder.com/300" />
                <h3>Nome do Usuário</h3>
                <p>25 min atrás</p>
            </div>
            <div className="imageContainer" style={{ backgroundImage: 'url(https://via.placeholder.com/300)'}} >

            </div>
            <p className="pt-2">{ props.descricao }</p> 
            <div className="py-2">
                <Link to={'/comentarios/' + props.id } className="btn btn-primary float-left">
                    Comentários
                </Link>
                <Button onClick={ () => doLike(props.id) }>
                    Amei
                </Button>
            </div>
              
        </>
    )
}

export default PostContainer;