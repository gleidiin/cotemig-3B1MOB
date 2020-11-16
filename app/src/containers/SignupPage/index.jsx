import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { doSignup } from '../../services/login-service';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap'

const SignupPage = () => {
    const history = useHistory();
    const [form, setForm] = useState({});

    const inputHandler = ({ target: { name, value } }) => {
        setForm({...form, [name]: value })
    }

    const cadastrar = (event) => {
        event.preventDefault();
        doSignup(form).then(logged => {
            logged && history.push('/home');
        });
    }

    return <>
        <Form onSubmit={cadastrar}>
            <FormGroup>
                <Form.Label>Seu nome</Form.Label>
                <FormControl onChange={inputHandler} type="text" name="nome" />
            </FormGroup>
            <FormGroup>
                <Form.Label>Seu e-mail</Form.Label>
                <FormControl onChange={inputHandler} type="email" name="email" />
            </FormGroup>
            <FormGroup>
                <Form.Label>Sua senha</Form.Label>
                <FormControl onChange={inputHandler} type="password" name="senha" />
            </FormGroup>
            <FormGroup>
                <Button type="submit">Cadastrar agora</Button>
            </FormGroup>
        </Form>
    </>;
}

export default SignupPage