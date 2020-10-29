import React from 'react';
import { Container, Row, Form, Col, FormControl, Button, Alert } from 'react-bootstrap';
import { doLogin } from '../../services/login-service';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                'email': null,
                'senha': null
            },
            errors: [],
            isLoading: false
        }
    }

    login = (event) => {
        event.preventDefault();
        const { form } = this.state;
    
        doLogin(form.email, form.senha)
            .then(() => {
                this.props.history.push("/home");
            }).catch(err => {
                console.log(err);
                this.setState({...this.state, errors: [err]});
            });
    }

    inputHandler = ({target: { name, value }}) => {
        this.state.form[name] = value;
        this.setState({...this.state, form:{ ...this.state.form, [name]: value }});
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        { 
                            this.state.errors.map((index, error) =>
                                <Alert key={ index } variant={'error'}>
                                    { error.mensagem }
                                </Alert>
                            )
                        }
                        <Form onSubmit={ this.login }>
                            <Form.Group>
                                <Form.Label>E-mail</Form.Label>
                                <FormControl type="email" name="email" onChange={ this.inputHandler } />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Senha</Form.Label>
                                <FormControl type="password" name="senha" onChange={ this.inputHandler } />
                            </Form.Group>
                            <Form.Group>
                                <Button type="submit">Entrar</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LoginPage;