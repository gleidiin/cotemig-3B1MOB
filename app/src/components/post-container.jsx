import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './post-container.css';

import { likePostPorId } from '../services/post-service';
import { Image, Row, Col } from 'react-bootstrap';

const Conditional = (props) => (<>{ props.condition ?  props.children : null }</>)

const PostContainer = (props) => {
    const [likeState, setLiked] = useState({ isLiked: props.isLiked, likesCount: props.postLikes.length });
    const doLike = async (id) => {
        await likePostPorId(id)
        setLiked({
            likesCount: !likeState.isLiked ? likeState.likesCount + 1 :  likeState.likesCount - 1,
            isLiked: !likeState.isLiked
        });
    }  
    const formatDate = (date) => {
        const format = new Date(date)
        return format.toLocaleString()
    }

    return (
        <>  
            <div className="image-owner-container">
                <Image className="d-inline-block" style={ { borderRadius: "150px", marginBottom: "10px", maxHeight: '50px', maxWidth: '50px' }}  src="https://via.placeholder.com/300" />
                <div className="pt-3 d-inline-block">
                    <h3> Nome do Usuário </h3>
                    <p>{ formatDate(props.post_data) }</p>
                </div>
            </div>
            <div className="image-container" style={{
                backgroundImage: 'url(' + props.foto_url + ')'
            }} >

            </div>
            <p className="image-description">{ props.descricao }</p> 
            <Conditional condition={ props.showActions }>
                <div className="py-2">
                    <Row>
                        <Col md={3}>
                            <p onClick={ () => doLike(props.id) } className="action-buttons">
                                <Image className="d-inline" src={ likeState.isLiked ? '/assets/icon-liked.png' : '/assets/icon-like.png' } ></Image>
                                <span className="d-inline">{ likeState.likesCount } </span>
                            </p>
                        </Col>
                        <Col md={3}>
                            <Link className="action-buttons" to={'/comentarios/' + props.id }>
                                <Image className="d-inline" src="/assets/icon-comment.png"></Image>
                                <span className="d-inline">{props.postComentarios.length}</span>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Conditional>
              
        </>
    )
}

export default PostContainer;