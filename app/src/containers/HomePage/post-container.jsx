import React from 'react';
import { Link } from 'react-router-dom';
import { likePostPorId } from '../../services/post-service'; 
import { Row, Col, Image, Button, Card } from 'react-bootstrap';


function PostContainer(props) {
    const doLike = async (id) => { await likePostPorId(id) }  
    return (
        <>
            <Row className="justify-content-center pb-3">
                <Col md={5}>

                    <Card>
                        <Image className="d-block" style={ { margin: "0 auto" }} className="d-block" src="https://via.placeholder.com/300" />
                    </Card>

                    <div className="py-2">
                        <Link to={'/comentarios/' + props.id } className="btn btn-primary float-left">
                            Comentários
                        </Link>
                        <Button className="float-right" onClick={ () => doLike(props.id) }>
                            Amei
                        </Button>
                    </div>
                    <p>{ props.descricao }</p>
                </Col>
            </Row>
        </>
    )
}

export default PostContainer;