import React, { Fragment } from 'react';
import { pegaTodosPost, likePostPorId } from '../services/post-service'; 
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';



function PostContainer(props) {


    const doLike = async (id) => { await likePostPorId(id) }  


    return (
        <Fragment>
            <Row className="justify-content-center pb-3">
                <Col md={5}>

                    <Card>
                        <Image className="d-block" style={ { margin: "0 auto" }} className="d-block" src="https://via.placeholder.com/300" />
                    </Card>

                    <div className="py-2">
                        <Button className="float-left" onClick={ () => console.log("mostrar comentario") }>
                            Comentários
                        </Button>
                        <Button className="float-right" onClick={ () => doLike(props.id) }>
                            Amei
                        </Button>
                    </div>
                    <p>{ props.descricao }</p>
                </Col>
            </Row>
        </Fragment>
    )

}


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }

    componentDidMount() {
        pegaTodosPost().then(posts => {
            this.setState({ posts: posts});
        });
    }

    render() {
        return (
            <Container>
                {
                    this.state.posts.map(post =>
                        (<PostContainer key={post.id} { ...post } />)
                    )
                }
            </Container>
        )
    }
}

export default HomePage