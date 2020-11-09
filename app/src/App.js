import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import HomePage from './containers/HomePage/';
import LoginPage from './containers/LoginPage/';
import ComentariosPage from './containers/ComentarioPage/';

import { isLoggged } from './services/login-service';

import { Container, Row, Col } from 'react-bootstrap';

const PrivateRoute = (props) => {
  return isLoggged() ? <Route { ...props } /> : <Redirect to="/" />
}

const App = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Router>
            <Switch>
              <Route path="/" exact component={LoginPage}></Route>
              <PrivateRoute path="/home" component={HomePage}></PrivateRoute>
              <PrivateRoute path="/comentarios/:id" component={ComentariosPage}></PrivateRoute>
              <Route path="*">
                <h2>Essa página não existe :'(</h2>
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
