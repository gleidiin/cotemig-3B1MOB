import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './post-container.css';

import { likePostPorId } from '../services/post-service';
import { Image, Row, Col } from 'react-bootstrap';


const PostContainer = (props) => {
    const [likeState, setLiked] = useState({ isLiked: props.isLiked, likesCount: props.postLikes.length });
    const doLike = async (id) => {
        await likePostPorId(id)
        setLiked({
            likesCount: !likeState.isLiked ? likeState.likesCount + 1 :  likeState.likesCount - 1,
            isLiked: !likeState.isLiked
        });
    }  
    return (
        <>  
            <div className="image-owner-container">
                <Image className="d-block" style={ { borderRadius: "150px", maxHeight: '50px', maxWidth: '50px' }} className="float-left" src="https://via.placeholder.com/300" />
                <h3>Nome do Usuário</h3>
                <p>{ props.post_data}</p>
            </div>
            <div className="image-container" style={{ backgroundImage: 'url(' + props.foto_url + ')'}} >

            </div>
            <p className="pt-2">{ props.descricao }</p> 
            <div className="py-2">
                <Row>
                    <Col md={2}>
                        <p onClick={ () => doLike(props.id) } className="action-buttons">
                            <Image src={ likeState.isLiked ? '/assets/icon-liked.png' : '/assets/icon-like.png' } ></Image>
                            <span>{ likeState.likesCount } </span>
                        </p>
                    </Col>
                    <Col md={2}>
                        <Link className="action-buttons" to={'/comentarios/' + props.id }>
                            <Image src="/assets/icon-comment.png"></Image>
                            <span>{props.postComentarios.length}</span>
                        </Link>
                    </Col>
                </Row>
            </div>
              
        </>
    )
}

export default PostContainer;